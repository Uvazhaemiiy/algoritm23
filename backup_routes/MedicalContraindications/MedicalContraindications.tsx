import { FC } from 'react'
import { SidebarLayout } from 'layouts/SidebarLayout'



const MedicalContraindications: FC = () => (
   <SidebarLayout>
      <div>
       <span className="mt-8 block text-center text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-2xl"> Договора СПО:</span>
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr className="divide-x divide-gray-200">
                    <th scope="col" className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                    <a href="https://drive.google.com/file/d/19VxvBCdyjWE51v5hdnnLwwn7D9RMwJJz/view?usp=sharing" className="font-medium text-indigo-600 hover:text-indigo-500">Перечень общих медицинских противопоказаний СПО</a>
                    </th>
                  </tr>
                </thead>
              </table>
            </div>
         </div>
       </div>
              
   </SidebarLayout>
)

export default MedicalContraindications
