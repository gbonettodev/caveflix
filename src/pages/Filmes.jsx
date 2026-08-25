import { useState } from 'react'
import { FaSearch, FaSlidersH } from 'react-icons/fa'
import { MovieCard, SectionHeading } from '../components'
import { genres, movies } from '../data/catalog'

function Filmes() {
  const [query, setQuery] = useState('')
  const [selectedGenre, setSelectedGenre] = useState('Todos')

  const filteredMovies = movies.filter((movie) => {
    const matchesQuery = movie.title.toLowerCase().includes(query.toLowerCase())
    const matchesGenre = selectedGenre === 'Todos' || movie.genre === selectedGenre
    return matchesQuery && matchesGenre
  })

  return (
    <section className="page-shell">
      <SectionHeading
        eyebrow="Catálogo CAVEFLIX"
        title="Filmes para cada momento."
        description="Use a busca e os filtros para encontrar uma história que combine com o seu clima."
      />

      <div className="glass-panel mb-9 grid gap-4 p-4 md:grid-cols-[1fr_220px]">
        <label className="relative block">
          <span className="sr-only">Buscar filmes</span>
          <FaSearch className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-brand" aria-hidden="true" />
          <input
            className="filter-control py-3 pl-11 pr-4 text-sm"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Buscar por título..."
          />
        </label>
        <label className="relative block">
          <span className="sr-only">Filtrar por gênero</span>
          <FaSlidersH className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-brand" aria-hidden="true" />
          <select
            className="filter-control appearance-none py-3 pl-11 pr-4 text-sm"
            value={selectedGenre}
            onChange={(event) => setSelectedGenre(event.target.value)}
          >
            {genres.map((genre) => <option className="bg-[#10141b]" key={genre}>{genre}</option>)}
          </select>
        </label>
      </div>

      <div className="mb-5 flex items-center justify-between gap-4">
        <p className="text-sm text-muted">
          {filteredMovies.length} {filteredMovies.length === 1 ? 'resultado encontrado' : 'resultados encontrados'}
        </p>
        <p className="text-xs uppercase tracking-[0.14em] text-white/35">Atualizado hoje</p>
      </div>

      {filteredMovies.length > 0 ? (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4">
          {filteredMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
        </div>
      ) : (
        <div className="glass-panel py-16 text-center">
          <p className="eyebrow">Nenhum título encontrado</p>
          <p className="mt-3 text-sm text-muted">Tente buscar por outro nome ou remover o filtro de gênero.</p>
        </div>
      )}
    </section>
  )
}

Filmes.pageTitle = 'CAVEFLIX | Filmes'

export default Filmes
