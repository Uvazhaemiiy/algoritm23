import { FC } from 'react'
import { SidebarLayout } from 'layouts/SidebarLayout'
import { ChevronRightIcon } from '@heroicons/react/20/solid'


/* Специальности */
const stats = [
   {
      name: 'Квалификация: Зубной техник / Здоровые зубы - залог успеха',
      stat: 'Стоматология ортопедическая',
      imageSrc: '/images/windows/dentist-holding-dental-model.jpg',
      href:'/orthopedic-dentistry'
   },
   {
      name: 'Квалификация: Мед. сестра/брат / Поддержания здоровья',
      stat: 'Сестринское дело',
      imageSrc: '/images/windows/nursing.jpg',
      href:'/nursing'
   },
   {
      name: 'Квалификация: Фельдшера / Оказание первой помощи',
      stat: 'Лечебное дело',
      imageSrc: '/images/windows/medical-busines.jpg',
      href:'/medical-business'
   },
]

/* Daiquiri.top  - intro (home) */
const people = [
   {
     name: 'Подача заявления',
     email: 'leslie.alexander@example.com',
     role: 'Стример',
     imageUrl:
       'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
     href:'/request'
      },
   {
      name: 'Вступительные испытания',
      email: 'leslie.alexander@example.com',
      role: 'Инстукция для прохождения',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      href: '/tests'
      },
    {
      name: 'Часто задаваемые вопросы',
      email: 'в',
      role: 'F.A.Q. для ознакомления',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      href: '/frequently-asked-questions'    
      },
    {
      name: 'Стоимость обучения      ',
      email: 'leslie.alexander@example.com',
      role: 'Цены на обучение',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      href: '/pricelist'
      },
   ]
   // More Stream people //
/* Статус сервера и онлайн  */

/* Статус сервера и онлайн //
/* Добро пожаловать  - intro */
const incentives = [
   {
      name: 'Ознакомьтесь с положительными характеристиками нашего Медицинского Колледжа РУТ (МИИТ)',
      imageSrc: '/images/site-pages/Harakteristiki.svg',
      description: "Истроия, сильные стороны колледжа и преимущество обучения в образовательной организации",
   },
   {
      name: 'Дистанционное обучение',
      imageSrc: '/images/site-pages/distant.svg',
      description: "В связи с распространением Covid-19 в Российской Федерации, Медицинский колледж РУТ (МИИТ) имеет совмещенную форму дистанционного обучения, так как студенты должны оставаться в безопасности и продолжать учиться.",
   },
   {
      name: 'Подать заявление',
      imageSrc: '/images/site-pages/zayavlenie.svg',
      description:
         "Подача документов проходит дистанционно, лично в колледж, через операторов почтовой связи общего пользования.",
   },
]

/* Основыные качества */
const perks = [
   {
      name: 'Опыт внедрения крупных проектов',
      imageSrc: '/images/dogovor.svg',
      description:
         "Мы команда специалистов с опытом внедрения крупных проектов от 12 лет.",
   },
   {
      name: 'Оперативное сопровождение (23 / 7)',
      imageSrc: '/images/autoflash.svg',
      description:
         "Быстро и качественно решаем вопросы пользователей, находим причины ошибок информационной системы и устраняем их.",
   },
   {
      name: 'Автоматизированная система технической поддержки (Help desk)',
      imageSrc: '/images/handshake.svg',
      description:
         'Автоматизированная система технической поддержки пользователей с контролем сроков выполнения запросов по утвержденному регламенту с Заказчиком.         ',
   },
   {
      name: 'Помощь в проработке, внедрении и оптимизации бизнес-процессов компании',
      imageSrc: '/images/connect.svg',
      description:
         "Помощь в повышение эффективности бизнеса, за счет автоматизации учета (бухгалтерский, налоговый, финансовый учет, управленческий учет, оперативный учет, МСФО), оптимизация бизнес-процессов.         ",
   },
   {
      name: 'Являемся партнерами 1С',
      imageSrc: '/images/1c.png',
      description:
         "Мы являемся официальными партнерами компании 1С - Франчайзи. Осуществляем комплексные услуги по автоматизации учета компаний. От помощи в подборе программных продуктов, их покупке, внедрении и дальнейшем сопровождении.",
   },
   {
      name: 'Собственная разработка',
      imageSrc: '/images/ads_click.svg',
      description:
         "Мы занимаемся разработкой, доработкой, оптимизацией программных продуктов на платформе 1С, а также разработкой сайтов и иных систем автоматизирования бизнеса. ",
   },
]
//Blog feed - open

