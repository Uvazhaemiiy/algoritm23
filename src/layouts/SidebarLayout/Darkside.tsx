import { FC } from 'react'
import { useTypedSelector } from 'hooks/useTypedSelector'
import { useActions } from 'hooks/useActions'
import s from './SidebarLayout.module.scss'

export const Darkside: FC = () => {
   const { close } = useTypedSelector(state => state.sidebar)
   const { SidebarToggle } = useActions()

   return (
      <div className={s.darkside} onClick={SidebarToggle}>
         <button type="button" tabIndex={close ? -1 : 0}>
            <i className="ico ico-times"></i>
         </button>
      </div>
   )
}
