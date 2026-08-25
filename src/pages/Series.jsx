import { useState } from 'react'
import { FaArrowRight, FaSearch } from 'react-icons/fa'
import { MovieCard, SectionHeading } from '../components'
import { series } from '../data/catalog'

const categories = ['Todos', 'Ação', 'Comédia', 'Ficção científica', 'Suspense']

function Series() {
  const [category, setCategory] = useState('Todos')
  const [query, setQuery] = useState('')

  const filteredSeries = series.filter((item) => {
    const matchesCategory = category === 'Todos' || item.genre === category
    const matchesQuery = item.title.toLowerCase().includes(query.toLowerCase())
    return matchesCategory && matchesQuery
  })

  return (
    <section className="page-shell">
      <SectionHeading
        eyebrow="Temporadas para maratonar"
        title="Séries que prendem do primeiro episódio."
        description="Escolha um universo, encontre seu próximo vício e deixe a história conduzir o resto."
        action={<a className="btn-ghost" href="#/contato">Sugerir uma série <FaArrowRight aria-hidden="true" /></a>}
      />

      <div className="mb-9 flex flex-col gap-4">
        <label className="relative block max-w-xl">
          <span className="sr-only">Buscar séries</span>
          <FaSearch className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-brand" aria-hidden="true" />
          <input
            className="filter-control py-3 pl-11 pr-4 text-sm"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Buscar por título..."
          />
        </label>
        <div className="flex flex-wrap gap-2" aria-label="Categorias de séries">
          {categories.map((item) => (
            <button
              className={'rounded-full border px-4 py-2 text-xs font-bold transition-colors ' + (
                category === item
                  ? 'border-brand bg-brand text-[#07090d]'
                  : 'border-white/10 bg-white/[0.03] text-muted hover:border-brand/40 hover:text-white'
              )}
              type="button"
              key={item}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4">
        {filteredSeries.map((item) => <MovieCard key={item.id} movie={item} compact />)}
      </div>

      {filteredSeries.length === 0 && (
        <div className="glass-panel mt-5 py-16 text-center">
          <p className="eyebrow">A busca ficou vazia</p>
          <p className="mt-3 text-sm text-muted">Ajuste o termo ou escolha outra categoria.</p>
        </div>
      )}
    </section>
  )
}

Series.pageTitle = 'CAVEFLIX | Séries'

export default Series
