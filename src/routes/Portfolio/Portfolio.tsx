import { FC, useState } from 'react'
import { SidebarLayout } from 'layouts/SidebarLayout'
import { EnvelopeIcon, PhoneIcon, TrophyIcon } from '@heroicons/react/24/outline'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'

const founderProjects = [
  'ООО "ГК Клевер" - автоматизация бухгалтерского, финансового, управленческого и оперативного учета, сопровождение БИТ.Финанс + БИТ.Строительство.',
  'ООО "Акцент" - автоматизация финансового и управленческого учета, сопровождение подсистем "Казначейство", "Бюджетирование", "Учет договоров и затрат".',
  'ООО "УНР Инжиниринг" - сопровождение и запуск подсистем "Подрядчик", "Снабжение и склад", "Казначейство", "Бюджетирование".',
  'ООО "БЕСТСИСТЕМ" - внедрение бухгалтерского и управленческого учета.',
  'ООО "Юго-Запад Сервис" - внедрение БИТ.Финанс.',
  'ООО СК "Вира" - внедрение БИТ.Финанс.',
  'ООО ПСК "Континент" - комплексная автоматизация учета, зарплаты и кадров, сопровождение БИТ.Финанс + БИТ.Строительство.'
]

const doneProjects = [
  'ООО "УНР Инжиниринг" - внедрение БИТ.Финанс: автоматизация подсистем "Казначейство", "Бюджетирование", сопровождение системы.',
  'ООО "Экохолдинг" - внедрение 1С:Управление автотранспортом: учет автопарка, бюджетирование, расчет зарплаты, интеграция с мобильным приложением.',
  'ООО "Тетра-М" - внедрение 1С:Бухгалтерия ПРОФ и 1С:УНФ, настройка учета, синхронизации и сопровождение.'
]

const activeProjects = [
  'ООО "Реконструкция" - внедрение БИТ.Финанс + БИТ.Строительство: "Казначейство", "Бюджетирование", "Учет договоров и затрат", "Подрядчик", "Снабжение и склад".'
]

const Portfolio: FC = () => {
  const [isImageOpen, setIsImageOpen] = useState(false)

  return (
    <SidebarLayout>
      <div className="mx-auto w-full max-w-6xl space-y-6 py-2">
      <section className="rounded-2xl bg-slate-900 px-5 py-10 sm:px-8 sm:py-12">
        <div className="mx-auto max-w-5xl">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[.2em] text-blue-300">Портфолио и опыт</p>
            <h1 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl">Реальные проекты и подтвержденная экспертиза</h1>
            <div className="mt-4">
              <button
                type="button"
                className="float-left mr-4 mb-2 w-[100px] rounded-full border border-slate-700 bg-slate-800/60 p-1 transition-transform duration-200 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-300"
                onClick={() => setIsImageOpen(true)}
                aria-label="Открыть фото основателя"
              >
                <img
                  src="/images/eleonora.jpg"
                  alt="Основатель компании"
                  className="h-[100px] w-full rounded-full object-cover object-top"
                />
              </button>
              <p className="text-base leading-7 text-slate-300">ООО «АЛГОРИТМ 23» - молодая быстро растущая компания по автоматизации учета на платформе 1С.</p>
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-300">
              Основатель: Арутюнян Элеонора Араратовна. Опыт внедрения программных продуктов 1С с 2012 года, управление федеральными
              проектами с бюджетом 150+ млн рублей и командами внедрения/сопровождения 40+ человек.
            </p>
          </div>
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
          <h2 className="text-xl font-extrabold text-slate-800 sm:text-2xl">Опыт внедрения основателя</h2>
          <ul className="mt-4 list-disc space-y-2.5 pl-5 text-sm leading-6 text-slate-700 marker:text-slate-700">
            {founderProjects.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="rounded-2xl bg-gradient-to-br from-slate-800 to-blue-800 p-6 sm:p-7 text-white">
          <h2 className="text-xl font-extrabold sm:text-2xl">Реализованные и активные проекты</h2>

          <h3 className="mt-4 text-base font-semibold text-white">Реализованные</h3>
          <ul className="mt-2 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-200 marker:text-slate-200">
            {doneProjects.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <h3 className="mt-5 text-base font-semibold text-white">Активные</h3>
          <ul className="mt-2 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-200 marker:text-slate-200">
            {activeProjects.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
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
              <EnvelopeIcon className="h-5 w-5 text-slate-500" aria-hidden="true" />
              <span>info@algoritm23.net</span>
            </p>
          </div>
        </article>

        <article className="rounded-2xl bg-gradient-to-br from-slate-800 to-blue-800 p-5 sm:p-6 text-white">
          <h2 className="text-xl font-extrabold sm:text-2xl">Написать нам</h2>
          <form action="https://formsubmit.co/info@algoritm23.net" method="POST" className="mt-4 grid grid-cols-1 gap-y-3">
            <input type="hidden" name="_subject" value="Новая заявка с сайта algoritm23.net (Портфолио)" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="https://algoritm23.net/portfolio?sent=1" />
            <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />
            <input
              type="text"
              name="full-name"
              autoComplete="name"
              required
              className="block w-full rounded-md border border-slate-500 bg-slate-900/60 py-2.5 px-3.5 text-sm text-white placeholder-slate-300 focus:border-gray-300 focus:ring-gray-300"
              placeholder="Ф.И.О."
            />
            <input
              name="email"
              type="email"
              autoComplete="email"
              required
              className="block w-full rounded-md border border-slate-500 bg-slate-900/60 py-2.5 px-3.5 text-sm text-white placeholder-slate-300 focus:border-gray-300 focus:ring-gray-300"
              placeholder="Ваш Email"
            />
            <input
              type="text"
              name="phone"
              autoComplete="tel"
              required
              className="block w-full rounded-md border border-slate-500 bg-slate-900/60 py-2.5 px-3.5 text-sm text-white placeholder-slate-300 focus:border-gray-300 focus:ring-gray-300"
              placeholder="Контактный номер"
            />
            <textarea
              name="message"
              rows={3}
              required
              className="block w-full rounded-md border border-slate-500 bg-slate-900/60 py-2.5 px-3.5 text-sm text-white placeholder-slate-300 focus:border-gray-300 focus:ring-gray-300"
              placeholder="Написать сообщение"
              defaultValue=""
            />
            <button
              type="submit"
              className="mt-1 inline-flex items-center justify-center rounded-full bg-gray-600 px-7 py-2.5 text-sm font-semibold text-white shadow-md ring-1 ring-gray-300/30 transition-colors duration-200 hover:bg-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-800"
            >
              Отправить
            </button>
            <p className="text-xs text-slate-300">
              После отправки вы будете перенаправлены обратно на страницу портфолио.
            </p>
          </form>
        </article>
      </section>
      </div>

      <Lightbox
        open={isImageOpen}
        close={() => setIsImageOpen(false)}
        slides={[{ src: '/images/eleonora.jpg', alt: 'Основатель компании' }]}
      />
    </SidebarLayout>
  )
}

export default Portfolio
