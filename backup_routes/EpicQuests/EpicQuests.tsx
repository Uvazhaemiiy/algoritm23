import { FC } from 'react'
import { SidebarLayout } from 'layouts/SidebarLayout'

const people = [
  {
    name: 'Классы    ',
    title: 'Полное описание классов и их премуществ    ',
    role: 'ПОДРОБНЕЕ',
    imageUrl:
      '/images/windows-daiquiri/r2-online-mechanic-game1.jpg',
    href: '/class-r2',
     },
      {
    name: 'Предметы    ',
    title: 'Игровые предметы и их применение    ',
    role: 'ПОДРОБНЕЕ',
    imageUrl:
      '/images/windows-daiquiri/r2-online-mechanic-game2.jpg',
    href: '/items',
     },
      {
    name: 'Управление и горячие клавиши     ',
    title: 'Подробное управление персонажем и сочетание горячих клавиш    ',
    role: 'ПОДРОБНЕЕ',
    imageUrl:
      '/images/windows-daiquiri/r2-online-mechanic-game3.jpg',
    href: '/controls-and-hotkeys',
     },
      {
    name: 'Использование торговой лавки    ',
    title: 'Обмен, покупка и продажа предметов    ',
    role: 'ПОДРОБНЕЕ',
    imageUrl:
      '/images/windows-daiquiri/r2-online-mechanic-game4.jpg',
    href: '/using-shop',
     },
      {
    name: 'Битва',
    title: 'Битвы гильдий и подробное описане, как происходят битвы    ',
    role: 'ПОДРОБНЕЕ',
    imageUrl:
      '/images/windows-daiquiri/r2-online-mechanic-game5.jpg',
    href: '/battle',
     },
     {
      name: 'Чат      ',
      title: 'Управление чатом и прочие функции чата      ',
      role: 'ПОДРОБНЕЕ',
      imageUrl:
        '/images/group-list/logo-msd111.svg',
      href: '/chat',
       },
        {
      name: 'Гильдия      ',
      title: 'Описание работы, полный обзов по использованию гильдии.      ',
      role: 'ПОДРОБНЕЕ',
      imageUrl:
        '/images/group-list/logo-msd111.svg',
      href: '/guild',
       },
        {
      name: 'Вес и сытость',
      title: 'Улючевые характеристеки персонажа, подробное описание',
      role: 'ПОДРОБНЕЕ',
      imageUrl:
        '/images/group-list/logo-msd111.svg',
      href: '/limit',
       },
        {
      name: 'Умения      ',
      title: 'Использвание игровых скиллов и подробное описание игрового процесса      ',
      role: 'ПОДРОБНЕЕ',
      imageUrl:
        '/images/group-list/logo-msd111.svg',
      href: '/skills',
       },
        {
      name: 'Отряд (группа)      ',
      title: 'Приглашение в группу или отряд      ',
      role: 'ПОДРОБНЕЕ',
      imageUrl:
        '/images/group-list/logo-msd111.svg',
      href: '/group',
       },
         {
    name: 'Усиление предметов    ',
    title: 'Заточка предметов в игре, подробная инструкция.    ',
    role: 'ПОДРОБНЕЕ',
    imageUrl:
      '/images/group-list/logo-msd111.svg',
    href: '/strengthening-items',
     },
      {
    name: 'Руны',
    title: 'Как использовать руны и их свойства    ',
    role: 'ПОДРОБНЕЕ',
    imageUrl:
      '/images/group-list/logo-msd111.svg',
    href: '/runes',
     },
      {
    name: 'Осады крепостей и контрольных точек    ',
    title: 'Карты крепостей и контольных точек в игре    ',
    role: 'ПОДРОБНЕЕ',
    imageUrl:
      '/images/group-list/logo-msd111.svg',
    href: '/fortress-sieges',
     },
     {
      name: 'Испытания',
      title: 'Описание испытаний и подрбная инструкция по прохождению',
      role: 'ПОДРОБНЕЕ',
      imageUrl:
        '/images/group-list/logo-msd111.svg',
      href: '/game-trials',
       },
        {
      name: 'Достижения и трофеи      ',
      title: 'Добытые ресурсы и их использование.',
      role: 'ПОДРОБНЕЕ',
      imageUrl:
        '/images/group-list/logo-msd111.svg',
      href: '/achievements-and-trophies',
       },
        {
      name: 'Особые умения',
      title: 'Сестринское дело',
      role: 'ПОДРОБНЕЕ',
      imageUrl:
        '/images/group-list/logo-msd111.svg',
      href: '/special-skills',
       },
        {
      name: 'Арена (Командные битвы)      ',
      title: 'Бои за лучшего игрока на арене, как использовать арену      ',
      role: 'ПОДРОБНЕЕ',
      imageUrl:
        '/images/group-list/logo-msd111.svg',
      href: '/arena',
       },
        {
      name: 'Питомцы      ',
      title: 'Добыча и управление питомцами в игре      ',
      role: 'ПОДРОБНЕЕ',
      imageUrl:
        '/images/group-list/logo-msd111.svg',
      href: '/pets',
       },

]

const EpicQuests: FC = () => (
   <SidebarLayout>
          
     <div className="bg-gradient-to-bl from-black via-black to-indigo-950 ">
      {/* Header */}
      <div className="relative bg-gray-800 pb-32">
        <div className="absolute inset-0">
          <img
            className="h-full w-full object-cover"
            src="/images/windows-daiquiri/r2-reign-of-revolution-game-mechanics.png"
            alt="game mechanics r2"
          />
          <div className="absolute inset-0 bg-gray-800 mix-blend-multiply" aria-hidden="true" />
        </div>
        <div className="relative mx-auto max-w-7xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-red-600 md:text-5xl lg:text-6xl">ЭПИЧЕСКИЕ КВЕСТЫ R2:Online</h1>
          <p className="mt-6 max-w-3xl text-xl text-white">
          Все игровые механики по игре R2:Online, стань одним из лучших на сервере и докажи что тебе нет равных
          </p>
          <p className="mt-6 max-w-3xl text-xl text-gray-300"> 
          Ознакомьтесь с игрой и познайте мир легендарной R2:Online, подробная инструкция для новичков!
          </p>
        </div>
      </div>
      {/* Overlapping cards -open*/}
      <ul role="list" className="relative z-10 mx-auto -mt-36 max-w-8xl px-4 pb-22 sm:px-8 lg:px-8 grid grid-cols-1 gap-y-10 lg:grid-cols-5 lg:gap-y-8 lg:gap-x-8  ">
      {people.map((person) => (
        <li
          className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-gray-950 text-center shadow border mt-0"
        >
          <div className="flex flex-1 flex-col p-8">
            <img className="mx-auto h-36 w-36 flex-shrink-0 rounded-full" src={person.imageUrl} alt="" />
            <h3 className="mt-6 text-xl font-medium text-red-600">{person.name}</h3>
            <dl className="mt-2 flex flex-grow flex-col justify-between">
              <dd className="text-sm text-white">{person.title} </dd>
              <dd className="mt-3">
              <a
                  href={person.href}
                className="rounded-full bg-black px-6 py-2 text-white hover:text-red-600 border">
                  {person.role}
                  </a>
              </dd>
            </dl>
          </div>
          <div>
         </div>
        </li>
      ))}
    </ul>
     {/* Overlapping cards - end*/}
    </div>
   </SidebarLayout>
)

export default EpicQuests