import { FC } from 'react'
import { SidebarLayout } from 'layouts/SidebarLayout'




const Registration: FC = () => (
   <SidebarLayout>
     <div className="bg-gradient-to-t from-rose-900 via-black to-black py-14 sm:py-20">
      <div className="mx-auto max-w-2xl px-6 lg:px-8">
      <div className="py-0 sm:py-10">
     <form className="w-full max-w-bg">
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="grid-first-name">
        Введите логин:
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane"/>
      <p className="text-red-500 text-xs italic">Такой логин уже существует.</p>
    </div>
    <div className="w-full px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="grid-first-name">
        E-mail адрес:
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="E-mail@gmail.com"/>
      <p className="text-red-500 text-xs italic">Данный электроный адрес уже существует.</p>
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="grid-password">
        Введите пароль
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="******************" />
      <p className="text-white text-xs italic">Ваш пароль</p>
    </div>
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="grid-password">
        Повторите пароль
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="******************" />
      <p className="text-white text-xs italic">Введите свой пароль повторно</p>
    </div>
  </div>
  <div className="md:w-2/3">
      <button className="shadow bg-red-500 hover:bg-red-900 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
        Регистрация
      </button>
    </div>
</form>
</div>
        </div>
      </div>

   </SidebarLayout>
)

export default Registration
