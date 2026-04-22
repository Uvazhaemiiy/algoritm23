import { FC } from 'react'
import { SidebarLayout } from 'layouts/SidebarLayout'
import { InformationCircleIcon, LockClosedIcon, ServerIcon, ExclamationCircleIcon} from '@heroicons/react/20/solid'




const ControlsHotkeys: FC = () => (
   <SidebarLayout>
     <div className="relative bg-gray-950">
      <div className="mx-auto max-w-7xl lg:flex lg:justify-between lg:px-8 xl:justify-end">
        <div className="lg:flex lg:w-1/2 lg:shrink lg:grow-0 xl:absolute xl:inset-y-0 xl:right-1/2 xl:w-1/2">
          <div className="relative h-80 lg:-ml-8 lg:h-auto lg:w-full lg:grow xl:ml-0">
            <img
              className="absolute inset-0 h-full w-full bg-gray-50 object-cover border"
              src="/images/mechanics-r2/r2online-control.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="px-6 lg:contents">
          <div className="mx-auto max-w-2xl pb-24 pt-16 sm:pb-32 sm:pt-20 lg:ml-8 lg:mr-0 lg:w-full lg:max-w-lg lg:flex-none lg:pt-32 xl:w-1/2">
            <p className="text-base font-semibold leading-7 text-white">R2:Online</p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-red-600 sm:text-4xl">Горячие клавиши и управление</h1>
            <p className="mt-6 text-xl leading-8 text-white">   Горячие клавиши и управление в игре R2:Online </p>
            <div className="mt-10 max-w-xl text-base leading-7 text-gray-700 lg:max-w-none">
              <ul role="list" className="mt-8 space-y-8 text-white">
                <li className="flex gap-x-3">
                  <InformationCircleIcon className="mt-1 h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-red-600">R:</strong> -  автоматический бег
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <InformationCircleIcon className="mt-1 h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-red-600">E:</strong> - поднять предмет
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <InformationCircleIcon className="mt-1 h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-red-600">С:</strong> - окно сообществ
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <InformationCircleIcon className="mt-1 h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-red-600">К:</strong> - окно умений
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <InformationCircleIcon className="mt-1 h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-red-600">М:</strong> - карта мира
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <InformationCircleIcon className="mt-1 h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-red-600">Space:</strong> - прыжок
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <InformationCircleIcon className="mt-1 h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-red-600">Enter:</strong> - использование окна чата
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <InformationCircleIcon className="mt-1 h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-red-600">Alt+G:</strong> - скрыть игровой интерфейс
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <InformationCircleIcon className="mt-1 h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-red-600">Ctrl:</strong> - режим автоматической атаки (режим PK)
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <InformationCircleIcon className="mt-1 h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-red-600">ТАВ или I:</strong> - инвентарь
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <InformationCircleIcon className="mt-1 h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-red-600">F10, F11, F12:</strong>- расширение панели быстрого доступа
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <InformationCircleIcon className="mt-1 h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-red-600">F1~F8(Shitt+F1~F8):</strong> - панель быстрого доступа
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <InformationCircleIcon className="mt-1 h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-red-600">Print screen:</strong> - скриншот
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <InformationCircleIcon className="mt-1 h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-red-600">N:</strong> окно группы расширение панели быстрого доступа
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <InformationCircleIcon className="mt-1 h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-red-600">Зажать и вращать колесо мыши:</strong> - поворот экрана
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <InformationCircleIcon className="mt-1 h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-red-600">Shift+:</strong> - смена ячеек быстрого доступа
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <InformationCircleIcon className="mt-1 h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-red-600">ЛКМ:</strong> - перемещение/атака
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <InformationCircleIcon className="mt-1 h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-red-600">L:</strong> журнал заданий
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <InformationCircleIcon className="mt-1 h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-red-600">Колесо мыши:</strong> приближение/удаление
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <InformationCircleIcon className="mt-1 h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-red-600">Z: </strong> окно призыва (только для призывателей)
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <InformationCircleIcon className="mt-1 h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-red-600">ПКМ:</strong> - поворот экрана
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <InformationCircleIcon className="mt-1 h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-red-600">Q:</strong> - ячейка экстренного использования
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <InformationCircleIcon className="mt-1 h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-red-600">J:</strong> - окно крафта
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <InformationCircleIcon className="mt-1 h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-red-600">P:</strong> - окно личной торговой лавки
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <InformationCircleIcon className="mt-1 h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-red-600">H:</strong> - индикатор HP
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <InformationCircleIcon className="mt-1 h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-red-600">,:</strong> - изменение размера мини-карты
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <InformationCircleIcon className="mt-1 h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-red-600">Т:</strong> - окно временных предметов
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <InformationCircleIcon className="mt-1 h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-red-600">В:</strong> - игровой магазин
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <InformationCircleIcon className="mt-1 h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-red-600">Y:</strong> - окно редупликации
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
   </SidebarLayout>
)

export default ControlsHotkeys
