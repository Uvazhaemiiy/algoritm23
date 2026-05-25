import { FC, FormEvent, useState } from 'react'

type ContactFormProps = {
  subject: string
  onSuccess?: () => void
}

const API_URL = process.env.REACT_APP_API_URL || '/api/contact.php'

export const ContactForm: FC<ContactFormProps> = ({ subject, onSuccess }) => {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [honeypot, setHoneypot] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [sent, setSent] = useState(false)

  const inputClassName =
    'block w-full rounded-md border border-slate-500 bg-slate-900/60 py-2.5 px-3.5 text-sm text-white placeholder-slate-300 focus:border-gray-300 focus:ring-gray-300'

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    setError(null)
    setSubmitting(true)

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName,
          email,
          phone,
          message,
          subject,
          honeypot
        })
      })

      const rawText = await response.text()
      const contentType = response.headers.get('content-type') || ''

      if (rawText.trim().startsWith('<?php')) {
        throw new Error(
          'PHP на хостинге не выполняется. В панели NetAngels переключите сайт с «Статический» на «PHP» (хостинг → контейнер → сайт → тип сайта). Либо напишите на info@algoritm23.net'
        )
      }

      if (contentType.includes('text/html') || rawText.trim().startsWith('<!')) {
        throw new Error('Сервер формы не настроен. Напишите на info@algoritm23.net')
      }

      let data: { error?: string; ok?: boolean } = {}
      try {
        data = rawText ? JSON.parse(rawText) : {}
      } catch {
        throw new Error('Сервер вернул некорректный ответ. Напишите на info@algoritm23.net')
      }

      if (!response.ok) {
        throw new Error(data.error || 'Не удалось отправить заявку')
      }

      setSent(true)
      setFullName('')
      setEmail('')
      setPhone('')
      setMessage('')
      onSuccess?.()
    } catch (submitError) {
      const messageText = submitError instanceof Error ? submitError.message : 'Не удалось отправить заявку'
      setError(messageText)
    } finally {
      setSubmitting(false)
    }
  }

  if (sent) {
    return (
      <p className="mt-4 rounded-lg bg-green-900/50 px-4 py-3 text-sm text-green-200">
        Спасибо! Заявка отправлена. Мы свяжемся с вами в ближайшее время.
      </p>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="mt-4 grid grid-cols-1 gap-y-3">
      <input
        type="text"
        name="website"
        value={honeypot}
        onChange={(event) => setHoneypot(event.target.value)}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />
      <input
        type="text"
        name="fullName"
        value={fullName}
        onChange={(event) => setFullName(event.target.value)}
        autoComplete="name"
        required
        className={inputClassName}
        placeholder="Ф.И.О."
      />
      <input
        name="email"
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        autoComplete="email"
        required
        className={inputClassName}
        placeholder="Ваш Email"
      />
      <input
        type="text"
        name="phone"
        value={phone}
        onChange={(event) => setPhone(event.target.value)}
        autoComplete="tel"
        required
        className={inputClassName}
        placeholder="Контактный номер"
      />
      <textarea
        name="message"
        rows={3}
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        required
        className={inputClassName}
        placeholder="Опишите задачу или вопрос"
      />
      {error && <p className="text-sm text-red-300">{error}</p>}
      <button
        type="submit"
        disabled={submitting}
        className="mt-1 inline-flex items-center justify-center rounded-full bg-gray-600 px-7 py-2.5 text-sm font-semibold text-white shadow-md ring-1 ring-gray-300/30 transition-colors duration-200 hover:bg-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {submitting ? 'Отправка…' : 'Отправить заявку'}
      </button>
      <p className="text-xs text-slate-300">Заявка будет отправлена на info@algoritm23.net</p>
    </form>
  )
}
