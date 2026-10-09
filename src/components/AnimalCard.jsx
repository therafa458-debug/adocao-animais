import { Link } from 'react-router-dom'
import useAnimalImage from '../useAnimalImage.js'
import FavoriteButton from './FavoriteButton.jsx'

export default function AnimalCard({ animal }) {
  const image = useAnimalImage(animal)
  return (
    <Link to={`/animal/${animal.id}`} className="card">
      <div className="card-img">
        {image ? <img src={image} alt={animal.name} loading="lazy" /> : <div className="skeleton" />}
        <FavoriteButton id={animal.id} />
      </div>
      <div className="card-body">
        <h3>{animal.name}</h3>
        <p>{animal.breed} · {animal.age}</p>
        <p className="muted">📍 {animal.location}</p>
      </div>
    </Link>
  )
}
