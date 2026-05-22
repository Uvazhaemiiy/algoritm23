const path = require('path')
const express = require('express')
const cors = require('cors')
const nodemailer = require('nodemailer')
require('dotenv').config({ path: path.join(__dirname, '.env') })

const app = express()
const PORT = Number(process.env.PORT) || 3001

app.use(cors({ origin: process.env.CORS_ORIGIN || true }))
app.use(express.json({ limit: '32kb' }))

const requiredEnv = ['SMTP_HOST', 'SMTP_USER', 'SMTP_PASS']
const missing = requiredEnv.filter((key) => !process.env[key])
if (missing.length) {
  console.warn(`[mail-api] Missing env: ${missing.join(', ')}. POST /api/contact will fail until .env is configured.`)
}

function createTransporter() {
  const port = Number(process.env.SMTP_PORT) || 465
  const secure = process.env.SMTP_SECURE !== 'false'

  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port,
    secure,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    },
    connectionTimeout: 15000,
    greetingTimeout: 15000,
    socketTimeout: 20000
  })
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

app.get('/api/health', (_req, res) => {
  res.json({ ok: true })
})

app.post('/api/contact', async (req, res) => {
  const { fullName, email, phone, message, subject, honeypot } = req.body || {}

  if (honeypot) {
    return res.status(400).json({ error: 'Spam detected' })
  }

  if (!fullName?.trim() || !email?.trim() || !phone?.trim() || !message?.trim()) {
    return res.status(400).json({ error: 'Заполните все поля формы' })
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailPattern.test(email.trim())) {
    return res.status(400).json({ error: 'Укажите корректный email' })
  }

  if (missing.length) {
    return res.status(503).json({ error: 'Сервер почты не настроен' })
  }

  const mailSubject = subject?.trim() || 'Новая заявка с сайта algoritm23.net'
  const mailTo = process.env.MAIL_TO || 'info@algoritm23.net'
  const mailFrom = process.env.SMTP_FROM || process.env.SMTP_USER

  const html = `
    <h2>${escapeHtml(mailSubject)}</h2>
    <p><strong>Ф.И.О.:</strong> ${escapeHtml(fullName.trim())}</p>
    <p><strong>Email:</strong> ${escapeHtml(email.trim())}</p>
    <p><strong>Телефон:</strong> ${escapeHtml(phone.trim())}</p>
    <p><strong>Сообщение:</strong></p>
    <p>${escapeHtml(message.trim()).replace(/\n/g, '<br>')}</p>
  `

  try {
    const transporter = createTransporter()
    await transporter.sendMail({
      from: `"АЛГОРИТМ 23" <${mailFrom}>`,
      to: mailTo,
      replyTo: email.trim(),
      subject: mailSubject,
      html,
      text: [
        mailSubject,
        `Ф.И.О.: ${fullName.trim()}`,
        `Email: ${email.trim()}`,
        `Телефон: ${phone.trim()}`,
        `Сообщение: ${message.trim()}`
      ].join('\n')
    })

    res.json({ ok: true })
  } catch (error) {
    console.error('[mail-api] send failed:', error)
    res.status(500).json({ error: 'Не удалось отправить заявку. Попробуйте позже или напишите на info@algoritm23.net' })
  }
})

app.listen(PORT, () => {
  console.log(`[mail-api] listening on http://127.0.0.1:${PORT}`)
})
