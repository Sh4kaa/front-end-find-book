
import { Header } from '../../components/HeaderTitle/header'
import { Container } from '../../components/Container/container'
import { Title } from '../../components/Title/title'
import Button from '../../components/Button/button'

const genderBooks = ['Ação', 'Drama', 'Ficção', 'Terror', 'Biografia', 'Aventura']

export const Home = () => {
  return (
    <>
      <Header />
      <Container>
        <Title>O que você quer ler hoje</Title>
        {genderBooks.map(book => <Button variant="dark">{book}</Button>)}
      </Container>
    </>
  )
}

