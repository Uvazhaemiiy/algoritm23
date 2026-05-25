import { FC } from 'react'
import s from './Sidebar.module.scss'

//Изменение заголовка в открытом меню
export const Header: FC = () => (
   <div className={s.header}>
      {/* логотип шрифты свг */}
{/*         <i className="ico ico-logo" /> */}
   <img src="/icons/algoritm23-logo.svg" alt="АЛГОРИТМ 23" width="55" height="55" style={{flex: '1 0 40px', maxWidth: '50px', alignSelf: 'center', marginLeft: '10px', marginTop: '10px'}} />
{/*    <img src="/images/windows-daiquiri/Daiquiri-logo4.svg" width="64" height="64"></img> */}
{/* 
    style="
    flex: 1 0 40px;
    max-width: 50px;
    align-self: center;
    margin-left: 10px;"
*/}
    
      <span className='text-centr mt-2' style={{marginLeft: '5px'}}>АЛГОРИТМ 23</span>
   </div>
)
