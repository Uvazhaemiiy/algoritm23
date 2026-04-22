export interface IButton
{
   className?: string
   label?: React.ReactChild | React.ReactNode
   type?: 'submit' | 'reset' | 'button'
   theme?: 'accent' | 'unimportant'
   onClick?: (e: React.MouseEvent<HTMLElement>) => void
   disabled?: boolean
   tabIndex?: number
}
