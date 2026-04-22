import { FC } from 'react'
import { SidebarLayout } from 'layouts/SidebarLayout'
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'



const ClassR2: FC = () => (
   <SidebarLayout>
    <div className="relative overflow-hidden bg-gray-950 px-6 py-24 sm:py-24 lg:overflow-visible lg:px-0">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-white">R2:Online</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-red-600 sm:text-4xl">КЛАССЫ</h1>
              <p className="mt-6 text-xl leading-8 text-white">
              Рыцарь, рейнджер, маг, ассасин, призыватель.
              </p>
            </div>
          </div>
        </div>
        <div className="ml-16 -mt-6 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-2 lg:overflow-hidden ">
          <img
            className="mt-8 flex gap-x-4 flex-none rounded-full h-full w-full"
            src="/images/mechanics-r2/class-r2.png"
            alt=""
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-white lg:max-w-lg">
              <p className="mt-4">
              При создании своего персонажа вы можете выбрать один из пяти классов: рыцарь, рейнджер, маг, ассасин или призыватель. 
              Каждый класс имеет свои сильные и слабые стороны, так что выбор класса зависит от твоих игровых предпочтений.
              </p>
              <ul role="list" className="mt-8 space-y-8 text-white">
                <li className="flex gap-x-3">
                <img
            className="mt-1 h-16 w-16 flex-none text-indigo-600"
            src="/images/mechanics-r2/knight-r2-online.png"
            alt=""
                     />
                  <span>
                    <strong className="font-semibold text-red-500">1. РЫЦАРЬ</strong><p></p>
              У потомков дворян, которые в результате кровавой междоусобицы потеряли свои владения, остались только их благородное
              происхождение и рыцарский титул. Они не ведают иной жизни, кроме постоянных сражений.
              Доблестные рыцари в совершенсте владеют всеми видами вооружения, однако считают оружие дистанционого боя бесславным.
              Благодаря своим боевым навыкам, рыцарь способен сокрушить любого врага.
                  </span>
                </li>
                <li className="flex gap-x-3">
                <img
            className="mt-1 h-16 w-16 flex-none text-indigo-600"
            src="/images/mechanics-r2/ranger-r2-online.png"
            alt=""
                     />
                  <span>
                    <strong className="font-semibold text-red-500">2. РЕЙНДЖЕР</strong><p></p> 
              Востребованные в качестве наемников во время бесконечных войн, рейнджеры одинаково хорошо владеют всеми видами оружия.
              Закаленые во многих сражениях, где они получили бесценный боевой опыт, они эффективнее всего действуют в составе отряда.
              Они скитаются по миру Колфорта в поисках достойного лидера, за которого они готовы будут воевать.
                  </span>
                </li>
                <li className="flex gap-x-3">
                <img
            className="mt-1 h-16 w-16 flex-none text-indigo-600"
            src="/images/mechanics-r2/mage-r2-online.png"
            alt=""
                     />
                  <span>
                    <strong className="font-semibold text-red-500">3. МАГ</strong><p></p> 
              Эльфы правили этими землями задолго до прихода людей. Благодаря своим богатым знаниям, 
              они могут использовать магию природы и различные заклинания.
              Эльфийские маги сильны не только в волшебстве, они также превосходно владеют мечом.
              Несмотря на то, что с приходом людей многие эльфы предпочли покинуть Колфорт, 
              некоторые из них остались и жили в лесах, охраняемые силой самой природы.
              Среди них нашлись и те, кого любопытство и тяга к приключениям заставили отправиться в путешествие по миру людей.
                  </span>
                </li>
                <li className="flex gap-x-3">
                <img
            className="mt-1 h-16 w-16 flex-none text-indigo-600"
            src="/images/mechanics-r2/asassin-r2-online.png"
            alt=""
                     />
                  <span>
                    <strong className="font-semibold text-red-500">4. АССАСИН.</strong><p></p>  
              Особые отряды армии темных жрецов состояли из специально обученных убийц, именуемых ассасинами.
              Смертельно опасные противники, предпочитающие нападать внезапно, а затем скрываться в темноте.
              Благодаря своему мастерству они могут убить противника одним точным ударом.
              Ассасины не гнушаются никакими методами ведения войны, ибо для них цель оправдывает любые средства.
                  </span>
                </li>
                <li className="flex gap-x-3">
                <img
            className="mt-1 h-16 w-16 flex-none text-indigo-600"
            src="/images/mechanics-r2/summon-r2-online.png"
            alt=""
                     />
                  <span>
                    <strong className="font-semibold text-red-500">5. ПРИЗЫВАТЕЛЬ</strong><p></p> 
              У некоторых людей на острове Акра в результате изучения культуры аборигенов появились особые способности. 
              Самые сильные их обладатели получили название Призыватели.
              Они знакомы с особенными способами накопления маны и управления животными.
              Призванные ими существа не задумываются о собственной безопасности и с радостью выполняют любые приказы своего повелителя.
              Способные призывать существ, ослаблять противников и наносить серьезный урон издалека, призыватели навсегда изменили остров Колфорт.
                  </span>
                </li>
              </ul>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-red-600">Удачи в игре странник</h2>
              <p className="mt-6">
              Теперь, когда вы более осведомлены о классах, доступных в игре R2 Online, вы можете выбрать тот, 
              который покажется вам наиболее подходящим для вашего игрового стиля, и начать свой путь в захватывающем мире игры.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
   </SidebarLayout>
)

export default ClassR2
