import { Link, useParams } from 'react-router-dom'
import { getAnimal } from '../data.js'
import useAnimalImage from '../useAnimalImage.js'
import FavoriteButton from '../components/FavoriteButton.jsx'
import NotFound from './NotFound.jsx'

export default function AnimalDetail() {
  const { id } = useParams()
  const animal = getAnimal(id)
  const image = useAnimalImage(animal)

  if (!animal) return <NotFound />

  return (
    <article className="detail">
      <Link to="/" className="back">← Voltar</Link>
      <div className="detail-grid">
        <div className="detail-img">
          {image ? <img src={image} alt={animal.name} /> : <div className="skeleton" />}
        </div>
        <div>
          <h1>{animal.name}</h1>
          <ul className="tags">
            <li>{animal.type}</li>
            <li>{animal.breed}</li>
            <li>{animal.age}</li>
            <li>{animal.sex}</li>
            <li>📍 {animal.location}</li>
          </ul>
          <p>{animal.description}</p>
          <div className="actions">
            <FavoriteButton id={animal.id} large />
            <a
              className="btn"
              href={`mailto:adocoes@patinhas.pt?subject=${encodeURIComponent(`Adoção: ${animal.name}`)}`}
            >
              Quero adotar
            </a>
          </div>
        </div>
      </div>
    </article>
  )
}
