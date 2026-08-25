import { FaArrowRight, FaCheck, FaFilm, FaHeart, FaUsers } from 'react-icons/fa'
import { team } from '../data/catalog'

const values = [
  {
    icon: FaFilm,
    title: 'Curadoria com intenção',
    description: 'Menos ruído, mais histórias que realmente merecem um lugar na sua lista.',
  },
  {
    icon: FaUsers,
    title: 'Feito para compartilhar',
    description: 'Uma boa indicação fica ainda melhor quando encontra a pessoa certa.',
  },
  {
    icon: FaHeart,
    title: 'Experiência humana',
    description: 'Tecnologia para facilitar a escolha, sem tirar a emoção de descobrir algo novo.',
  },
]

function Sobre() {
  return (
    <section className="page-shell">
      <div className="grid items-end gap-10 lg:grid-cols-[1.25fr_0.75fr]">
        <div>
          <p className="eyebrow">Sobre o projeto</p>
          <h1 className="display-title mt-5 text-5xl sm:text-7xl">CAVEFLIX é um convite para dar play.</h1>
        </div>
        <p className="text-base leading-8 text-muted">
          Nascemos como um projeto acadêmico, mas pensamos como um produto real: simples de navegar, gostoso de explorar e pronto para evoluir com quem usa.
        </p>
      </div>

      <div className="mt-16 grid gap-5 md:grid-cols-3">
        {values.map(({ icon: Icon, title, description }) => (
          <article className="glass-panel p-6" key={title}>
            <span className="grid size-11 place-items-center rounded-xl bg-brand/10 text-brand">
              <Icon aria-hidden="true" />
            </span>
            <h2 className="mt-6 text-lg font-bold text-white">{title}</h2>
            <p className="mt-3 text-sm leading-7 text-muted">{description}</p>
          </article>
        ))}
      </div>

      <div className="mt-20 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="eyebrow">Nossa equipe</p>
          <h2 className="section-title mt-3">Cinco olhares, um catálogo.</h2>
          <p className="mt-4 text-sm leading-7 text-muted">
            Cada integrante cuida de uma área da aplicação. Assim, o projeto cresce em paralelo sem perder a identidade visual.
          </p>
          <a className="btn-primary mt-7" href="#/contato">
            Falar com a equipe
            <FaArrowRight aria-hidden="true" />
          </a>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {team.map(({ id, name, role }) => (
            <article className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.025] p-4" key={id}>
              <span className="grid size-11 shrink-0 place-items-center rounded-full border border-brand/30 bg-brand/10 text-brand">
                <FaCheck aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-sm font-bold text-white">{name}</h3>
                <p className="mt-1 text-xs text-muted">{role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

Sobre.pageTitle = 'CAVEFLIX | Sobre'

export default Sobre
