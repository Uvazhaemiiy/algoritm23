import { FC } from 'react'
import { SidebarLayout } from 'layouts/SidebarLayout'




const VacanciesAdmission: FC = () => (
   <SidebarLayout>
       <div className="relative bg-white">
      <div className="lg:absolute lg:inset-0">
        <div className="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover lg:absolute lg:h-full"
            src="/images/windows/vacancies-for-admission.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="relative px-4 pt-12 pb-16 sm:px-6 sm:pt-16 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div className="lg:col-start-2 lg:pl-8">
          <div className="mx-auto max-w-prose text-base lg:ml-auto lg:mr-0 lg:max-w-lg">
            <h2 className="font-semibold leading-6 text-sky-600">Подробная информация по вакантным местам для приема</h2>
            <h3 className="mt-2 text-3xl font-bold leading-8 tracking-tight text-sky-900 sm:text-2xl">Вакантные места для приема (перевода) обучающихся</h3>
            <iframe width={540} height={308} className='mx-auto mt-4' src="https://docs.google.com/spreadsheets/d/e/2PACX-1vT8wUS5CswLbZNpctQ1n6lW5nX_v6_MGm-lz1U6zRO79l4Khguie0IGPxZJhRWD1k8pLPblZuzOI6b1/pubhtml?widget=true&amp;headers=false"></iframe>            
          </div>
          </div>
        </div>
      </div>
   </SidebarLayout>
)

export default VacanciesAdmission
