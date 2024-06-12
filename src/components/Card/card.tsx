
import Button from '../Button/button'

export const Card = () => {
  return (
    <div className='grid grid-cols-3 gap-3 shadow-lg rounded-lg border- border-gray-100 max-w-lg w-full p-4 mt-4'>
      <img className='w-full h-full rounded-lg' src="https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ableson.jpg" alt="opa" />
      <div className='col-span-2'>
        <p className='font-bold text-2xl text-evergreen'>código limpo</p>
        <p className='font-light text-lg text-gray-500'>autor</p>
        <p className='rounded-full bg-green-100 bg-opacity-50 text-evergreen text-center w-fit px-6 py-1'>Computer Enginner</p>
        <p className='line-clamp-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque aspernatur sapiente laudantium magni, suscipit corrupti, iure est ullam explicabo nulla ea itaque nemo tempora optio dicta temporibus. Iusto, totam illo.</p>
        <Button variant='light'>Ver mais</Button>
      </div>
    </div>
  )
}

