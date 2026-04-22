import { FC } from 'react'
import { SidebarLayout } from 'layouts/SidebarLayout'
import { PhoneIcon } from '@heroicons/react/20/solid'

const people = [
   {
     email: 'janecooper@example.com',
     telephone: '+7-499-187-84-74',
   },
]   

const LaboratoryDiagnostics: FC = () => (
   <SidebarLayout>
       <main className="relative lg:min-h-full">
        <div className="h-80 overflow-hidden lg:absolute lg:w-1/2 lg:h-full lg:pr-4 xl:pr-12">
          <img
            src="/images/windows/clinical-researches.jpg"
            alt="Проведения предрейсовых медосмотров водителей автотранспортных средств"
            className="h-full w-full object-center object-cover"
          />
        </div>
        <div>
          <div className="max-w-2xl mx-auto py-16 px-4 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 lg:py-32 lg:grid lg:grid-cols-2 lg:gap-x-8 xl:gap-x-24">
            <div className="lg:col-start-2">
              <p className="mt-2 text-2xl font-bold tracking-tight text-sky-900 sm:text-3xl">Современные методы клинических исследований в лабораторной диагностике</p>
              <p className="mt-4 text-xl text-gray-800">
              Программа повышения профессионализма имеющейся  квалификации
              </p>
              <p className="mt-4 text-sx text-gray-800">
              1. Проведение общеклинических исследований биологических  материалов.
              </p>
              <p className="mt-2 text-sm text-gray-600">
              <li>1.1. Подготовка рабочего места для проведения общеклинических исследований в лаборатории.</li>
              <li>1.2. Проведение регистрации результатов лабораторных общеклинических исследований, участие в контроле качества. </li>
              <li>1.3. Утилизация отработанного материала, дезинфекция и стерилизация использованной лабораторной посуды, инструментария, средства защиты.</li>
              </p>
              <p className="mt-4 text-sx text-gray-800">
              2. Проведение гематологических исследований в лаборатории.
              </p>
              <p className="mt-2 text-sm text-gray-600">
              <li>2.1. Подготовка рабочего места для проведения гематологических исследований в лаборатории.</li>
              <li>2.2. Проведение забора  капиллярной крови. </li>
              <li>2.3 Проведение общего анализа крови и дополнительного гематологического исследования; участие в контроле качества. </li>
              <li>2.4. Проведение регистрации полученных результатов.</li>
              <li>2.5. Утилизация капиллярной и венозной крови, дезинфекция и стерилизация использованной лабораторной посуды, инструментария, средства защиты.</li>
              </p>
              <p className="mt-4 text-sx text-gray-800">
              3. Проведение биохимических исследований в лаборатории.
              </p>
              <p className="mt-2 text-sm text-gray-600">
              <li>3.1. Подготовка рабочего места для проведения лабораторных биохимических исследований.</li>
              <li>3.2. Проведение лабораторные биохимические исследования биологических материалов; участие в контроле качества.</li>
              <li>3.3. Проведение регистрации результатов биохимических исследований в лаборатории.</li>
              <li>3.4. Утилизация отработанного материала, дезинфекция и стерилизация использованной лабораторной посуды, инструментария, средства защиты.</li>
              </p>
              <p className="mt-4 text-sx text-gray-800">
              4. Проведение микробиологических и иммунологических исследований в лаборатории. 
              </p>
              <p className="mt-2 text-sm text-gray-600">
              <li>4.1.  Подготовка рабочего места для проведения лабораторных микробиологических и иммунологических исследований.</li>
              <li>4.2. Проведение лабораторных микробиологических и иммунологических исследований биологических материалов, проб объектов внешней среды и пищевых продуктов, участие в контроле качества. </li>
              <li>4.3. Проведение регистрации результатов проведенных исследований.</li>
              <li>4.4. Утилизация капиллярной и венозной крови, дезинфекция и стерилизация использованной лабораторной посуды, инструментария, средства защиты.</li>
              </p>
              <p className="mt-4 text-sx text-gray-800">
              5. Проведение гистологических исследований в лаборатории. 
              </p>
              <p className="mt-2 text-sm text-gray-600">
              <li>5.1. Готовить рабочее место для проведения лабораторных гистологических исследований.</li>
              <li>5.2. Готовить препараты для лабораторных гистологических исследований биологических материалов и оценивать их качество. </li>
              <li>5.3. Проведение регистрации результатов гистологических исследований.</li>
              <li>5.4. Проводить утилизацию капиллярной и венозной крови, дезинфекцию и стерилизацию использованной лабораторной посуды, инструментария, средств защиты.</li>
              <li>5.5. Определение в архив материал, оставшийся после исследования.</li>
              </p>
              <p className="mt-4 text-sx text-gray-800">
              6. Проведение санитарно-гигиенические исследования в лаборатории.
              </p>
              <p className="mt-2 text-sm text-gray-600">
              <li>6.1.  Подготовка рабочего места для проведения санитарно-гигиенических исследований в лаборатории.</li>
              <li>6.2. Проведение отбора проб объектов внешней среды и продуктов питания.</li>
              <li>6.3. Проведение регистрации результатов санитарно-гигиенических исследований.</li>
              <li>6.4. Утилизация капиллярной и венозной крови, дезинфекция и стерилизация использованной лабораторной посуды, инструментария, средства защиты.</li>
              </p>
              <p className="mt-12 text-base text-sky-900">
              <li>Категория слушателей: лаборант, фельдшер-лаборант</li>
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

export default LaboratoryDiagnostics
