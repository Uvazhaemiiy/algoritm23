import { FC } from 'react'
import { SidebarLayout } from 'layouts/SidebarLayout'
import { PhoneIcon } from '@heroicons/react/24/outline'


const people = [
  {
    email: 'janecooper@example.com',
    telephone: '+7-499-187-84-74',
  },
// More products...
]


const AdmissionsSchedule: FC = () => (
   <SidebarLayout>
    <div className="overflow-hidden bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-prose text-base lg:max-w-none">
          <h2 className="text-lg font-semibold text-sky-600">Информация о приемной комиссии</h2>
          <p className="mt-2 text-3xl font-bold leading-8 tracking-tight text-sky-900 sm:text-4xl">
          График работы приемной комиссии
          </p>
        </div>
        <div className="relative z-10 mx-auto max-w-prose text-base lg:mx-0 lg:max-w-5xl lg:pr-72">
          <p className="text-lg text-gray-500">
          Прием документов осуществляется с 15.06.2023-10.08.2023
          </p>
          <p>
              Документы на поступление предоставлять по адресу: Россия, Москва, Будайская улица, 2с18
          </p>
        </div>
        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-8">
          <div className="relative z-10">
            <div className="prose prose-indigo mx-auto text-gray-500 lg:max-w-none">
              <p>
              Время приема документов:
              </p>
              <ul role="list">
                <li className='mt-2'>- Понедельник-четверг: с 10-00 до 17-00</li>
                <li className=''>- Пятница: с 10-00 до 16-00</li>
              </ul>
              <p className='mt-6 text-red-600'>
              Обратите внимания! Для зачисления необходимо предоставить оригинал документа об образовании и (или) документа об образовании и о квалификации до 16 августа (включительно)!
              </p>
            </div>
            <div className="mx-auto mt-14 flex max-w-prose text-base lg:max-w-none">
              <div className="rounded-md shadow">
                <a
                  href="/admissions-question"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-sky-600 px-5 py-3 text-base font-medium text-white hover:bg-sky-900"
                >
                  Задать вопрос
                </a>
              </div>
              <div className="ml-4 rounded-md shadow">
               {/* //Кнопка звонок - open */}
    <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {people.map((person) => (
         <li key={person.email} className="col-span-6 divide-y divide-sky-200 rounded-lg bg-sky-900 shadow">
         
          <div>
            <div className="-mt-px flex divide-x divide-gray-200">
              <div className="-ml-px flex w-0 flex-1">
                <a
                  href={`tel:${person.telephone}`}
                  className="-mt-1 relative inline-flex w-1 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4 text-sm font-medium text-white hover:text-green-400"
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
              </div>
            </div>
          </div>
          <div className="relative mx-auto mt-12 max-w-prose text-base lg:mt-0 lg:max-w-none">
            <svg
              className="absolute top-0 right-0 -mt-20 -mr-20 lg:top-auto lg:right-auto lg:bottom-1/2 lg:left-1/2 lg:mt-0 lg:mr-0 xl:top-0 xl:right-0 xl:-mt-20 xl:-mr-20"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="bedc54bc-7371-44a2-a2bc-dc68d819ae60"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={404} height={384} fill="url(#bedc54bc-7371-44a2-a2bc-dc68d819ae60)" />
            </svg>
            <blockquote className="relative rounded-lg bg-white shadow-lg">
              <div className="rounded-t-lg px-6 py-8 sm:px-10 sm:pt-10 sm:pb-8">
                <div className="relative mt-8 text-lg font-medium text-gray-700">
                  <p className="relative">
                    Если у вас возникили вопросы по приемной комиссии, можете связаться с один из наших менеджеров обратной связи
                  </p>
                </div>
              </div>
              <cite className="relative flex items-center rounded-b-lg bg-sky-600 py-5 px-6 not-italic sm:mt-10 sm:items-start sm:py-5 sm:pl-12 sm:pr-10">
                <span className="relative rounded-full border-2 border-white sm:absolute sm:top-0 sm:-translate-y-1/2 sm:transform">
                  <img
                    className="h-22 w-22 rounded-full bg-indigo-300 sm:h-20 sm:w-20"
                    src="/images/staff/Ryabtseva.png"
                    alt=""
                  />
                </span>
                <span className="relative ml-4 font-semibold leading-6 text-sky-900 sm:ml-24 sm:pl-1">
                  <span className="font-semibold text-white sm:inline">Председатель приемной комиссии:</span>{' '}
                  <span className="sm:inline">Рябцева Екатерина Дмитриевна</span>
                </span>
              </cite>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
   </SidebarLayout>
)

export default AdmissionsSchedule
