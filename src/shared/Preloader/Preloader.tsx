import { FC } from 'react'
import s from './Preloader.module.scss'

export const Preloader: FC = () => (
   <div className={s.preloader}>
      <div className={s.pulse}>
         <span />
         <span />
         <span />
         <span />
         <span />
      </div>
   </div>
)
