import { FC } from 'react'
import { SidebarLayout } from 'layouts/SidebarLayout'

const people = [
   { name: '34.02.01', title: 'Сестринское дело', email: '3 года 10 месяцев **', role: 'очная', role2: 'базовый', role3: '04.04.2024' },
   { name: '34.02.01', title: 'Сестринское дело', email: '3 года 10 месяцев *', role: 'очно-заочно', role2: 'базовый', role3: '04.04.2024' },
   { name: '31.02.01', title: 'Лечебное дело', email: '3 года 10 месяцев', role: 'очная', role2: 'углубленный', role3: '04.04.2024' },
   { name: '31.02.05', title: 'Стоматология ортопедическая', email: '2 года 10 месяцев', role: 'очная', role2: 'базовый', role3: '04.04.2024' },
   // More people...
 ]

const Education: FC = () => (
   <SidebarLayout>
      <div>
     <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="mt-4 text-xl font-semibold text-sky-900">Уровень образования: средее профессиональное образование</h1>
          <h1 className="mt-0 text-xl font-semibold text-sky-900">Язык, на котором осуществляется обучение: русский язык</h1>
          <p className="mt-6 text-xl text-gray-700">
            СВЕДЕНИЯ О РЕАЛИЗАЦИИ ОБРАЗОВАТЕЛЬНЫХ ПРОГРАММ
          </p>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
        </div>
      </div>
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr className="divide-x divide-gray-200">
                    <th scope="col" className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                      Код
                    </th>
                    <th scope="col" className="px-4 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Наименование образовательной программы
                    </th>
                    <th scope="col" className="px-4 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Нормативный срок обучения
                    </th>
                    <th scope="col" className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pr-6">
                      Форма обучения
                    </th>
                    <th scope="col" className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pr-6">
                      Уровень подготовки
                    </th>
                    <th scope="col" className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pr-6">
                      Срок действия государственной аккредитации
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {people.map((person) => (
                    <tr key={person.email} className="divide-x divide-gray-200">
                      <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-6">
                        {person.name}
                      </td>
                      <td className="whitespace-nowrap p-4 text-sm text-gray-500">{person.title}</td>
                      <td className="whitespace-nowrap p-4 text-sm text-gray-500">{person.email}</td>
                      <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-6">{person.role}</td>
                      <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-6">{person.role2}</td>
                      <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-6">{person.role3}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <p className="mt-6 text-xl text-sky-900">
          Дополнительные сведения:
          </p>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
        </div>
      </div>
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr className="divide-x divide-gray-200">
                    <th scope="col" className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                    <a href="https://docs.google.com/spreadsheets/d/10YS8K3CjblFGHLDdvD6g9CYwKxnLgoRxmvJtQWJIQc4/edit?usp=sharing" className="font-medium text-indigo-600 hover:text-indigo-500">     1. Сведения о реализации образовательных программ </a>
                    </th>
                  </tr>
                </thead>
                <thead className="bg-gray-50">
                  <tr className="divide-x divide-gray-200">
                    <th scope="col" className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                    <a href="https://medrut-miit.college/pages/educational-programs" className="font-medium text-indigo-600 hover:text-indigo-500">    2. Образовательные программы</a>
                    </th>
                  </tr>
                </thead>
                <thead className="bg-gray-50">
                  <tr className="divide-x divide-gray-200">
                    <th scope="col" className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                    <a href="https://docs.google.com/document/d/1Nr3yg8CK0yNcdmjXkXkuurYe0bkP_TRVJ9M0nbiB6QE/edit?usp=sharing" className="font-medium text-indigo-600 hover:text-indigo-500">     3. Информация о практиках</a>
                    </th>
                  </tr>
                </thead>
                <thead className="bg-gray-50">
                  <tr className="divide-x divide-gray-200">
                    <th scope="col" className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                    <a href="https://docs.google.com/spreadsheets/d/1RnA1jSYfzVV_845ySqxQjzQIek9JkHCKD7GYxvoLfUU/edit?usp=sharing" className="font-medium text-indigo-600 hover:text-indigo-500">     4. Информация о численности обучающихся</a>
                    </th>
                  </tr>
                </thead>
                <thead className="bg-gray-50">
                  <tr className="divide-x divide-gray-200">
                    <th scope="col" className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                    <a href="https://docs.google.com/spreadsheets/d/1h5AM2PhKrRDUqAggwMvzpM7oqbihAowW4lmXv1N2Lso/edit?usp=sharing" className="font-medium text-indigo-600 hover:text-indigo-500">     5. Информация о результатах переводов, восстановления и отчисления</a>
                    </th>
                  </tr>
                </thead>
                <thead className="bg-gray-50">
                  <tr className="divide-x divide-gray-200">
                    <th scope="col" className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                    <a href="https://docs.google.com/spreadsheets/d/1jw2_BBcaf8avnhgLTJg6oDu8Bdn49fUmZvHAXAzRiTk/edit?usp=sharing" className="font-medium text-indigo-600 hover:text-indigo-500">     6. Информация о результатах приема</a>
                    </th>
                  </tr>
                </thead>
                <thead className="bg-gray-50">
                  <tr className="divide-x divide-gray-200">
                    <th scope="col" className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                    <a href="https://drive.google.com/drive/folders/1TJBuHIiFkpOY5gF3TB_O6cRDvd9--WL7?usp=sharing" className="font-medium text-indigo-600 hover:text-indigo-500">    7. Архив учебных планов</a>
                    </th>
                  </tr>
                  </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
   </SidebarLayout>
)

export default Education
