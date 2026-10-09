import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="empty">
      <h1>Página não encontrada 🐾</h1>
      <p><Link to="/">Voltar à página inicial</Link></p>
    </section>
  )
}
