import React, { FC } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { classNames } from 'utils/classNames'
import { IPoint } from './Sidebar.types'
import s from './Sidebar.module.scss'

export const Point: FC<IPoint> = React.memo(({ ico, label, to }) => {
   const location = useLocation()

   return (
      <li className={classNames(s.point, { [s.active]: to === location.pathname })}>
         <Link className={classNames(s.label, s.item)} to={to}>
            <i className={classNames('ico', `ico-${ico}`)} />
            <span>
               {label}
            </span>
         </Link>

         <ul className={classNames(s.submenu, s.blank)}>
            <li className={s.subpoint}>
               <Link className={s.subtitle} to={to} tabIndex={-1}>
                  {label}
               </Link>
            </li>
         </ul>
      </li>
   )
})
