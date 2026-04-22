import { Dispatch } from 'redux'
import { SidebarAction, SidebarActions } from '../types/sidebar.types'

export function SidebarSetTitle (title: string)
{
   return (dispatch: Dispatch<SidebarAction>) => {
      dispatch({
         type: SidebarActions.SET_TITLE,
         payload: title
      })
   }
}

export function SidebarToggle ()
{
   return (dispatch: Dispatch<SidebarAction>) => {
      dispatch({ type: SidebarActions.TOGGLE })
   }
}
