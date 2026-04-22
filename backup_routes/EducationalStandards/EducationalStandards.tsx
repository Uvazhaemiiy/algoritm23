import { FC } from 'react'
import { SidebarLayout } from 'layouts/SidebarLayout'



const EducationalStandards: FC = () => (
   <SidebarLayout>
      <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <p className="mt-6 text-xl text-sky-900">
          Образовательные стандарты Медицинского Колледжа РУТ (МИИТ)
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
                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">      34.02.01 Сестринское дело </a>
                    </th>
                  </tr>
                </thead>
                <thead className="bg-gray-50">
                  <tr className="divide-x divide-gray-200">
                    <th scope="col" className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">      31.02.01 Лечебное дело</a>
                    </th>
                  </tr>
                </thead>
                <thead className="bg-gray-50">
                  <tr className="divide-x divide-gray-200">
                    <th scope="col" className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">     31.02.05 Стоматология ортопедическая</a>
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
   </SidebarLayout>
)

export default EducationalStandards
