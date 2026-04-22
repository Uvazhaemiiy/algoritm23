import { LazyExoticComponent, FC } from 'react'

export interface IRoutes
{
   path: string,
   title: string,
   access: boolean,
   Element: FC | LazyExoticComponent<FC>
}

export interface PageProps
{
   title: string
   access: boolean
   children: JSX.Element
}
