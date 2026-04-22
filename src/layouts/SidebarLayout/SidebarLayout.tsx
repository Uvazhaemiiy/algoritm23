import { FC } from 'react'
import { Sidebar } from 'shared/Sidebar'
import { Darkside } from './Darkside'
import { Main } from './Main'
import s from './SidebarLayout.module.scss'

export const SidebarLayout: FC = ({ children }) => (
   <div className={s.page}>
      <Sidebar closeClassName={s.close} />
      <Darkside />
      <Main>
         {children}
      </Main>
   </div>
)
