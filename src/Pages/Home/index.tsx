
import { Header } from '../../components/HeaderTitle/header'
import { Container } from '../../components/Container/container'
import { Title } from '../../components/Title/title'
import Button from '../../components/Button/button'
import { useCallback, useState } from 'react'
import { Card } from '../../components/Card/card'
import { Input } from '../../components/Input/input'

const genderBooks = ['Ação', 'Drama', 'Ficção', 'Terror', 'Biografia', 'Aventura']

export const Home = () => {
  const [selectedGender, setSelectedGender] = useState<string[]>([])

  const handleSelect = useCallback((gender: string) => {
    if (selectedGender.includes(gender)) {
      const removeGender = selectedGender.filter(item => item !== gender)
      setSelectedGender(removeGender)
    } else {
      setSelectedGender([...selectedGender, gender])
    }
  }, [selectedGender])

  return (
    <section className='mb-6'>
      <Header />
      <Container>
        <Title>O que você quer ler hoje?</Title>
        <div className='grid md:grid-cols-8 grid-cols-4 gap-4 my-6'>
          {genderBooks.map(gender => (
            <Button
              key={gender}
              variant={selectedGender.includes(gender) ? 'dark' : 'light'}
              onClick={() => handleSelect(gender)}
            >
              {gender}
            </Button>
          ))}
        </div>
        <div className='py-7'>
          <p className='text-evergreen font-semibold text-2xl'>Sobre o que você gostaria de receber uma recomendação de livro</p>
          <Input placeholder='Eu gostaria de ler...' />
        </div>
        <Title className='mb-5'>Livros recomendados</Title>
        <Card id='234' />
      </Container>
    </section>
  )
}

