import { useState } from 'react'
import { FaBars, FaFilm, FaTimes } from 'react-icons/fa'

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
    <header className="border-b border-white/10 bg-[#17100c]/90 backdrop-blur-xl">
      <div className="mx-auto flex min-h-[4.5rem] w-[min(1180px,calc(100%-2rem))] items-center justify-between gap-6">
        <a className="flex items-center gap-2.5" href="#/" onClick={closeMenu} aria-label="CAVEFLIX - início">
          <span className="grid size-8 place-items-center rounded-lg bg-brand text-[#24140b]">
            <FaFilm aria-hidden="true" />
          </span>
          <span className="text-lg font-black tracking-[-0.07em]">CAVEFLIX</span>
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
          className={'absolute inset-x-0 top-[4.5rem] z-20 border-b border-white/10 bg-[#241711] px-4 py-5 md:static md:block md:border-0 md:bg-transparent md:p-0 ' + (menuOpen ? 'block' : 'hidden')}
          aria-label="Navegação principal"
        >
          <ul className="mx-auto flex max-w-[1180px] flex-col gap-5 md:flex-row md:items-center md:gap-7">
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

        <a className="btn-primary header-cta" href="#/filmes">
          Explorar catálogo
        </a>
      </div>
    </header>
  )
}

export default Header
