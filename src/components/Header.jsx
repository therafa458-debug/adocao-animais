import { NavLink } from 'react-router-dom'
import { useFavorites } from '../favorites.jsx'

export default function Header() {
  const { favorites } = useFavorites()
  return (
    <header className="header">
      <div className="container header-inner">
        <NavLink to="/" className="logo">🐾 Patinhas</NavLink>
        <nav>
          <NavLink to="/" end>Animais</NavLink>
          <NavLink to="/favoritos">Favoritos ({favorites.length})</NavLink>
          <NavLink to="/sobre">Sobre</NavLink>
        </nav>
      </div>
    </header>
  )
}
