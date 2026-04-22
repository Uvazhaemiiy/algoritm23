import { FC } from 'react'
import { SidebarLayout } from 'layouts/SidebarLayout'

const people = [
   // Руководство и преподаватели
   {
     name: 'Кузнецова Вера Николаевна',
     role: 'Директор',
     imageUrl:
       '/images/staff/vera-nikolaevna.png',
     href: '/staff/director',

   },
   {
      name: 'Куратцева Ирина Николаевна',
      role: 'Заместитель директора по УР',
      imageUrl:
        '/images/staff/Kuratseva.png',
      href: '/staff/kuratseva',
    },
    {
      name: 'Тирешко Яна Викторовна',
      role: 'Заместитель директора по УПР',
      imageUrl:
        '/images/staff/Tireshko.png',
      href: '/staff/tireshko',
    },
    {
      name: 'Чинчикова Анна Геннадьевна',
      role: 'Заместитель директора по УМР',
      imageUrl:
        '/images/staff/Chinchikova.png',
        href: '/staff/chinchikova',
    },
    {
      name: 'Богаткова Тамара Алексеевна',
      role: 'Заместитель директора по ВР',
      imageUrl:
        '/images/staff/Bogotkova.png',
        href: '/staff/bogatkova',
    },
    {
      name: 'Агеева Елена Викторовна',
      role: 'Зав. отделением очной формы',
      imageUrl:
        '/images/staff/Ageeva.png',
        href: '/staff/ageeva',
    },
    {
      name: 'Петрова Татьяна Николаевна',
      role: 'Зав. отделением очно-заочной формы',
      imageUrl:
        '/images/staff/Petrova.png',
        href: '/staff/petrova',
    },
    {
      name: 'Пучкова Ольга Ильинична',
      role: 'Зав. отделением стоматологии',
      imageUrl:
        '/images/staff/Pushkova.png',
        href: '/staff/pushkova',
    },
    {
      name: 'Дёмкина Елена Васильевна',
      role: 'Зав. практикой',
      imageUrl:
        '/images/staff/Demkina.png',
        href: '/staff/demkina',
    },
    {
      name: 'Русанов Денис Дмитриевич',
      role: 'Зам. директора по ИТ',
      imageUrl:
        '/images/staff/rusanov.png',
        href: '/staff/rusanov',
    },
    {
      name: 'Назаренко Наталья Валерьевна',
      role: 'Педагог-психолог',
      imageUrl:
        '/images/staff/Nazarenko.png',
        href: '/staff/nazarenko',
    },
    {
      name: 'Рябцева Екатерина Дмитриевна',
      role: 'Методист',
      imageUrl:
        '/images/staff/Ryabtseva.png',
        href: '/staff/ryabtseva',
    },
    {
      name: 'Баканова Анастасия Сергеевна',
      role: 'Основы реабилитации',
      imageUrl:
        '/images/staff/Bakanova.png',
        href: '/staff/bakanova',
    },
    {
      name: 'Буданцева Светлана Васильевна',
      role: 'Сестринский уход в педиатрии',
      imageUrl:
        '/images/staff/Budantseva.png',
        href: '/staff/budanseva',
    },
    {
      name: 'Василенко Светлана Алексеевна',
      role: 'Литература / Русский язык',
      imageUrl:
        '/images/staff/Vasilenko.png',
        href: '/staff/vasilenko',
    },
    {
      name: '???????',
      role: 'Сестринский уход в хирургии',
      imageUrl:
        '/images/staff/no-face.png',
        href: '/staff/director',
    },
    {
      name: 'Гессе Ольга Борисовна',
      role: 'Сестринский уход в педиатрии',
      imageUrl:
        '/images/staff/gesse.png',
      href: '/staff/gesse',
    },
    {
      name: 'Горх Фарида Фаритовна',
      role: 'Оказание медицинских услуг',
      imageUrl:
        '/images/staff/Gorh.png',
        href: '/staff/gorh',
    },
    {
      name: 'Доронин Антон Юрьевич',
      role: 'Литейное дело в стоматологии',
      imageUrl:
        '/images/staff/doronin.png',
        href: '/staff/doronin',
    },
    {
      name: 'Демидович Оксана Григорьевна',
      role: 'Теория и практика с/д',
      imageUrl:
        '/images/staff/Demidovish.png',
        href: '/staff/demidovish',
    },
    {
      name: 'Дмитриева Ольга Михайловна',
      role: 'Анатомия и физиология человека',
      imageUrl:
        '/images/staff/Dmitrieva.png',
        href: '/staff/dmitrieva',
    },
    {
      name: 'Жукова Евгения Анатольевна',
      role: 'Генетика',
      imageUrl:
        '/images/staff/Zhukova.png',
        href: '/staff/shukova',
    },
    {
      name: 'Евсеев Борис Юрьевич',
      role: 'Хирургия',
      imageUrl:
        '/images/staff/Evseev.png',
        href: '/staff/evseev',
    },
    {
      name: 'Емельянова Галина Анатольевна',
      role: 'Оказание неотложной помощи детям',
      imageUrl:
        '/images/staff/Emelanova.png',
      href: '/staff/emelyanova',
    },
    {
      name: 'Ермилова Алла Борисовна',
      role: 'Безопасная среда для пациента',
      imageUrl:
        '/images/staff/Ermilova.png',
      href: '/staff/ermilova',
    },
    {
      name: 'Ефимова Елена Ивановна',
      role: 'Сестринский уход в дерматологии',
      imageUrl:
        '/images/staff/Efimova.png',
      href: '/staff/efimova',
    },
    {
      name: 'Иванова Надежда Александровна',
      role: 'Химия',
      imageUrl:
        '/images/staff/Ivanova.png',
      href: '/staff/ivanova-nadezhda',
    },
    {
      name: 'Иванычева Мария Александровна',
      role: 'Математика',
      imageUrl:
        '/images/staff/Ivanycheva.png',
      href: '/staff/ivanycheva',
    },
    {
      name: 'Каминская Татьяна Ивановна',
      role: 'Иммунопрофилактика',
      imageUrl:
        '/images/staff/Kamintskay.png',
      href: '/staff/kaminskay',
    },
    {
      name: 'Кислицына Лилия Яковлевна',
      role: 'Иностранный язык',
      imageUrl:
        '/images/staff/lily-yakovlevna.png',
      href: '/staff/kislitsyna',
    },
    {
      name: 'Ковалевская Екатерина Михайловна',
      role: 'Сестр. уход в терапии',
      imageUrl:
        '/images/staff/kovaleskay.png',
      href: '/staff/kovalevskaya',
    },
    {
      name: 'Колотильщикова Анастасия Николаевна',
      role: 'Физическая культура',
      imageUrl:
        '/images/staff/Kolotilshekova.png',
        href: '/staff/kolotilshchikova',
    },
    {
      name: 'Колесниченко Лидия Глебовна',
      role: 'История',
      imageUrl:
        '/images/staff/kolistnishenko.png',
      href: '/staff/kolesnichenko',
    },
    {
      name: 'Костенко Галина Семеновна',
      role: 'Сестринский уход в гериатрии',
      imageUrl:
        '/images/staff/Kostenko.png',
        href: '/staff/kostenko',
    },
    {
      name: 'Кочарян Лилия Фаритовна',
      role: 'Изготовление несъемных протезов',
      imageUrl:
        '/images/staff/Kosharan.png',
        href: '/staff/kocharyan',
    },
    {
      name: 'Крымцева Татьяна Алексеевна',
      role: 'Анатомия и физиология человека',
      imageUrl:
        '/images/staff/Krimtseva.png',
      href: '/staff/krymtseva',
    },
    {
      name: 'Кузнецова Надежда Васильевна',
      role: 'Сестринский уход в терапии',
      imageUrl:
        '/images/staff/Kuznotsova.png',
      href: '/staff/kuznetsova',
    },
    {
      name: 'Кузнецов Николай Анатольевич',
      role: 'Изготовление несъемных протезов',
      imageUrl:
        '/images/staff/Kuznetsov.png',
      href: '/staff/kuznetsov',
    },
    {
      name: 'Лапина Надежда Викторовна',
      role: 'Химия',
      imageUrl:
        '/images/staff/Lapina.png',
      href: '/staff/lapina',
    },
    {
      name: 'Маленко Наталья Сергеевна',
      role: 'Технология оказания мед. услуг',
      imageUrl:
        '/images/staff/Malenko.png',
      href: '/staff/malenko',
    },
    {
      name: 'Маркелов Владимир Иванович',
      role: 'Оказание неотложной помощи при чс',
      imageUrl:
        '/images/staff/Markelov.png',
      href: '/staff/markelov',
    },
    {
      name: 'Маркелова Ксения Владимировна',
      role: 'Организация проф. деятельности',
      imageUrl:
        '/images/staff/Markelova.png',
      href: '/staff/markelova',
    },
    {
      name: 'Мишон Надежда Владимировна',
      role: 'Фармакология',
      imageUrl:
        '/images/staff/Mishon.png',
      href: '/staff/mishon',
    },
    {
      name: 'Малышенко Игорь Александрович',
      role: 'ОБЖ',
      imageUrl:
        '/images/staff/Malishenko.png',
        href: '/staff/malyshenko',
    },
    {
      name: 'Мельников Иван Витальевич',
      role: 'ОБЖ',
      imageUrl:
        '/images/staff/no-face.png',
        href: '/staff/melnikov',
    },
    {
      name: 'Новый',
      role: 'Русский язык / культура речи',
      imageUrl:
        '/images/staff/no-face.png',
        href: '/staff/director',
    },
    {
      name: 'Мурашова Ирина Владимировна',
      role: 'Инфекционные заболевания',
      imageUrl:
        '/images/staff/Murashova-Ira.png',
        href: '/staff/murashova',
    },
    {
      name: 'Никулина Ольга Ивановна',
      role: 'Физика / Астрономия',
      imageUrl:
        '/images/staff/Nikulina.png',
        href: '/staff/nikulina',
    },
    {
      name: 'Озерова Наталья Васильевна',
      role: 'Основы реабилитации',
      imageUrl:
        '/images/staff/Ozerova.png',
        href: '/staff/ozerova',
    },
    {
      name: 'Питиримов Иван Иванович',
      role: 'Сестринский уход в акушерстве',
      imageUrl:
        '/images/staff/Pitirimov.png',
        href: '/staff/pitirimov',
    },
    {
      name: 'Павлов-Пластовец Павел Владимирович',
      role: 'Психология',
      imageUrl:
        '/images/staff/pavlov-platovets.png',
        href: '/staff/platoves',
    },
    {
      name: 'Савицкая Ирина Игоревна',
      role: 'Функциональная диагностика',
      imageUrl:
        '/images/staff/Savitskaya.png',
        href: '/staff/savitskaya',
    },
    {
      name: 'Сафонова Ольга Анатольевна',
      role: 'Гигиена и экология человека',
      imageUrl:
        '/images/staff/Safonova.png',
        href: '/staff/safonova',
    },
    {
      name: 'Серебрякова Ольга Викторовна',
      role: 'История',
      imageUrl:
        '/images/staff/Serebryakova.png',
        href: '/staff/serebryakova',
    },
    {
      name: 'Сидорова Татьяна Александровна',
      role: 'История медицины',
      imageUrl:
        '/images/staff/Sidorova.png',
        href: '/staff/sidorova',
    },
    {
      name: 'Сычев Григорий Сергеевич',
      role: 'Физическая культура',
      imageUrl:
        '/images/staff/Sychev.png',
        href: '/staff/sychev',
    },
    {
      name: 'Томская Татьяна Николаевна',
      role: 'Сестринский уход в неврологии',
      imageUrl:
        '/images/staff/Tomsk.png',
        href: '/staff/tomskay',
    },
    {
      name: 'Фомина Любовь Леонидовна',
      role: 'Сестринский уход при лор заболеваниях',
      imageUrl:
        '/images/staff/Fomina.png',
        href: '/staff/fomina',
    },
    {
      name: 'Шалимова Валентина Григорьевна',
      role: 'Физическая культура',
      imageUrl:
        '/images/staff/Shalimova.png',
        href: '/staff/shalimova',
    },
    {
      name: 'Шпилева Наталия Федоровна',
      role: 'Информатика / информационные тех.',
      imageUrl:
        '/images/staff/Shpileva.png',
        href: '/staff/shipileva',
    },
    {
      name: 'Швец Любовь Игоревна',
      role: 'Сестринский уход в хирургии',
      imageUrl:
        '/images/staff/Shvets.png',
        href: '/staff/shvets',
    },
    {
      name: 'Шокот Ольга Викторовна',
      role: 'Сестринский уход в терапии',
      imageUrl:
        '/images/staff/no-face.png',
        href: '/staff/shokot',
    },
    {
      name: 'Шарыпова Татьяна Васильевна',
      role: 'Изготовление бюгельных протезов',
      imageUrl:
        '/images/staff/Sharypova.png',
        href: '/staff/sharypova',
    },
    {
      name: 'Иванова Лариса Николаевна',
      role: 'Иностранный язык',
      imageUrl:
        '/images/staff/no-face.png',
        href: '/staff/ivanova',
    },
    {
      name: 'Тимерова Римма Рудольфовна',
      role: 'Иностранный язык',
      imageUrl:
        '/images/staff/no-face.png',
        href: '/staff/timerova',
    },
    {
      name: 'Сергей',
      role: 'Изготовление несъемных протезов',
      imageUrl:
        '/images/staff/no-face.png',
        href: '/staff/director',
    },
    {
      name: 'Сергей',
      role: 'Изготовление несъемных протезов',
      imageUrl:
        '/images/staff/no-face.png',
        href: '/staff/director',
    },
    {
      name: 'Сергей',
      role: 'Изготовление несъемных протезов',
      imageUrl:
        '/images/staff/no-face.png',
        href: '/staff/director',
    },
    {
      name: 'Яровикова Светлана Сергеевна',
      role: 'Изготовление несъемных протезов',
      imageUrl:
        '/images/staff/Yarovikov.png',
        href: '/staff/yarovikova',
    },
   // More people...
 ]

