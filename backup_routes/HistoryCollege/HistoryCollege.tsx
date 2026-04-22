import { FC } from 'react'
import { SidebarLayout } from 'layouts/SidebarLayout'



const HistoryCollege: FC = () => (
   <SidebarLayout>
        <div className="relative bg-white">
      <div className="lg:absolute lg:inset-0">
        <div className="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover lg:absolute lg:h-full"
            src="/images/windows/college-history.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="relative px-4 pt-12 pb-16 sm:px-6 sm:pt-16 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div className="lg:col-start-2 lg:pl-8">
          <div className="mx-auto max-w-prose text-base lg:ml-auto lg:mr-0 lg:max-w-lg">
            <h2 className="font-semibold leading-6 text-sky-600">Подразделение МИИТа</h2>
            <h3 className="mt-2 text-3xl font-bold leading-8 tracking-tight text-sky-900 sm:text-2xl">История колледжа</h3>
            <p className="mt-8 text-sx text-gray-500">
            В начале 60-х годов Главным санитарным управлением Министерства путей сообщения был поставлен вопрос об организации медицинского училища для подготовки кадров среднего медицинского звена с учетом особенностей железнодорожной медицины.
            </p> 
            <div className="prose prose-indigo mt-5 text-gray-500">
              <h3 className="mt-6 text-2xl font-bold leading-8 tracking-tight text-sky-900 sm:text-2xl">Подробнее о колледже МК РУТ (МИИТ)</h3>
              <p className="mt-8 text-sx text-gray-500">
              1 сентября 1962 года было открыто первое медицинское училище железнодорожного транспорта при ЦКБ им. Н.А.Семашко МПС с ежегодным выпуском 60 человек. Оно располагалось в маленьком деревянном здании на территории больницы. Первым директором училища был назначен Соколов С.А.
            </p> 
            <p className="mt-8 text-sx text-gray-500">
            К середине 1985 года небольшое здание на территории больницы сменилось новым кирпичным четырехэтажным корпусом, вместившим кабинеты клинических дисциплин, лекционные аудитории, библиотеку, спортивный и актовый залы.
            </p> 
            <p className="mt-8 text-sx text-gray-500">
            В 2004 году согласно распоряжению МПС РФ «Московский медицинский колледж железнодорожного транспорта» присоединился к Московскому государственному университету путей сообщения в качестве структурного подразделения.
            </p> 
            <p className="mt-8 text-sx text-gray-500">
            В настоящее время Медицинский колледж РУТ (МИИТ) готовит студентов по трем специальностям: 34.02.01 Сестринское дело (очная и очно-заочная формы обучения); 31.02.01 Лечебное дело (очная форма обучения); 31.02.05 Стоматология ортопедическая (очная форма обучения).
            </p> 
            <p className="mt-8 text-sx text-gray-500">
            Выпускники Медицинского колледжа РУТ (МИИТ) по распределению работают в лечебно-профилактических учреждениях города Москвы и Московской области.
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

export default HistoryCollege
