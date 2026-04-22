import { FC } from 'react'
import { SidebarLayout } from 'layouts/SidebarLayout'
import { CheckCircleIcon, ChevronRightIcon, EnvelopeIcon } from '@heroicons/react/20/solid'


const applications = [
   {
     applicant: {
       name: 'Анатомия и физиология человека',
       email: '- Организация и проведение учебной, воспитательной и учебно-методической работы',
       email1: '- Осуществление текущего, промежуточного и итогового контроля в образовательном процессе; ',
       email2: '- Высшее образование, соответствующее профилю преподаваемой дисциплин; Опыт с ПК',
       imageUrl:
         'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
     },
     date: '2020-01-07',
     dateFull: 'от 60000 рублей',
     stage: 'Открытая вакансия',
     href: '/',
   },
   {
     applicant: {
       name: 'Основы патологии',
       email: '- Организация и проведение учебной, воспитательной и учебно-методической работы',
       email1: '- Осуществление текущего, промежуточного и итогового контроля в образовательном процессе; ',
       email2: '- Высшее образование, соответствующее профилю преподаваемой дисциплин; Опыт с ПК',
       imageUrl:
         'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
     },
     date: '2020-01-07',
     dateFull: 'по договоренности',
     stage: 'Открытая вакансия',
     href: '#',
   },
   {
     applicant: {
       name: 'Иностранный язык (английский)',
       email: '- Организация и проведение учебной, воспитательной и учебно-методической работы',
       email1: '- Осуществление текущего, промежуточного и итогового контроля в образовательном процессе; ',
       email2: '- Высшее образование, соответствующее профилю преподаваемой дисциплин; Опыт с ПК',
       imageUrl:
         'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
     },
     date: '2020-01-07',
     dateFull: 'по договоренности',
     stage: 'Открытая вакансия',
     href: '#',
   },
   {
      applicant: {
        name: 'Хирургия',
        email: '- Организация и проведение учебной, воспитательной и учебно-методической работы',
       email1: '- Осуществление текущего, промежуточного и итогового контроля в образовательном процессе; ',
       email2: '- Высшее образование, соответствующее профилю преподаваемой дисциплин; Опыт с ПК',
        imageUrl:
          'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      date: '2020-01-07',
      dateFull: 'по договоренности',
      stage: 'Открытая вакансия',
      href: '#',
    },
    {
      applicant: {
        name: 'Гериатрия',
        email: '- Организация и проведение учебной, воспитательной и учебно-методической работы',
       email1: '- Осуществление текущего, промежуточного и итогового контроля в образовательном процессе; ',
       email2: '- Высшее образование, соответствующее профилю преподаваемой дисциплин; Опыт с ПК',
        imageUrl:
          'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      date: '2020-01-07',
      dateFull: 'по договоренности',
      stage: 'Открытая вакансия',
      href: '#',
    },
    {
      applicant: {
        name: 'Терапия',
        email: '- Организация и проведение учебной, воспитательной и учебно-методической работы',
       email1: '- Осуществление текущего, промежуточного и итогового контроля в образовательном процессе; ',
       email2: '- Высшее образование, соответствующее профилю преподаваемой дисциплин; Опыт с ПК',
        imageUrl:
          'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      date: '2020-01-07',
      dateFull: 'по договоренности',
      stage: 'Открытая вакансия',
      href: '#',
    },
    {
      applicant: {
        name: 'Математика',
        email: '- Организация и проведение учебной, воспитательной и учебно-методической работы',
       email1: '- Осуществление текущего, промежуточного и итогового контроля в образовательном процессе; ',
       email2: '- Высшее образование, соответствующее профилю преподаваемой дисциплин; Опыт с ПК',
        imageUrl:
          'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      date: '2020-01-07',
      dateFull: 'по договоренности',
      stage: 'Открытая вакансия',
      href: '#',
    },
    {
      applicant: {
        name: 'Медицина катастроф        ',
        email: '- Организация и проведение учебной, воспитательной и учебно-методической работы',
       email1: '- Осуществление текущего, промежуточного и итогового контроля в образовательном процессе; ',
       email2: '- Высшее образование, соответствующее профилю преподаваемой дисциплин; Опыт с ПК',
        imageUrl:
          'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      date: '2020-01-07',
      dateFull: 'по договоренности',
      stage: 'Открытая вакансия',
      href: '#',
    },
    {
      applicant: {
        name: 'Офтальмология',
        email: '- Организация и проведение учебной, воспитательной и учебно-методической работы',
        email1: '- Осуществление текущего, промежуточного и итогового контроля в образовательном процессе; ',
        email2: '- Высшее образование, соответствующее профилю преподаваемой дисциплин; Опыт с ПК',
        imageUrl:
          'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      date: '2020-01-07',
      dateFull: 'по договоренности',
      stage: 'Открытая вакансия',
      href: '#',
    },
    {
      applicant: {
        name: 'Основы сестринского дела',
        email: '- Организация и проведение учебной, воспитательной и учебно-методической работы',
       email1: '- Осуществление текущего, промежуточного и итогового контроля в образовательном процессе; ',
       email2: '- Высшее образование, соответствующее профилю преподаваемой дисциплин; Опыт с ПК',
        imageUrl:
          'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      date: '2020-01-07',
      dateFull: 'по договоренности',
      stage: 'Открытая вакансия',
      href: '#',
    },
    {
      applicant: {
        name: 'Стоматология ортопедическая, Зубной техник',
        email: '- Организация и проведение учебной, воспитательной и учебно-методической работы',
       email1: '- Осуществление текущего, промежуточного и итогового контроля в образовательном процессе; ',
       email2: '- Высшее образование, соответствующее профилю преподаваемой дисциплин; Опыт с ПК',
        imageUrl:
          'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      date: '2020-01-07',
      dateFull: 'по договоренности',
      stage: 'Открытая вакансия',
      href: '#',
    },
 ]

 
const Jobs: FC = () => (
   <SidebarLayout>
<div className="block max-w-screen relative overflow-hidden bg-white py-16 mx-auto ">
 <span className="block text-center text-3xl font-semibold text-sky-900 mt-2">Вакантные направления:</span>
 <p className="max-w-screen block mt-4 text-center leading-8 text-gray-800">
 В Медицинский колледж РУТ (МИИТ) требуются преподаватели по специальностям Сестринское дело, Лечебное дело и Стоматология ортопедическая по следующим дисциплинам (междисциплинарным курсам):
            </p>
   <div className="overflow-hidden bg-white shadow sm:rounded-md mt-4">
      <ul role="list" className="divide-y divide-gray-200">
        {applications.map((application) => (
          <li key={application.applicant.email}>
            <li key={application.applicant.email1}></li>
            <li key={application.applicant.email2}></li>
            <a href={application.href} className="block hover:bg-gray-50">
              <div className="flex items-center px-4 py-4 sm:px-6">
                <div className="flex min-w-0 flex-1 items-center">
                  <div className="flex-shrink-0">
                    <img className="h-12 w-12 rounded-full" src={application.applicant.imageUrl} alt="" />
                  </div>
                  <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                    <div>
                      <p className="truncate text-sm font-medium text-sky-600">{application.applicant.name}</p>
                      <p className="mt-2 flex items-center text-sm text-gray-500">
                        <span className="truncate">{application.applicant.email}</span>
                        </p>
                        <p className='mt-2 flex items-center text-sm text-gray-500'>
                        <span className="truncate">{application.applicant.email1}</span>
                      </p>
                        <p className='mt-2 flex items-center text-sm text-gray-500'>
                        <span className="truncate">{application.applicant.email2}</span>
                      </p>               
                    </div>
                    <div className="hidden md:block">
                      <div>
                        <p className="text-sm text-gray-900">
                          Заработная плата <time dateTime={application.date}>{application.dateFull}</time>
                        </p>
                        <p className="mt-2 flex items-center text-sm text-gray-500">
                          <CheckCircleIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-green-400" aria-hidden="true" />
                          {application.stage}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <ChevronRightIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
              </div>
            </a>
          </li>
        ))}
      </ul >
    </div>
        <div className='mx-4'>
            <p className="mx-auto max-w-screen-lg block text-left mt-4 text-lg leading-8 text-sky-800">
            - Просьба присылать резюме на электронную почту mk-miit08@mail.ru. 
            </p>
            <p className="mx-auto max-w-screen-lg block text-left mt-0 text-lg leading-8 text-sky-800">
            - Директор: Кузнецова Вера Николаевна
            </p>
            <p className="mx-auto max-w-screen-lg block text-left mt-0 text-lg leading-8 text-sky-800">
            - Адрес: 129128 г. Москва, ул. Будайская, дом 2 корп. 18
            </p>
            <p className="mx-auto max-w-screen-lg block text-left mt-0 text-lg leading-8 text-sky-800">
            - Эл. почта: mk-miit08@mail.ru
            </p>
            <p className="mx-auto max-w-screen-lg block text-left mt-0 text-lg leading-8 text-sky-800">
            - Наш телефон: 8-499-187-93-63
            </p>
       </div>
   </div>
   </SidebarLayout>
)

export default Jobs
