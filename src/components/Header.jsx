import { useState } from 'react'
import { FaBars, FaFilm, FaSearch, FaTh, FaTimes, FaUserCircle } from 'react-icons/fa'

const links = [
  { href: '#/', label: 'Início', path: '/' },
  { href: '#/filmes', label: 'Filmes', path: '/filmes' },
  { href: '#/series', label: 'Séries', path: '/series' },
  { href: '#/series', label: 'Aventura', path: '/aventura' },
  { href: '#/filmes', label: 'Ação', path: '/acao' },
]

function Header({ currentPath }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand-lockup" href="#/" onClick={closeMenu} aria-label="CAVEFLIX - início">
          <span className="brand-mark"><FaFilm aria-hidden="true" /></span>
          <span className="brand-name">CAVEFLIX</span>
        </a>

        <button
          className="btn-ghost menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <nav
          className={'main-nav ' + (menuOpen ? 'is-open' : '')}
          aria-label="Navegação principal"
        >
          <ul>
            {links.map(({ href, label, path }) => (
              <li key={path}>
                <a
                  className={'nav-link ' + (currentPath === path ? 'is-active' : '')}
                  href={href}
                  onClick={closeMenu}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-tools">
          <a href="#/filmes" aria-label="Pesquisar no catálogo"><FaSearch /></a>
          <a href="#/filmes" aria-label="Categorias"><FaTh /></a>
          <a className="profile-link" href="#/sobre" aria-label="Perfil"><FaUserCircle /></a>
        </div>
      </div>
    </header>
  )
}

export default Header
