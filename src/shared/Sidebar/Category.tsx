import React, { useState, useEffect, FC } from 'react'
import { useTypedSelector } from 'hooks/useTypedSelector'
import { classNames } from 'utils/classNames'
import { ICategory } from './Sidebar.types'
import s from './Sidebar.module.scss'

export const Category: FC<ICategory> = React.memo(({ ico, label, children }) => {
   const { close } = useTypedSelector(state => state.sidebar)
   const [ show, setShow ] = useState(false)

   const toggleCategory = () => {
      if (!close) setShow(prev => !prev)
   }

   useEffect(() => {
      if (close && show) setShow(false)
   }, [ close, show ])

   return (
      <li className={classNames(s.point, { [s.show]: show })}>
         <button className={classNames(s.category, s.item)} type="button" onClick={toggleCategory}>
            <div className={s.label}>
               <i className={classNames('ico', `ico-${ico}`)} />
               <span>{label}</span>
            </div>

            <i className={classNames('ico', 'ico-arrow-down', s.arrow)} />
         </button>

         <ul className={s.submenu}>
            <li className={s.subpoint}>
               <h6 className={s.subtitle}>
                  {label}
               </h6>
            </li>

            {children}
         </ul>
      </li>
   )
})
