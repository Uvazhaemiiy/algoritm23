import { FC } from 'react'
import { SidebarLayout } from 'layouts/SidebarLayout'


const Medrequirement: FC = () => (
   <SidebarLayout>
     <div className="overflow-hidden bg-white">
      <div className="relative mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
        <div className="absolute top-0 bottom-0 left-3/4 hidden w-screen bg-gray-50 lg:block" />
        <div className="mx-auto max-w-prose text-base lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-8">
          <div>
            <h2 className="text-lg font-semibold text-sky-600">Медицинский колледж РУТ (МИИТ)</h2>
            <h3 className="mt-2 text-3xl font-bold leading-8 tracking-tight text-sky-900 sm:text-4xl">Требование к медицинской документации</h3>
          </div>
        </div>
        <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="relative lg:col-start-2 lg:row-start-1">
            <svg
              className="absolute top-0 right-0 -mt-20 -mr-20 hidden lg:block"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={404} height={384} fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)" />
            </svg>
            <div className="relative mx-auto max-w-prose text-base lg:max-w-none">
              <figure>
                <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                  <img
                    className="rounded-lg object-cover object-center shadow-lg"
                    src="/images/windows/tax-forms-med.jpg"
                    alt="Whitney leaning against a railing on a downtown street"
                    width={1184}
                    height={1376}
                  />
                </div>
              </figure>
            </div>
          </div>
          <div className="mt-8 lg:mt-0">
            <div className="mx-auto max-w-prose text-base lg:max-w-none">
              <p className="text-lg text-gray-500">
              При поступлении на обучение по следующим специальностям среднего профессионального образования поступающие должны пройти обязательный медицинский осмотр: Справка - 086/у
              </p>
              <p className="mt-2"> 31.02.01 Лечебное дело; </p>
              <p>31.02.05 Стоматология ортопедическая;</p>
              <p>34.02.01 Сестринское дело.</p>
            </div>
            <div className="prose prose-indigo mx-auto mt-6 text-gray-500 lg:col-start-1 lg:row-start-1 lg:max-w-none">
              <p>
              Медицинский осмотр должен включать в себя следующих врачей-специалистов:
              <p className="mt-2  text-gray-900">− Терапевт; </p>
              <p className="mt-1  text-gray-900">− Невролог;</p>
              <p className="mt-1  text-gray-900">− Оториноларинголог;</p>
              <p className="mt-1  text-gray-900">− Офтальмолог;</p>
              <p className="mt-1  text-gray-900">− Хирург.</p>
              </p>
              <p className="mt-6">
              Медицинский осмотр должен включать в себя следующие лабораторные инструментальные исследования:
              </p>
              <p className="mt-2  text-gray-900"> − Клинический анализ крови (гемоглобин, цветной показатель, эритроциты, тромбоциты, лейкоциты, лейкоцитарная формула, СОЭ); </p>
              <p className="mt-1  text-gray-900">− Клинический анализ мочи (удельный вес, белок, сахар, микроскопия осадка);</p>
              <p className="mt-1  text-gray-900">− Цифровая флюорография или рентгенография в 2-х проекциях (прямая и правая боковая) легких.;</p>
              <p className="mt-6">
              Вы можете ознакомиться с перечнем медицинских противопоказаний для обучающихся по специальностям и направлениям подготовки, входящим 
              в Перечень специальностей и направлений подготовки, при приеме на обучение по которым поступающие проходят обязательные предварительные медицинские осмотры (обследования):
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
   </SidebarLayout>
)

export default Medrequirement
