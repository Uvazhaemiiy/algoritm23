import { useEffect } from 'react'
import { useActions } from 'hooks/useActions'
import { PageProps } from './types'

export const Page = ({ title, children }: PageProps) => {
   const { SidebarSetTitle } = useActions()

   useEffect(() => {
      document.title = `${title} | Algoritm 23 `
      SidebarSetTitle(title)
   }, [title]) // eslint-disable-line

   return children
}