const Personal: FC = () => (
   <SidebarLayout>
   <div>
      {/* Руководство и преподаватели */}
   <div className="bg-white">
      <div className="max-w-9xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-8 sm:space-y-12">
        {/* Open Button */}
        <button
        type="button"
        style={{ marginRight: "6px" }}
        className="inline-flex items-center px-2.5 py-2.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-sky-900 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Руководство образовательной организации
      </button>
      
      <button
        type="button"
        style={{ marginLeft: "0px" }}
        className="inline-flex items-center px-2.5 py-2.5 border
         border-transparent text-xs font-medium rounded shadow-sm text-white bg-sky-900 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Персональный состав педагогических работников
      </button>
      {/* TheEnd - Button */}
      {/* Руководство и преподаватели */}
          <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
            <h2 className="text-3xl font-bold text-sky-900 tracking-tight sm:text-4xl">Руководство и преподаватели</h2>
            <p className="text-xl text-gray-500">
              Состав рабочего персонала медицинского колледжа РУТ (МИИТ)
            </p>
          </div>
          <ul
            role="list"
            className="mx-auto grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-12 xl:grid-cols-6"
          >
            {people.map((person) => (
              <li key={person.name}>
                <div className="space-y-4">
                  <img className="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src={person.imageUrl} alt="" />
                  <div className="space-y-2">
                    <div className="text-xs font-medium lg:text-sm">
                    <a
                  href={person.href}
                  className="mt-8 block w-full rounded-md border border-sky-900 bg-sky-700 py-2 text-center text-sm font-semibold text-white hover:bg-sky-900"
                >
                   {person.name}
                </a>
                      <p className="text-dark-900 mt-2 text-xll">{person.role}</p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
   </div>
   </div>
   </SidebarLayout>
)

export default Personal
