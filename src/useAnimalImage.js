import { useEffect, useState } from 'react'

const cache = new Map()

async function fetchImage(animal) {
  if (animal.type === 'Cão') {
    const res = await fetch(`https://dog.ceo/api/breed/${animal.breedKey}/images/random`)
    const data = await res.json()
    return data.message
  }
  const res = await fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${animal.breedKey}`)
  const data = await res.json()
  return data[0]?.url
}

// Obtém (e guarda em cache) uma imagem para o animal a partir das APIs públicas.
export default function useAnimalImage(animal) {
  const [url, setUrl] = useState(() => cache.get(animal?.id) ?? null)

  useEffect(() => {
    if (!animal || cache.has(animal.id)) return
    let active = true
    const request = fetchImage(animal)
      .catch(() => null)
      .then((src) => {
        const value = src || `https://placehold.co/600x450?text=${encodeURIComponent(animal.name)}`
        cache.set(animal.id, value)
        return value
      })
    request.then((value) => active && setUrl(value))
    return () => {
      active = false
    }
  }, [animal])

  return url
}
