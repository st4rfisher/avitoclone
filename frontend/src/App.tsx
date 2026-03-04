import { Routes, Route } from 'react-router-dom'
import { Box } from '@chakra-ui/react'
import { Header } from './components/Header'
import { MainPage, ItemPage, CreateItemPage } from './pages'

export default function App() {
  return (
    <Box minH="100vh" display="flex" flexDirection="column">
      <Header />

      <Box as="main" flex="1" bg="gray.50" p={6}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/items/:id" element={<ItemPage />} />
          <Route path="/create" element={<CreateItemPage />} />
          <Route path="/edit/:id" element={<CreateItemPage />} />
        </Routes>
      </Box>
    </Box>
  )
}