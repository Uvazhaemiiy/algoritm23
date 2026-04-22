import { FC } from 'react'
import { SidebarLayout } from 'layouts/SidebarLayout'


const Price: FC = () => (
   <SidebarLayout>
      {/* React DOM - open*/}
    <div>
      {/* Request (Заявления) - Open */}
      <div className=" max-w-12xl relative overflow-hidden bg-white py-16 ">
         {/* SVG elements - open */}

               {/* SVG elements - end */}
      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-lg">
 
             <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
             {/* <span className="mt-8 block text-center text-3xl font-bold leading-8 tracking-tight text-sky-900 sm:text-3xl">Цены и стоимость</span> */}
              <span className="mt-8 block text-center text-3xl font-bold leading-8 tracking-tight text-sky-900 sm:text-3xl">Оплата услуг компании Алгоритм 23 возможна:</span>
              <table className="min-w-full divide-y divide-gray-300 mt-4">
                <thead className="bg-gray-50">
                  <tr className="divide-x divide-gray-200">
                    <th scope="col" className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">- Почасовая. Стоимость одного часа работы от 3300 руб - до 3500 руб.</a>
                    </th>
                  </tr>
                </thead>
                <thead className="bg-gray-50">
                  <tr className="divide-x divide-gray-200">
                    <th scope="col" className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">- По бюджету проекта. Оценивается стоимость запуска проекта согласно функциональным требованиям Заказчика.</a>
                    </th>
                  </tr>
                </thead>
                <thead className="bg-gray-50">
                  <tr className="divide-x divide-gray-200">
                    <th scope="col" className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">- Также Заказчик после запуска у компании Алгоритм 23 проекта по внедрению от стоимости более 1 млн. руб., при заключении договора на сопровождение информационных систем может оформить абонемент по льготной стоимости 3000 руб. за час. (Подробности уточняйте у менеджера).</a>
                    </th>
                  </tr>
                </thead>
              </table>
             </div>           
          </div>
         </div>
        </div>
       </div>
  {/* React DOM - End*/}
   </SidebarLayout>
)

export default Price
