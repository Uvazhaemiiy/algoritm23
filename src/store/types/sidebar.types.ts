export type SidebarState = {
   title: string
   close: boolean
}

export enum SidebarActions
{
   SET_TITLE = 'SIDEBAR_SET_TITLE',
   TOGGLE = 'SIDEBAR_TOGGLE'
}

interface SET_TITLE
{
   type: SidebarActions.SET_TITLE
   payload: string
}

interface TOGGLE
{
   type: SidebarActions.TOGGLE
}

export type SidebarAction = SET_TITLE | TOGGLE
