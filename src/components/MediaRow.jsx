import { useEffect, useRef, useState } from 'react'
import { FaArrowRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import MovieCard from './MovieCard'

function MediaRow({ title, items, action = '#/filmes' }) {
  const scrollerRef = useRef(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(items.length > 1)

  useEffect(() => {
    const scroller = scrollerRef.current
    if (!scroller) return undefined

    const updateScrollState = () => {
      setCanScrollLeft(scroller.scrollLeft > 4)
      setCanScrollRight(scroller.scrollLeft + scroller.clientWidth < scroller.scrollWidth - 4)
    }

    updateScrollState()
    scroller.addEventListener('scroll', updateScrollState, { passive: true })
    window.addEventListener('resize', updateScrollState)

    return () => {
      scroller.removeEventListener('scroll', updateScrollState)
      window.removeEventListener('resize', updateScrollState)
    }
  }, [items.length])

  const scrollRow = (direction) => {
    scrollerRef.current?.scrollBy({
      left: direction * Math.max(scrollerRef.current.clientWidth * 0.82, 260),
      behavior: 'smooth',
    })
  }

  return (
    <section className="catalog-row">
      <div className="row-heading">
        <h2>{title}</h2>
        <a href={action}>
          Ver mais
          <FaArrowRight aria-hidden="true" />
        </a>
        <div className="row-controls" aria-label={'Navegação: ' + title}>
          <button
            className="rail-arrow"
            type="button"
            onClick={() => scrollRow(-1)}
            disabled={!canScrollLeft}
            aria-label={'Voltar nos títulos de ' + title}
          >
            <FaChevronLeft aria-hidden="true" />
          </button>
          <button
            className="rail-arrow"
            type="button"
            onClick={() => scrollRow(1)}
            disabled={!canScrollRight}
            aria-label={'Ver mais títulos de ' + title}
          >
            <FaChevronRight aria-hidden="true" />
          </button>
        </div>
      </div>
      <div className="media-scroller" ref={scrollerRef}>
        {items.map((movie) => <MovieCard key={movie.id} movie={movie} compact />)}
      </div>
    </section>
  )
}

export default MediaRow
