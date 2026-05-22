import { FC, useState } from 'react'
import { SidebarLayout } from 'layouts/SidebarLayout'
import { ContactForm } from 'shared/ContactForm'
import { ChatBubbleLeftRightIcon, PhoneIcon, EnvelopeIcon, BuildingOffice2Icon } from '@heroicons/react/24/outline'

const channels = [
  {
    title: 'Телефон',
    value: ['+7 (495) 790-53-23', '+7 (985) 355-93-69'],
    icon: PhoneIcon
  },
  {
    title: 'Email',
    value: ['help@algoritm23.net', 'info@algoritm23.net'],
    icon: EnvelopeIcon
  },
  {
    title: 'Офис',
    value: ['МО, г.о. Ленинский, пгт. Боброво, ул. Лесная, д. 18, к.1, пом. 1'],
    icon: BuildingOffice2Icon
  }
]

const Contacts: FC = () => {
  const [showForm, setShowForm] = useState(false)

  return (
    <SidebarLayout>
      <div className="mx-auto w-full max-w-6xl space-y-6 py-2">
        <section className="rounded-2xl bg-slate-900 px-5 py-10 sm:px-8 sm:py-12">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[.2em] text-blue-300">Контакты и поддержка</p>
            <h1 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl">Обсудим вашу задачу по автоматизации</h1>
            <p className="mt-4 text-base leading-7 text-slate-300">
              Отвечаем быстро, подключаем профильных специалистов и помогаем принять верное решение по проекту.
            </p>
          </div>

          <div className="mx-auto mt-8 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {channels.map((item) => (
              <article key={item.title} className="rounded-xl border border-slate-700 bg-slate-800/60 p-5">
                <item.icon className="h-6 w-6 text-blue-300" aria-hidden="true" />
                <h2 className="mt-3 text-lg font-bold text-white">{item.title}</h2>
                <div className="mt-2 space-y-1.5 text-sm leading-6 text-slate-300">
                  {item.value.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto grid w-full max-w-5xl gap-5 lg:grid-cols-2">
          <article className="rounded-2xl border border-slate-200 bg-slate-100 p-6 sm:p-7">
            <h2 className="text-xl font-extrabold text-slate-800 sm:text-2xl">Что подготовить перед консультацией</h2>
            <ul className="mt-4 list-disc space-y-2.5 pl-5 text-sm leading-6 text-slate-700 marker:text-slate-700">
              <li>Краткое описание текущих бизнес-процессов</li>
              <li>Какие задачи в 1С тормозят команду прямо сейчас</li>
              <li>Желаемые сроки и приоритеты по запуску</li>
            </ul>
            <p className="mt-5 text-sm leading-6 text-slate-700">
              Это позволит нам дать предметные рекомендации уже на первой встрече.
            </p>
          </article>

          <article className="rounded-2xl bg-gradient-to-br from-slate-800 to-blue-800 p-6 sm:p-7 text-white">
            <ChatBubbleLeftRightIcon className="h-8 w-8" aria-hidden="true" />
            <h2 className="mt-3 text-xl font-extrabold sm:text-2xl">Напишите нам</h2>

            {!showForm && (
              <>
                <p className="mt-3 max-w-md text-sm leading-6 text-slate-200">
                  Оставьте заявку через форму, и мы сориентируем по следующему шагу: аудит, оценка или запуск проекта.
                </p>
                <button
                  type="button"
                  onClick={() => setShowForm(true)}
                  className="mt-5 inline-flex items-center justify-center rounded-full bg-gray-600 px-8 py-4 text-base font-semibold text-white shadow-md ring-1 ring-gray-300/30 transition-colors duration-200 hover:bg-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-800"
                >
                  Написать нам
                </button>
              </>
            )}

            {showForm && (
              <>
                <p className="mt-3 text-sm leading-6 text-slate-200">Заполните форму</p>
                <ContactForm subject="Новая заявка с сайта algoritm23.net (Контакты)" />
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="mt-3 text-sm text-slate-300 underline hover:text-white"
                >
                  Скрыть форму
                </button>
              </>
            )}
          </article>
        </section>
      </div>
    </SidebarLayout>
  )
}

export default Contacts
