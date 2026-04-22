import { FC } from 'react'
import { SidebarLayout } from 'layouts/SidebarLayout'




const Items: FC = () => (
   <SidebarLayout>
       <div className="relative overflow-hidden bg-gray-950 px-6 py-24 sm:py-24 lg:overflow-visible lg:px-0">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-white">R2:Online</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-red-600 sm:text-4xl">Предметы</h1>
              <p className="mt-6 text-xl leading-8 text-white">
              Описание видов предметов и способов их использования.
              </p>
            </div>
          </div>
        </div>
        <div className="ml-16 -mt-6 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-2 lg:overflow-hidden">
          <img
            className="w-[48rem] max-w rounded-x1 bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[30rem]"
            src="/images/windows-daiquiri/r2-online-class.jpg"
            alt=""
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-white lg:max-w-lg">
              <ul role="list" className="mt-2 space-y-8 text-white">
                <li className="flex gap-x-3">
                  <span>
                    <strong className="font-semibold text-red-500">1. Виды предметов </strong><p></p>
        Предметы делятся на зелья, оружие, доспехи, аксессуары, жезлы, свитки, ингредиенты, еду.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <span>
                    <strong className="font-semibold text-red-500">2. Использование предмета </strong><p></p>          
        Использовать предмет можно, открыв инвентарь (ТАВ, I) и нажав два раза на данном предмете левой кнопкой мыши, или 
        добавив его на панель быстрого доступа и нажав соответствующую клавишу (F1-F8). 
        Зелья используются сразу, в случае же с воружением - оно либо надевается, либо снимается.
        <p></p>- Базовая панель быстрого доступа = F1-F8
        <p></p>- Верхние панели быстрого доступа = Shift + F1-F8
        <p></p>- Спрятать верхние панели быстрого доступа = F12
                  </span>
                </li>
                <li className="flex gap-x-3">
                   
                  <span>
                    <strong className="font-semibold text-red-500">3. Добавление предмета на панель быстрого доступа </strong><p></p> 
        Перетащите предмет который хотите добавить из инвентаря на панель быстрого доступа, и он закрепится там. 
        Перетаскивание предмета осуществляется с помощью обычной функции Drag%Drop.
                  </span>
                </li>
                <img
            className="mt-1 h-48 w-64 flex-none text-indigo-600"
            src="/images/mechanics-r2/r2online-vid-items.png"
            alt=""
                     />   
                <li className="flex gap-x-3">
                  <span>
                    <strong className="font-semibold text-red-500">4. Различия предметов</strong><p></p>  
        Предметы в основном делятся на проклятые (красного цвета), обычные (белого цвета) и благословленные (желтого цвета).
        <p></p>Проклятый предмет
        <p></p>Обычный предмет
        <p></p>Благословленный предмет
        <p></p>- Если вы наденете проклятый предмет то снять его не сможете. Эту проблему можно решить с помощью зелья снятия проклятия. 
        <p></p>- Предметы, полученные во время охоты, не идентифицированы, и посмотреть их точное описание невозможно. 
        Но, если воспользоваться зельем идентификации, можно узнать более подробную информацию.
                  </span>
                </li>
                <img
            className="mt-1 h-16 w-74 flex-none text-indigo-600"
            src="/images/mechanics-r2/r2online-using-items.png"
            alt=""
                     />   
                <li className="flex gap-x-3">
                  <span>
                    <strong className="font-semibold text-red-500">5. Предметы, проклятые богами</strong><p></p> 
        Снять проклятие можно с помощью зелья снятия проклятия. Но предметы, проклятые богами, немного отличаются от обычных проклятых предметов. 
        Проклятие так же снимается с помощью соответствующего зелья, но, если надеть предмет вновь, проклятие возвращается.
                  </span>
                </li>
                <li className="flex gap-x-3">
                <img
            className="mt-1 h-16 w-20 flex-none text-indigo-600"
            src="/images/mechanics-r2/r2online-zelie.png"
            alt=""
                     />     
                  <span>
                    <strong className="font-semibold text-red-500">6. Зелья</strong><p></p>                  
        Зелья делятся на зелья восстановления здоровья, зелья телепортации, зелья возврата, зелья снятия проклятия и др.
        Чтобы использовать их, нужно либо дважды кликнуть на изображени зелья в инвентаре, либо добавить зелье на панель быстрого доступа и нажать
        соответствующую клавишу. 
        <p></p>- Зелье восстановления здоровья: восстанавливает небольшое количество здоровья персонажа
        <p></p>- Зелье телепортации: перемещает персонажа на некоторое расстояние 
        <p></p>- Зелье возврата: перемещает персонажа в ближайшую деревню 
        <p></p>- Зелье снятия проклятия: снимает проклятие с предмета
                  </span>
                </li>
                <li className="flex gap-x-3">
                <img
            className="mt-1 h-16 w-20 flex-none text-indigo-600"
            src="/images/mechanics-r2/r2online-sword.png"
            alt=""
                     />    
                  <span>
                    <strong className="font-semibold text-red-500">7. Оружие</strong><p></p> 
        У оружия нет ограничений по уровню использования. Но есть снаряжение, которое используется только определенными классами.
                  </span>
                </li>
                <li className="flex gap-x-3">
                <img
            className="mt-1 h-16 w-20 flex-none text-indigo-600"
            src="/images/mechanics-r2/r2online-def.png"
            alt=""
                     />    
                  <span>
                    <strong className="font-semibold text-red-500">8. Доспехи</strong><p></p> 
        Доспехи делятся на шлемы, нагрудники, перчатки, сапоги, щиты и браслеты. Кликнув на изображение в инвентаре, можно надеть или снять выбранный предмет.
                  </span>
                </li>
                <li className="flex gap-x-3">
                <img
            className="mt-1 h-16 w-20 flex-none text-indigo-600"
            src="/images/mechanics-r2/r2online-amulet.png"
            alt=""
                     />    
                  <span>
                    <strong className="font-semibold text-red-500">9. Аксессуары</strong><p></p> 
        Аксессуары делятся на кольца, ожерелья, мантии и дают персонажам дополнительные способности. 
        Они увеличивают/уменьшают характеристики персонажа, делают персонажа невидимым или перемещают в желаемое место. 
        Также они могут увеличить защиту от некоторых типов монстров.
                  </span>
                </li>
                <li className="flex gap-x-3">
                <img
            className="mt-1 h-16 w-20 flex-none text-indigo-600"
            src="/images/mechanics-r2/r2online-staff.png"
            alt=""
                     />    
                  <span>
                    <strong className="font-semibold text-red-500">10. Жезлы</strong><p></p>                    
        Жезлы делятся на жезлы вызова молнии, призыва монстров, жезлы паукв, жезлы перевоплощения и др. 
        Для использования таких жезлов необходимо дважды кликнуть на изображении жезла в инвентаре и потом на цель, 
        либо просто дважды кликнуть на изображении жезла. Также можно добавить предмет на панель быстрого доступа и 
        использовать с помощью соответствующей клавиши. Нет ограничения по классу, и пользоваться ими может любой персонаж.
                  </span>
                </li>
                <li className="flex gap-x-3">
                <img
            className="mt-1 h-16 w-20 flex-none text-indigo-600"
            src="/images/mechanics-r2/r2online-book.png"
            alt=""
                     />    
                  <span>
                    <strong className="font-semibold text-red-500">11. Магические книги</strong><p></p>               
        Шаровая молния, ледяная стрела и другие магические книги могут быть использованы только эльфами. Магические книги можно купить в торговой лавке или получить во время охоты.
                  </span>
                </li>
                <li className="flex gap-x-3">
                <img
            className="mt-1 h-16 w-20 flex-none text-indigo-600"
            src="/images/mechanics-r2/r2online-material.png"
            alt=""
                     />    
                  <span>
                    <strong className="font-semibold text-red-500">12. Ингредиенты</strong><p></p>               
        Шкура волка, куски цепи, минералы серебра, железа и другие похожие предметы относятся к ингредиентам. Из них можно создавать предметы (оружие, доспехи и др.). 
        За создание предмета берется определенная плата.
        <p></p>Пример: Для создания перчаток из волчьей шкуры необходимо собрать волчью шкуру (10 шт.) и паутину (1 шт.), стоимость крафта составит 700 серебра.
                  </span>
                </li>
                <li className="flex gap-x-3">
                <img
            className="mt-1 h-16 w-20 flex-none text-indigo-600"
            src="/images/mechanics-r2/r2online-eda.png"
            alt=""
                     />    
                  <span>
                    <strong className="font-semibold text-red-500">13. Еда</strong><p></p>                 
        Хлеб, мясо кролика, и другие похожие предметы относятся к еде и восстанавливают уровень сытости.
        <p></p>- Хлеб: восстанавливает 10 очков сытости.
        <p></p>- Мясо кролика: восстанавливает 20 очков сытости.
        <p></p>- Лимон (премиум): востанавливает 100 очков сытости.
                  </span>
                </li>
                <li className="flex gap-x-3">
                <img
            className="mt-1 h-16 w-20 flex-none text-indigo-600"
            src="/images/mechanics-r2/r2online-pero.png"
            alt=""
                     />    
                  <span>
                    <strong className="font-semibold text-red-500">14. Особые предметы</strong><p></p> 
        Данные предметы необходимы длля выполнения различных заданий.
                  </span>
                </li>
                <li className="flex gap-x-3">
                <img
            className="mt-1 h-16 w-20 flex-none text-indigo-600"
            src="/images/mechanics-r2/r2online-sfera.png"
            alt=""
                     />    
                  <span>
                    <strong className="font-semibold text-red-500">15. Сферы</strong><p></p> 
        Сферы представляют собой наполненные магией предметы, которые способны значительно увеличивать характеристики персонажей. 
        Сферы можно приобрести в игровом магазине или же добыть при охоте на монстров. 
        Чтобы использовать сферы, откройте в инвентаре вкладку посвященную им, и экипируйте их двойным щелчком ЛКМ. 
        Эффекты вступят в силутогда, когда будут собраны 4 сферы одного вида и одинакового уровня.
                  </span>
                </li>
              </ul>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-red-600"> Передача предметов</h2>
              <h2 className="mt-2 text-bg font-bold tracking-tight text-white">Возможность передачи предметов, не открывая окно обмена </h2>
              <img
            className="mt-1 h-38 w-72 flex-none text-indigo-600"
            src="/images/mechanics-r2/r2online-trade1.png"
            alt=""
                     />    
             <p className="mt-6 font-semibold text-red-500 text-bg">1. Передача предмета от одного персонажа другому</p>
        <p >- Единственным условием для такой передачи является то, что оба персонажа должны состоять в одной гильдии.</p>
        <p className="mt-2 font-semibold text-red-500 text-bg">2. Передача предмета NPC</p>
        <p>- Возможна передача предмета NPC без дополнительных условий.</p>
        <p className="mt-2 font-semibold text-red-500 text-bg">3. Передача предмета монстру</p>
        <p>- Так же, как и в случае с NPC, осуществляется без дополнительных условий. Если убить монстра, которому был передан предмет, предмет из него выпадет</p>
            </div>
          </div>
        </div>
      </div>
    </div>
   </SidebarLayout>
)

export default Items
