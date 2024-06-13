
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from '../Pages/Home'
import { BookDetails } from '../Pages/BookDetails'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:id' element={<BookDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes