import { FC } from 'react'
import { SidebarLayout } from 'layouts/SidebarLayout'



const Request: FC = () => (
   <SidebarLayout>
      {/* React DOM - open*/}
      <div>
      {/* Request (Заявления) - Open */}
      <div className=" max-w-12xl relative overflow-hidden bg-white py-16 ">
         {/* SVG elements - open */}
      <div className="hidden lg:absolute lg:inset-y-0 lg:block lg:h-full lg:w-full">
        <div className="relative mx-auto h-full max-w-prose text-lg" aria-hidden="true">
          <svg
            className="absolute top-12 left-full translate-x-32 transform"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={384} fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)" />
          </svg>
          <svg
            className="absolute top-1/2 right-full -translate-y-1/2 -translate-x-32 transform"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={384} fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
          </svg>
          <svg
            className="absolute bottom-12 left-full translate-x-32 transform"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="d3eb07ae-5182-43e6-857d-35c643af9034"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={384} fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)" />
          </svg>
        </div>
      </div>
               {/* SVG elements - end */}
      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-lg">
          <h1>
            <span className="block text-center text-xl font-semibold text-indigo-600">Подача документов проходит дистанционно, лично в колледж, через операторов почтовой связи общего пользования.</span>
            {/* Image - Request - open */}
            <figure>
            <img
              className="mx-auto rounded-lg mt-2"
              src="/images/medcollege-miit.png"
              alt=""
              width={980}
              height={373}
            />
          </figure>
            {/* Image - Request - end */}
            <span className="mt-8 block text-center text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
            Важно знать:
            </span>
            <span className="mt-2 block text-center text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-2xl">1. Как дистанционно подать документы в Медицинский Колледж РУТ (МИИТ)?</span>
          </h1>
          <p className="mt-4 text-xl leading-8 text-gray-500">
              1. Зарегистрироваться в {' '}
              <a href="https://rut-miit.ru/reg/" className="font-medium text-indigo-600 hover:text-indigo-500">
              Личном кабинете
              </a>{' '}
            </p>
             {/* Image - Request - open */}
        <figure>
            <img
              className="mx-auto rounded-lg mt-2"
              src="/images/podasha-zajavlenia-rut-miit.png"
              alt=""
              width={810}
              height={373}
            />
          </figure>
          {/* Image - Request - end */}
          </div>
          <div className="mx-auto max-w-4xl text-lg">
          <p className="mt-8 text-xl leading-8 text-gray-500">
              2. В личном кабинете, в разделе «Персональная информация», выбрать «Мое поступление»:
            </p>
            {/* Image - Request - open */} 
            <figure>
            <img
              className="mx-auto rounded-lg"
              src="/images/postuplenie-mk-rut-miit.png"
              alt=""
              width={810}
              height={373}
            />  
          </figure>
            {/* Image - Request - end */}
            <div className="mx-auto max-w-4xl text-lg">
             <p className="mt-8 text-xl leading-8 text-gray-500">
               3. Выбрать «Заполнить заявление»:
             </p>
              {/* Image - Request - open */}
            <figure>
            <img
              className="mx-auto rounded-lg"
              src="/images/postuplenie-mk-rut-miit2.png"
              alt=""
              width={810}
              height={373}
            />
          </figure>
            {/* Image - Request - end */}
            <div className="mx-auto max-w-4xl text-lg">
            <p className="mt-8 text-xl leading-8 text-gray-500">
            4. Указать ВСЕ необходимые сведения и сформировать заявление:
            </p>
              </div>
              {/* Image - Request - open */}
             <figure>
             <img
              className="mx-auto rounded-lg"
              src="/images/postuplenie-mk-rut-miit2.png"
              alt=""
              width={810}
              height={373}
            />
            </figure>
            {/* Image - Request - end */}
            <div className="mx-auto max-w-4xl text-lg">
            <p className="mt-8 text-xl leading-8 text-gray-500">
            5. Прикрепите сканы документов. Обратите внимание на требования к файлам:
            </p>
            <p className="mt-2 text-xl leading-8 text-gray-500">
            При указании льготы, во вкладке «Прикрепление документов» также появится возможность прикрепить документ, подтверждающий её наличие.
            </p>
              </div>
              {/* Image - Request - open */}
             <figure>
             <img
              className="mx-auto rounded-lg mt-4"
              src="/images/padasha-doc-miit.png"
              alt=""
              width={810}
              height={373}
            />
            </figure>
           <div className="mx-auto max-w-4xl text-lg">
            <p className="mt-8 text-xl leading-8 text-gray-500">
            6. Подготовьте полный комплект документов и пришлите его на почту:
            </p>
              </div>
              {/* Image - Request - open */}
             <figure>
             <img
              className="mx-auto rounded-lg"
              src="/images/padasha-doc-miit1.png"
              alt=""
              width={810}
              height={373}
            />
            </figure>
            {/* Email send - open */}
            <p className="block text-center mt-8 text-xl leading-8 text-gray-900 ">
            Электронные адреса для направления документов:
            </p>
            <p className="block text-center mt-1 text-lg leading-8 text-blue-700">
           1.) pk.med@miit.ru
            </p>
            <p className="block text-center mt-0 text-lg leading-8 text-blue-700">
           2.) pk.med@miit.ru
            </p>
           {/* Email send - end */}
           {/* List table - open  */}
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <p className="block text-center mt-8 text-xl text-gray-900">
          Перечень документов, необходимых для поступления по программам среднего специального образования:
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
                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">Документ государственного образца об образовании (аттестат);</a>
                    </th>
                  </tr>
                </thead>
                <thead className="bg-gray-50">
                  <tr className="divide-x divide-gray-200">
                    <th scope="col" className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">Документ, удостоверяющий личность и гражданство (паспорт, вид на жительство и т.д.);</a>
                    </th>
                  </tr>
                </thead>
                <thead className="bg-gray-50">
                  <tr className="divide-x divide-gray-200">
                    <th scope="col" className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">Заявление на поступление (кнопка «проект заявления» в личном кабинете);</a>
                    </th>
                  </tr>
                </thead>
                <thead className="bg-gray-50">
                  <tr className="divide-x divide-gray-200">
                    <th scope="col" className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                    <a href="https://www.miit.ru/content/%D0%A1%D0%BE%D0%B3%D0%BB%D0%B0%D1%81%D0%B8%D0%B5%20%D0%BD%D0%B0%20%D0%BE%D0%B1%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D1%83%20%D0%9F%D0%94.pdf?id_wm=852257" className="font-medium text-indigo-600 hover:text-indigo-500">Согласие на обработку персональных данных: PDF;</a>
                    </th>
                  </tr>
                </thead>
                <thead className="bg-gray-50">
                  <tr className="divide-x divide-gray-200">
                    <th scope="col" className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                    <a href="https://www.miit.ru/content/%D0%97%D0%B0%D1%8F%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5%20%D0%BE%20%D0%B7%D0%B0%D1%87%D0%B5%D1%82%D0%B5%20%D0%BE%D1%86%D0%B5%D0%BD%D0%BE%D0%BA.docx?id_wm=848980" className="font-medium text-indigo-600 hover:text-indigo-500">Заявление о зачете оценок: DOCX документ MS Word;</a>
                    </th>
                  </tr>
                </thead>
                <thead className="bg-gray-50">
                  <tr className="divide-x divide-gray-200">
                    <th scope="col" className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                    <a href="https://rut-miit.ru/admissions/office/136668" className="font-medium text-indigo-600 hover:text-indigo-500">Документы, подтверждающие наличие индивидуальных достижений, при их наличии (перечень индивидуальных достижений).</a>
                    </th>
                  </tr>
                </thead>
              </table>
              </div>
             </div>
            </div>
           </div> 
          </div>
      {/* List table - end  */}
         </div>
        </div>
       </div>
     </div>
   </div>
  {/* React DOM - End*/}
   </SidebarLayout>
)

export default Request
