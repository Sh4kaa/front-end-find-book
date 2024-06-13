import { forwardRef } from "react";

type InputProps = {
  placeholder: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({ placeholder, ...props }: InputProps, ref) => {
  return (
    <input
      type="text"
      ref={ref}
      placeholder={placeholder}
      className='outline-none shadow-lg border border-gray-100 rounded-lg w-full p-3 mt-3'
      {...props}
    />
  )
})

