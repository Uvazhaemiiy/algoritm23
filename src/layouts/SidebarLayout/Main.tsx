import { FC } from 'react'
import { Header } from 'shared/Header'
import { Footer } from 'shared/Footer'
import s from './SidebarLayout.module.scss'

export const Main: FC = ({ children }) => (
   <main className={s.main}>
      <Header />

      <div className={s.content}>
         {children}
         <Footer />
      </div>
   </main>
)
