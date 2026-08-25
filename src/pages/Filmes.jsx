import { MediaHero, MediaRow } from '../components'
import { featuredMovies, movies } from '../data/catalog'

function Filmes() {
  const bestMovies = [...movies].sort((firstMovie, secondMovie) => secondMovie.score - firstMovie.score)
  const actionMovies = movies.filter((movie) => movie.genre === 'Ação')
  const dramaMovies = movies.filter((movie) => movie.genre === 'Drama')
  const suspenseMovies = movies.filter((movie) => movie.genre === 'Suspense')

  return (
    <>
      <MediaHero eyebrow="Filmes em destaque" items={featuredMovies} actionHref="#/filmes" />
      <section className="streaming-home catalog-page-rails">
        <MediaRow title="Filmes em destaque" items={featuredMovies} />
        <MediaRow title="Melhores filmes" items={bestMovies} />
        <MediaRow title="Filmes de ação" items={actionMovies} />
        <MediaRow title="Filmes de drama" items={dramaMovies} />
        <MediaRow title="Filmes de suspense" items={suspenseMovies} />
      </section>
    </>
  )
}

Filmes.pageTitle = 'CAVEFLIX | Filmes'

export default Filmes
