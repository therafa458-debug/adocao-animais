import { useMemo, useState } from 'react'
import { animals, unique } from '../data.js'
import AnimalCard from '../components/AnimalCard.jsx'

export default function Home() {
  const [search, setSearch] = useState('')
  const [type, setType] = useState('')
  const [breed, setBreed] = useState('')
  const [location, setLocation] = useState('')

  const breeds = useMemo(
    () => [...new Set(animals.filter((a) => !type || a.type === type).map((a) => a.breed))].sort(),
    [type],
  )

  const results = animals.filter(
    (a) =>
      (!search || a.name.toLowerCase().includes(search.toLowerCase())) &&
      (!type || a.type === type) &&
      (!breed || a.breed === breed) &&
      (!location || a.location === location),
  )

  const clear = () => {
    setSearch('')
    setType('')
    setBreed('')
    setLocation('')
  }

  return (
    <>
      <section className="hero">
        <h1>Encontra o teu novo melhor amigo</h1>
        <p>Cães e gatos à espera de uma família cheia de amor.</p>
      </section>

      <section className="filters">
        <input
          type="search"
          placeholder="Pesquisar por nome…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select value={type} onChange={(e) => { setType(e.target.value); setBreed('') }}>
          <option value="">Todos os tipos</option>
          {unique('type').map((t) => <option key={t}>{t}</option>)}
        </select>
        <select value={breed} onChange={(e) => setBreed(e.target.value)}>
          <option value="">Todas as raças</option>
          {breeds.map((b) => <option key={b}>{b}</option>)}
        </select>
        <select value={location} onChange={(e) => setLocation(e.target.value)}>
          <option value="">Todas as localizações</option>
          {unique('location').map((l) => <option key={l}>{l}</option>)}
        </select>
        <button type="button" className="btn-secondary" onClick={clear}>Limpar</button>
      </section>

      {results.length ? (
        <div className="grid">
          {results.map((a) => <AnimalCard key={a.id} animal={a} />)}
        </div>
      ) : (
        <p className="empty">Nenhum animal encontrado com estes filtros.</p>
      )}
    </>
  )
}
