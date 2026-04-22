import { FC } from 'react'
import { SidebarLayout } from 'layouts/SidebarLayout'



const Mld311: FC = () => (
   <SidebarLayout>
        <main className="relative lg:min-h-full">
        <div className="h-80 overflow-hidden lg:absolute lg:w-1/2 lg:h-full lg:pr-4 xl:pr-12">
          <img
            src="/images/windows/nursing-dentistry.jpg"
            alt="Проведения предрейсовых медосмотров водителей автотранспортных средств"
            className="h-full w-full object-center object-cover"
          />
        </div>
        <div>
          <div className="max-w-2xl mx-auto py-16 px-4 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 lg:py-32 lg:grid lg:grid-cols-2 lg:gap-x-8 xl:gap-x-24">
            <div className="lg:col-start-2">
              <p className="mt-2 text-2xl font-bold tracking-tight text-sky-900 sm:text-3xl">Группа МЛД-311</p>
              <p className="mt-4 text-xl text-gray-800">
              Полный состав группы и отвественный куратор
              </p>
              <iframe className="mt-6" height="686" width="100%" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTlvTtxxFvpvUYpduym1ssF3ZK3tEBN6DpTJ8TfovLBJc8v1RmamLzvVMHAFLH4dgfNJSH9fJxFN7Wm/pubhtml?gid=1302647011&amp;single=true&amp;widget=true&amp;headers=false"></iframe>
              <p className="mt-12 text-base text-sky-900">
              <li>Категория: Фельдшера </li>
              <li>Форма обучения: очная.</li>
              </p>
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
                  <dt className="font-medium text-sky-900">Обратная связь:</dt>
                  <dd className="mt-2 space-y-2 sm:flex sm:space-y-0 sm:space-x-4">
   {/* //Кнопка звонок - open */}
   <p className="mt-4 text-sm text-gray-500">
              Связаться с отделом информатизации можно по {' '}
              <a href="https://t.me/medrut_miit" className="font-medium text-sky-600 hover:text-sky-900">
                ссылке
              </a>{' '}
              в Telegram.
            </p>
   {/* //Кнопка звонок - end */}                  
    </dd>
    </div>
     </dl>
              <div className="mt-16 border-t border-gray-200 py-6 text-right">
                <a href="/group-lists" className="text-sm font-medium text-sky-600 hover:text-sky-900">
                  Вернуться к списку групп <span aria-hidden="true"> &rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
   </SidebarLayout>
)

export default Mld311
