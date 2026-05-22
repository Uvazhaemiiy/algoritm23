import { lazy } from 'react'
import { IRoutes } from './types'
import Home from 'routes/Home'
import Unknown from 'routes/Unknown'

//Маршруты для сайта АЛГОРИТМ 23
export const routes: IRoutes[] = [
   {
      path: '/',
      title: 'Главная',
      access: false,
      Element: Home
   },
   {
      path: '/portfolio',
      title: 'Портфолио АЛГОРИТМ 23',
      access: true,
      Element: lazy(() => import('routes/Portfolio'))
   },
   {
      path: '/contacts',
      title: 'Контакты',
      access: false,
      Element: lazy(() => import('routes/Contacts'))
   },
   {
      path: '/services',
      title: 'Наши услуги',
      access: true,
      Element: lazy(() => import('routes/Services'))
   },
   {
      path: '/pricing',
      title: 'Стоимость оказания услуг',
      access: true,
      Element: lazy(() => import('routes/Pricing'))
   },
   {
      path: '/catalog-1c',
      title: 'Каталог продуктов 1С',
      access: true,
      Element: lazy(() => import('routes/Catalog1C'))
   },
   // Страница 404
   {
      path: '*',
      title: '404',
      access: true,
      Element: Unknown
   }
]
