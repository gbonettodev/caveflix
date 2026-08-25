import { FaArrowRight, FaBullseye, FaEye, FaFilm, FaHandshake, FaHeart, FaLightbulb, FaUsers } from 'react-icons/fa'
import { team } from '../data/catalog'

const groupPhoto = '/team/mens-caves.jpg'

const values = [
  {
    icon: FaUsers,
    title: 'União',
    description: 'Acreditamos que grandes projetos são construídos através do trabalho em equipe.',
  },
  {
    icon: FaHandshake,
    title: 'Respeito',
    description: 'Valorizamos nossa equipe e todas as pessoas que fazem parte da nossa história.',
  },
  {
    icon: FaFilm,
    title: 'Qualidade',
    description: 'Buscamos criar uma experiência de catálogo bem executada, clara e agradável.',
  },
  {
    icon: FaBullseye,
    title: 'Comprometimento',
    description: 'Levamos nosso trabalho a sério e buscamos cumprir aquilo que nos propomos a fazer.',
  },
  {
    icon: FaLightbulb,
    title: 'Criatividade',
    description: 'Estamos sempre abertos a novas ideias e maneiras de melhorar nosso projeto.',
  },
  {
    icon: FaHeart,
    title: 'Empreendedorismo',
    description: 'Acreditamos na coragem de transformar ideias em oportunidades e construir nosso caminho.',
  },
]

function Sobre() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="about-orbit about-orbit-top" aria-hidden="true" />
        <div className="about-orbit about-orbit-bottom" aria-hidden="true" />

        <div className="about-hero-inner">
          <div className="about-hero-copy">
            <p className="eyebrow">Nossa história</p>
            <h1 className="about-title">
              Sobre a
              <span>CAVEFLIX</span>
            </h1>
            <p className="about-lead">
              Uma ideia que nasceu entre amigos, cresceu com união e agora se transforma em uma experiência feita por nós, para quem ama filmes e séries.
            </p>
          </div>

          <div className="about-photo-wrap">
            <div className="about-photo-corner about-photo-corner-top" aria-hidden="true" />
            <div className="about-photo-card">
              <img src={groupPhoto} alt="Os cinco integrantes da equipe Men's Caves" />
              <div className="about-photo-overlay" />
              <div className="about-photo-caption">
                <span>Men's Caves</span>
                <strong>Cinco amigos. Um propósito.</strong>
              </div>
            </div>
            <div className="about-photo-corner about-photo-corner-bottom" aria-hidden="true" />
          </div>
        </div>
      </section>

      <section className="about-story">
        <div className="about-section-inner about-story-grid">
          <div>
            <p className="about-kicker">De onde viemos</p>
            <h2 className="about-section-title">Uma história construída em equipe.</h2>
            <div className="about-rule" />
          </div>

          <div className="about-copy">
            <p>
              A <strong>CAVEFLIX</strong> nasceu da união de cinco amigos que compartilham, desde o início, a vontade de construir algo juntos.
            </p>
            <p>
              Danilo Carneiro, Leonardo Barbosa, Gustavo Bonetto, Davi Sanches e Luiz Guilherme formaram o grupo <strong>Men's Caves</strong> desde o primeiro dia em que se conheceram.
            </p>
            <p>
              Durante nossa trajetória no curso de <strong>Análise e Desenvolvimento de Sistemas no SENAI de Vinhedo</strong>, fortalecemos nossa amizade, nosso trabalho em equipe e nossa capacidade de transformar ideias em projetos.
            </p>
            <p>
              No segundo ano do curso, decidimos colocar o empreendedorismo em prática. Depois de discutirmos e decidirmos juntos o nome, nasceu a ideia da CAVEFLIX: um catálogo com identidade, curadoria e espaço para evoluir.
            </p>
            <p>
              Hoje, estamos transformando essa ideia em realidade, levando para nosso projeto a união, a determinação e o espírito de equipe que sempre fizeram parte dos Men's Caves.
            </p>
          </div>
        </div>
      </section>

      <section className="about-mission">
        <div className="about-section-inner about-mission-grid">
          <article className="about-mission-card">
            <FaBullseye aria-hidden="true" />
            <p className="about-kicker">Missão</p>
            <h2>Facilitar a descoberta.</h2>
            <p>
              Oferecer uma experiência de catálogo marcada pela curadoria, pela clareza e pelo cuidado, criando um espaço onde cada pessoa encontre um filme ou série para assistir.
            </p>
          </article>

          <article className="about-mission-card about-mission-card-highlight">
            <FaEye aria-hidden="true" />
            <p className="about-kicker">Visão</p>
            <h2>Crescer com identidade.</h2>
            <p>
              Tornar a CAVEFLIX uma experiência reconhecida pela organização, pela interface e pela identidade única do grupo, evoluindo de forma sólida a cada nova versão.
            </p>
          </article>
        </div>
      </section>

      <section className="about-values">
        <div className="about-section-inner">
          <div className="about-values-heading">
            <p className="about-kicker">O que nos guia</p>
            <h2 className="about-section-title">Nossos valores.</h2>
            <div className="about-rule" />
          </div>

          <div className="about-values-grid">
            {values.map(({ icon: Icon, title, description }, index) => (
              <article className="about-value-card" key={title}>
                <span className="about-value-number">0{index + 1}</span>
                <span className="about-value-icon"><Icon aria-hidden="true" /></span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-team">
        <div className="about-section-inner">
          <div className="about-team-grid">
            <div>
              <p className="about-kicker">Equipe — Men's Caves</p>
              <h2 className="about-section-title">Mais do que uma equipe, um projeto em movimento.</h2>
              <p className="about-team-lead">
                A CAVEFLIX é formada por cinco integrantes que estão juntos desde o início dessa jornada.
              </p>
            </div>

            <div className="about-member-grid">
              {team.map(({ id, name }) => (
                <div className="about-member" key={id}>
                  <span>0{id}</span>
                  <strong>{name}</strong>
                </div>
              ))}
            </div>
          </div>

          <div className="about-team-footer">
            <p>
              Mais do que uma equipe, somos os <strong>Men's Caves</strong> — um grupo que começou com uma ideia e agora está transformando essa união em um projeto real.
            </p>
            <strong className="about-team-signature">CAVEFLIX — feita por nós, para quem ama filmes e séries.</strong>
            <a className="btn-primary" href="#/contato">
              Falar com a equipe
              <FaArrowRight aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

Sobre.pageTitle = 'CAVEFLIX | Sobre'

export default Sobre
