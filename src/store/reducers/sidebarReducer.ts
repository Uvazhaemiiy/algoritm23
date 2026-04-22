import { SidebarState, SidebarAction, SidebarActions } from '../types/sidebar.types'

const initialState: SidebarState = {
   title: 'ООО АЛГОРИТМ 23 - ИТ КОМПАНИЯ',
   close: true
}

export function sidebarReducer (state = initialState, action: SidebarAction): SidebarState
{
   switch (action.type)
   {
      case SidebarActions.SET_TITLE:
         return { ...state, title: action.payload }
      case SidebarActions.TOGGLE:
         return { ...state, close: !state.close }
      default:
         return state
   }
}
