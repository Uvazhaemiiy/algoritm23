import { FC } from 'react'
import { SidebarLayout } from 'layouts/SidebarLayout'





const people = [
   {
     name: 'Группа - МСД-111',
     title: 'Сестринское дело',
     role: 'СПИСОК ГРУППЫ',
     imageUrl:
       '/images/group-list/logo-msd111.svg',
     href: '/msd-111',
      },
   {
      name: 'Группа - МСД-112',
      title: 'Сестринское дело',
      role: 'СПИСОК ГРУППЫ',
      imageUrl:
        '/images/group-list/logo-msd112.svg',
      href: '/msd-112' 
      },
    {
      name: 'Группа - МСД-113',
      title: 'Сестринское дело',
      role: 'СПИСОК ГРУППЫ',
      imageUrl:
        '/images/group-list/logo-msd113.svg',
      href: '/msd-113',
      },
    {
      name: 'Группа - МСД-114',
      title: 'Сестринское дело',
      role: 'СПИСОК ГРУППЫ',
      imageUrl:
        '/images/group-list/logo-msd114.svg',
      href: '/msd-114',
      },
    {
      name: 'Группа - МСД-115',
      title: 'Сестринское дело',
      role: 'СПИСОК ГРУППЫ',
      imageUrl:
        '/images/group-list/logo-msd115.svg',
      href: '/msd-115',
      },
    {
      name: 'Группа - МСД-116',
      title: 'Сестринское дело',
      role: 'СПИСОК ГРУППЫ',
      imageUrl:
        '/images/group-list/logo-msd116.svg',
      href: '/msd-116',
      },
    {
      name: 'Группа - МСД-211',
      title: 'Сестринское дело',
      role: 'СПИСОК ГРУППЫ',
      imageUrl:
        '/images/group-list/logo-msd211.svg',
      href: '/msd-211',
      },
    {
      name: 'Группа - МСД-212',
      title: 'Сестринское дело',
      role: 'СПИСОК ГРУППЫ',
      imageUrl:
        '/images/group-list/logo-msd212.svg',
      href: '/msd-212',
      },
    {
      name: 'Группа - МСД-213',
      title: 'Сестринское дело',
      role: 'СПИСОК ГРУППЫ',
      imageUrl:
        '/images/group-list/logo-msd213.svg',
      href: '/msd-213',
      },
    {
      name: 'Группа - МСД-214',
      title: 'Сестринское дело',
      role: 'СПИСОК ГРУППЫ',
      imageUrl:
        '/images/group-list/logo-msd214.svg',
      href: '/msd-214',
      },
    {
      name: 'Группа - МСД-215',
      title: 'Сестринское дело',
      role: 'СПИСОК ГРУППЫ',
      imageUrl:
        '/images/group-list/logo-msd215.svg',
      href: '/msd-215',
      },
    {
      name: 'Группа - МСД-216',
      title: 'Сестринское дело',
      role: 'СПИСОК ГРУППЫ',
      imageUrl:
        '/images/group-list/logo-msd216.svg',
      href: '/msd-216',
      },
    {
      name: 'Группа - МСД-217',
      title: 'Сестринское дело',
      role: 'СПИСОК ГРУППЫ',
      imageUrl:
        '/images/group-list/logo-msd217.svg',
      href: '/msd-217',
      },
    {
      name: 'Группа - МСД-311',
      title: 'Сестринское дело',
      role: 'СПИСОК ГРУППЫ',
      imageUrl:
        '/images/group-list/logo-msd311.svg',
      href: '/msd-311',
      },
    {
      name: 'Группа - МСД-312',
      title: 'Сестринское дело',
      role: 'СПИСОК ГРУППЫ',
      imageUrl:
        '/images/group-list/logo-msd312.svg',
      href: '/msd-312',
      },
    {
      name: 'Группа - МСД-313',
      title: 'Сестринское дело',
      role: 'СПИСОК ГРУППЫ',
      imageUrl:
        '/images/group-list/logo-msd313.svg',
      href: '/msd-313',
      },
    {
      name: 'Группа - МСД-314',
      title: 'Сестринское дело',
      role: 'СПИСОК ГРУППЫ',
      imageUrl:
        '/images/group-list/logo-msd314.svg',
      href: '/msd-314',
      },
    {
      name: 'Группа - МСД-315',
      title: 'Сестринское дело',
      role: 'СПИСОК ГРУППЫ',
      imageUrl:
        '/images/group-list/logo-msd315.svg',
      href: '/msd-315',
      },
    {
      name: 'Группа - МСД-316',
      title: 'Сестринское дело',
      role: 'СПИСОК ГРУППЫ',
      imageUrl:
        '/images/group-list/logo-msd316.svg',
      href: '/msd-316',
      },
    {
      name: 'Группа - МСД-411',
      title: 'Сестринское дело',
      role: 'СПИСОК ГРУППЫ',
      imageUrl:
        '/images/group-list/logo-msd411.svg',
      href: '/msd-411',
      },
    {
      name: 'Группа - МСД-412',
      title: 'Сестринское дело',
      role: 'СПИСОК ГРУППЫ',
      imageUrl:
        '/images/group-list/logo-msd412.svg',
      href: '/msd-412',
      },
    {
      name: 'Группа - МСД-413',
      title: 'Сестринское дело',
      role: 'СПИСОК ГРУППЫ',
      imageUrl:
        '/images/group-list/logo-msd413.svg',
      href: '/msd-413',
      },
    {
      name: 'Группа - МСД-414',
      title: 'Сестринское дело',
      role: 'СПИСОК ГРУППЫ',
      imageUrl:
        '/images/group-list/logo-msd414.svg',
      href: '/msd-414',
      },
    {
      name: 'Группа - МСД-415',
      title: 'Сестринское дело',
      role: 'СПИСОК ГРУППЫ',
      imageUrl:
        '/images/group-list/logo-msd415.svg',
      href: '/msd-415',
      },
     {
        name: 'Группа - МСД-416',
        title: 'Сестринское дело',
        role: 'СПИСОК ГРУППЫ',
        imageUrl:
          '/images/group-list/logo-msd416.svg',
        href: '/msd-416',
      },
    {
      name: 'Группа - МЛД-111',
      title: 'Лечебное дело',
      role: 'СПИСОК ГРУППЫ',
      imageUrl:
        '/images/group-list/logo-mld111.svg',
      href: '/mld-111',
      },
    {
      name: 'Группа - МЛД-112',
      title: 'Лечебное дело',
      role: 'СПИСОК ГРУППЫ',
      imageUrl:
        '/images/group-list/logo-mld112.svg',
      href: '/mld-112',
      },
    {
      name: 'Группа - МЛД-211',
      title: 'Лечебное дело',
      role: 'СПИСОК ГРУППЫ',
      imageUrl:
        '/images/group-list/logo-mld211.svg',
      href: '/mld-211',
      },
    {
      name: 'Группа - МЛД-212',
      title: 'Лечебное дело',
      role: 'СПИСОК ГРУППЫ',
      imageUrl:
        '/images/group-list/logo-mld212.svg',
      href: '/mld-212',
      },
    {
      name: 'Группа - МЛД-311',
      title: 'Лечебное дело',
      role: 'СПИСОК ГРУППЫ',
      imageUrl:
        '/images/group-list/logo-mld311.svg',
      href: '/mld-311',
      },
    {
      name: 'Группа - МЛД-312',
      title: 'Лечебное дело',
      role: 'СПИСОК ГРУППЫ',
      imageUrl:
        '/images/group-list/logo-mld312.svg',
      href: '/mld-312',
      },
    {
      name: 'Группа - МЛД-313',
      title: 'Лечебное дело',
      role: 'СПИСОК ГРУППЫ',
      imageUrl:
        '/images/group-list/logo-mld313.svg',
      href: '/mld-313',
      },
    {
      name: 'Группа - МЛД-411',
      title: 'Лечебное дело',
      role: 'СПИСОК ГРУППЫ',
      imageUrl:
        '/images/group-list/logo-mld411.svg',
      href: '/mld-411',
      },
    {
      name: 'Группа - МЛД-412',
      title: 'Лечебное дело',
      role: 'СПИСОК ГРУППЫ',
      imageUrl:
        '/images/group-list/logo-mld412.svg',
      href: '/mld-112',
      },
     {
        name: 'Группа - МСО-111',
        title: 'Зубной техник',
        role: 'СПИСОК ГРУППЫ',
        imageUrl:
          '/images/group-list/logo-mso111.svg',
        href: '/mso-111',
      }, 
      {
        name: 'Группа - МСО-112',
        title: 'Зубной техник',
        role: 'СПИСОК ГРУППЫ',
        imageUrl:
          '/images/group-list/logo-mso112.svg',
        href: '/mso-112',
        },
      {
        name: 'Группа - МСО-211',
        title: 'Зубной техник',
        role: 'СПИСОК ГРУППЫ',
        imageUrl:
          '/images/group-list/logo-mso211.svg',
        href: '/mso-211',
        },
      {
        name: 'Группа - МСО-212',
        title: 'Зубной техник',
        role: 'СПИСОК ГРУППЫ',
        imageUrl:
          '/images/group-list/logo-mso212.svg',
        href: '/mso-212',
        },
       {
          name: 'Группа - МСО-311',
          title: 'Зубной техник',
          role: 'СПИСОК ГРУППЫ',
          imageUrl:
            '/images/group-list/logo-mso311.svg',
          href: '/mso-311',
        },
        {
          name: 'Группа - МСО-312',
          title: 'Зубной техник',
          role: 'СПИСОК ГРУППЫ',
          imageUrl:
            '/images/group-list/logo-mso312.svg',
          href: '/mso-312',
          },
         {
            name: 'Группа - МСВ-111',
            title: 'Вечернее отделение',
            role: 'СПИСОК ГРУППЫ',
            imageUrl:
              '/images/group-list/logo-msv111.svg',
            href: '/msv-111',
          }, 
          {
            name: 'Группа - МСВ-112',
            title: 'Вечернее отделение',
            role: 'СПИСОК ГРУППЫ',
            imageUrl:
              '/images/group-list/logo-msv112.svg',
            href: '/msv-112',
          },   
          {
            name: 'Группа - МСВ-211',
            title: 'Вечернее отделение',
            role: 'СПИСОК ГРУППЫ',
            imageUrl:
              '/images/group-list/logo-msv211.svg',
            href: '/msv-211',
          },   
          {
            name: 'Группа - МСВ-212',
            title: 'Вечернее отделение',
            role: 'СПИСОК ГРУППЫ',
            imageUrl:
              '/images/group-list/logo-msv212.svg',
            href: '/msv-212',
          },   
          {
            name: 'Группа - МСВ-311',
            title: 'Вечернее отделение',
            role: 'СПИСОК ГРУППЫ',
            imageUrl:
              '/images/group-list/logo-msv311.svg',
            href: '/msv-311',
          },   
          {
            name: 'Группа - МСВ-312',
            title: 'Вечернее отделение',
            role: 'СПИСОК ГРУППЫ',
            imageUrl:
              '/images/group-list/logo-msv312.svg',
            href: '/msv-312',
          },   
          {
            name: 'Группа - МСВ-411',
            title: 'Вечернее отделение',
            role: 'СПИСОК ГРУППЫ',
            imageUrl:
              '/images/group-list/logo-msv411.svg',
            href: '/msv-411',
          },        
   // More people...
 ]



