import { FC, useState } from 'react'
import { SidebarLayout } from 'layouts/SidebarLayout'
import { ContactForm } from 'shared/ContactForm'
import { products } from './products'

const Catalog1C: FC = () => {
  const [showForm, setShowForm] = useState(false)

  return (
    <SidebarLayout>
      <div className="mx-auto w-full max-w-6xl space-y-6 py-2">
        <section className="rounded-2xl bg-slate-900 px-5 py-10 sm:px-8 sm:py-12">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[.2em] text-blue-300">Каталог продуктов</p>
            <h1 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl">Цены на программные продукты 1С</h1>
            <p className="mt-4 text-base leading-7 text-slate-300">
              Для приобретения программы обращайтесь к менеджеру. Мы оказываем полный цикл услуг: подбор, продажа, установка,
              настройка, внедрение и сопровождение программных решений 1С.
            </p>
          </div>
        </section>

        <section className="mx-auto w-full max-w-5xl rounded-2xl border border-slate-700 bg-slate-800/60 p-4 sm:p-6">
          <div className="overflow-x-auto">
            <table className="min-w-full overflow-hidden rounded-xl border border-slate-700 bg-slate-900 text-sm">
              <thead className="bg-slate-800 text-slate-100">
                <tr>
                  <th className="px-4 py-3 text-left font-bold sm:px-5">Наименование</th>
                  <th className="px-4 py-3 text-right font-bold sm:px-5">Цена</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, index) => (
                  <tr key={`${index}-${product.name}`} className="border-t border-slate-700 text-slate-200 hover:bg-slate-800/80">
                    <td className="px-4 py-3 leading-6 sm:px-5">{product.name}</td>
                    <td className="px-4 py-3 text-right font-semibold whitespace-nowrap text-blue-300 sm:px-5">{product.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mx-auto w-full max-w-5xl rounded-2xl bg-gradient-to-br from-slate-800 to-blue-800 p-6 sm:p-7 text-white">
          <h2 className="text-xl font-extrabold sm:text-2xl">Хотите приобрести продукт 1С?</h2>
          <p className="mt-3 max-w-md text-sm leading-6 text-slate-200">
            Оставьте заявку — менеджер свяжется с вами, уточнит детали и поможет с подбором и оформлением.
          </p>

          {!showForm && (
            <button
              type="button"
              onClick={() => setShowForm(true)}
              className="mt-5 inline-flex items-center justify-center rounded-full bg-gray-600 px-8 py-4 text-base font-semibold text-white shadow-md ring-1 ring-gray-300/30 transition-colors duration-200 hover:bg-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-800"
            >
              Отправить заявку
            </button>
          )}

          {showForm && (
            <>
              <ContactForm subject="Новая заявка с сайта algoritm23.net (Каталог 1С)" />
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="mt-3 text-sm text-slate-300 underline hover:text-white"
              >
                Скрыть форму
              </button>
            </>
          )}
        </section>
      </div>
    </SidebarLayout>
  )
}

export default Catalog1C
