import React, { FC } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { classNames } from 'utils/classNames'
import { ISubPoint } from './Sidebar.types'
import s from './Sidebar.module.scss'

export const SubPoint: FC<ISubPoint> = React.memo(({ label, to }) => {
   const location = useLocation()

   return (
      <li className={classNames(s.subpoint, { [s.active]: to === location.pathname })}>
         <Link to={to}>
            {label}
         </Link>
      </li>
   )
})