const GroupLists: FC = () => (
   <SidebarLayout>
     <section className="overflow-hidden bg-white">
      <div className="relative mx-auto max-w-7xl px-4 pt-20 pb-12 sm:px-6 lg:px-8 lg:py-20">
        <svg
          className="absolute top-full left-0 translate-x-80 -translate-y-24 transform lg:hidden"
          width={784}
          height={404}
          fill="none"
          viewBox="0 0 784 404"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e56e3f81-d9c1-4b83-a3ba-0d0ac8c32f32"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width={784} height={404} fill="url(#e56e3f81-d9c1-4b83-a3ba-0d0ac8c32f32)" />
        </svg>

        <svg
          className="absolute right-full top-1/2 hidden translate-x-1/2 -translate-y-1/2 transform lg:block"
          width={404}
          height={784}
          fill="none"
          viewBox="0 0 404 784"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="56409614-3d62-4985-9a10-7ca758a8f4f0"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width={404} height={784} fill="url(#56409614-3d62-4985-9a10-7ca758a8f4f0)" />
        </svg>

        <div className="relative lg:flex lg:items-center">
          <div className="hidden lg:block lg:flex-shrink-0">
            <img
              className="h-64 w-64 rounded-full xl:h-40 xl:w-40"
              src="/images/staff/Ryabtseva.png"
              alt=""
            />
          </div>

          <div className="relative lg:ml-10">
            <svg
              className="absolute top-0 left-0 h-36 w-36 -translate-x-8 -translate-y-24 transform text-indigo-200 opacity-50"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 144 144"
              aria-hidden="true"
            >
              <path
                strokeWidth={2}
                d="M41.485 15C17.753 31.753 1 59.208 1 89.455c0 24.664 14.891 39.09 32.109 39.09 16.287 0 28.386-13.03 28.386-28.387 0-15.356-10.703-26.524-24.663-26.524-2.792 0-6.515.465-7.446.93 2.327-15.821 17.218-34.435 32.11-43.742L41.485 15zm80.04 0c-23.268 16.753-40.02 44.208-40.02 74.455 0 24.664 14.891 39.09 32.109 39.09 15.822 0 28.386-13.03 28.386-28.387 0-15.356-11.168-26.524-25.129-26.524-2.792 0-6.049.465-6.98.93 2.327-15.821 16.753-34.435 31.644-43.742L121.525 15z"
              />
            </svg>
            <blockquote className="relative">
              <div className="text-2xl font-medium leading-9 text-gray-900">
                <p>
                  Подробную информацию по спискам групп и обучению студентов колледжа, можете узнать в кабинете №32
                </p>
              </div>
              <footer className="mt-8">
                <div className="flex">
                  <div className="flex-shrink-0 lg:hidden">
                    <img
                      className="h-12 w-12 rounded-full"
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </div>
                  <div className="ml-4 lg:ml-0">
                    <div className="text-base font-medium text-gray-900">Рябцева Екатерина Дмитриевна</div>
                    <div className="text-base font-medium text-sky-900">Методист</div>
                  </div>
                </div>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
    <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-4">
      {people.map((person) => (
        <li
          className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow"
        >
          <div className="flex flex-1 flex-col p-8">
            <img className="mx-auto h-32 w-32 flex-shrink-0 rounded-full" src={person.imageUrl} alt="" />
            <h3 className="mt-6 text-sm font-medium text-gray-900">{person.name}</h3>
            <dl className="mt-1 flex flex-grow flex-col justify-between">
              <dt className="sr-only">Title</dt>
              <dd className="text-sm text-gray-500">{person.title} </dd>
              <dt className="sr-only">Role</dt>
              <dd className="mt-3">
              <a
                  href={person.href}
                className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
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
   </SidebarLayout>
)

export default GroupLists
