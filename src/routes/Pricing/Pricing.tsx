import { FC } from 'react'
import { SidebarLayout } from 'layouts/SidebarLayout'

const models = [
  {
    name: 'Почасовая модель',
    price: 'от 4 500 ₽ / час',
    description: 'Подходит для точечных задач, аудита и оперативных доработок.',
    points: ['Гибкое управление объемом', 'Прозрачная фиксация трудозатрат', 'Быстрый старт без длинной подготовки']
  },
  {
    name: 'Проектный бюджет',
    price: 'фиксируется после оценки',
    description: 'Оптимально для внедрения и масштабных изменений с понятным результатом.',
    points: ['План-график и контроль этапов', 'Финансовая предсказуемость проекта', 'Ответственность за достижение KPI']
  },
  {
    name: 'Абонентское сопровождение',
    price: 'от 3 000 ₽ / час',
    description: 'Для компаний с регулярным объемом задач после запуска проекта от 1 млн ₽.',
    points: ['Льготная ставка', 'Приоритетная линия поддержки', 'Постоянное развитие системы']
  }
]

const Pricing: FC = () => (
  <SidebarLayout>
    <div className="mx-auto w-full max-w-6xl space-y-6 py-2">
      <section className="rounded-2xl bg-slate-900 px-5 py-10 sm:px-8 sm:py-12">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[.2em] text-blue-300">Форматы сотрудничества</p>
          <h1 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl">Стоимость услуг Algoritm 23</h1>
          <p className="mt-4 text-base leading-7 text-slate-300">
            Выбирайте модель, которая соответствует вашему этапу развития: от быстрых задач до комплексного внедрения.
          </p>
        </div>

        <div className="mx-auto mt-8 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {models.map((model) => (
            <article key={model.name} className="rounded-xl border border-slate-700 bg-slate-800/60 p-5">
              <h2 className="text-lg font-bold text-white">{model.name}</h2>
              <p className="mt-2 text-2xl font-extrabold text-blue-300">{model.price}</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">{model.description}</p>
              <ul className="mt-4 space-y-1.5 text-sm leading-6 text-slate-200">
                {model.points.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span className="mt-2 h-2 w-2 rounded-full bg-blue-300" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-5xl gap-5 lg:grid-cols-2">
        <article className="rounded-2xl border border-slate-200 bg-slate-100 p-6 sm:p-7">
          <h2 className="text-xl font-extrabold text-slate-800 sm:text-2xl">Что влияет на итоговую стоимость</h2>
          <ul className="mt-4 list-disc space-y-2.5 pl-5 text-sm leading-6 text-slate-700 marker:text-slate-700">
            <li>Текущая сложность и зрелость ваших бизнес-процессов</li>
            <li>Количество пользователей и интеграций с внешними системами</li>
            <li>Объем доработок, отчетности и требований к поддержке</li>
          </ul>
          <p className="mt-5 text-sm leading-6 text-slate-700">
            После короткого интервью мы даем прозрачный расчет со сроками и этапами.
          </p>
        </article>

        <article className="rounded-2xl bg-gradient-to-br from-slate-800 to-blue-800 p-6 sm:p-7 text-white">
          <h2 className="text-xl font-extrabold sm:text-2xl">Нужен точный расчет под вашу задачу?</h2>
          <p className="mt-3 max-w-md text-sm leading-6 text-slate-200">
            Подготовим индивидуальное коммерческое предложение с бюджетом, сроками и этапами работ.
          </p>
          <a href="/contacts" className="mt-5 inline-flex items-center justify-center rounded-full bg-gray-600 px-8 py-4 text-base font-semibold text-white shadow-md ring-1 ring-gray-300/30 transition-colors duration-200 hover:bg-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-800">
            Получить расчет
          </a>
        </article>
      </section>
    </div>
  </SidebarLayout>
)

export default Pricing
