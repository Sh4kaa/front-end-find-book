
import { Header } from '../../components/HeaderTitle/header'
import { Container } from '../../components/Container/container'
import { Title } from '../../components/Title/title'
import Button from '../../components/Button/button'
import { useCallback, useState } from 'react'
import { Card } from '../../components/Card/card'

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
        <div className='grid grid-cols-8 gap-8 my-6'>
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
          <input type="text"
            placeholder='Eugostaria de ler...'
            className='outline-none shadow-lg border border-gray-100 rounded-lg w-full p-3 mt-3'
          />
        </div>
        <Title>Livros recomendados</Title>
        <Card />
      </Container>
    </section>
  )
}

