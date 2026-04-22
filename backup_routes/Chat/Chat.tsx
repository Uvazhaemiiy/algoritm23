import { FC } from 'react'
import { SidebarLayout } from 'layouts/SidebarLayout'
import { CheckCircleIcon, InformationCircleIcon } from '@heroicons/react/20/solid'



const stats = [
  { label: 'Founded', value: '2021' },
  { label: 'Employees', value: '37' },
  { label: 'Countries', value: '12' },
  { label: 'Raised', value: '$25M' },
]


const Chat: FC = () => (
   <SidebarLayout>
     <div className="bg-gray-950 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-4">
            <div className="relative overflow-hidden rounded-3xl bg-gray-900 px-6 pb-9 pt-64 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10">
              <img
                className="absolute inset-0 h-full w-full object-cover brightness-125 saturate-0"
                src="/images/windows-daiquiri/r2-oniline-chat.jpg"
                alt=""
              />
              <div className="absolute inset-0 bg-white mix-blend-multiply" />
              <div
                className="absolute left-1/2 top-1/2 -ml-16 -translate-x-1/2 -translate-y-1/2 transform-gpu blur-3xl"
                aria-hidden="true"
              >
                <div
                  className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#050505] to-[#776fff] opacity-40"
                  style={{
                    clipPath:
                      'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                  }}
                />
              </div>
              <figure className="relative isolate">
                <blockquote className="mt-6 text-xl font-semibold leading-12 text-green-500">
                  <p>
                  Чат - удобный инструмент для общения.
                  </p>
                </blockquote>
              </figure>
            </div>
          </div>
          <div>
            <div className="text-base leading-7 text-white lg:max-w-lg">
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-red-600 sm:text-4xl">
              Чат
              </h1>
              <p className="text-base font-semibold leading-7 text-indigo-600">Типы чата</p>
              <div className="mt-10 max-w-2xl">
          <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
          <figcaption className="mt-4 flex gap-x-2 text-xl leading-6 text-gray-500">
            <InformationCircleIcon className="mt-0.5 h-5 w-5 flex-none text-gray-300" aria-hidden="true" />
            Покупка предметов в торговой лавке
          </figcaption>
            <li className="flex gap-x-3">
              <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-green-500" aria-hidden="true" />
              <span>
                <strong className="font-semibold text-white">1. Диалог с NPC в торговой лавке. Наведите курсор на персонажа, продающего предметы, и нажмите левую кнопку мыши.</strong> 
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-red-900" aria-hidden="true" />
              <span>
                <strong className="font-semibold text-white">2. Наведите курсор на интересующий вас предмет и нажмите правую кнопку мыши. Появится окно в вода количества предметов.</strong> 
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-red-900" aria-hidden="true" />
              <span>
                <strong className="font-semibold text-white">3. Введите нужное количество предметов, используя кнопки с цифрами в окне в вода, или клавиатуру.</strong> 
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-red-900" aria-hidden="true" />
              <span>
                <strong className="font-semibold text-white">4. Нажмите на кнопку "Ввод".</strong> 
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-red-900" aria-hidden="true" />
              <span>
                <strong className="font-semibold text-white">5. Итак, в список покупок в торговой лавке добавился предмет.</strong> 
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-red-900" aria-hidden="true" />
              <span>
                <strong className="font-semibold text-white">6. Теперь, если нажать кнопку "Купить", требуемая сумма серебра спишется с вашего счета, а в инвентаре появится купленный предмет.</strong> 
              </span>
            </li>
          </ul>
        </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-950 px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
        <p className="text-base font-semibold leading-7 text-white">R2:Online</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-red-600 sm:text-4xl">Использование торговой лавки</h1>
        <div className="mt-10 max-w-2xl">
          <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
          <figcaption className="mt-4 flex gap-x-2 text-xl leading-6 text-gray-500">
            <InformationCircleIcon className="mt-0.5 h-5 w-5 flex-none text-gray-300" aria-hidden="true" />
            Покупка предметов в торговой лавке
          </figcaption>
            <li className="flex gap-x-3">
              <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-red-900" aria-hidden="true" />
              <span>
                <strong className="font-semibold text-white">1. Диалог с NPC в торговой лавке. Наведите курсор на персонажа, продающего предметы, и нажмите левую кнопку мыши.</strong> 
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-red-900" aria-hidden="true" />
              <span>
                <strong className="font-semibold text-white">2. Наведите курсор на интересующий вас предмет и нажмите правую кнопку мыши. Появится окно в вода количества предметов.</strong> 
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-red-900" aria-hidden="true" />
              <span>
                <strong className="font-semibold text-white">3. Введите нужное количество предметов, используя кнопки с цифрами в окне в вода, или клавиатуру.</strong> 
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-red-900" aria-hidden="true" />
              <span>
                <strong className="font-semibold text-white">4. Нажмите на кнопку "Ввод".</strong> 
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-red-900" aria-hidden="true" />
              <span>
                <strong className="font-semibold text-white">5. Итак, в список покупок в торговой лавке добавился предмет.</strong> 
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-red-900" aria-hidden="true" />
              <span>
                <strong className="font-semibold text-white">6. Теперь, если нажать кнопку "Купить", требуемая сумма серебра спишется с вашего счета, а в инвентаре появится купленный предмет.</strong> 
              </span>
            </li>
          </ul>
        </div>
        <figure className="mt-16">
          <img
            className="aspect-video rounded-xl bg-gray-50 object-cover"
            src="/images/mechanics-r2/r2online-trade.png"
            alt=""
          />
          <figcaption className="mt-4 flex gap-x-2 text-sm leading-6 text-gray-500">
            <InformationCircleIcon className="mt-0.5 h-5 w-5 flex-none text-gray-300" aria-hidden="true" />
            Познай легендарный мир и найди друзей!
          </figcaption>
        </figure>
      </div>
    </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <p className="text-base font-semibold leading-7 text-indigo-600">Deploy faster</p>
          <div className="mt-10 grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-white lg:max-w-none lg:grid-cols-2">
            <div>
              <p>
              4. Гильдия Чат пильдии могут видеть только члены этой гильди.
              </p>
           <div className="relative overflow-hidden pt-16 lg:pt-20">
             <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <img
            className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"
            src="https://tailwindui.com/img/component-images/project-app-screenshot.png"
            alt=""
              />
             <div className="relative" aria-hidden="true">
             <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-white pt-[7%]" />
             </div>
            </div>
           </div>
              <p className="mt-8">
              5. Торговый В торговом чате удобно общаться с потенциальными продавцами или покупателями различных предметов.
              </p>
            </div>
            <div>
              <p>
              6. Союз Чат, предназначенный для общения членов пильдий, состоящих в одном союзе. Другие игроки не видят этих сообщений.
              </p>
              <div className="relative overflow-hidden pt-16 lg:pt-20">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
             <img
            className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"
            src="https://tailwindui.com/img/component-images/project-app-screenshot.png"
            alt=""
                />
             <div className="relative" aria-hidden="true">
             <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-white pt-[7%]" />
             </div>
             </div>
            </div>
              <p className="mt-8">
              7. Отряд Только вы и члены вашей группы можете общаться в этом чате. Это позволяет лучше координировать свои действия.

              <p className="text-base font-semibold leading-7">Команды чата</p>
              <p>	& - общий чат</p>
              <p>	# - чат групы</p>
              <p>	- чат гильдии</p>
              <p>	+ - чат союза</p>
              <p>	$ - торговый чат</p>
              <p>	"ник персонажа - личные сообщения</p>
              <p>Команды главы гильдии</p>
              <p>	прозвище ник персонажа прозвище персонажа- лава гильдии устанавливает себе прозвище</p>
              <p>	/изгнать ник персонажа - исключение члена гильдии /распустить - расформирование гильди</p>
              <p>Другие команды:</p>
              <p>	/группа - окно настроек группы </p>
              <p> /пригласить ник персонажа - прилашение в группу</p>
              <p> /исключить ник персонажа - исключение из группы друзья - окно списка друзей дружба ник персонажа - внести персонажа в список друзей </p>
              <p>/удалить ник персонажа - удалить персонажа из списка друзей</p>
              <p>/гильдия вкл (выкл) - отображение над членом гильдии названия гильдии покинуть - выйти из гильдии </p>
              <p>/союз вкл (выкл) - отображение над сленами союза названия союза</p>
              <p>/кто ник персонажа - основная информация о персонаже /время вкл (выкл) - часы в верхней части экрана</p>
              <p>/авто вкл (выкл) - автоматическая атака противника (без клавиши ctrl) /слезть - спешиться с ездового дракона /поворот- персонаж разворачивается в определенном направлении</p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
   </SidebarLayout>
)

export default Chat

