import { FC, useState } from 'react'
import { SidebarLayout } from 'layouts/SidebarLayout'
import { ContactForm } from 'shared/ContactForm'
import {
  EnvelopeIcon,
  PhoneIcon,
  TrophyIcon,
  UserGroupIcon,
  AcademicCapIcon,
  ChartBarIcon,
  RocketLaunchIcon
} from '@heroicons/react/24/outline'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import s from './Portfolio.module.scss'

const activeProjectsBenefits = [
  'оптимизировать бизнес-процессы',
  'повысить прозрачность и управляемость компании',
  'сократить операционные издержки',
  'увеличить скорость и эффективность работы подразделений',
  'вывести бизнес на новый технологический уровень'
]

const activeProjectsIndustries = [
  'строительства и девелопмента',
  'торговли и дистрибуции',
  'промышленности и производства',
  'мебельного производства',
  'автомобильного бизнеса и сервисного обслуживания'
]

const realizedProjectsHighlights = [
  'автоматизация деятельности крупнейшего оператора майнинговых дата-центров и импортёра майнингового оборудования в России',
  'внедрение и настройка программного обеспечения для строительных и производственных компаний',
  'оптимизация ключевых бизнес-процессов и управленческого учёта',
  'проведение аудита IT-отделов и повышение эффективности их работы'
]

const realizedProjectsServices = [
  'бухгалтерский и налоговый учёт',
  'финансовый и управленческий учёт',
  'международный учёт (МСФО)',
  'кадровый и оперативный учёт',
  'производственный и складской учёт',
  'комплексные системы автоматизации бизнеса'
]

const clientLogos = [
  { src: '/images/clients/bitriver.png', alt: 'BitRiver' },
  { src: '/images/clients/qtec.png', alt: 'Qtec' },
  { src: '/images/clients/kontinent.png', alt: 'Континент' },
  { src: '/images/clients/g3-group.png', alt: 'G3 Group' },
  { src: '/images/clients/mostechstroy.png', alt: 'Мостехстрой' },
  { src: '/images/clients/deco-line.png', alt: 'Deco Line' },
  { src: '/images/clients/asgard.png', alt: 'Asgard' }
]

const activeProjectsLogos = [
  { src: '/images/clients/spetsdorproekt.png', alt: 'Спецдорпроект' },
  { src: '/images/clients/nortest.png', alt: 'Испытательный центр Нортест' },
  { src: '/images/clients/koreana.png', alt: 'Кореана — сервис и автозапчасти' }
]

const founderAchievements = [
  { icon: RocketLaunchIcon, title: '500+', text: 'успешно внедрённых проектов' },
  { icon: AcademicCapIcon, title: '7000+', text: 'обученных пользователей' },
  { icon: ChartBarIcon, title: 'IT', text: 'автоматизация и цифровая трансформация бизнеса' },
  { icon: UserGroupIcon, title: '50+', text: 'специалистов в управляемой команде' }
]

const teamCompetencies = [
  'Следим за современными технологическими трендами',
  'Регулярно участвуем в профильных IT-конференциях',
  'Проходим обучение и повышаем квалификацию',
  'Внедряем современные подходы к автоматизации бизнеса'
]

