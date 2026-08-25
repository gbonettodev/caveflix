import { FaArrowRight, FaInfoCircle, FaPlay, FaPlus, FaStar } from 'react-icons/fa'
import { MovieCard, SectionHeading } from '../components'
import { featuredMovies, movies, series } from '../data/catalog'

const heroImage = 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=1800&q=90'

function MediaRow({ title, items, action = '#/filmes' }) {
  return (
    <section className="catalog-row">
      <div className="row-heading">
        <h2>{title}</h2>
        <a href={action}>Ver mais <FaArrowRight aria-hidden="true" /></a>
      </div>
      <div className="media-scroller">
        {items.map((movie) => <MovieCard key={movie.id} movie={movie} compact />)}
      </div>
    </section>
  )
}

function Home() {
  const featured = featuredMovies[0]

  return (
    <>
      <section className="prime-hero" style={{ backgroundImage: 'url(' + heroImage + ')' }}>
        <div className="hero-content">
          <p className="eyebrow">Destaque da CAVEFLIX</p>
          <h1>{featured.title}</h1>
          <p className="hero-meta"><span className="text-brand"><FaStar /> {featured.score}</span> · {featured.year} · {featured.duration} · {featured.rating}</p>
          <p className="hero-description">{featured.description} Uma aventura para reunir a tribo e começar uma nova sessão.</p>
          <div className="hero-actions">
            <a className="btn-primary" href="#/filmes"><FaPlay /> Reproduzir</a>
            <a className="btn-secondary" href="#/filmes"><FaPlus /> Minha lista</a>
            <a className="btn-secondary icon-action" href="#/sobre" aria-label="Mais informações"><FaInfoCircle /></a>
          </div>
        </div>
        <div className="hero-fade" aria-hidden="true" />
      </section>

      <main className="streaming-home">
        <MediaRow title="Escolhas da semana" items={featuredMovies} />
        <MediaRow title="Melhores filmes" items={movies} />
        <MediaRow title="Aventuras para maratonar" items={series} action="#/series" />
        <MediaRow title="Mistério e suspense" items={[...movies].reverse()} />
        <section className="home-link-row">
          <SectionHeading
            eyebrow="Explore a caverna inteira"
            title="Encontre mais histórias"
            description="Navegue pelo catálogo completo e descubra a próxima sessão da sua tribo."
            action={<a className="btn-ghost" href="#/filmes">Abrir catálogo <FaArrowRight aria-hidden="true" /></a>}
          />
        </section>
      </main>
    </>
  )
}

Home.pageTitle = 'CAVEFLIX | Início'

export default Home
