import { FC } from 'react'
import { useTypedSelector } from 'hooks/useTypedSelector'
import { useActions } from 'hooks/useActions'
import s from './Header.module.scss'

export const Header: FC = () => {
   const { title } = useTypedSelector(state => state.sidebar)
   const { SidebarToggle } = useActions()

   return (
      <div className={s.header}>
         <div className={s.title}>
            <button
               className={s.toggle}
               type="button"
               onClick={SidebarToggle}
            >
               <i className="ico ico-menu" />
            </button>

            <h1>{title}</h1>
         </div>
      </div>
   )
}
