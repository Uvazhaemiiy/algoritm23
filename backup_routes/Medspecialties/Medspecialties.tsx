import { FC } from 'react'
import { SidebarLayout } from 'layouts/SidebarLayout'

/* Специальности */
const stats = [
   {
      name: 'Квалификация: Зубной техник / Здоровые зубы - залог успеха',
      stat: 'Стоматология ортопедическая',
      imageSrc: '/images/windows/dentist-holding-dental-model.jpg',
      href:'/orthopedic-dentistry'
   },
   {
      name: 'Квалификация: Мед. сестра/брат / Поддержания здоровья',
      stat: 'Сестринское дело',
      imageSrc: '/images/windows/nursing.jpg',
      href:'/nursing'
   },
   {
      name: 'Квалификация: Фельдшера / Оказание первой помощи',
      stat: 'Лечебное дело',
      imageSrc: '/images/windows/medical-busines.jpg',
      href:'/medical-business'
   },
]

/* Основыные качества */
const perks = [
   {
      name: 'Выпущенные студенты',
      imageSrc: '/images/site-pages/vupusk.svg',
      description:
         "На протяжении всего времени существования колледжа, коллективом выпущено более 12000 грамотных специалистов.",
   },
   {
      name: 'Музей патологоанатомии',
      imageSrc: '/images/site-pages/museu-dna.svg',
      description:
         "В колледже есть уникальный патологоанатомический музей, некоторые экспонаты которого датируются кон.XIX – нач.XX вв. С помощью экспонатов музея студенты имеют возможность изучать патологии различного профиля.",
   },
   {
      name: 'Новейшее оборудование',
      imageSrc: '/images/site-pages/computer.svg',
      description:
         'Колледж обеспечен широкой материально-технической базой, что позволяет полноценно проводить практические занятия. Все доклинические кабинеты оснащены современным медицинским оборудованием и инструментарием.',
   },
   {
      name: 'Преподаватели',
      imageSrc: '/images/site-pages/teaching-staff.svg',
      description:
         "Преподавательский состав медицинского колледжа состоит из профессионалов, любящих своё дело и всегда готовых помочь студентам в  нелегком деле освоения профессии.",
   },
   {
      name: 'Распределение',
      imageSrc: '/images/site-pages/distribution.svg',
      description:
         "Каждый год происходит распределение выпускников медколледжа в ведомственные лечебные учреждения, и, по большей части, они остаются там работать.",
   },
   {
      name: 'Трудоустройство студентов',
      imageSrc: '/images/site-pages/work.svg',
      description:
         "Выпускники Медицинского Колледжа РУТ (МИИТ) обеспечены стабильной, хорошо оплачиваемой работой сразу же по окончании учебного заведения.",
   },
]

const people = [
   {
     name: 'Подача заявления',
     email: 'leslie.alexander@example.com',
     role: 'Подробная инструкция',
     imageUrl:
       'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
     href:'/request'
      },
   {
      name: 'Вступительные испытания',
      email: 'leslie.alexander@example.com',
      role: 'Инстукция для прохождения',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      href: '/tests'
      },
    {
      name: 'Часто задаваемые вопросы',
      email: 'в',
      role: 'F.A.Q. для ознакомления',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      href: '/frequently-asked-questions'    
      },
    {
      name: 'Стоимость обучения      ',
      email: 'leslie.alexander@example.com',
      role: 'Цены на обучение',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      href: '/pricelist'
      },
    {
      name: 'План приема на бюджетной основе',
      email: 'в',
      role: 'Колиство бюджетных мест',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      href: '/budget-basis'
      },
    {
      name: 'Требование к мед. документации',
      email: 'leslie.alexander@example.com',
      role: 'Информация об мед. осмотре',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      href: '/medrequirement'
      },
    {
      name: 'День открытых дверей',
      email: 'leslie.alexander@example.com',
      role: 'Время проведения',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      href: '/doors-open-days'
      },
    {
      name: 'График работы приемной комиссии',
      email: 'leslie.alexander@example.com',
      role: 'Прием документов',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      href: '/admissions-schedule'
      },
   // More people...
 ]
 
//основные качества - end
const Medspecialties: FC = () => (
   <SidebarLayout>
               {/* //контейнеры специальностей - open*/}
               <div>
            <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
               {stats.map((item) => (
                  <div key={item.name} className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
                     <div className="sm:flex-shrink-0">
                        <div className="flow-root">
                           <img className="w-200 h-240" src={item.imageSrc} alt="" />
                        </div>
                     </div>
                     <dt>
                        <p className="mt-2 text-sm font-medium text-gray-500 truncate">{item.name}</p>
                     </dt>
                     <dd>
                     <a href={item.href} className="px-2 py-4 hover:shadow-gray-400 focus:outline-none mt-2 font-medium text-white truncate col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-sky-900 text-center shadow-xl">{item.stat}</a></dd>
                  </div>
               ))}
            </dl>
         </div>
         {/* Контейнейры специальностей - end */}
         {/* Навигация абитуриентам - open */}
         <div className="grid grid-cols-1 gap-4 sm:grid-cols-4 mt-6">
      {people.map((person) => (
        <div
          key={person.email}
          className="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400"
        >
          <div className="flex-shrink-0">
            <img className="h-10 w-10 rounded-full" src={person.imageUrl} alt="" />
          </div>
          <div className="min-w-0 flex-1">
            <a href={person.href} className="focus:outline-none">
              <span className="absolute inset-0" aria-hidden="true" />
              <p className="text-sm font-medium text-gray-900 focus:outline-none">{person.name}</p>
              <p className="truncate text-sm text-gray-500">{person.role}</p>
            </a>
          </div>
        </div>
      ))}
    </div>
    {/* Контейнеры специальностей - end */}
           {/* Основные качества - open */}
           <div className="bg-gray-50 mt-6 rounded-lg">
            <div className="max-w-8xl mx-auto py-24 sm:px-2 sm:py-12 lg:px-4">
               <h2 className="text-center text-2xl font-semibold text-sky-900">Ознакомьтесь с сильными сторонам колледжа</h2>
               <div className="max-w-2xl mx-auto px-4 grid grid-cols-1 gap-y-12 gap-x-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-16 mt-12">
                  {perks.map((perk) => (
                     <div key={perk.name} className="sm:flex">
                        <div className="sm:flex-shrink-0">
                           <div className="flow-root">
                              <img className="w-28 h-24" src={perk.imageSrc} alt="" />
                           </div>
                        </div>
                        <div className="mt-3 sm:mt-0 sm:ml-3">
                           <h3 className="text-xl font-medium text-sky-900">{perk.name}</h3>
                           <p className="mt-2 text-sm text-gray-500">{perk.description}</p>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
         {/* Основные качества - end */}
   </SidebarLayout>
)

export default Medspecialties
