import { FaClock, FaPlay, FaStar } from 'react-icons/fa'

function MovieCard({ movie, compact = false }) {
  const { title, type, genre, year, duration, rating, score, poster, description } = movie

  return (
    <article className={'movie-card group ' + (compact ? 'movie-card-compact' : '')}>
      <div className="poster-frame rounded-none border-0 border-b">
        <img src={poster} alt={'Pôster de ' + title} loading="lazy" />
        <span className="absolute left-3 top-3 tag">{compact ? genre : type}</span>
        <span className="absolute bottom-3 right-3 grid size-9 place-items-center rounded-full bg-brand text-xs text-[#24140b] opacity-0 transition-opacity group-hover:opacity-100">
          <FaPlay className="ml-0.5" aria-hidden="true" />
        </span>
      </div>
      <div className="movie-card-details p-4">
        <div className="flex items-center justify-between gap-3 text-xs text-muted">
          <span>{year}</span>
          <span className="flex items-center gap-1 text-brand">
            <FaStar aria-hidden="true" />
            {score}
          </span>
        </div>
        <h3 className="mt-2 truncate text-base font-bold text-white">{title}</h3>
        <p className="mt-1 truncate text-xs text-muted">{description}</p>
        <div className="mt-4 flex items-center justify-between gap-3 text-xs text-white/55">
          <span>{genre}</span>
          <span className="flex items-center gap-1">
            <FaClock aria-hidden="true" />
            {duration}
          </span>
        </div>
        <div className="mt-3 border-t border-white/10 pt-3 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-white/45">
          Classificação {rating}
        </div>
      </div>
    </article>
  )
}

export default MovieCard
