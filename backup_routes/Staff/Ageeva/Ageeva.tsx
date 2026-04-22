import { FC } from 'react'
import { SidebarLayout } from 'layouts/SidebarLayout'

const features = [
   {
     name: 'Занимаемая должность',
     description:
       'Зав. отделением очной формы / Преподаватель',
   },
   { name: 'Статус', 
     description: 'Руководство' },
   {
     name: 'Преподаваемые учебные предметы, курсы, дисциплины (модули)',
     description:
       'Иностранный язык',
   },
   { 
      name: 'Квалификационная категория', 
     description: "Высшая категория по распоряжению Минтранса России от 14.12.2021 №ИЧ-260-р" 
   },
   { 
      name: 'Уровень образования / Квалификация / Наименование направления подготовки и (или) специальности', 
     description: "Высшее образование: 06.07.2009/ 031201/ Теория и методика преподавания иностранных языков и культур / Лингвист, преподаватель / ГОУ ВПО Московский педагогический государственный университет" 
   },
   { 
      name: 'Ученая степень и (или) ученое звание', 
     description: 'Информация отсутствует' 
   },
   { 
      name: 'Повышение квалификации и (или) профессиональная переподготовка', 
      description: '2018/ ЦВШПМ РУТ (МИИТ)/ Формирование профессиональной компетентности преподавателя в системе СПО/ 16 ч.',
      description1: '2017/ ГАОУ ВО МИОО/ Особенности обучения английскому языку в основной школе в контексте реализации ФГОС/ 72 ч.',
      description2: '2017/ ФПКП МГУПС (МИИТ)/ Оказание первой помощи населению/ 14 ч',
      description3: '2015/ АНО "Школа Китайгородской"/ Активация иноязычной речевой деятельности. Интенсивный курс немецкого языка/ 36 ч.',
      description4: '2012/ АНО "Институт развития современных образовательных технологий"/ Внедрение современных моделей социализации и реабилитации подростков с девиантным поведением в специальных учебно-воспитательных учреждениях/ 72 ч.',
   },
   { 
      name: 'Общий стаж работы	', 
      description: '9 л. 3 мес.      ' 
   },
   { 
      name: 'Стаж работы по специальности	', 
      description: '11 л. 3 мес.      ' 
   },
   { 
      name: 'Опыт работы	', 
      description: '01.09.2015 — по настоящее время преподаватель / РУТ (МИИТ), Медицинский колледж      ' 
   },
 ]
 
const Ageeva: FC = () => (
   <SidebarLayout>
       <div className="bg-white">
      <div className="mx-auto max-w-2xl py-24 px-4 sm:py-32 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 items-center gap-y-16 gap-x-8 lg:grid-cols-2">
          <div>
            <div className="border-b border-gray-200 pb-10">
              <h2 className="font-medium text-gray-900">Фамилия, имя, отчество</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Агеева Елена Викторовна</p>
            </div>

            <dl className="mt-2 space-y-6">
              {features.map((feature) => (
                <div key={feature.name}>
                  <dt className="text-sm font-medium text-gray-900">{feature.name}</dt>
                  <dd className="mt-3 text-sm text-gray-500">{feature.description}</dd>
                  <dd className="mt-3 text-sm text-gray-500">{feature.description1}</dd>
                  <dd className="mt-3 text-sm text-gray-500">{feature.description2}</dd>
                  <dd className="mt-3 text-sm text-gray-500">{feature.description3}</dd>
                  <dd className="mt-3 text-sm text-gray-500">{feature.description4}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div>
            <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-100">
              <img
                src="/images/staff/ageeva-miit.jpg"
                alt="Black kettle with long pour spot and angled body on marble counter next to coffee mug and pour-over system."
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4 sm:mt-6 sm:gap-6 lg:mt-8 lg:gap-8">
              <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg">
                <img
                  src="/images/staff/miit-teatr.jpg"
                  alt="Detail of temperature setting button on kettle bass with digital degree readout."
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg">
                <img
                  src="/images/windows/mk-rut-miit-logo-site.svg"
                  alt="Kettle spout pouring boiling water into coffee grounds in pour-over mug."
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   </SidebarLayout>
)

export default Ageeva
