
import Button from '../Button/button'
import { Tag } from '../Tag/tag'

export const Card = () => {
  return (
    <div className='grid grid-cols-3 gap-3 shadow-lg rounded-lg border- border-gray-100 max-w-lg w-full p-4'>
      <img className='w-full h-full rounded-lg' src="https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ableson.jpg" alt="opa" />
      <div className='col-span-2'>
        <p className='font-bold text-2xl text-evergreen'>código limpo</p>
        <p className='font-light text-lg text-gray-500 mb-5'>autor</p>
        <Tag className='mb-4'>Computer enginner</Tag>
        <p className='line-clamp-5'> <strong>Sinopse: </strong> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque aspernatur sapiente laudantium magni, suscipit corrupti, iure est ullam explicabo nulla ea itaque nemo tempora optio dicta temporibus. Iusto, totam illo.</p>
        <Button variant='light' className='w-1/2'>Ver mais</Button>
      </div>
    </div>
  )
}

