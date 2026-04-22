import { FC } from "react";
import { SidebarLayout } from "layouts/SidebarLayout";
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { classNames } from "utils/classNames";
import { Link } from 'react-router-dom'

const people = [
   {
      name: "Первый поток",
      title: "10:00 - 11:00 - Начало вступительного теста",
   },
   {
      name: "Второй поток",
      title: "11:00 - 12:00 - Начало вступительного теста",
   },
   {
      name: "Третий поток",
      title: "12:00 - 13:00 - Начало вступительного теста",
   },
   {
      name: "Четвертый поток:",
      title: "13:00 - 14:00 - Начало вступительного теста",
   },
   {
      name: "Пятый поток:",
      title: "14:00 - 15:30 - Начало вступительного теста",
   },
   {
      name: "Шестой поток:",
      title: "15:30 - 16:30 - Начало вступительного теста",
   },
   // More people...
];

const faqs = [
   {
      question: "Как проходят вступительные испытания в дистанционном формате?",
      answer: [
         "1. Вступительные испытания пройдут в назначенное вам время в приложении {https://www.microsoft.com/ru-ru/microsoft-teams/download-app|Teams (скачать)}. На вашем ПК должна быть установлена веб-камера, при себе иметь паспорт для подтверждения личности.",
         "2. Для того чтобы приступить к прохождению теста, вам необходимо войти в  {https://rut-miit.ru/cabinet/hello/login.jsp|личный кабинет МИИТ} и перейти во вкладку - Обо мне. Тут находится пароль и логин от учетной записи Teams, нажимаем Показать, отображаются данные для входа в приложение Teams.         ",
         "3. Скачиваем {https://www.microsoft.com/ru-ru/microsoft-teams/download-app|Teams} и вводим данные которые мы получили.",
         "4. После того как вы вошли в приложение Teams, нажмите Команды и выберите комнату с именем - cg_ВИИ (Тут проходит вступительный тест)",
         "5. Уведомление о сдачи вступительного теста, придет на ваш номер телефона, который вы оставили при поступлении в Медицинский колледж РУТ (МИИТ), информация когда вам нужно будет явиться на вступительные испытания, придет в WhatsApp.",
      ],
   },
   {
      question: "Где получить пароль для входа в личный кабинет МИИТ?",
      answer: [
         "Данные для входа в личный кабинет МИИТ имеются на бланке, который вам выдали в Приемной комиссии. (На этом бланке логин и пароль)         ",
      ],
   },
   {
      question: "Где получить пароль от учетной записи Teams от МИИТ?",
      answer: [
         "После того как вы зашли в {https://rut-miit.ru/cabinet/hello/login.jsp|личный кабинет} переходим в раздел - Обо мне",
         "Нажимаем показать и у нас появляется логин и пароль для входа в {https://www.microsoft.com/ru-ru/microsoft-teams/download-app|Teams} (Программа для прохождения вступительных испытаний)",
      ],
   },
   {
      question: "Как войти в личный кабинет МИИТ?",
      answer: [
         "Для входа в свою учетную запись на сайте МИИТ, используйте логин и пароль, который вам выдали при поступлении.",
         "{https://rut-miit.ru/cabinet/hello/login.jsp|Cсылка} для входа в ЛК МИИТ",
      ],
   },
   {
      question: "Когда будут результаты вступительных испытаний?",
      answer: [
         "Результаты появятся {https://clck.ru/sLeSX|здесь} в течение недели.",
      ],
   },
   // More questions...
];

