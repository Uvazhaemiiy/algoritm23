import { FC } from 'react'
import { SidebarLayout } from 'layouts/SidebarLayout'
import s from './Unknown.module.scss'

const Unknown: FC = () => (
   <SidebarLayout>
      <section className={s.unknown}>
         404
      </section>
   </SidebarLayout>
)

export default Unknown
