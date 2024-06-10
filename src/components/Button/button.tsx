import classNames from 'classnames'
import React from 'react'

type ButtonProps = React.ComponentProps<'button'> & {
  variant?: 'light' | 'dark'
}

const Button = ({ children, variant = 'dark', className }: ButtonProps) => {

  return (
    <button
      className={classNames(['bg-evergreen-light text-white px-6 py-2 rounded-lg shadow font-medium mt-3',
        variant === 'dark' && 'bg-evergreen-light',
        variant === 'light' && 'bg-white border-2 border-evergreen-light text-evergreen-light', className
      ])}
    >
      {children}
    </button>
  )
}

export default Button