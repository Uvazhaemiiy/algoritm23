import { FC } from 'react'
import { SidebarLayout } from 'layouts/SidebarLayout'
import { CameraIcon } from '@heroicons/react/20/solid'




const OpenDays: FC = () => (
   <SidebarLayout>
      <div className="overflow-hidden bg-white">
      <div className="relative mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
        <div className="absolute top-0 bottom-0 left-3/4 hidden w-screen bg-gray-50 lg:block" />
        <div className="mx-auto max-w-prose text-base lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-8">
          <div>
            <h2 className="text-lg font-semibold text-sky-600">День открытых дверей в онлайн формате</h2>
            <h3 className="mt-2 text-3xl font-bold leading-8 tracking-tight text-sky-900 sm:text-4xl">«День открытых дверей»</h3>
          </div>
        </div>
        <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="relative lg:col-start-2 lg:row-start-1">
            <svg
              className="absolute top-0 right-0 -mt-20 -mr-20 hidden lg:block"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={404} height={384} fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)" />
            </svg>
            <div className="relative mx-auto max-w-prose text-base lg:max-w-none">
              <figure>
                <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                  <img
                    className="rounded-lg object-cover object-center shadow-lg"
                    src="/images/windows/openday.jpg"
                    alt="Whitney leaning against a railing on a downtown street"
                    width={1184}
                    height={1376}
                  />
                </div>
                <figcaption className="mt-3 flex text-sm text-gray-500">
                  <CameraIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                  <span className="ml-2">Медицинский Колледж РУТ (МИИТ)</span>
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="mt-8 lg:mt-0">
            <div className="mx-auto max-w-prose text-base lg:max-w-none">
              <p className="text-lg text-gray-500">
              Каждый третий четверг месяца в 15:00 в Медицинском колледже РУТ (МИИТ) проходит «День открытых дверей».
              </p>
            </div>
            <div className="prose prose-indigo mx-auto mt-5 text-gray-500 lg:col-start-1 lg:row-start-1 lg:max-w-none">
              <p>
              Мероприятие проходит в online-режиме на платформе Discord
              </p>
              <p>
              Для участия в мероприятии необходимо:
              </p>
              <ul className="mt-2" role="list">
                <li className="mt-2" >1. <a href="https://discord.com/" className="font-medium text-sky-600 hover:text-sky-900">Скачать приложение Discord </a> или открыть Discord в браузере ПК по ссылке: https://discord.com/</li>
                <li className="mt-2" >2. Зарегистрироваться на платформе Discord.</li>
                <li className="mt-2" >3. В назначенный день и дату подключится на канал по ссылке:<a href="https://discord.com/invite/5sjfWB2" className="font-medium text-sky-600 hover:text-sky-900">https://discord.com/invite/5sjfWB2 </a> </li>
                <li className="mt-2" >4. Зайти в текстовый и голосовой чат «День открытых дверей».</li>
              </ul>
              <p className="mt-4" >
              Организатор мероприятия - Назаренко Наталия Валерьевна, педагог-психолог Медицинского Колледжа РУТ (МИИТ).
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
   </SidebarLayout>
)

export default OpenDays
