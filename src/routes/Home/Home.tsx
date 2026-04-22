import { FC, useEffect } from 'react'
import { SidebarLayout } from 'layouts/SidebarLayout'
import PostsSection from 'shared/PostsSection'

interface Perk {
  name: string
  imageSrc: string
  description: string
}

const Home: FC = () => {
  useEffect(() => {
    document.title = 'Алгоритм 23 - Автоматизация бизнеса и 1С разработка'
    const metaDescription = document.createElement('meta')
    metaDescription.name = 'description'
    metaDescription.content = 'Профессиональная автоматизация бизнес-процессов, внедрение и сопровождение 1С, разработка индивидуальных решений'
    document.head.appendChild(metaDescription)

    return () => {
      document.head.removeChild(metaDescription)
    }
  }, [])

  const perks: Perk[] = [
    {
      name: 'Опыт внедрения крупных проектов',
      imageSrc: '/images/dogovor.svg',
      description: 'Мы команда специалистов с опытом внедрения крупных проектов от 12 лет.'
    },
    {
      name: 'Оперативное сопровождение (23/7)',
      imageSrc: '/images/autoflash.svg',
      description: 'Быстро и качественно решаем вопросы пользователей, находим и устраняем причины ошибок.'
    },
    {
      name: 'Автоматизированная система поддержки',
      imageSrc: '/images/handshake.svg',
      description: 'Help desk с контролем сроков выполнения запросов по утвержденному регламенту.'
    },
    {
      name: 'Оптимизация бизнес-процессов',
      imageSrc: '/images/connect.svg',
      description: 'Повышение эффективности бизнеса за счет автоматизации учета и оптимизации процессов.'
    },
    {
      name: 'Официальные партнеры 1С',
      imageSrc: '/images/1c.png',
      description: '1С-Франчайзи. Полный цикл услуг по автоматизации учета компаний.'
    },
    {
      name: 'Собственная разработка',
      imageSrc: '/images/ads_click.svg',
      description: 'Разработка, доработка и оптимизация программных продуктов на платформе 1С.'
    }
  ]

  const techStack = [
    'Встроенный язык программирования 1С:Предприятия',
    'Язык запросов на базе SQL',
    'С++',
    'T-SQL',
    '1C Maker (сервис прототипирования)',
    '1С:Конвертация данных и EnterpriseData',
    '1С:Шина',
    'Telegram бот',
    '1С:Аналитика (BI-система)',
    'OLAP-системы на основе данных 1С'
  ]

  return (
    <SidebarLayout>
      <div className="mx-auto w-full max-w-6xl space-y-6 py-2">
        <section className="rounded-2xl bg-slate-900 px-5 py-10 sm:px-8 sm:py-12">
          <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[.2em] text-blue-300">Автоматизация бизнеса</p>
              <h1 className="mt-4 text-3xl font-extrabold leading-tight text-white sm:text-4xl">
                Профессиональная автоматизация на платформе 1С
              </h1>

              <ul className="mt-5 space-y-2 text-sm leading-6 text-slate-200 sm:text-base">
                {['Продажа ПО', 'Внедрение ПО', 'Разработка ПО', 'Обучение', 'Сопровождение', 'Доработка'].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-blue-300" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="/pricing"
                  className="inline-flex items-center justify-center rounded-full bg-gray-600 px-7 py-3 text-sm font-semibold text-white shadow-md ring-1 ring-gray-300/30 transition-colors duration-200 hover:bg-gray-500"
                >
                  Стоимость услуг
                </a>
                <a
                  href="/contacts"
                  className="inline-flex items-center justify-center rounded-full border border-slate-500 px-7 py-3 text-sm font-semibold text-slate-200 transition-colors duration-200 hover:bg-slate-800"
                >
                  Консультация
                </a>
              </div>
            </div>

            <div className="rounded-xl border border-slate-700 bg-slate-800/60 p-3">
              <img
                src="/images/main.jpg"
                alt="Автоматизация бизнес-процессов"
                className="h-64 w-full rounded-lg object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-slate-200 bg-slate-100 px-5 py-8 sm:px-8 sm:py-10">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-extrabold text-slate-800 sm:text-3xl">Почему выбирают нас</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
              Более 10 лет успешной работы в области автоматизации бизнеса
            </p>
          </div>

          <div className="mx-auto mt-6 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {perks.map((perk) => (
              <article key={perk.name} className="rounded-xl border border-slate-200 bg-white p-5">
                <div className="mb-4 inline-flex rounded-lg bg-slate-100 p-2">
                  <img src={perk.imageSrc} alt="" className="h-9 w-9 object-contain" loading="lazy" />
                </div>
                <h3 className="text-base font-bold text-slate-800">{perk.name}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{perk.description}</p>
              </article>
            ))}
          </div>
        </section>

        <PostsSection />

        <section className="rounded-2xl bg-slate-900 px-5 py-10 sm:px-8 sm:py-12">
          <div className="mx-auto grid max-w-5xl gap-7 lg:grid-cols-[1.05fr_.95fr] lg:items-start">
            <div>
              <h2 className="text-2xl font-extrabold text-white sm:text-3xl">Используемые технологии</h2>
              <ul className="mt-5 space-y-2 text-sm leading-6 text-slate-200">
                {techStack.map((tech) => (
                  <li key={tech} className="flex gap-2">
                    <span className="mt-2 h-2 w-2 rounded-full bg-blue-300" />
                    <span>{tech}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-slate-700 bg-slate-800/60 p-3">
              <img src="/images/stek.jpg" alt="Стек технологий" className="w-full rounded-lg object-cover" loading="lazy" />
            </div>
          </div>
        </section>

        <section className="mx-auto grid w-full max-w-5xl gap-5 lg:grid-cols-2">
          <article className="rounded-2xl border border-slate-200 bg-slate-100 p-6 sm:p-7">
            <h2 className="text-xl font-extrabold text-slate-800 sm:text-2xl">Готовы автоматизировать бизнес?</h2>
            <p className="mt-3 text-sm leading-6 text-slate-700">
              Оставьте заявку, и мы подготовим понятный план внедрения с приоритетами, сроками и прогнозируемым эффектом.
            </p>
          </article>

          <article className="rounded-2xl bg-gradient-to-br from-slate-800 to-blue-800 p-6 sm:p-7 text-white">
            <h2 className="text-xl font-extrabold sm:text-2xl">Получить консультацию специалиста</h2>
            <p className="mt-3 max-w-md text-sm leading-6 text-slate-200">
              Разберем вашу задачу и предложим оптимальный формат сотрудничества.
            </p>
            <a
              href="/contacts"
              className="mt-5 inline-flex items-center justify-center rounded-full bg-gray-600 px-8 py-4 text-base font-semibold text-white shadow-md ring-1 ring-gray-300/30 transition-colors duration-200 hover:bg-gray-500"
            >
              Связаться с нами
            </a>
          </article>
        </section>
      </div>
    </SidebarLayout>
  )
}

export default Home