const Tests: FC = () => (
   <SidebarLayout>
      {/* Intro Tests - open */}
      <div className="overflow-hidden bg-white py-16 px-4 sm:px-6 lg:px-8 xl:py-36">
         <div className="mx-auto max-w-max lg:max-w-7xl">
            <div className="relative z-10 mb-8 md:mb-2 md:px-6">
               <div className="max-w-prose text-base lg:max-w-none">
                  <h2 className="font-semibold leading-6 text-sky-600">
                     Полезная информация
                  </h2>
                  <p className="mt-2 text-3xl font-bold leading-8 tracking-tight text-sky-900 sm:text-4xl">
                     Подробнее о вступительных испытаниях
                  </p>
               </div>
            </div>
            <div className="relative">
               <svg
                  className="absolute top-0 right-0 -mt-20 -mr-20 hidden md:block"
                  width={404}
                  height={384}
                  fill="none"
                  viewBox="0 0 404 384"
                  aria-hidden="true"
               >
                  <defs>
                     <pattern
                        id="95e8f2de-6d30-4b7e-8159-f791729db21b"
                        x={0}
                        y={0}
                        width={20}
                        height={20}
                        patternUnits="userSpaceOnUse"
                     >
                        <rect
                           x={0}
                           y={0}
                           width={4}
                           height={4}
                           className="text-gray-200"
                           fill="currentColor"
                        />
                     </pattern>
                  </defs>
                  <rect
                     width={404}
                     height={384}
                     fill="url(#95e8f2de-6d30-4b7e-8159-f791729db21b)"
                  />
               </svg>
               <svg
                  className="absolute bottom-0 left-0 -mb-20 -ml-20 hidden md:block"
                  width={404}
                  height={384}
                  fill="none"
                  viewBox="0 0 404 384"
                  aria-hidden="true"
               >
                  <defs>
                     <pattern
                        id="7a00fe67-0343-4a3c-8e81-c145097a3ce0"
                        x={0}
                        y={0}
                        width={20}
                        height={20}
                        patternUnits="userSpaceOnUse"
                     >
                        <rect
                           x={0}
                           y={0}
                           width={4}
                           height={4}
                           className="text-gray-200"
                           fill="currentColor"
                        />
                     </pattern>
                  </defs>
                  <rect
                     width={404}
                     height={384}
                     fill="url(#7a00fe67-0343-4a3c-8e81-c145097a3ce0)"
                  />
               </svg>
               <div className="relative md:bg-white md:p-6">
                  <div className="lg:grid lg:grid-cols-2 lg:gap-6">
                     <div className="prose prose-lg prose-indigo text-gray-600 lg:max-w-none">
                        <p>
                           В медицинском колледже РУТ (МИИТ) экзамены при
                           поступлении не сдаются. Результаты ЕГЭ и ОГЭ
                           предоставлять не надо.
                        </p>
                        <p className="text-base leading-7 mt-2">
                           <a href="#">
                              Согласно п. 4 ст. 111 Федерального закона № 273-ФЗ{" "}
                           </a>{" "}
                           со дня его официального опубликования для данного
                           случая действует следующее правило: "В случае, если
                           численность поступающих превышает количество мест,
                           финансовое обеспечение которых осуществляется за счет
                           бюджетных ассигнований федерального бюджета, бюджетов
                           субъектов РФ, местных бюджетов, образовательная
                           организация осуществляет прием на обучение по
                           образовательным программам среднего профессионального
                           образования по профессиям и специальностям на основе
                           результатов освоения поступающими образовательной
                           программы основного общего или среднего общего
                           образования, указанных в представленных поступающими
                           документах об образовании."
                        </p>
                        <ol role="list">
                           <li className="text-base leading-7 mt-4">
                              Другими словами, в данном случае устраивается
                              «конкурс аттестатов».
                           </li>
                        </ol>
                        <p>
                           Законодательство не предусматривает оценивание
                           результатов вступительных испытаний в баллах или в
                           иной дифференцированной форме. Таким образом,
                           результатом проведения вступительных испытаний
                           (тестирования) может быть только их прохождение либо
                           не прохождение.
                        </p>
                     </div>
                     <div className="text-base prose prose-lg prose-indigo mt-6 text-gray-600 lg:mt-4">
                        <p>
                           Так же проводятся вступительные испытания
                           психологической направленности (тестирование) при
                           поступлении на специальности 34.02.01 Сестринское
                           дело, 31.02.01 Лечебное дело и 31.02.05 Стоматология
                           ортопедическая. Согласно ч.4 ст. 68 Федерального
                           закона «Об образовании в Российской Федерации» при
                           приеме на обучение по образовательным программам
                           среднего профессионального образования по профессиям
                           и специальностям, требующим у поступающих наличия
                           определенных творческих способностей, физических и
                           (или) психологических качеств, проводятся
                           вступительные испытания.
                        </p>
                        <p className="text-base leading-7 mt-4">
                           Перечень специальностей среднего профессионального
                           образования, по которым могут проводиться
                           вступительные испытания при приеме на обучение,
                           установлены п. 29 Порядка приема на обучение по
                           образовательным программам среднего профессионального
                           образования, утвержденного приказом Министерства
                           образования и науки Российской Федерации от 23 января
                           2014 г. № 36.
                        </p>
                        {/* Кнопка задать вопрос - open */}
                        <div className="mt-8 inline-flex rounded-md shadow">
                           <a
                              href="/admissions-question"
                              className="flex items-center justify-center rounded-md border border-transparent bg-sky-600 px-5 py-3 text-base font-medium text-white hover:bg-sky-900"
                           >
                              Задать вопрос приемной комисии
                           </a>
                        </div>
                        {/* Button - End */}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      {/* Text info tests - end */}
      {/* Tests text+img - open */}
      <div className="relative bg-white py-16 sm:py-24">
         <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:items-start lg:gap-24 lg:px-8">
            <div className="relative sm:py-16 lg:py-0">
               <div
                  aria-hidden="true"
                  className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen"
               >
                  <div className="absolute inset-y-0 right-1/2 w-full rounded-r-3xl bg-gray-50 lg:right-72" />
                  <svg
                     className="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12"
                     width={404}
                     height={392}
                     fill="none"
                     viewBox="0 0 404 392"
                  >
                     <defs>
                        <pattern
                           id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
                           x={0}
                           y={0}
                           width={20}
                           height={20}
                           patternUnits="userSpaceOnUse"
                        >
                           <rect
                              x={0}
                              y={0}
                              width={4}
                              height={4}
                              className="text-gray-200"
                              fill="currentColor"
                           />
                        </pattern>
                     </defs>
                     <rect
                        width={404}
                        height={392}
                        fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)"
                     />
                  </svg>
               </div>
               <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:px-0 lg:py-20">
                  {/* Testimonial card*/}
                  <div className="relative overflow-hidden rounded-2xl pt-64 pb-10 shadow-xl">
                     <img
                        className="absolute inset-0 h-full w-full object-cover"
                        src="/images/windows/tests.jpg"
                        alt=""
                     />
                     <div className="absolute inset-0 bg-sky-400 mix-blend-multiply" />
                     <div className="absolute inset-0 bg-gradient-to-t from-sky-800 via-sky-900 opacity-90" />
                     <div className="relative px-8">
                        <blockquote className="mt-8">
                           <div className="relative text-lg font-medium text-white md:flex-grow">
                              <p className="relative">
                                 После оформления всех документов на вступительных испытания вашим сопровождением займется спикер
                              </p>
                           </div>

                           <footer className="mt-4">
                              <p className="text-base font-semibold text-indigo-200">
                                 Ожидайте и с вамя свяжутся в WhatApps
                              </p>
                           </footer>
                        </blockquote>
                     </div>
                  </div>
               </div>
            </div>

            <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
               {/* Content area */}
               <div className="pt-12 sm:pt-16 lg:pt-20">
                  <h2 className="text-3xl font-bold tracking-tight text-sky-900 sm:text-4xl">
                     Как проходят вступительные испытания?
                  </h2>
                  <div className="mt-6 space-y-6 text-gray-500">
                     <p className="text-lg  text-gray-800">Очный формат:</p>
                     <p className="mt-2">
                        1. Вступительные испытания пройдут в назначенное время в
                        Медицинском колледже РУТ (МИИТ) по адресу: г. Москва,
                        ул. Будайская, д. 2 стр. 18, каб. 48.
                     </p>
                     <p className="mt-2">
                        2. Обязательно с собой вам необходимо взять паспорт для
                        подтверждения личности и Расписку (документ, который вам
                        выдали в приемной комиссии).
                     </p>
                     <p className="mt-2">
                        3. Если вы подавали документы дистанционно, то вам
                        необходимо заранее просмотреть данные для входа в
                        приложение Teams. Сделать вы это вы можете в личный
                        кабинет МИИТ, перейдя во вкладку - Обо мне
                        <p className="mt-1">
                           Тут находится пароль и логин от учетной записи Teams,
                           нажимаем Показать, отображаются данные для входа в
                           приложение Teams.
                        </p>
                     </p>
                     <p className="mt-2">
                        4. Уведомление о сдачи вступительного теста, придет на
                        ваш номер телефона, который вы оставили при поступлении
                        в Медицинский колледж РУТ (МИИТ), информация когда вам
                        нужно будет явиться на вступительные испытания, придет в
                        WhatsApp.
                     </p>
                  </div>
               </div>

               {/* Stats section */}
               <div className="mt-10">
                  <div className="mt-10">
                     <a
                        href="/medspecialties"
                        className="text-base font-medium text-sky-600"
                     >
                        Вернуться к специальностям
                        <span aria-hidden="true"> &rarr;</span>
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </div>
      {/* Tests text+img - end */}
      <div className="px-4 sm:px-6 lg:px-8">
         <div className="sm:flex sm:items-center">
            <div className="sm:flex-auto">
               <h1 className="mt-6 text-xl text-center font-semibold text-sky-900">
                  Время сдачи вступительных испытаний при поступлении
               </h1>
            </div>
         </div>
         <div className="mt-4 flex flex-col">
            <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
               <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                  <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                     <table className="min-w-full divide-y divide-gray-300">
                        <thead className="bg-gray-50">
                           <tr className="divide-x divide-gray-200">
                              <th
                                 scope="col"
                                 className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                              >
                                 Потоки:
                              </th>
                              <th
                                 scope="col"
                                 className="px-4 py-3.5 text-left text-sm font-semibold text-gray-900"
                              >
                                 Время сдачи вступительных испытаний:
                              </th>
                           </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 bg-white">
                           {people.map((person) => (
                              <tr
                                 key={person.name}
                                 className="divide-x divide-gray-200"
                              >
                                 <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-6">
                                    {person.name}
                                 </td>
                                 <td className="whitespace-nowrap p-4 text-sm text-gray-500">
                                    {person.title}
                                 </td>
                              </tr>
                           ))}
                        </tbody>
                     </table>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div className="bg-gray-50">
         <div className="mx-auto max-w-7xl py-12 px-4 sm:py-16 sm:px-6 lg:px-8 mt-4">
            <div className="mx-auto max-w-6xl divide-y-4 divide-gray-200">
               <h2 className="text-center text-3xl font-bold tracking-tight text-sky-900 sm:text-4xl">
                  F.A.Q. по вступительным испытаниям
               </h2>
               <dl className="mt-6 space-y-6 divide-y divide-gray-200">
                  {faqs.map((faq) => (
                     <Disclosure as="div" key={faq.question} className="pt-6">
                        {({ open }) => (
                           <>
                              <dt className="text-lg">
                                 <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-400">
                                    <span className="font-medium text-gray-900">
                                       {faq.question}
                                    </span>
                                    <span className="ml-6 flex h-7 items-center">
                                       <ChevronDownIcon
                                          className={classNames(
                                             open ? "-rotate-180" : "rotate-0",
                                             "h-6 w-6 transform"
                                          )}
                                          aria-hidden="true"
                                       />
                                    </span>
                                 </Disclosure.Button>
                              </dt>
                              <Disclosure.Panel as="dd" className="mt-2 pr-12">
                                 {faq.answer.map((answer) => {
                                    const regexpThis = /\[.*\|.*\]/i
                                    const resultThis = answer.match(regexpThis)?.[0]

                                    const regexpOther = /\{.*\|.*\}/i
                                    const resultOther = answer.match(regexpOther)?.[0]

                                    if (resultThis) {
                                       const splitResult = resultThis.replace('[', '').replace(']', '').split('|')
                                       const splitAnswer = answer.split(resultThis)

                                       return (
                                          <p
                                             className="text-base text-gray-600 mt-1"
                                             style={{ width: "100%" }}
                                             key={answer}
                                          >
                                             {splitAnswer[0]}
                                             <Link to={splitResult[0]} className="text-base text-blue-600 mt-1">
                                                {splitResult[1]}
                                             </Link>
                                             {splitAnswer[1]}
                                          </p>
                                       )
                                    }

                                    if (resultOther) {
                                       const splitResult = resultOther.replace('{', '').replace('}', '').split('|')
                                       const splitAnswer = answer.split(resultOther)

                                       return (
                                          <p
                                             className="text-base text-gray-600 mt-1"
                                             style={{ width: "100%" }}
                                             key={answer}
                                          >
                                             {splitAnswer[0]}
                                             <a href={splitResult[0]} target="_blank: " className="text-base text-blue-600 mt-1">
                                                {splitResult[1]}
                                             </a>
                                             {splitAnswer[1]}
                                          </p>
                                       )
                                    }

                                    return (
                                       <p
                                          className="text-base text-gray-600 mt-1"
                                          style={{ width: "100%" }}
                                          key={answer}
                                       >
                                          {answer}
                                       </p>
                                    )
                                 })}
                              </Disclosure.Panel>
                           </>
                        )}
                     </Disclosure>
                  ))}
               </dl>
            </div>
         </div>
      </div>
   </SidebarLayout>
);

export default Tests;
