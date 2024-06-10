import React from 'react'
import backgroundImage from '../../assets/img/background-header.png'
import { HeaderTitle } from './header-title'
import { Container } from '../Container/container'
import Button from '../Button/button'


export const Header = () => {
  return (
    <header style={{ backgroundImage: `url(${backgroundImage})` }} className='w-auto bg-cover bg-center bg-no-repeat'>
      <Container>
        <HeaderTitle />
        <div className='mt-28'>
          <p className='text-7xl font-bold text-evergreen'>Encontre livros <br /> cara!</p>
          <p className='text-gray-500 my-7 text-xl'>Lorem ipsum dolor </p>
          <Button>Pesquisar livros</Button>
        </div>
      </Container>
    </header>
  )
}
