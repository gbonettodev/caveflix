import { useEffect, useState } from 'react'
import { FaArrowLeft, FaFilm } from 'react-icons/fa'
import { Footer, Header } from './components'
import Contato from './pages/Contato'
import Filmes from './pages/Filmes'
import Home from './pages/Home'
import Series from './pages/Series'
import Sobre from './pages/Sobre'

const routes = {
  '/': Home,
  '/filmes': Filmes,
  '/series': Series,
  '/sobre': Sobre,
  '/contato': Contato,
}

const getPathFromHash = () => window.location.hash.replace(/^#/, '') || '/'

function NotFound() {
  return (
    <section className="page-shell flex min-h-[60vh] items-center justify-center">
      <div className="glass-panel max-w-lg p-8 text-center">
        <FaFilm className="mx-auto mb-5 text-4xl text-brand" />
        <p className="eyebrow">404 · Página não encontrada</p>
        <h1 className="display-title mt-4 text-4xl">Essa sessão não está disponível.</h1>
        <p className="mt-4 text-muted">
          Volte para a página inicial e continue explorando o catálogo da CAVEFLIX.
        </p>
        <a className="btn-primary mt-7 inline-flex" href="#/">
          <FaArrowLeft />
          Voltar para o início
        </a>
      </div>
    </section>
  )
}

function App() {
  const [currentPath, setCurrentPath] = useState(getPathFromHash)

  useEffect(() => {
    const handleRouteChange = () => setCurrentPath(getPathFromHash())

    window.addEventListener('hashchange', handleRouteChange)
    return () => window.removeEventListener('hashchange', handleRouteChange)
  }, [])

  useEffect(() => {
    const page = routes[currentPath]
    document.title = page?.pageTitle ?? 'CAVEFLIX | Catálogo de filmes'
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [currentPath])

  const CurrentPage = routes[currentPath] ?? NotFound

  return (
    <div className="app-shell">
      <Header currentPath={currentPath} />
      <main>
        <CurrentPage />
      </main>
      <Footer />
    </div>
  )
}

export default App
