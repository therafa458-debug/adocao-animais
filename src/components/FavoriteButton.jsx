import { useFavorites } from '../favorites.jsx'

export default function FavoriteButton({ id, large }) {
  const { isFavorite, toggle } = useFavorites()
  const active = isFavorite(id)
  return (
    <button
      type="button"
      className={`fav-btn${active ? ' active' : ''}${large ? ' large' : ''}`}
      aria-pressed={active}
      aria-label={active ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
      onClick={(e) => {
        e.preventDefault()
        toggle(id)
      }}
    >
      {active ? '❤️' : '🤍'}{large && (active ? ' Nos favoritos' : ' Adicionar aos favoritos')}
    </button>
  )
}
