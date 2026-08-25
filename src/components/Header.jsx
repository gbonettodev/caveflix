import { useState } from 'react'
import { FaBars, FaSearch, FaTimes, FaUserCircle } from 'react-icons/fa'

const links = [
  { href: '#/', label: 'Início', path: '/' },
  { href: '#/filmes', label: 'Filmes', path: '/filmes' },
  { href: '#/series', label: 'Séries', path: '/series' },
  { href: '#/sobre', label: 'Sobre', path: '/sobre' },
  { href: '#/contato', label: 'Contato', path: '/contato' },
]

function Header({ currentPath }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand-lockup" href="#/" onClick={closeMenu} aria-label="CAVEFLIX - início">
          <img className="brand-logo" src="/brand/caveflix-logo.png" alt="CAVEFLIX" />
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
          <button type="button" aria-label="Pesquisar no catálogo (em breve)">
            <FaSearch aria-hidden="true" />
          </button>
          <button className="profile-link" type="button" aria-label="Perfil (em breve)">
            <FaUserCircle aria-hidden="true" />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
