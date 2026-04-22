import { FC } from 'react'
import { SidebarLayout } from 'layouts/SidebarLayout'
import { CheckCircleIcon, InformationCircleIcon } from '@heroicons/react/20/solid'




const UsingShop: FC = () => (
   <SidebarLayout>
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
            <img
            className="rounded-xl h-96 w-max grid grid-cols-3 gap-4 content-center	"
            src="/images/mechanics-r2/r2online-usingshop.png"
            alt=""
              />
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
          <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
          <figcaption className="mt-4 flex gap-x-2 text-xl leading-6 text-gray-500">
            <InformationCircleIcon className="mt-0.5 h-5 w-5 flex-none text-gray-300 text-bg" aria-hidden="true" />
            Продажа предметов в торговой лавке
          </figcaption>
            <li className="flex gap-x-3">
              <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-red-900" aria-hidden="true" />
              <span>
                <strong className="font-semibold text-white">Во время продажи предметов в торговой лавке продажа происходит таким же образом, как описано выше.</strong> 
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-red-900" aria-hidden="true" />
              <span>
                <strong className="font-semibold text-white">Однако следует обратить внимание на то, что различные Торговые лавки покупают только определенный тип предметов.</strong>
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-red-900" aria-hidden="true" />
              <span>
                <strong className="font-semibold text-white">Во время продажи предметов в торговой лавке продажа происходит таким же образом, как описано выше.</strong> 
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-red-900" aria-hidden="true" />
              <span>
                <strong className="font-semibold text-white">Если перед шагом номер (3) нажать shift + правая кнопка мыши, то в список (нижнее окно) будут внесены все имеющиеся на даный момент выбранные предметы, без необходимости в вода их количества.</strong>
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-red-900" aria-hidden="true" />
              <span>
                <strong className="font-semibold text-white">Итак, в список покупок в торговой лавке добавился предмет.</strong> 
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-red-900" aria-hidden="true" />
              <span>
                <strong className="font-semibold text-white">Теперь, если нажать кнопку "Купить", требуемая сумма серебра спишется с вашего счета, а в инвентаре появится купленный предмет.</strong>
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
   </SidebarLayout>
)

export default UsingShop
