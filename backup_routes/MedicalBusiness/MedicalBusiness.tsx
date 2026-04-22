import { FC } from 'react'
import { SidebarLayout } from 'layouts/SidebarLayout'




const MedicalBusiness: FC = () => (
   <SidebarLayout>
         <div className="relative bg-white">
      <div className="lg:absolute lg:inset-0">
        <div className="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover lg:absolute lg:h-full"
            src="/images/windows/medical-business.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="relative px-4 pt-12 pb-16 sm:px-6 sm:pt-16 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div className="lg:col-start-2 lg:pl-8">
          <div className="mx-auto max-w-prose text-base lg:ml-auto lg:mr-0 lg:max-w-lg">
            <h2 className="font-semibold leading-6 text-sky-600">Узнать о профессии</h2>
            <h3 className="mt-2 text-3xl font-bold leading-8 tracking-tight text-sky-900 sm:text-2xl">Лечебное дело</h3>
            <p className="mt-8 text-sx text-gray-500">
            В Медицинском колледже РУТ (МИИТ) осуществляется обучение по специальности 31.02.01 Лечебное дело на базе среднего общего образования (11 классов).</p> 
            <div className="prose prose-indigo mt-5 text-gray-500">
              <ul role="list">
                <li>- Форма обучения: очная</li>
                <li>- Направление подготовки: углубленная</li>
                <li>- Срок обучения: 3 года 10 месяцев</li>
                <li>- Квалификация: Фельдшер</li>
                <li>- Возможные варианты работы: фельдшерско-акушерским пункты, здравпункты, скорая помощь; фельдшером терапевтического и педиатрического участков; инструктором лечебной физкультуры.</li>
              </ul>
              <h3 className="mt-6 text-2xl font-bold leading-8 tracking-tight text-sky-900 sm:text-2xl">Фельдшера – всегда придут на помощь.</h3>
              <p className="mt-8 text-sx text-gray-500">
              Фельдшер — это первый человек, который приходит на помощь пациенту. Именно он должен оказывать неотложную помощь и спасать человека. И оттого, насколько он профессионален, зависит жизнь пациента.
            </p> 
            <p className="mt-8 text-sx text-gray-500">
            В настоящее время фельдшер является специалистом-универсалом, который должен обладать широким перечнем компетенций, уникальными личными качествами, знаниями и умениями из разных областей
             медицины и владеть многими практическими навыками. Ответственность, организованность, способность концентрироваться и эффективно действовать в кризисной ситуации, собранность, выносливость, стрессоустойчивость,
              хорошая память, логическое мышление, общительность и доброжелательность являются незаменимыми личными качествами, необходимыми для выполнения роли современного фельдшера.</p> 
            <p className="mt-8 text-sx text-gray-500">
            В Медицинском колледже РУТ (МИИТ) студенты специальности 31.02.01 Лечебное дело в процессе обучения приобретают необходимые знания, умения и компетенции, а также уникальные практические навыки и опыт работы, что делает их востребованными среди работодателей.
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

export default MedicalBusiness
