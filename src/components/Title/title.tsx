import React from 'react'
import { twMerge } from 'tailwind-merge'

type TitleProps = React.ComponentProps<'div'>

export const Title = ({ children, className }: TitleProps) => {
  return (
    <div className={twMerge('md:text-5xl text-2xl border-b-2 border-b-evergreen-light w-fit font-bold', className)}>{children}</div>
  )
}
