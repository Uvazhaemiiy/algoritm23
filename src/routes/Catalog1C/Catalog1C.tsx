import { FC } from 'react'
import { SidebarLayout } from 'layouts/SidebarLayout'

const products = [
  {
    name: '«1С:Бухгалтерия 8 для 1. Электронная поставка»',
    price: '3 000 руб.'
  },
  {
    name: '«1С:Бухгалтерия 8 Базовая. Коробочная поставка»',
    price: '6 000 руб.'
  },
  {
    name: '«1С:Бухгалтерия 8 Базовая. Электронная поставка»',
    price: '3 600 руб.'
  },
  {
    name: '«1С:Бухгалтерия 8 ПРОФ. Коробочная поставка»',
    price: '15 400 руб.'
  },
  {
    name: '«1С:Бухгалтерия 8 ПРОФ. Электронная поставка»',
    price: '15 400 руб.'
  },
  {
    name: '1С:Предприятие 8 ПРОФ. Клиентская лицензия на 5 рабочих мест. Электронная поставка',
    price: '23 800 руб.'
  }
]

const Catalog1C: FC = () => (
  <SidebarLayout>
    <div className="mx-auto w-full max-w-6xl space-y-6 py-2">
      <section className="rounded-2xl bg-slate-900 px-5 py-10 sm:px-8 sm:py-12">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[.2em] text-blue-300">Каталог продуктов</p>
          <h1 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl">Цена и приобретение «1С:Бухгалтерия 8»</h1>
          <p className="mt-4 text-base leading-7 text-slate-300">
            Для приобретения программы обращайтесь к менеджеру. Мы оказываем полный цикл услуг: подбор, продажа, установка,
            настройка и внедрение программных решений 1С.
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
              {products.map((product) => (
                <tr key={product.name} className="border-t border-slate-700 text-slate-200 hover:bg-slate-800/80">
                  <td className="px-4 py-3 leading-6 sm:px-5">{product.name}</td>
                  <td className="px-4 py-3 text-right font-semibold whitespace-nowrap text-blue-300 sm:px-5">{product.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  </SidebarLayout>
)

export default Catalog1C
