import { FC, useEffect } from 'react'
import { SidebarLayout } from 'layouts/SidebarLayout'
import PostsSection from 'shared/PostsSection'

interface Perk {
  name: string
  imageSrc: string
  description: string
}

const Home: FC = () => {
  // Установка заголовка страницы
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
      description: "Мы команда специалистов с опытом внедрения крупных проектов от 12 лет."
    },
    {
      name: 'Оперативное сопровождение (23/7)',
      imageSrc: '/images/autoflash.svg',
      description: "Быстро и качественно решаем вопросы пользователей, находим и устраняем причины ошибок."
    },
    {
      name: 'Автоматизированная система поддержки',
      imageSrc: '/images/handshake.svg',
      description: "Help desk с контролем сроков выполнения запросов по утвержденному регламенту."
    },
    {
      name: 'Оптимизация бизнес-процессов',
      imageSrc: '/images/connect.svg',
      description: "Повышение эффективности бизнеса за счет автоматизации учета и оптимизации процессов."
    },
    {
      name: 'Официальные партнеры 1С',
      imageSrc: '/images/1c.png',
      description: "1С-Франчайзи. Полный цикл услуг по автоматизации учета компаний."
    },
    {
      name: 'Собственная разработка',
      imageSrc: '/images/ads_click.svg',
      description: "Разработка, доработка и оптимизация программных продуктов на платформе 1С."
    }
  ]

  const techStack = [
    "Встроенный язык программирования 1С:Предприятия",
    "Язык запросов на базе SQL",
    "С++",
    "T-SQL",
    "1C Maker (сервис прототипирования)",
    "1С:Конвертация данных и EnterpriseData",
    "1С:Шина",
    "Telegram бот",
    "1С:Аналитика (BI-система)",
    "OLAP-системы на основе данных 1С"
  ]

  return (
    <SidebarLayout>
      {/* Hero Section */}
      <section className="relative bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-purple-900 opacity-20"></div>
        
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:px-8 lg:py-40">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:pt-8 z-10">
            <div className="mb-8 flex items-center gap-x-4">
              <img 
                className="h-12 w-auto" 
                src="/images/algoritm23-logo.svg" 
                alt="Логотип Алгоритм 23" 
                loading="lazy"
              />
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Профессиональная автоматизация бизнеса
            </h1>
            
            <ul className="mt-6 space-y-2 text-lg leading-8 text-gray-300">
              {['Продажа ПО', 'Внедрение ПО', 'Разработка ПО', 'Обучение', 'Сопровождение', 'Доработка'].map((item) => (
                <li key={item} className="flex items-center">
                  <svg className="h-5 w-5 text-blue-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/pricelist"
                className="rounded-md bg-white px-5 py-3 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 transition-colors"
              >
                Стоимость услуг
              </a>
              <a
                href="/contacts"
                className="rounded-md bg-gray-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 transition-colors"
              >
                Консультация
              </a>
            </div>
          </div>
          
          <div className="mx-auto mt-16 flex max-w-2xl lg:mx-0 lg:mt-0 lg:max-w-none lg:flex-none">
            <div className="max-w-3xl flex-none">
              <img
                src="/images/main.jpg"
                alt="Автоматизация бизнес-процессов"
                className="w-full rounded-lg bg-gray-800 shadow-xl ring-1 ring-gray-400/10"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-950 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Почему выбирают нас
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-300">
              Более 10 лет успешной работы в области автоматизации бизнеса
            </p>
          </div>
          
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {perks.map((perk) => (
              <article 
                key={perk.name}
                className="flex flex-col items-start bg-gray-900 rounded-xl p-8 hover:bg-gray-800 transition-colors"
              >
                <div className="flex items-center justify-center rounded-lg bg-gray-800 p-3 mb-6">
                  <img 
                    src={perk.imageSrc} 
                    alt="" 
                    className="h-12 w-12 object-contain"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-xl font-semibold leading-7 text-white">
                  {perk.name}
                </h3>
                <p className="mt-2 text-base leading-7 text-gray-300">
                  {perk.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Posts Section */}
      <PostsSection />

      {/* Tech Stack Section */}
      <section className="bg-gray-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Используемые технологии
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-300">
              Современные решения для комплексной автоматизации
            </p>
          </div>
          
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-8">
              <div className="lg:max-w-lg">
                <ul className="space-y-4 text-base leading-7 text-gray-300">
                  {techStack.map((tech, index) => (
                    <li key={index} className="flex gap-x-3">
                      <svg className="h-7 w-5 flex-none text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                      </svg>
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="flex items-start justify-end">
              <img
                src="/images/stek.jpg"
                alt="Стек технологий"
                className="w-[48rem] rounded-xl shadow-xl ring-1 ring-gray-400/10"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-950 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Готовы автоматизировать ваш бизнес?
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-300">
              Оставьте заявку и получите бесплатную консультацию нашего специалиста
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/contacts"
                className="rounded-md bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 transition-colors"
              >
                Связаться с нами
              </a>
              <a href="/additional-education" className="text-sm font-semibold leading-6 text-white hover:text-gray-300 transition-colors">
                О компании <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </SidebarLayout>
  )
}

export default Home