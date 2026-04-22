import React, { FC } from 'react'
import { classNames } from 'utils/classNames'
import { IButton } from './Button.types'
import s from './Button.module.scss'

export const Button: FC<IButton> = React.memo(({
   className,
   label,
   type = 'button',
   theme = 'accent',
   onClick,
   disabled,
   tabIndex,
   children
}) => (
   <button
      className={classNames(s.button, s[theme], className)}
      type={type}
      onClick={onClick}
      disabled={disabled}
      tabIndex={tabIndex}
   >
      {children ?? label}
   </button>
))
