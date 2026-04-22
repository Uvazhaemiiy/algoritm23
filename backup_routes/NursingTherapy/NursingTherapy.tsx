import { FC } from 'react'
import { SidebarLayout } from 'layouts/SidebarLayout'
import { PhoneIcon } from '@heroicons/react/24/outline'


const products = [
   {
     id: 1,
     name: '1. Проводить мероприятия по сохранению и укреплению здоровья населения.     ',
     href: '#',
   },
   {
      id: 2,
      name: '2. Объяснять пациенту потребность вмешательства.      ',
   },
   {
      id: 3,
      name: '3. Проводить лечебные и диагностические вмешательства вместе с участниками лечебного процесса.      ',
   },
   {
      id: 4,
      name: '4. Владеть техникой манипуляций медицинской сестры.      ',
   },
   {
      id: 5,
      name: '5. Пользоваться медпрепаратами в соответствии с инструкцией по использованию.      ',
   },
   {
      id: 6,
      name: '6.  Использовать аппаратуру, оборудование с соблюдением правил техники безопасности.      ',
   },
   {
      id: 7,
      name: '7. Грамотно оценивать обстановку и действовать в пределах компетенций и полномочий своей профессии.      ',
   },
   {
      id: 8,
      name: '8. Быть коммуникабельной в общении с пациентами. ',
   },
   {
      id: 9,
      name: '9. Чётко проводить все медицинские мероприятия согласно врачебным назначениям, в соответствии с компетенцией своей профессии.',
   },
   {
      id: 10,
      name: '10. Отмечать документально основные действия ухода за пациентами.',
   },
   {
      id: 11,
      name: '11. Владеть техникой медсестринских манипуляций.',
   },
   {
      id: 12,
      name: '12. Умение оценить состояние пациентов и пострадавших, находящихся в очень тяжёлом состоянии, определить основные признаки заболевания.',
   },
   {
      id: 13,
      name: '13. Проводить подготовку пациентов к различным исследованиям.',
   },
   {
      id: 14,
      name: '14. Выполнять требования контроля за инфекцией, инфекционной безопасности всего контингента медучреждения.',
   },
]
   const people = [
      {
        email: 'janecooper@example.com',
        telephone: '+7-499-187-84-74',
      },
   // More products...
 ]



const NursingTherapy: FC = () => (
   <SidebarLayout>
     <main className="relative lg:min-h-full">
        <div className="h-80 overflow-hidden lg:absolute lg:w-1/2 lg:h-full lg:pr-4 xl:pr-12">
          <img
            src="/images/windows/nursing-therapy.jpg"
            alt="Проведения предрейсовых медосмотров водителей автотранспортных средств"
            className="h-full w-full object-center object-cover"
          />
        </div>
        <div>
          <div className="max-w-2xl mx-auto py-16 px-4 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 lg:py-32 lg:grid lg:grid-cols-2 lg:gap-x-8 xl:gap-x-24">
            <div className="lg:col-start-2">
              <p className="mt-2 text-2xl font-bold tracking-tight text-sky-900 sm:text-3xl">Сестринское дело в терапии</p>
              <p className="mt-4 text-xl text-gray-800">
              Программа  повышения профессионализма имеющейся  квалификации.
              </p>
              <ul
                role="list"
                className="mt-6 text-sm font-medium text-gray-500 border-t border-gray-200 divide-y divide-gray-200"
              >
                {products.map((product) => (
                  <li key={product.id} className="flex py-2 space-x-2">
                    <div className="flex-auto space-y-1">
                      <h3 className="text-gray-900">
                      <a href={product.href}>{product.name}</a></h3>
                    </div>
                  </li>
                ))}
              </ul>
              <p className="mt-12 text-base text-sky-900">
              <li>Категория слушателей: медицинская сестра.</li>
              <li>Форма обучения: очная.</li>
              <li>Трудоемкость программы: 144 часа.</li>
              <li>Сроки освоения программы:  18 календарных дней.</li>
              <li>Режим занятий: 8 часов в день.</li>
              </p>
              <dl className="mt-16 grid grid-cols-2 gap-x-4 text-sm text-gray-600">
                <div>
                  <dt className="font-medium text-sky-900">Адрес колледжа</dt>
                  <dd className="mt-2">
                    <address className="not-italic">
                      <span className="block">129128, г. Москва</span>
                      <span className="block">ул. Будайская</span>
                      <span className="block">дом 2 корп. 18</span>
                    </address>
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-sky-900">Обратная связь:</dt>
                  <dd className="mt-2 space-y-2 sm:flex sm:space-y-0 sm:space-x-4">
   {/* //Кнопка звонок - open */}
    <ul role="list" className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {people.map((person) => (
         <li key={person.email} className="col-span-6 divide-y divide-sky-200 rounded-lg bg-sky-900 shadow">
         
          <div>
            <div className="-mt-px flex divide-x divide-gray-200">
              <div className="-ml-px flex w-0 flex-1">
                <a
                  href={`tel:${person.telephone}`}
                  className="relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4 text-sm font-medium text-white hover:text-green-400"
                >
                  <PhoneIcon className="h-5 w-5 text-white" aria-hidden="true" />
                  <span className="ml-3">Звонок</span>
                </a>
              </div>
            </div>
          </div>
        </li>
      ))}
     </ul>
   {/* //Кнопка звонок - end */}                  
    </dd>
    </div>
     </dl>
              <div className="mt-16 border-t border-gray-200 py-6 text-right">
                <a href="/additional-education" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                  Вернуться к списку квалификации <span aria-hidden="true"> &rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
   </SidebarLayout>
)

export default NursingTherapy
