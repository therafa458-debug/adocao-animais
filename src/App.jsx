import { Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import Home from './pages/Home.jsx'
import AnimalDetail from './pages/AnimalDetail.jsx'
import Favorites from './pages/Favorites.jsx'
import About from './pages/About.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  return (
    <>
      <Header />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/animal/:id" element={<AnimalDetail />} />
          <Route path="/favoritos" element={<Favorites />} />
          <Route path="/sobre" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <footer className="footer">🐾 Patinhas — todos merecem um lar</footer>
    </>
  )
}
