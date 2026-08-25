import { FaGithub, FaInstagram, FaPlay, FaRegEnvelope } from 'react-icons/fa'

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#1b110c]">
      <div className="mx-auto grid w-[min(1180px,calc(100%-2rem))] gap-8 py-10 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <a className="flex items-center gap-2.5" href="#/" aria-label="CAVEFLIX - início">
            <span className="grid size-8 place-items-center rounded-lg bg-brand text-[#24140b]">
              <FaPlay className="ml-0.5 text-xs" aria-hidden="true" />
            </span>
            <span className="text-lg font-black tracking-[-0.07em]">CAVEFLIX</span>
          </a>
          <p className="mt-4 max-w-sm text-sm leading-7 text-muted">
            Um catálogo feito por quem gosta de descobrir histórias que ficam na memória.
          </p>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/55">Mapa</p>
          <div className="mt-4 grid gap-3 text-sm text-muted">
            <a className="transition-colors hover:text-brand" href="#/filmes">Filmes</a>
            <a className="transition-colors hover:text-brand" href="#/series">Séries</a>
            <a className="transition-colors hover:text-brand" href="#/sobre">Sobre o projeto</a>
          </div>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/55">Conecte-se</p>
          <div className="mt-4 flex gap-3">
            <a className="btn-ghost" href="#/contato" aria-label="Enviar mensagem">
              <FaRegEnvelope />
            </a>
            <a className="btn-ghost" href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a className="btn-ghost" href="https://instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/40">
        © 2026 CAVEFLIX. Projeto acadêmico desenvolvido em equipe.
      </div>
    </footer>
  )
}

export default Footer
