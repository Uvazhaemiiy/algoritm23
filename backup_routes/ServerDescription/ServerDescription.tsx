import { FC } from 'react'
import { SidebarLayout } from 'layouts/SidebarLayout'




const ServerDescription: FC = () => (
   <SidebarLayout>
      <div className="bg-gradient-to-t from-rose-900 via-black to-black py-24 sm:py-10">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-red-500 sm:text-4xl">Описание сервера R2:Online - Daiquiri</h1>
          <p className="mt-4 text-white">Daiquiri Games - это команда опытных специалистов, которая предлагает своему комьюнити качественный сервис для комфортной и бесконечно захватывающей игры только на наших серверах.</p>
          <div className="mt-10 grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-white lg:max-w-none lg:grid-cols-2">
            <div>
            <h1 className="mt-0 text-3xl font-bold tracking-tight text-red-700 sm:text-2xl">Сервер: Daiquiri (PVP)</h1>
              <p className="mt-4">
              Сервер просто охуительный для реал задротов, почувствуй уровь бога, На сервере Daiquiri установлены следующие рейтинги:
              </p>
              <p className="mt-8">
              <p>- Дроп - х20</p>
              <p>- Опыт - х40</p>
              <p>- Серебро - х1</p>
              <p>- Квест - x5</p>
              </p>
            </div>
            <div>
            <h1 className="mt-0 text-3xl font-bold tracking-tight text-red-700 sm:text-2xl">Сервер: Samsara (Hardcore)</h1>
              <p className="mt-4">
                Сервер просто охуительный для реал задротов, почувствуй уровь бога, На сервере Daiquiri установлены следующие рейтинги:
              </p>
              <p className="mt-8">
              <p>- Опыт - х1</p>
              <p>- Серебро - х1</p>
              <p>- Квест - x1</p>
              <p>- Дроп - х1</p>
              </p>
            </div>
          </div>
          <div className="mt-6 flex ">
            <a
              href="/download-r2"
              className="rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Начать игру
            </a>
          </div>
        </div>
      </div>
      <div className="relative overflow-hidden pt-16 lg:pt-20 -mt-6">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <img
            className="mb-[-15%] rounded-xl shadow-2xl ring-1 ring-gray-900/10 "
            src="/images/windows-daiquiri/r2-online.png"
            alt=""
          />
          <div className="relative" aria-hidden="true">
            <div className="absolute -inset-x-0 bottom-0 bg-gradient-to-t from-red-950 pt-[15%]" />
          </div>
        </div>
      </div>
    </div>
   </SidebarLayout>
)

export default ServerDescription
