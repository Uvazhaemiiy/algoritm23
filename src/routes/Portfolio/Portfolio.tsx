import { FC } from 'react'
import { SidebarLayout } from 'layouts/SidebarLayout'
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'
import { CloudArrowUpIcon, ServerIcon } from '@heroicons/react/20/solid'



const AdditionalEducation: FC = () => (
   <SidebarLayout>
      <div className="bg-gray-900 pt-16 lg:py-14">
      <div className="bg-gradient-to-t from-slate-800 via-black to-slate-900 pb-16 lg:relative lg:z-10 lg:pb-0">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-8 lg:px-8">
          <div className="relative lg:-my-4 mx-auto">
            <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1/8 bg-white lg:hidden" />
            <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:h-full lg:p-0">
              <div className="aspect-w-10 aspect-h-6 overflow-hidden rounded-xl shadow-xl sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full">
                <img
                  className="object-cover lg:h-full lg:w-full mt-2"
                  src="/images/eleonora.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="mt-12 lg:col-span-2 lg:m-0 lg:pl-8">
            <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-10 lg:py-20">
              <blockquote>
                <div>
                  <svg
                    className="h-12 w-12 text-white opacity-25"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    aria-hidden="true"
                  >
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="mt-6 text-2xl font-medium text-white">
                  ООО «АЛГОРИТМ 23» — это молодая быстро растущая компания по автоматизации учета программных продуктов на платформе 1С.
                  </p>
                </div>
                <footer className="mt-6">
                  <p className="text-base font-bold text-white">Основатель компании: Арутюнян Элеонора Араратовна.</p>
                  <p className="text-base font-medium text-indigo-100 mt-2">Опыт работы внедрения программных продуктов на платформе 1С с 2012 года. Опыт внедрения проектов с бюджетом более 150 млн. рублей федерального уровня с управлением командой внедрения и сопровождения более 40 человек.
Опыт управления бизнесами в сферах торговли, beauty-индустрии, ресторанного бизнеса, строительного бизнеса.</p>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
   {/*   <p className="text-base font-medium text-indigo-100 mt-2">В настоящее время обучается коучу (наставничеству) и бизнес-тренерству по стандартам международной сертификации ICF.
Прошла две ступени развития личности и управления командой. Сейчас проходит третью-лидерскую программу.</p>
                  <p className="text-base font-medium text-indigo-100 mt-2">Сертификаты специалиста1С и БИТ.Финанс, БИТ.Строительство.</p>
                  <p className="text-base font-medium text-indigo-100 mt-2">Диплом с отличием (средний бал 5.0).</p> 
                  <p className="text-base font-medium text-indigo-100 mt-2">За период работы нет ни одного незавершонного проекта и ни одного недовольного Заказчика (можно получить обратную связь по всем компаниям).</p> 
    {/* Blog feed - open */}
    {/* Blog Feed - end */}
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              {/* <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Наши цели</h1> */}
              <p className="mt-0 text-xl leading-8 text-gray-700">
              В настоящее время Элеонора обучается коучингу (наставничеству) и бизнес-тренерству по стандартам международной сертификации ICF. Прошла две ступени развития личности и управления командой. Сейчас проходит третью-лидерскую программу.
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            src="images/eyo2.jpg"
            alt=""
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <p>
              </p>
              <ul className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <CloudArrowUpIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Сертификаты специалиста 1С и БИТ.Финанс, БИТ.Строительство</strong>
                  </span>
                </li>
                {/* <li className="flex gap-x-3">
                  <LockClosedIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Диплом с отличием (средний бал 5.0)</strong> Наша цель - качество
                  </span>
                </li> */}
                <li className="flex gap-x-3">
                  <ServerIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">За период работы нет ни одного незавершенного проекта и ни одного недовольного Заказчика.</strong>
                  </span>
                </li>
              </ul>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Опыт внедрения проектов основателем компании:</h2>
              <p className="mt-6">
              1. ООО "ГК Клевер" (автоматизация бухгалтерского, финансового,
управленческого, оперативного учета) сопровождение внедренного программного продукта БИТ.Финанс + БИТ.Строительство.
Доработка конфигурации по автоматизации всех бизнес-процессов компании.
Администрирование АРМ и оборудования офиса. Сопровождение.
              </p>
              <p className="mt-6">
              2. ООО "Акцент" (автоматизация финансового, управленческого учета) сейчас сопровождение подсистем "Казначейство", "Бюджетирование", "Учет договоров и затрат".
              </p>
              <p className="mt-6">
              3. ООО "УНР Инжиниринг" сопровождение, запущены подсистемы "Подрядчик" и "Снабжение и склад" (ПО БИТ.Строительство) и БИТ.Финанс «Казначейство» и «Бюджетирование».
              </p>
              <p className="mt-6">
              4. ООО "БЕСТСИСТЕМ" внедрение бухгалтерского и управленческого учета.
              </p>
              <p className="mt-6">
              5. ООО "Юго-Запад Сервис" внедрение БИТ.Финанс.
              </p>
              <p className="mt-6">
              6. ООО СК "Вира" внедрение БИТ.Финанс.
              </p>
              <p className="mt-6">
              7. ООО ПСК «Континент» (автоматизация бухгалтерского, финансового, управленческого, оперативного учета, расчета заработной платы и кадров) сопровождение внедренного программного продукта. БИТ.Финанс + БИТ.Строительство.</p><br /><br />

              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Реализованные проекты</h2>
              <p className="mt-6">1.	ООО «УНР Инжиниринг» – внедрение программного продукта БИТ.Финанс (Разработчик компания «Первый БИТ», программа разработана на платформе 1С на конфигурации 1С.Бухгалтерия предприятия ПРОФ.) 
Выполнение работ на проекте: автоматизация финансового учета, в частности подсистем «Казначейство» (контроль движения денежных средств), «Бюджетирование» (контроль доходов и расходов, формирование план-фактного анализа, трансляция данных). Сопровождение внедренной информационной системы. </p>


<p className="mt-6">
2.	ООО «Экохолдинг» - внедрение программного продукта 1С.Управление автотранспортом (Разработчик компания 1С «Рарус»). 
Выполнение работ на проекте: автоматизация учета автотранспорта, в том числе бюджетирование, автоматический расчет заработной платы сотрудников, интеграция с мобильным приложением «Водитель УАТ».  Сопровождение внедренной информационной системы. </p>

<p className="mt-6">
3. ООО «Тетра-М» - внедрение программных продуктов 1С.Бухгалтерия ПРОФ (Разработчик компания «1С»), 1С управление нашей фирмой (Разработчик компания «1С»).  
Выполнение работ на проекте: Настройка ведения бухгалтерского, налогового, финансового и управленческого учета. Настройка синхронизации данных между системами. Сопровождение внедренных информационных систем. </p>

<h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Активные проекты</h2>
<p className="mt-6">ООО «Реконструкция» - внедрение программного продукта БИТ.Финанс+БИТ.Строительство (Разработчик компания «Первый БИТ», программа разработана на платформе 1С на конфигурации 1С.Бухгалтерия предприятия ПРОФ.)
Выполнение работ на проекте: автоматизация финансового учета, в частности подсистем «Казначейство» (контроль движения денежных средств), «Бюджетирование» (контроль доходов и расходов, формирование план-фактного анализа), «Учет договоров и затрат» (контроль документооборота по договорам компании), «Подрядчик» (возможность  ведения учета по строительной специфике: учет ПБУ 2/2008, формирование документов КС-2, КС-3, КС-6, учет незавершенного производства, учет гарантийных удержаний и многое другое).
и «Снабжение и склад» (контроль строительных материалов инструментов на объектах строительства и общих складах компании, согласно заданным сметам). </p>

            </div>
          </div>
        </div>
      </div>
    </div>
   
    <div className="relative bg-white">
      <div className="absolute inset-0">
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50" />
      </div>
      <div className="relative mx-auto max-w-7xl lg:grid lg:grid-cols-5">
        <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
          <div className="mx-auto max-w-lg">
            <h2 className="text-2xl font-bold tracking-tight text-sky-900 sm:text-3xl">Обратная связь</h2>
            <p className="mt-3 text-lg leading-6 text-gray-500">
              Если у Вас возникли вопросы, свяжитесь в нашим менеджером по форме обратной связи или по телефону.
            </p>
            <dl className="mt-8 text-base text-gray-500">
              <div>
                <dt className="sr-only">Postal address</dt>
                <dd>
                  <p></p>
              
                </dd>
              </div>
              <div className="mt-6">
                <dt className="sr-only">Контактный номер</dt>
                <dd className="flex">
                  <PhoneIcon className="h-6 w-6 flex-shrink-0 text-gray-400" aria-hidden="true" />
                  <span className="ml-3">+7 (495) 414-23-53</span>
                </dd>
                <dd className="flex">
                  <PhoneIcon className="h-6 w-6 flex-shrink-0 text-gray-400" aria-hidden="true" />
                  <span className="ml-3">+7 (985) 355-93-69</span>
                </dd>
              </div>
              <div className="mt-3">
                <dt className="sr-only">Email</dt>
                <dd className="flex">
                  <EnvelopeIcon className="h-6 w-6 flex-shrink-0 text-gray-400" aria-hidden="true" />
                  <span className="ml-3">info@algoritm23.net</span>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <div className="bg-gradient-to-t from-slate-800 via-black to-slate-900 py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
          <div className="mx-auto max-w-lg lg:max-w-none">
            <form action="#" method="POST" className="grid grid-cols-1 gap-y-6">
              <div>
                <label htmlFor="full-name" className="sr-only">
                  Ф.И.О.
                </label>
                <input
                  type="text"
                  name="full-name"
                  id="full-name"
                  autoComplete="name"
                  className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="Ф.И.О."
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="Ваш Email"
                />
              </div>
              <div>
                <label htmlFor="phone" className="sr-only">
                  Телефон
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  autoComplete="tel"
                  className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="Контактный номер"
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">
                  Написать сообщение
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="Написать сообщение"
                  defaultValue={''}
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="inline-flex justify-center rounded-md border border-transparent bg-gray-600 py-3 px-6 text-base font-medium text-white shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Отправить
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
   </SidebarLayout>
)

export default AdditionalEducation
