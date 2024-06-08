import React from 'react'

type ContainerProps = React.ComponentProps<'div'>

export function Container({ children }: ContainerProps) {
  return (
    <div className='px-2 md:px-5 py-4 max-w-7xl mx-auto w-full'>{children}</div>
  )
}