const posts = [
   {
      title: 'Boost your conversion rate',
      href: '#',
      category: { name: 'Article', href: '#' },
      description:
         'Раздел находится в разработке - ожидаем.',
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
      imageUrl:
         '/images/windows-daiquiri/R2-Online-Daiquiri.png',
      readingTime: '6 min',
      author: {
         name: 'Екатерина Дмитриевна',
         href: '#',
         imageUrl: 
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
   },
   {
      title: 'How to use search engine optimization to drive sales',
      href: '#',
      category: { name: 'Video', href: '#' },
      description:
         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.',
      date: 'Mar 10, 2020',
      datetime: '2020-03-10',
      imageUrl:
         '/images/windows-daiquiri/R2-Online-Daiquiri.png',
      readingTime: '4 min',
      author: {
         name: 'Brenna Goyette',
         href: '#',
         imageUrl:
            'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
   },
   {
      title: 'Improve your customer experience',
      href: '#',
      category: { name: 'Case Study', href: '#' },
      description:
         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',
      date: 'Feb 12, 2020',
      datetime: '2020-02-12',
      imageUrl:
         '/images/windows-daiquiri/R2-Online-Daiquiri.png',
      readingTime: '11 min',
      author: {
         name: 'Daniela Metz',
         href: '#',
         imageUrl:
            'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
   },
   {
      title: 'Improve your customer experience',
      href: '#',
      category: { name: 'Case Study', href: '#' },
      description:
         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',
      date: 'Feb 12, 2020',
      datetime: '2020-02-12',
      imageUrl:
         '/images/windows-daiquiri/R2-Online-Daiquiri.png',
      readingTime: '11 min',
      author: {
         name: 'Daniela Metz',
         href: '#',
         imageUrl:
            'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
   },
]
//Blog Feed - end

const Home: FC = () => (
   <SidebarLayout>
      <div className="relative isolate overflow-hidden bg-gray-900">
        {/* //Наложение линий - open */}
      <svg
        className="absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
            width={200}
            height={200}
            x="50%"
            y={-1}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y={-1} className="overflow-visible fill-gray-800/20">
          <path
            d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
            strokeWidth={0}
          />
        </svg>
        <rect width="100%" height="100%" strokeWidth={0} fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)" />
      </svg> 
       {/* //Наложение линий - end */}
       {/* //Наложение свечения на фон - open */}
      <div
        className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
        aria-hidden="true"
      >
        <div
          className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20"
          style={{
            clipPath:
              'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
          }}
        />
      </div>
       {/* //Наложение свечения на фон - end */}
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-x1 lg:pt-8">
          <img
            className="h-40"
            src="/images/algoritm23-logo.svg" /* image front logo */
            alt="Your Company"
          />
          {/* <div className="mt-24 sm:mt-32 lg:mt-16">
            <a href="#" className="inline-flex space-x-6">
              <span className="rounded-full bg-indigo-500/10 px-3 py-1 text-sm font-semibold leading-6 text-gray-400 ring-1 ring-inset ring-indigo-500/10 ">
              События:
              </span>
              <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-300">
                <span>Проекты:</span>
                <ChevronRightIcon className="h-5 w-5 text-gray-500" aria-hidden="true" />
              </span>
            </a>
          </div> */}
          <h1 className="mt-10 text-2xl font-bold tracking-tight text-white sm:text-4xl">
          Оперативная и качественная автоматизация бизнеса:
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300 font-bold">
            <li> Продажа ПО </li>
            <li> Внедрение ПО </li>
            <li> Разработка ПО </li>
            <li> Обучение работе с ПО </li>
            <li> Сопровождение ПО </li>
            <li> Доработка ПО </li>
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <a
              href="/pricelist"
              className="rounded-md bg-gray-400  px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
            >
              Стоимость оказания услуг
            </a>
            <a href="/additional-education" className="text-sm font-semibold leading-6 text-white">
              ПОДРОБНЕЕ О КОМПАНИИ <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        <div className="mx-auto mt-16 flex max-w-4xl sm:mt-24 lg:ml-10 lg:mr-0 lg:-mt-20 lg:max-w-none lg:flex-none xl:ml-0 border">
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <img
              src="/images/main.jpg" /* image front priset */
              alt="App screenshot"
              width={2432}
              height={1242}
              className="w-[80rem] rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10"
            />
          </div>
        </div>
      </div>
    </div>
     {/* Основные качества сервера - open */}
     <div className="bg-gray-950 mt-6 rounded-lg">
            <div className="max-w-8xl mx-auto py-24 sm:px-2 sm:py-12 lg:px-4">
               <h2 className="text-center text-3xl font-semibold text-gray-200">ПРЕИМУЩЕСТВА АЛГОРИТМ 23</h2>
               <div className="max-w-2xl mx-auto px-4 grid grid-cols-1 gap-y-12 gap-x-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-16 mt-12">
                  {perks.map((perk) => (
                     <div key={perk.name} className="sm:flex">
                        <div className="sm:flex-shrink-0">
                           <div className="flow-root">
                              <img className="w-28 h-24" src={perk.imageSrc} alt="" />
                           </div>
                        </div>
                        <div className="mt-3 sm:mt-0 sm:ml-3">
                           <h3 className="text-xl font-medium text-sky-50">{perk.name}</h3>
                           <p className="mt-2 text-bg text-indigo-200">{perk.description}</p>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
         {/* Основные качества - end */}
                   {/* Additional education - open */}
                   <div className=" from-slate-800 via-slate-300 to-slate-900 rounded-t-lg mt-4">
            <div className="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
               <div className="overflow-hidden rounded-lg bg-gray-950		 shadow-xl lg:grid lg:grid-cols-2 lg:gap-4">
                  <div className="px-6 pt-10 pb-12 sm:px-16 sm:pt-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
                     <div className="lg:self-center">
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                           <span className="block">Стек используемых технологий: </span>
                        </h2>
                        <p className="mt-4 text-lg leading-6 text-indigo-200">
                        Встроенный язык программирования 1С: Предприятия <br />
            Язык запросов на базе SQL <br />
            С++ <br />
            T-SQL<br />
            1C Maker (сервис прототипирования)<br />
            1С: Конвертация данных и EnterpriseData<br />
            1С: Шина<br />
            Telegram бот<br />
            1С: Аналитика (BI-система)<br />
            OLAP-системы на основе данных 1С: Предприятия
                        </p>
                        {/* <a
                           href="/additional-education"
                           className="mt-8 inline-flex items-center rounded-md bg-gray-500 border border-transparent px-5 py-3 text-base font-bold text-black shadow hover:bg-indigo-100"
                        >
                           НАШИ ПРОЕКТЫ
                        </a> */}
                     </div>
                  </div>
                  <div className="aspect-w-5 aspect-h-3 -mt-6 md:aspect-w-2 md:aspect-h-1">
                     <img
                        className="translate-x-6 translate-y-6 transform rounded-md   sm:translate-x-16 lg:translate-y-2 "
                        src="/images/stek.jpg"
                        alt="App screenshot"
                     />
                  </div>
               </div>
            </div>
         </div>
          {/* Additional education - open */}
         <div className="bg-gradient-to-t from-slate-800 via-slate-300 to-slate-900 rounded-t-lg mt-4">
            <div className="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
               <div className="overflow-hidden rounded-lg bg-gray-950		 shadow-xl lg:grid lg:grid-cols-2 lg:gap-4">
                  <div className="px-6 pt-10 pb-12 sm:px-16 sm:pt-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
                     <div className="lg:self-center">
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                           <span className="block">НАША ЦЕЛЬ </span>
                           <span className="block">АВТОМАТИЗАЦИЯ БИЗНЕСА</span>
                        </h2>
                        <p className="mt-4 text-lg leading-6 text-indigo-200">
                        Опыт работы внедрения программных продуктов на платформе 1С с 2012 года. 
                        Опыт внедрения проектов с бюджетом более 150 млн. рублей федерального уровня с управлением командой внедрения и сопровождения более 40 человек.
                        </p>
                        <a
                           href="/additional-education"
                           className="mt-8 inline-flex items-center rounded-md bg-gray-500 border border-transparent px-5 py-3 text-base font-bold text-black shadow hover:bg-indigo-100"
                        >
                           НАШИ ПРОЕКТЫ
                        </a>
                     </div>
                  </div>
                  <div className="aspect-w-5 aspect-h-3 -mt-6 md:aspect-w-2 md:aspect-h-1">
                     <img
                        className="translate-x-6 translate-y-6 transform rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20 border"
                        src="/images/algoritm23-it-company.svg"
                        alt="App screenshot"
                     />
                  </div>
               </div>
            </div>
         </div>
         {/* Additional education - end */}
         
         {/* Blog feed - open 
         <div className="relative bg-gray-950 px-4 pt-6 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28 mt-4 rounded-lg">
            <div className="relative mx-auto max-w-8xl">
               <div className="text-center">
                  <h2 className="text-3xl font-bold tracking-tight text-red-800 sm:text-4xl">Последние новости севера R2:Online - Daiquiri </h2>
                  <p className="mx-auto mt-3 max-w-3xl text-xl text-slate-50 sm:mt-4">
                     Самые свежие события сервера Daiquiri и его компьюнити, следите за новостями и будьбе вкрусе всех событий которые происходят в игровом мире R2:Online!
                  </p>
               </div>
               <div className="mx-auto mt-4 grid max-w-ls gap-8 lg:max-w-none lg:grid-cols-4">
                  {posts.map((post) => (
                     <div key={post.title} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                        <div className="flex-shrink-0">
                           <img className="h-48 w-full object-cover" src={post.imageUrl} alt="" />
                        </div>
                        <div className="flex flex-1 flex-col justify-between bg-gradient-to-bl from-indigo-900 via-black to-purple-900 p-6">
                           <div className="flex-1">
                              <p className="ml-4 mt-2 text-sm font-medium text-indigo-600">
                                 <a href={post.category.href} className="hover:underline">
                                    {post.category.name}
                                 </a>
                              </p>
                              <a href={post.href} className="mt-2 block">
                                 <p className="ml-4 text-xl font-semibold text-sky-900">{post.title}</p>
                                 <p className="ml-4 mt-3 text-base text-gray-500">{post.description}</p>
                              </a>
                           </div>
                           <div className="ml-4 mt-4 flex items-center">
                              <div className="flex-shrink-0">
                                 <a href={post.author.href}>
                                    <span className="sr-only">{post.author.name}</span>
                                    <img className="h-12 w-12 rounded-full" src={post.author.imageUrl} alt="" />
                                 </a>
                              </div>
                              <div className="ml-4">
                                 <p className="text-sm font-medium text-gray-900">
                                    <a href={post.author.href} className="hover:underline">
                                       {post.author.name}
                                    </a>
                                 </p>
                                 <div className="flex space-x-1 text-sm text-gray-500">
                                    <time dateTime={post.datetime}>{post.date}</time>
                                    <span aria-hidden="true">&middot;</span>
                                    <span>{post.readingTime} дата</span>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
         {/* Blog Feed - end */}
         {/* Статусы сервера и онлайн - open */}
         <div className="bg-gray-950 py-24 sm:py-32 mt-4">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
          <div className="mx-auto w-full max-w-xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-200">Поддержка пользователей</h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Если у Вас возникли какие-то вопросы, сообщите нашему менеджеру и мы ответим Вам.
            </p>
            <div className="mt-8 flex items-center gap-x-6">
              <a
                href="/contacts"
                className="rounded-md bg-gray-500 px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-indigo-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Посмотреть контакты
              </a>
              {/* <a href="/contacts" className="text-sm font-semibold text-white">
                Связаться с поддежкой <span aria-hidden="true">&rarr;</span>
              </a> */}
            </div>
          </div>
          { <div className="mx-auto grid w-full max-w-xl grid-cols-1 items-center gap-y-12 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:pl-8">
          <p className="mt-6 text-lg leading-8 text-gray-300">
</p>




            {/* <img
              className="max-h-12 w-full object-contain object-left"
              src="https://tailwindui.com/img/logos/tuple-logo-white.svg"
              alt="Tuple"
              width={105}
              height={48}
            />
            <img
              className="max-h-12 w-full object-contain object-left"
              src="https://tailwindui.com/img/logos/reform-logo-white.svg"
              alt="Reform"
              width={104}
              height={48}
            />
            <img
              className="max-h-12 w-full object-contain object-left"
              src="https://tailwindui.com/img/logos/savvycal-logo-white.svg"
              alt="SavvyCal"
              width={140}
              height={48}
            />
            <img
              className="max-h-12 w-full object-contain object-left"
              src="https://tailwindui.com/img/logos/laravel-logo-white.svg"
              alt="Laravel"
              width={136}
              height={48}
            />
            <img
              className="max-h-12 w-full object-contain object-left"
              src="https://tailwindui.com/img/logos/transistor-logo-white.svg"
              alt="Transistor"
              width={158}
              height={48}
            />
            <img
              className="max-h-12 w-full object-contain object-left"
              src="https://tailwindui.com/img/logos/statamic-logo-white.svg"
              alt="Statamic"
              width={147}
              height={48}
            /> */}
          </div> }
        </div>
      </div>
    </div>
    {/* Статусы сервера и онлайн - end */}
            {/* Навигация Stream - open 
            <div className="grid grid-cols-4 gap-4 sm:grid-cols-4 mt-6 o">
      {people.map((person) => (
        <div
          key={person.email}
          className="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400"
        >
          <div className="flex-shrink-0">
            <img className="h-10 w-10 rounded-full" src={person.imageUrl} alt="" />
          </div>
          <div className="min-w-0 flex-1">
            <a href={person.href} className="focus:outline-none">
              <span className="absolute inset-0" aria-hidden="true" />
              <p className="text-sm font-medium text-gray-900 focus:outline-none">{person.name}</p>
              <p className="truncate text-sm text-gray-500">{person.role}</p>
            </a>
          </div>
        </div>
      ))}
    </div>
    {/* Контейнеры Stream - end */}
          {/* //контейнеры специальностей - open 
          <div>
            <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3 ">
               {stats.map((item) => (
                  <div key={item.name} className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
                     <div className="sm:flex-shrink-0">
                        <div className="flow-root">
                           <img className="w-200 h-240" src={item.imageSrc} alt="" />
                        </div>
                     </div>
                     <dt>
                        <p className="mt-2 text-sm font-medium text-gray-500 truncate">{item.name}</p>
                     </dt>
                     <dd>
                     <a href={item.href} className="px-2 py-4 hover:shadow-gray-500 focus:outline-none mt-2 font-medium text-white truncate col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-sky-900 text-center shadow-xl">{item.stat}</a></dd>
                  </div>
               ))}
            </dl>
         </div>
         {/* Контейнейры специальностей - end */}
         
         {/* Партнеры колледжа 
         <div className="bg-white">
            <div className="max-w-12xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
               <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
                  <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                    <img className="h-12" 
                          src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg" 
                          alt="Tuple" />
                  </div>
                  <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                    <img className="h-12" 
                          src="/images/windows/RUT_rus2.svg" 
                          alt="xxx"
                      />
                  </div>
                  <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                    <img className="h-12" 
                          src="/images/windows/RUT_rus.svg" 
                          alt="StaticKit" />
                  </div>
                  <div className="col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
                     <img
                        className="h-12"
                        src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg"
                        alt="Transistor"
                     />
                  </div>
                  <div className="col-span-2 flex justify-center md:col-span-3 lg:col-span-1">
                     <img
                        className="h-12"
                        src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg"
                        alt="Workcation"                        
                     />
                  </div>
               </div>
            </div>
         </div>
         */}
   </SidebarLayout>
)
export default Home
