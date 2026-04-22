import { FC } from 'react'
import { SidebarLayout } from 'layouts/SidebarLayout'



const Download: FC = () => (
   <SidebarLayout>
     <div className="overflow-hidden bg-gray-950 py-32">
      <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
          <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
            <h2 className="text-3xl font-bold tracking-tight text-red-600 sm:text-4xl">Скачать клиент R2:Online</h2>
            <p className="mt-6 text-xl leading-8 text-white">
              Для того чтобы начать играть вам необходимо скачать Laucher проекта Daiquiri и установить на свой компьютер
            </p>
            <p className="mt-6 text-base leading-7 text-white">
            Скаченный лаунчер необходимо перенести в пустую папку на желаемом диске (например: C:/R2OnlineDaiquiri) 
               После запуска, лаунчер скачает и установит все необходимые файлы для игры.
            </p>
            <div className="mt-10 flex">
              <a
                href="#"
                className="rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Скачать с сайта <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
            <div className="mt-4 flex">
              <a
                href="https://disk.yandex.ru/d/wAaEzpzthLZCzQ"
                className="rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Скачать с Yandex Disk <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
            <div className="mt-4 flex">
              <a
                href="https://drive.google.com/file/d/1kPlCwsiELD_rNnrloPWmIoWUK53L8yb3/view"
                className="rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Скачать с Google Disk <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
            <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
              <img
                src="/images/windows-daiquiri/r2-reign-of-revolution-download.png"
                alt=""
                className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"
              />
            </div>
            <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
              <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                <img
                  src="/images/windows-daiquiri/r2-reign-of-revolution-download3.png"
                  alt=""
                  className="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                />
              </div>
              <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                <img
                  src="/images/windows-daiquiri/r2-reign-of-revolution-download1.png"
                  alt=""
                  className="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                />
              </div>
              <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                <img
                  src="/images/windows-daiquiri/r2-reign-of-revolution-download2.png"
                  alt=""
                  className="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   </SidebarLayout>
)

export default Download