const Portfolio: FC = () => {
  const [isImageOpen, setIsImageOpen] = useState(false)

  return (
    <SidebarLayout>
      <div className="mx-auto w-full max-w-6xl space-y-6 py-2">
      <section className="rounded-2xl bg-slate-900 px-5 py-10 sm:px-8 sm:py-12">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[.2em] text-blue-300">Портфолио и опыт</p>
          <h1 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl">Реальные проекты и подтверждённая экспертиза</h1>

        </div>

        <div className="mx-auto mt-8 grid max-w-5xl gap-5 lg:grid-cols-2 lg:items-stretch">
          <article className="flex h-full flex-col rounded-2xl border border-slate-700 bg-slate-800/60 p-6 sm:p-7">
            <div className="flex items-center gap-4">
              <button
                type="button"
                className="shrink-0 overflow-hidden rounded-full border border-slate-600 bg-slate-900/80 transition-transform duration-200 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
                style={{ width: 72, height: 72, minWidth: 72, minHeight: 72, padding: 2 }}
                onClick={() => setIsImageOpen(true)}
                aria-label="Открыть фото основателя"
              >
                <img
                  src="/images/eleonora.png"
                  alt="Элеонора Арутюнян"
                  width={68}
                  height={68}
                  style={{
                    width: 68,
                    height: 68,
                    maxWidth: 'none',
                    display: 'block',
                    objectFit: 'cover',
                    objectPosition: 'top center',
                    borderRadius: '9999px'
                  }}
                />
              </button>
              <div className="min-w-0 text-left">
                <h2 className="text-xl font-extrabold text-white sm:text-2xl">Элеонора Арутюнян</h2>
                <p className="mt-1 text-sm font-medium text-blue-300">Основатель компании · эксперт в сфере IT</p>
                <p className="mt-1 text-xs text-slate-400">Опыт работы с 2012 года</p>
              </div>
            </div>

            <div className="mt-6 space-y-4 text-sm leading-6 text-slate-300 sm:text-base sm:leading-7">
              <p>
                Основатель компании и эксперт в сфере IT с опытом работы с 2012 года. За годы профессиональной деятельности успешно
                реализовала крупные федеральные проекты и выстроила эффективную систему управления IT-командой численностью более 50
                специалистов.
              </p>
            </div>

            <h3 className="mt-6 text-sm font-semibold uppercase tracking-wide text-slate-400">Ключевые достижения</h3>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {founderAchievements.map((item) => (
                <div
                  key={item.text}
                  className="rounded-xl border border-slate-700 bg-slate-900/50 px-4 py-3"
                >
                  <item.icon className="h-5 w-5 text-blue-300" aria-hidden="true" />
                  <p className="mt-2 text-lg font-bold text-white">{item.title}</p>
                  <p className="mt-1 text-xs leading-5 text-slate-400 sm:text-sm">{item.text}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="flex h-full flex-col rounded-2xl border border-slate-700 bg-gradient-to-br from-slate-800 to-blue-900/40 p-6 sm:p-7">
            <div className="flex items-center gap-3">
              <UserGroupIcon className="h-8 w-8 shrink-0 text-blue-300" aria-hidden="true" />
              <h2 className="text-xl font-extrabold text-white sm:text-2xl">Команда профессионалов</h2>
            </div>

            <p className="mt-5 text-sm leading-6 text-slate-200 sm:text-base sm:leading-7">
              Наша команда — это сертифицированные специалисты с профильным образованием и глубокими практическими знаниями в области IT и
              решений 1С.
            </p>

            <p className="mt-4 text-sm font-semibold text-white">Мы постоянно совершенствуем свои компетенции:</p>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {teamCompetencies.map((item) => (
                <li
                  key={item}
                  className="rounded-xl border border-slate-600/80 bg-slate-900/40 px-4 py-3 text-sm leading-6 text-slate-200"
                >
                  {item}
                </li>
              ))}
            </ul>

            <p className="mt-5 rounded-xl border border-blue-400/20 bg-blue-950/30 px-4 py-4 text-sm leading-6 text-slate-200 sm:text-base sm:leading-7">
              Специалисты компании имеют дополнительные профессиональные квалификации, включая <span className="font-semibold text-white">MBA</span> и{' '}
              <span className="font-semibold text-white">ICF</span>, что позволяет нам эффективно решать как технические, так и управленческие задачи
              клиентов.
            </p>
          </article>
        </div>
      </section>

      <section className="rounded-2xl border border-slate-700 bg-slate-900 px-5 py-8 sm:px-8 sm:py-10">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-extrabold text-white sm:text-3xl">Профессиональные достижения</h2>
          <p className="mt-3 text-sm leading-6 text-slate-300 sm:text-base">
            Коучинг и бизнес-тренерство по стандартам ICF, профильные сертификаты и без незавершенных проектов.
          </p>
        </div>

        <div className="mx-auto mt-6 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <article className="rounded-xl border border-slate-700 bg-slate-800 p-5">
            <TrophyIcon className="h-6 w-6 text-blue-300" aria-hidden="true" />
            <h3 className="mt-3 text-base font-bold text-white">Сертификаты</h3>
            <p className="mt-2 text-sm leading-6 text-slate-300">Сертификаты специалиста 1С и БИТ.Финанс, БИТ.Строительство.</p>
          </article>
          <article className="rounded-xl border border-slate-700 bg-slate-800 p-5">
            <TrophyIcon className="h-6 w-6 text-blue-300" aria-hidden="true" />
            <h3 className="mt-3 text-base font-bold text-white">Сильная репутация</h3>
            <p className="mt-2 text-sm leading-6 text-slate-300">За период работы нет незавершенных проектов и недовольных заказчиков.</p>
          </article>
          <article className="rounded-xl border border-slate-700 bg-slate-800 p-5">
            <TrophyIcon className="h-6 w-6 text-blue-300" aria-hidden="true" />
            <h3 className="mt-3 text-base font-bold text-white">Развитие экспертизы</h3>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              Обучение коучингу и бизнес-тренерству, пройдены две ступени развития личности и управления командой.
            </p>
          </article>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-5xl gap-5 lg:grid-cols-2">
        <article className="rounded-2xl border border-slate-200 bg-slate-100 p-6 sm:p-7">
          <h2 className="text-xl font-extrabold text-slate-800 sm:text-2xl">Активные проекты</h2>

          <p className="mt-4 text-sm leading-6 text-slate-700 sm:text-base sm:leading-7">
            В настоящее время наша команда реализует проекты по автоматизации и цифровой трансформации бизнеса для ведущих компаний из
            различных отраслей.
          </p>

          <p className="mt-4 text-sm font-semibold text-slate-800 sm:text-base">
            Мы внедряем современные IT-решения, которые помогают:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-700 marker:text-slate-600 sm:text-base sm:leading-7">
            {activeProjectsBenefits.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <p className="mt-5 text-sm font-semibold text-slate-800 sm:text-base">Наши специалисты работают над масштабными проектами в сферах:</p>
          <ul className="mt-3 grid gap-2">
            {activeProjectsIndustries.map((item) => (
              <li
                key={item}
                className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm leading-6 text-slate-700"
              >
                {item}
              </li>
            ))}
          </ul>

          <p className="mt-5 rounded-xl border border-slate-200 bg-white px-4 py-4 text-sm leading-6 text-slate-700 sm:text-base sm:leading-7">
            Каждый проект для нас — это комплексная работа по развитию IT-инфраструктуры, автоматизации процессов и созданию надёжной системы
            управления бизнесом. Мы ориентируемся на долгосрочный результат и внедряем решения, которые действительно помогают компаниям расти
            и масштабироваться.
          </p>

          <div className="mt-6 border-t border-slate-300 pt-6">
            <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
              {activeProjectsLogos.map((logo) => (
                <li
                  key={logo.alt}
                  className={`${s.clientLogo} flex h-20 items-center justify-center rounded-xl border border-slate-200 bg-white px-3 py-2 sm:h-24`}
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    loading="lazy"
                    style={{
                      display: 'block',
                      maxHeight: 56,
                      maxWidth: '100%',
                      width: 'auto',
                      height: 'auto',
                      objectFit: 'contain'
                    }}
                  />
                </li>
              ))}
            </ul>
          </div>
        </article>

        <article className="rounded-2xl bg-gradient-to-br from-slate-800 to-blue-800 p-6 sm:p-7 text-white">
          <h2 className="text-xl font-extrabold sm:text-2xl">Реализованные проекты</h2>

          <p className="mt-4 text-sm leading-6 text-slate-200 sm:text-base sm:leading-7">
            Мы успешно реализуем проекты по автоматизации бизнеса и внедрению IT-решений для крупных компаний из различных отраслей —
            строительства, промышленности, инжиниринга и высокотехнологичного бизнеса.
          </p>

          <h3 className="mt-5 text-sm font-semibold text-white sm:text-base">Среди наших проектов:</h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-200 marker:text-blue-300 sm:text-base sm:leading-7">
            {realizedProjectsHighlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <h3 className="mt-5 text-sm font-semibold text-white sm:text-base">Мы настраиваем и внедряем:</h3>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2">
            {realizedProjectsServices.map((item) => (
              <li
                key={item}
                className="rounded-lg border border-slate-600/80 bg-slate-900/40 px-3 py-2 text-sm leading-6 text-slate-200"
              >
                {item}
              </li>
            ))}
          </ul>

          <p className="mt-5 rounded-xl border border-blue-400/20 bg-blue-950/30 px-4 py-4 text-sm leading-6 text-slate-200 sm:text-base sm:leading-7">
            Одним из значимых проектов стал запуск в промышленную эксплуатацию компании, участвующей в строительстве крупнейшего в мире
            кинопарка «Кинопарк Москино».
          </p>

          <p className="mt-4 text-sm leading-6 text-slate-200 sm:text-base sm:leading-7">
            Наша команда помогает клиентам выстраивать надёжную IT-инфраструктуру, повышать прозрачность процессов и ускорять развитие бизнеса.
          </p>

          <div className="mt-6 border-t border-slate-600/60 pt-6">
            <ul className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
              {clientLogos.map((logo) => (
                <li
                  key={logo.alt}
                  className={`${s.clientLogo} flex h-20 items-center justify-center rounded-xl border border-slate-600/70 bg-white px-3 py-2 sm:h-24`}
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    loading="lazy"
                    style={{
                      display: 'block',
                      maxHeight: 56,
                      maxWidth: '100%',
                      width: 'auto',
                      height: 'auto',
                      objectFit: 'contain'
                    }}
                  />
                </li>
              ))}
            </ul>
          </div>
        </article>
      </section>

      <section className="mx-auto grid w-full max-w-5xl gap-5 lg:grid-cols-2">
        <article className="rounded-2xl border border-slate-200 bg-slate-100 p-6 sm:p-7">
          <h2 className="text-xl font-extrabold text-slate-800 sm:text-2xl">Обратная связь</h2>
          <p className="mt-3 text-sm leading-6 text-slate-700">
            Если у вас возникли вопросы, свяжитесь с менеджером через форму обратной связи или по телефону.
          </p>

          <div className="mt-5 space-y-3 text-sm text-slate-700">
            <p className="flex items-center gap-2">
              <PhoneIcon className="h-5 w-5 text-slate-500" aria-hidden="true" />
              <span>+7 (495) 790-53-23</span>
            </p>
            <p className="flex items-center gap-2">
              <PhoneIcon className="h-5 w-5 text-slate-500" aria-hidden="true" />
              <span>+7 (985) 355-93-69</span>
            </p>
            <p className="flex items-center gap-2">
              <PhoneIcon className="h-5 w-5 text-slate-500" aria-hidden="true" />
              <span>+7 (929) 533-23-23</span>
            </p>
            <p className="flex items-center gap-2">
              <EnvelopeIcon className="h-5 w-5 text-slate-500" aria-hidden="true" />
              <span>info@algoritm23.net</span>
            </p>
          </div>
        </article>

        <article className="rounded-2xl bg-gradient-to-br from-slate-800 to-blue-800 p-5 sm:p-6 text-white">
          <h2 className="text-xl font-extrabold sm:text-2xl">Написать нам</h2>
          <ContactForm subject="Новая заявка с сайта algoritm23.net (Портфолио)" />
        </article>
      </section>
      </div>

      <Lightbox
        open={isImageOpen}
        close={() => setIsImageOpen(false)}
        slides={[{ src: '/images/eleonora.png', alt: 'Основатель компании' }]}
        carousel={{ padding: '24px' }}
        styles={{
          root: { '--yarl__color_backdrop': 'rgba(2, 6, 23, 0.82)' },
          container: {
            maxWidth: 'min(860px, 92vw)',
            maxHeight: '88vh',
            margin: '0 auto',
            borderRadius: '14px',
            overflow: 'hidden'
          }
        }}
      />
    </SidebarLayout>
  )
}

export default Portfolio
