import { FC } from 'react'
import { SidebarLayout } from 'layouts/SidebarLayout'




const OrthopedicDentistry: FC = () => (
   <SidebarLayout>
       <div className="relative bg-white">
      <div className="lg:absolute lg:inset-0">
        <div className="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover lg:absolute lg:h-full"
            src="/images/windows/orthopedic-dentistry.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="relative px-4 pt-12 pb-16 sm:px-6 sm:pt-16 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div className="lg:col-start-2 lg:pl-8">
          <div className="mx-auto max-w-prose text-base lg:ml-auto lg:mr-0 lg:max-w-lg">
            <h2 className="font-semibold leading-6 text-sky-600">Узнать о профессии</h2>
            <h3 className="mt-2 text-3xl font-bold leading-8 tracking-tight text-sky-900 sm:text-2xl">Стоматология ортопедическая</h3>
            <p className="mt-8 text-sx text-gray-500">
            В Медицинском колледже РУТ (МИИТ) осуществляется обучение по специальности 31.02.05 Стоматология ортопедическая на базе среднего образования (11 классов).
            </p> 
            <div className="prose prose-indigo mt-5 text-gray-500">
              <ul role="list">
                <li>- Форма обучения: очная</li>
                <li>- Направление подготовки: базовая</li>
                <li>- Срок обучения: 2 года 10 месяцев</li>
                <li>- Квалификация: Зубной техник</li>
                <li>- Возможные варианты работы: зубной техник в стоматологических клиниках, поликлиниках, медицинских центрах и зуботехнических лабораториях.</li>
              </ul>
              <h3 className="mt-6 text-2xl font-bold leading-8 tracking-tight text-sky-900 sm:text-2xl">Внешность – это наша визитная карточка.</h3>
              <p className="mt-8 text-sx text-gray-500">
              От того, как выглядит человек, часто зависит его успех в обществе. Одна из составляющих безупречного облика – белоснежный ряд ровных зубов, именно поэтому каждый человек стремится к тому, чтобы его зубы были в порядке. Вернуть пациенту красивую улыбку – это непростое и очень ответственное дело. И выполняют столь ответственную работу мастера своего дела – зубные техники.
            </p> 
            <p className="mt-8 text-sx text-gray-500">
            Зубной техник реализует идеи по протезированию зубов совместно с врачом и пациентом. Именно качество работы зубного техника на две трети определяет успех протезирования.
            </p> 
            <p className="mt-8 text-sx text-gray-500">
            Профессия зубного техника – это специалист широкого профиля, занимается тем, что изготавливает съёмные пластиночные протезы, бюгельные дуговые протезы, мостовидные протезы и коронки, штифтовые зубы, вкладки, виниры. Также владеет навыками изготовления челюстно-лицевыми и ортодонтическими аппаратами.
            </p> 
            <p className="mt-8 text-sx text-gray-500">
            Отделение построено по принципу зуботехнической лаборатории поликлиники и состоит из основных аудиторий- оснащенных зуботехническими столами, полировочной и гипсовочной лабораториями, а также просторными лекционными аудиториями.
            </p> 
            <p className="mt-8 text-sx text-gray-500">
            При обучении уделяется особое внимание мануальным навыкам студентов, ведь от этого зависит их дальнейшее трудоустройство и успешность как специалистов.
            </p> 
            <p className="mt-8 text-sx text-gray-500">
            Работа зубного техника требует точности и внимательности, пространственного мышления.
            </p> 
            <p className="mt-8 text-sx text-gray-500">
            Востребованный зубной техник – это симбиоз аккуратности, усидчивости, спокойствия и творческого подхода к работе.
            </p> 
            <p className="mt-8 text-sx text-gray-500">
            Наш Медицинский колледж РУТ (МИИТ) видит свою задачу в том, чтобы студенты отделения 31.02.05. Стоматология ортопедическая приобрели фундаментальные знания, все необходимые компетенции, практический опыт, что позволит им быть востребованными на современном рынке труда.
            </p> 


              <ul role="list">
                <li className='mt-4'> <a href="/request" className="font-medium text-sky-600 hover:text-sky-900">Подать заявление на поступление</a> </li>
              </ul>
            </div>
          </div>
          </div>
        </div>
      </div>
   </SidebarLayout>
)

export default OrthopedicDentistry
