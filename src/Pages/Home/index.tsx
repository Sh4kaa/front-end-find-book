
import { Header } from '../../components/HeaderTitle/header'
import { Container } from '../../components/Container/container'
import { Title } from '../../components/Title/title'
import Button from '../../components/Button/button'
import { useCallback, useState } from 'react'

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
    <>
      <Header />
      <Container>
        <Title>O que você quer ler hoje</Title>
        {genderBooks.map(gender => (
          <Button
            key={gender}
            variant={selectedGender.includes(gender) ? 'light' : 'dark'}
            onClick={() => handleSelect(gender)}
          >
            {gender}
          </Button>
        ))}
      </Container>
    </>
  )
}

