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

const HealthProtection: FC = () => (
   <SidebarLayout>
     <main className="relative lg:min-h-full">
        <div className="h-80 overflow-hidden lg:absolute lg:w-1/2 lg:h-full lg:pr-4 xl:pr-12">
          <img
            src="/images/windows/workers-health.jpg"
            alt="Проведения предрейсовых медосмотров водителей автотранспортных средств"
            className="h-full w-full object-center object-cover"
          />
        </div>
        <div>
          <div className="max-w-2xl mx-auto py-16 px-4 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 lg:py-32 lg:grid lg:grid-cols-2 lg:gap-x-8 xl:gap-x-24">
            <div className="lg:col-start-2">
              <p className="mt-2 text-2xl font-bold tracking-tight text-sky-900 sm:text-3xl">Охрана здоровья работников промышленных и других предприятий</p>
              <p className="mt-4 text-sx text-sky-900">
              Программа повышения профессионализма имеющейся квалификации.
              </p>
              <p className="mt-2 text-sm text-gray-800">
              - Программа предусматривает обучение медицинских работников, осуществляющих профессиональную деятельность амбулаторно и 
              вне медицинской организации, в экстренной, неотложной и плановой формах оказания медицинской помощи, работая в должности 
              фельдшера.                               
              </p>
              <p className="mt-4 text-sx text-sky-900">
              Должностные обязанности.
              </p>
              <p className="mt-2 text-sm text-gray-800">
               - Осуществляет оказание лечебно-профилактической и санитарно-профилактической помощи, первой неотложной медицинской помощи при острых заболеваниях и несчастных случаях. 
               Диагностирует типичные случаи наиболее часто встречающихся заболеваний и назначает лечение, используя при этом современные методы терапии и профилактики заболеваний, 
               выписывает рецепты. Оказывает доврачебную помощь, ассистирует врачу при операциях и сложных процедурах, принимает нормальные роды. 
               Осуществляет текущий санитарный надзор, организует и проводит противоэпидемические мероприятия. Организует и проводит диспансерное наблюдение за различными группами населения 
               (дети; подростки; беременные женщины; участники и инвалиды войн; пациенты, перенесшие острые заболевания; пациенты, страдающие хроническими заболеваниями). Организует и проводит
                профилактические прививки детям и взрослым. Осуществляет экспертизу временной нетрудоспособности. Обеспечивает хранение, учет и списание лекарственных препаратов, соблюдение правил 
                приема лекарственных препаратов пациентами. Ведет медицинскую учетно-отчетную документацию. Проводит санитарно-просветительную работу среди больных и их родственников по укреплению 
                здоровья и профилактике заболеваний, пропаганде здорового образа жизни.</p>
                <p className="mt-2 text-sm text-gray-800">
                - Должен знать: законы и иные нормативные правовые акты Российской Федерации в сфере здравоохранения; структуру, основные аспекты деятельности медицинских организаций; 
               статистику состояния здоровья обслуживаемого населения; правила эксплуатации медицинского инструмента и оборудования; медицинскую этику; психологию профессионального общения;
                основы диспансеризации; основы медицины катастроф; основы трудового законодательства; правила внутреннего трудового распорядка; правила по охране труда и пожарной безопасности. </p>
              <p className="mt-4 text-sx text-sky-900">
              Требования к квалификации.    
              </p>
              <p className="mt-2 text-sm text-gray-800">
              Среднее профессиональное образование по специальности "Лечебное дело" и сертификат специалиста по специальности "Лечебное дело".</p>
                <p className="mt-2 text-sm text-gray-800">
                Учебный план программы усовершенствования включает универсальные модули «Основы сестринского дела» и «Медицина катастроф и реанимация», в которых освещаются вопросы  организации и реформы здравоохранения, 
                теоретические основы организации фельдшерского  здравпункта и осуществления первичной медико-санитарной помощи, внедрение информационных технологий в здравоохранение  и специальный раздел, соответствующий виду 
                профессиональной деятельности специалиста и рассматривающие вопросы организации работы фельдшера здравпункта промышленного предприятия. </p>
              <p className="mt-2 text-sm text-gray-600">
              <p className="mt-2 text-sm text-gray-800">
              Обучение по программе проводится по очной форме (с отрывом от  работы).</p>
              </p>
              <p className="mt-12 text-base text-sky-900">
              <li>Форма обучения: очная.</li>
              <li>Трудоемкость программы: 144 часа.</li>
              <li>Теоретическая подготовка: 34 часа.</li>
              <li>Практическая подготовка: 102 часа.</li>
              <li>Итоговая аттестация: 8 часа.</li>
              <li>Сроки освоения программы:  18 календарных дней.</li>
              <li>Режим занятий: 36 учебных часов в неделю.</li>
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
                <a href="/additional-education" className="text-sm font-medium text-sky-600 hover:text-indigo-500">
                  Вернуться к списку квалификации <span aria-hidden="true"> &rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
   </SidebarLayout>
)

export default HealthProtection
