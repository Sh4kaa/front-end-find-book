import React from 'react'

type TitleProps = React.ComponentProps<'div'>

export const Title = ({ children }: TitleProps) => {
  return (
    <div className='text-3xl border-b  border-b-evergreen-light w-fit font-bold'>{children}</div>
  )
}
