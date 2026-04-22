import { FC } from 'react'
import { SidebarLayout } from 'layouts/SidebarLayout'
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'




const Battle: FC = () => (
   <SidebarLayout>
      <div className="bg-gray-950 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <p className="text-base font-semibold leading-7 text-white">R2:Online</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-red-600 sm:text-4xl">Битвы</h1>
          <div className="mt-10 grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-white lg:max-w-none lg:grid-cols-2">
            <div>
            <p className="text-bg text-red-600">
              1. Выбор цели и атака
              </p>
           <div className="relative overflow-hidden pt-16 lg:pt-20">
             <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <img
            className="mb-[1%] rounded-xl shadow-2xl ring-1 ring-gray-900/10 h-40 w-max"
            src="/images/mechanics-r2/r2online-battle.png"
            alt=""
              />
             <div className="relative" aria-hidden="true">
             <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-white pt-[7%]" />
             </div>
            </div>
           </div>
              <p className="mt-8">
              При наведении курсора на противника, курсор изменяется на меч. Если после этого нажать левую кнопку мыши, края силуэта монстра станут красными, и начнется атака.
              </p>
            </div>
            <div>
            <p className="text-bg text-red-600">
              2. Атака с использованием жезла и книги заклинаний
              </p>
              <div className="relative overflow-hidden pt-16 lg:pt-20">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
             <img
            className="mb-[1%] rounded-xl shadow-2xl ring-1 ring-gray-900/10 h-40 w-max"
            src="/images/mechanics-r2/r2online-battle1.png"
            alt=""
                />
             <div className="relative" aria-hidden="true">
             <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-white pt-[7%]" />
             </div>
             </div>
            </div>
              <p className="mt-8">
              Если дважды щелкнуть мышью на магической книге или жезле в инвентаре, то курсор мыши изменится. 
              Если при этом навести курсор на противника и нажать левую кнопку мыши, начнется атака с использованием магии или жезла.
              Этот вид атаки можно использовать гораздо проще, если поместить необходимый предмет на панель быстрого доступа.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div> 
   </SidebarLayout>
)

export default Battle
