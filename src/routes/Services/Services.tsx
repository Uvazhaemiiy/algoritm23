import { FC } from 'react'
import { SidebarLayout } from 'layouts/SidebarLayout'

const services = [
  {
    title: 'Внедрение 1С под ключ',
    result: 'Запуск системы с прозрачными регламентами и понятной отчетностью для руководства.',
    includes: ['Анализ требований', 'Проектирование архитектуры', 'Настройка ролей и бизнес-процессов']
  },
  {
    title: 'Доработка и разработка',
    result: 'Конфигурация, которая точно повторяет логику вашего бизнеса.',
    includes: ['Новые модули и обработки', 'Кастомные отчеты и дашборды', 'Интеграции с внешними системами']
  },
  {
    title: 'Сопровождение 23/7',
    result: 'Стабильная работа системы и быстрая реакция на инциденты без простоев.',
    includes: ['Линия поддержки пользователей', 'Контроль SLA', 'Плановое развитие решения']
  }
]

const process = [
  'Погружаемся в текущие процессы и фиксируем цели бизнеса',
  'Формируем план работ, бюджет и KPI проекта',
  'Запускаем внедрение поэтапно и обучаем команду',
  'Сопровождаем и масштабируем систему под рост компании'
]

const Services: FC = () => (
  <SidebarLayout>
    <div className="mx-auto w-full max-w-6xl space-y-6 py-2">
      <section className="rounded-2xl bg-slate-900 px-5 py-10 sm:px-8 sm:py-12">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[.2em] text-blue-300">Наши услуги</p>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Комплексная автоматизация 1С с фокусом на результат бизнеса
          </h1>
          <p className="mt-4 text-base leading-7 text-slate-300">
            Работаем как технологический партнер: от диагностики и внедрения до поддержки и развития.
          </p>
        </div>

        <div className="mx-auto mt-8 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="rounded-xl border border-slate-700 bg-slate-800/60 p-5">
              <h2 className="text-lg font-bold text-white">{service.title}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-300">{service.result}</p>

              <ul className="mt-4 space-y-1.5 text-sm leading-6 text-slate-200">
                {service.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-2 h-2 w-2 rounded-full bg-blue-300" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-5xl gap-5 lg:grid-cols-2">
        <article className="rounded-2xl border border-slate-200 bg-slate-100 p-6 sm:p-7">
          <h2 className="text-xl font-extrabold text-slate-800 sm:text-2xl">Как мы работаем</h2>
          <ol className="mt-4 space-y-2.5 text-sm leading-6 text-slate-700">
            {process.map((step, index) => (
              <li key={step} className="flex gap-3">
                <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-700 text-xs font-bold text-white">
                  {index + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </article>

        <article className="rounded-2xl bg-gradient-to-br from-slate-800 to-blue-800 p-6 sm:p-7 text-white">
          <h2 className="text-xl font-extrabold sm:text-2xl">Нужна оценка проекта в ближайшие 48 часов?</h2>
          <p className="mt-3 max-w-md text-sm leading-6 text-slate-200">
            Подготовим коммерческое предложение и предложим оптимальный формат запуска.
          </p>
          <a
            href="/contacts"
            className="mt-5 inline-flex items-center justify-center rounded-full bg-gray-600 px-8 py-4 text-base font-semibold text-white shadow-md ring-1 ring-gray-300/30 transition-colors duration-200 hover:bg-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-800"
          >
            Оставить заявку
          </a>
        </article>
      </section>
    </div>
  </SidebarLayout>
)

export default Services
