import { FaArrowRight, FaPlay, FaStar } from 'react-icons/fa'
import { MovieCard, SectionHeading } from '../components'
import { featuredMovies } from '../data/catalog'

const heroImage = 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=1800&q=90'

function Home() {
  const highlights = [
    { value: '120+', label: 'títulos para descobrir' },
    { value: '4.8/5', label: 'avaliação da comunidade' },
    { value: '24h', label: 'novidades toda semana' },
  ]

  return (
    <>
      <section className="hero-panel" style={{ backgroundImage: 'url(' + heroImage + ')' }}>
        <div className="mx-auto flex min-h-[610px] w-[min(1180px,calc(100%-2rem))] items-center py-20">
          <div className="max-w-2xl">
            <p className="eyebrow">Sua próxima história começa aqui</p>
            <h1 className="display-title mt-5">
              Grandes filmes. <span className="text-brand">Uma nova sessão.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-white/65 sm:text-lg">
              Explore uma curadoria de filmes e séries para todos os momentos. Encontre algo que combine com o seu clima de hoje.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a className="btn-primary" href="#/filmes">
                <FaPlay aria-hidden="true" />
                Começar a explorar
              </a>
              <a className="btn-secondary" href="#/series">
                Ver séries
                <FaArrowRight aria-hidden="true" />
              </a>
            </div>
            <div className="mt-10 flex items-center gap-3 text-sm text-white/60">
              <span className="flex items-center gap-1.5 text-brand">
                <FaStar aria-hidden="true" />
                4.9
              </span>
              <span>·</span>
              <span>Seleção atualizada para você</span>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid w-[min(1180px,calc(100%-2rem))] grid-cols-1 divide-y divide-white/10 border-b border-white/10 py-2 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        {highlights.map(({ value, label }) => (
          <div className="px-4 py-6 sm:px-8" key={label}>
            <p className="text-2xl font-black tracking-[-0.05em] text-white">{value}</p>
            <p className="mt-1 text-xs text-muted">{label}</p>
          </div>
        ))}
      </section>

      <section className="page-shell">
        <SectionHeading
          eyebrow="Escolhas da semana"
          title="O que está em destaque"
          description="Uma seleção rápida para você apertar o play sem passar horas procurando."
          action={<a className="btn-ghost" href="#/filmes">Ver catálogo <FaArrowRight aria-hidden="true" /></a>}
        />
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5">
          {featuredMovies.slice(0, 3).map((movie) => <MovieCard key={movie.id} movie={movie} />)}
        </div>
      </section>
    </>
  )
}

Home.pageTitle = 'CAVEFLIX | Início'

export default Home
