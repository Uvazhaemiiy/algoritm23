import { FC } from 'react'
import { SidebarLayout } from 'layouts/SidebarLayout'
import { LifebuoyIcon, NewspaperIcon, PhoneIcon } from '@heroicons/react/24/outline'


const supportLinks = [
   {
     name: 'МСД - теория',
     href: 'msd',
     description:
       'Расписание теоритических занятий групп МСД',
     icon: PhoneIcon,
   },
   {
     name: 'МЛД - теория',
     href: 'mld',
     description:
       'Расписание теоритических занятий групп МЛД',
     icon: LifebuoyIcon,
   },
   {
     name: 'МСО - теория/практика',
     href: '/mso',
     description:
       'Расписание теоритических занятий групп МСО',
     icon: NewspaperIcon,
   },
   {
      name: 'МСВ - теория',
      href: '/msv',
      description:
        'Расписание теоритических занятий групп МСВ',
      icon: NewspaperIcon,
    },
    {
      name: 'МСД - практика',
      href: '/msd-practice',
      description:
        'Расписание практических занятий групп МСД',
      icon: PhoneIcon,
    },
    {
      name: 'МЛД - практика',
      href: '/mld-practice',
      description:
        'Расписание практических занятий групп МСД',
      icon: LifebuoyIcon,
    },
    {
       name: 'МСВ - практика',
       href: '/msv-practice',
       description:
         'Расписание практических занятий групп МСВ.',
       icon: NewspaperIcon,
     },
    {
      name: 'ГИА',
      href: '/gia',
      description:
        'ГИА / ВКР',
      icon: NewspaperIcon,
    },
    {
      name: 'Сессия',
      href: '#',
      description:
        'Сессия групп',
      icon: NewspaperIcon,
    },
    {
      name: 'Предзащита 2022',
      href: '#',
      description:
        'Предзащита.',
      icon: NewspaperIcon,
    },
 ]


const Schedule: FC = () => (
   <SidebarLayout>
   <div className="bg-white mt-22">
      {/* Header */}
      <div className="relative bg-gray-800 pb-32">
        <div className="absolute inset-0">
          <img
            className="h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100"
            alt=""
          />
          <div className="absolute inset-0 bg-gray-800 mix-blend-multiply" aria-hidden="true" />
        </div>
        <div className="relative mx-auto max-w-7xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">РАСПИСАНИЕ ЗАНЯТИЙ</h1>
          <p className="mt-6 max-w-3xl text-xl text-gray-300">
          Расписание теоретических и практических занятий, разделённое на потоки и группы, продолжительность занятий, время начала и окончания занятий.
          </p>
          <p className="mt-6 max-w-3xl text-xl text-gray-300"> 
          В течение семестра в расписание могут вноситься изменения, которые необходимо регулярно отслеживать, как студентам, так и преподавателям!
          </p>
        </div>
      </div>
      {/* Overlapping cards */}
      <section
        className="relative z-10 mx-auto -mt-36 max-w-8xl px-4 pb-22 sm:px-6 lg:px-4"
        aria-labelledby="contact-heading"
      >
        <h2 className="sr-only" id="contact-heading mt-12">
        Contact us →
       </h2>
        <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-4 lg:gap-y-0 lg:gap-x-8 ">
          {supportLinks.map((link) => (
            <div key={link.name} className="flex flex-col rounded-2xl bg-white shadow-xl mt-6">
              <div className="relative flex-1 mt-12 px-6 pt-16 pb-8 md:px-8">
                <div className="mt-6 absolute top-0 inline-block -translate-y-1/2 transform rounded-xl bg-sky-600 p-5 shadow-lg">
                  <link.icon className="h-12 w-12 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-medium text-sky-900 mt-10">{link.name}</h3>
                <p className="mt-4 text-base text-gray-500">{link.description}</p>
              </div>
              <div className="rounded-bl-3xl rounded-br-2xl mt-2 bg-gray-50 p-6 md:px-8 text-lg translate-x-top">
                <a href={link.href} className="text-base font-medium text-sky-600 hover:text-sky-900">
                  Подробнее<span aria-hidden="true"> &rarr;</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
   </SidebarLayout>
)

export default Schedule
