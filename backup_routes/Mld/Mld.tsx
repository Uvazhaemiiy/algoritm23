import { FC } from 'react'
import { SidebarLayout } from 'layouts/SidebarLayout'


const Mld: FC = () => (
   <SidebarLayout>
        <div className="bg-white pt-16 lg:py-24">
      <div className="bg-sky-900 pb-16 lg:relative lg:z-10 lg:pb-0">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-8 lg:px-8">
          <div className="relative lg:-my-4 mx-auto">
            <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1/8 bg-white lg:hidden" />
            <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:h-full lg:p-0">
              <div className="aspect-w-10 aspect-h-6 overflow-hidden rounded-xl shadow-xl sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full">
                <img
                  className="object-cover lg:h-full lg:w-full mt-2"
                  src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="mt-12 lg:col-span-2 lg:m-0 lg:pl-8">
            <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-10 lg:py-20">
              <blockquote>
                <div>
                  <svg
                    className="h-12 w-12 text-white opacity-25"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    aria-hidden="true"
                  >
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="mt-6 text-2xl font-medium text-white">
                    По вопросам расписания очной формы обучение, обратитесь в кабинет №1
                  </p>
                </div>
                <footer className="mt-6">
                  <p className="text-base font-medium text-white">Агеева Елена Викторовна</p>
                  <p className="text-base font-medium text-indigo-100">Зав. отделением очной формы</p>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
    <iframe width="100%" height="1060"  src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTEGT20mSiZzDWBChFJDxMFH7zl9LisjDf4eVpSOA2OjeA8cNl7HkBhtSDxSYCurBDdf3qUuS8zL6JG/pubhtml?widget=true&amp;headers=false"></iframe>
   </SidebarLayout>
)

export default Mld
