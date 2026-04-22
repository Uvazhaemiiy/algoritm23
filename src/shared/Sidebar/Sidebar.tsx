import { useEffect, FC } from 'react'
import { useLocation } from 'react-router-dom'

import { useTypedSelector } from 'hooks/useTypedSelector'
import { useActions } from 'hooks/useActions'
import { classNames } from 'utils/classNames'

import { Header } from './Header'
import { Points } from './Points'

import { ISidebar } from './Sidebar.types'
import s from './Sidebar.module.scss'

export const Sidebar: FC<ISidebar> = ({ closeClassName }) => {
   const { close } = useTypedSelector(state => state.sidebar)
   const { SidebarToggle } = useActions()
   const location = useLocation()

   useEffect(() => {
      if (!close) SidebarToggle()
   }, [location.pathname]) // eslint-disable-line

   return (
      <nav className={classNames(s.sidebar, { [s.close]: close, [closeClassName]: close })}>
         <Header />
         <Points />
      </nav>
   )
}
