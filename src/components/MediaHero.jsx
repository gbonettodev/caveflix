import { useCallback, useEffect, useRef, useState } from 'react'
import { FaChevronLeft, FaChevronRight, FaInfoCircle, FaPlay, FaPlus, FaStar } from 'react-icons/fa'

function MediaHero({ items, eyebrow, actionHref }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isFading, setIsFading] = useState(false)
  const isChangingRef = useRef(false)
  const transitionTimerRef = useRef(null)
  const finishTimerRef = useRef(null)
  const activeItem = items[activeIndex]

  const changeTo = useCallback((nextIndex) => {
    if (isChangingRef.current || nextIndex === activeIndex) return

    isChangingRef.current = true
    setIsFading(true)
    transitionTimerRef.current = window.setTimeout(() => {
      setActiveIndex(nextIndex)
      finishTimerRef.current = window.setTimeout(() => {
        setIsFading(false)
        isChangingRef.current = false
      }, 40)
    }, 260)
  }, [activeIndex])

  const changeSlide = useCallback((direction) => {
    changeTo((activeIndex + direction + items.length) % items.length)
  }, [activeIndex, changeTo, items.length])

  useEffect(() => {
    if (items.length < 2) return undefined

    const timer = window.setInterval(() => changeSlide(1), 10000)

    return () => window.clearInterval(timer)
  }, [changeSlide, items.length])

  useEffect(() => () => {
    window.clearTimeout(transitionTimerRef.current)
    window.clearTimeout(finishTimerRef.current)
  }, [])

  if (!activeItem) return null

  return (
    <section
      className={'prime-hero media-hero ' + (isFading ? 'is-fading' : '')}
      aria-label="Conteúdo em destaque"
    >
      <div
        className="hero-backdrop"
        style={{ backgroundImage: 'url(' + activeItem.poster + ')' }}
        aria-hidden="true"
      />
      <img className="hero-art" src={activeItem.poster} alt="" aria-hidden="true" />
      <div className="hero-content">
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
            onClick={() => changeTo(index)}
            aria-label={'Mostrar ' + item.title}
            aria-current={index === activeIndex ? 'true' : undefined}
          />
        ))}
      </div>
    </section>
  )
}

export default MediaHero
