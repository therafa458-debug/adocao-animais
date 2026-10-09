export default function About() {
  return (
    <section className="about">
      <h1>Sobre a Patinhas</h1>
      <p>
        A Patinhas é uma plataforma que liga animais abandonados a famílias que os querem
        receber. Acreditamos que todos os animais merecem um lar seguro e cheio de carinho.
      </p>
      <h2>Como adotar</h2>
      <ol>
        <li>Explora a lista de animais e usa os filtros para encontrar o teu par ideal.</li>
        <li>Guarda os teus preferidos nos favoritos.</li>
        <li>Na página do animal, carrega em “Quero adotar” para nos contactares.</li>
      </ol>
      <p className="muted">
        Imagens fornecidas pela <a href="https://dog.ceo/dog-api/">Dog CEO API</a> e
        pela <a href="https://thecatapi.com/">The Cat API</a>.
      </p>
    </section>
  )
}
