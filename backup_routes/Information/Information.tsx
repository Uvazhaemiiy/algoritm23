import { FC } from 'react'
import { SidebarLayout } from 'layouts/SidebarLayout'

const products = [
   {
     id: 1,
     name: 'Полное наименование учреждения',
     href: '#',
     color: '- ФГАОУ ВО (Федеральное государственное автономное образовательное учреждение высшего образования) "Российский университет транспорта" РУТ (МИИТ) Медицинский колледж',
     imageSrc: 'https://tailwindui.com/img/ecommerce-images/confirmation-page-06-product-01.jpg',
     imageAlt: "Model wearing men's charcoal basic tee in large.",
   },
   {
      id: 2,
      name: 'Сокращенное наименование',
      color: '- МК РУТ (МИИТ)',
   },
   {
      id: 3,
      name: 'Дата создания',
      color: '- 1962 год',
   },
   {
      id: 4,
      name: 'Учредитель',
      color: '- Министерство Транспорта Российской Федерации',
   },
   {
      id: 5,
      name: 'Наименование специальности по направлениям',
      color: '- Лечебное дело;',
      size: '- Сестринское дело;',
      dude: '- Стоматология ортопедическая',
   },
   {
      id: 6,
      name: 'Форма обучения',
      color: '- Очная форма обучения',
      size: '- Очно-заочная форма обучения',
   },
   {
      id: 7,
      name: 'Общежитие',
      color: '- Нет',
   },
   {
      id: 8,
      name: 'Адрес фактический',
      color: '- 129128, г. Москва, ул. Будайская, дом 2 корп. 18',
   },
   {
      id: 9,
      name: 'Учебные корпуса',
      color: '127994, г. Москва, ул. Образцова д.9 стр-9',
   },
   {
      id: 10,
      name: 'Адрес сайта',
      color: '127994, г. Москва, ул. Образцова д.9 стр-9',
   },
   {
      id: 11,
      name: 'Электронная почта учреждения',
      color: '127994, г. Москва, ул. Образцова д.9 стр-9',
   },
   {
      id: 12,
      name: 'Адрес приемной комиссии',
      color: '127994, г. Москва, ул. Образцова д.9 стр-9',
   },
   // More products...
 ]

const Information: FC = () => (
   <SidebarLayout>
   <main className="relative lg:min-h-full">
        <div className="h-80 overflow-hidden lg:absolute lg:w-1/2 lg:h-full lg:pr-4 xl:pr-12">
          <img
            src="/images/windows/information-mk-miit.jpg"
            alt="TODO"
            className="h-full w-full object-center object-cover"
          />
        </div>

        <div>
          <div className="max-w-2xl mx-auto py-16 px-4 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 lg:py-32 lg:grid lg:grid-cols-2 lg:gap-x-8 xl:gap-x-24">
            <div className="lg:col-start-2">
              <p className="mt-2 text-2xl font-bold tracking-tight text-sky-900 sm:text-3xl">Сведения об образовательной организации МК РУТ (МИИТ).</p>
              <p className="mt-2 text-base text-gray-500">
              Основные сведения Медицинского Колледжа РУТ (МИИТ)
              </p>
              <ul
                role="list"
                className="mt-6 text-sm font-medium text-gray-500 border-t border-gray-200 divide-y divide-gray-200"
              >
                {products.map((product) => (
                  <li key={product.id} className="flex py-2 space-x-2">
                    <div className="flex-auto space-y-1">
                      <h3 className="text-gray-900">
                        <a href={product.href}>{product.name}</a>
                      </h3>
                      <p>{product.color}</p>
                      <p>{product.size}</p>
                      <p>{product.dude}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <dl className="mt-16 grid grid-cols-2 gap-x-4 text-sm text-gray-600">
                <div>
                  <dt className="font-medium text-sky-900">Адрес колледжа</dt>
                  <dd className="mt-2">
                    <address className="not-italic">
                      <span className="block">129128, г. Москва</span>
                      <span className="block">ул. Будайская</span>
                      <span className="block">дом 2 корп. 18</span>
                    </address>
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-sky-900">Контактные данные:</dt>
                  <dd className="mt-2 space-y-2 sm:flex sm:space-y-0 sm:space-x-4">                      
                    <div className="flex-auto">
                      <p className="text-gray-900">Тел: +7-499-187-84-74 </p>
                      <p>Email: info@medrut-miit.college</p>
                    </div>
                  </dd>
                </div>
              </dl>

              <div className="mt-16 border-t border-gray-200 py-6 text-right">
                <a href="/" className="text-sm font-medium text-sky-600 hover:text-sky-900">
                  Вернуться на главную<span aria-hidden="true"> &rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
   </SidebarLayout>
)

export default Information
