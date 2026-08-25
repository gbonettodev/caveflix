import { useEffect, useState } from 'react'
import { FaChevronLeft, FaChevronRight, FaInfoCircle, FaPlay, FaPlus, FaStar } from 'react-icons/fa'

function MediaHero({ items, eyebrow, actionHref }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeItem = items[activeIndex]

  useEffect(() => {
    if (items.length < 2) return undefined

    const timer = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % items.length)
    }, 10000)

    return () => window.clearInterval(timer)
  }, [items.length])

  const changeSlide = (direction) => {
    setActiveIndex((currentIndex) => (currentIndex + direction + items.length) % items.length)
  }

  if (!activeItem) return null

  return (
    <section
      className="prime-hero media-hero"
      aria-label="Conteúdo em destaque"
    >
      <div
        className="hero-backdrop"
        key={activeItem.id}
        style={{ backgroundImage: 'url(' + activeItem.poster + ')' }}
        aria-hidden="true"
      />
      <div className="hero-content" key={activeItem.id}>
        <p className="eyebrow">{eyebrow}</p>
        <h1>{activeItem.title}</h1>
        <p className="hero-meta">
          <span className="text-brand"><FaStar aria-hidden="true" /> {activeItem.score}</span>
          <span aria-hidden="true">·</span>
          <span>{activeItem.year}</span>
          <span aria-hidden="true">·</span>
          <span>{activeItem.duration}</span>
          <span aria-hidden="true">·</span>
          <span>{activeItem.rating}</span>
        </p>
        <p className="hero-description">{activeItem.description}</p>
        <div className="hero-actions">
          <a className="btn-primary" href={actionHref}>
            <FaPlay aria-hidden="true" />
            Assistir agora
          </a>
          <button className="btn-secondary" type="button" aria-label="Adicionar à minha lista">
            <FaPlus aria-hidden="true" />
          </button>
          <a className="btn-secondary icon-action" href="#/sobre" aria-label="Mais informações">
            <FaInfoCircle aria-hidden="true" />
          </a>
        </div>
        <p className="hero-included"><span aria-hidden="true">✓</span> Disponível na CAVEFLIX</p>
      </div>

      <button className="hero-slide-arrow hero-slide-arrow-left" type="button" onClick={() => changeSlide(-1)} aria-label="Destaque anterior">
        <FaChevronLeft aria-hidden="true" />
      </button>
      <button className="hero-slide-arrow hero-slide-arrow-right" type="button" onClick={() => changeSlide(1)} aria-label="Próximo destaque">
        <FaChevronRight aria-hidden="true" />
      </button>
      <div className="hero-dots" aria-label="Selecionar destaque">
        {items.map((item, index) => (
          <button
            className={index === activeIndex ? 'is-active' : ''}
            key={item.id}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={'Mostrar ' + item.title}
            aria-current={index === activeIndex ? 'true' : undefined}
          />
        ))}
      </div>
    </section>
  )
}

export default MediaHero
