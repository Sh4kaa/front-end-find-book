import React from 'react'
import { twMerge } from 'tailwind-merge'

type ButtonProps = React.ComponentProps<'button'> & {
  variant?: 'light' | 'dark'
}

const Button = ({ children, variant = 'dark', className, ...rest }: ButtonProps) => {

  return (
    <button
      className={twMerge('bg-evergreen-light px-3 py-3 shadow text-white font-medium rounded-lg mt-3',
        variant === 'dark' && 'bg-evergreen-light',
        variant === 'light' && 'bg-white border-2 border-evergreen-light text-evergreen-light', className
      )}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button