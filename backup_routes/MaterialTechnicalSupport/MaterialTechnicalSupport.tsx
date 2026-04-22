import { FC } from 'react'
import { SidebarLayout } from 'layouts/SidebarLayout'



const MaterialTechnicalSupport: FC = () => (
   <SidebarLayout>
      <div>
      <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <p className="mt-6 text-xl text-gray-900">
          Материально-техническое обеспечение и оснащенность образовательного процесса:
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
                    <a href="https://medrut-miit.college/pages/medical-library" className="font-medium text-indigo-600 hover:text-indigo-500">     1. Сведения о библиотеке</a>
                    </th>
                  </tr>
                </thead>
                <thead className="bg-gray-50">
                  <tr className="divide-x divide-gray-200">
                    <th scope="col" className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">    2. Сведения о доступе к информационным системам и технологиям</a>
                    </th>
                  </tr>
                </thead>
                <thead className="bg-gray-50">
                  <tr className="divide-x divide-gray-200">
                    <th scope="col" className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                    <a href="https://medrut-miit.college/pages/information-offices" className="font-medium text-indigo-600 hover:text-indigo-500">    3.  Сведения о кабинетах</a>
                    </th>
                  </tr>
                </thead>
                <thead className="bg-gray-50">
                  <tr className="divide-x divide-gray-200">
                    <th scope="col" className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                    <a href="https://medrut-miit.college/pages/ohrana-zdorovja" className="font-medium text-indigo-600 hover:text-indigo-500">     4. Сведения об объектах охраны здоровья обучающихся</a>
                    </th>
                  </tr>
                </thead>
                <thead className="bg-gray-50">
                  <tr className="divide-x divide-gray-200">
                    <th scope="col" className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                    <a href="https://medrut-miit.college/pages/information-sports-objects" className="font-medium text-indigo-600 hover:text-indigo-500">     5. Сведения об объектах спорта</a>
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

export default MaterialTechnicalSupport
