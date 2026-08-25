import { useState } from 'react'
import { z } from 'zod'
import { FaCheckCircle, FaEnvelope, FaPaperPlane } from 'react-icons/fa'
import { Button, FormField } from '../components'

const initialForm = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

const contactSchema = z.object({
  name: z.string().trim().min(3, 'Digite seu nome completo.'),
  email: z.string().trim().email('Informe um e-mail válido.'),
  subject: z.string().trim().min(4, 'Escreva um assunto com pelo menos 4 caracteres.'),
  message: z.string().trim().min(10, 'Conte um pouco mais na sua mensagem.'),
})

function getFieldErrors(issues) {
  return issues.reduce((errors, issue) => {
    const field = issue.path[0]
    if (field && !errors[field]) errors[field] = issue.message
    return errors
  }, {})
}

function Contato() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const handleChange = ({ target }) => {
    setSent(false)
    setForm((currentForm) => ({ ...currentForm, [target.name]: target.value }))
    setErrors((currentErrors) => ({ ...currentErrors, [target.name]: '' }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const result = contactSchema.safeParse(form)

    if (!result.success) {
      setErrors(getFieldErrors(result.error.issues))
      return
    }

    setErrors({})
    setSent(true)
    setForm(initialForm)
  }

  return (
    <section className="page-shell">
      <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
        <div>
          <p className="eyebrow">Fale com a CAVEFLIX</p>
          <h1 className="display-title mt-5 text-5xl sm:text-7xl">Tem uma história para indicar?</h1>
          <p className="mt-6 text-base leading-8 text-muted">
            Envie sua mensagem, compartilhe uma sugestão ou conte o que você gostaria de ver na próxima versão do projeto.
          </p>
          <div className="mt-9 flex items-center gap-4 rounded-2xl border border-brand/20 bg-brand/[0.06] p-4">
            <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-brand text-[#07090d]">
              <FaEnvelope aria-hidden="true" />
            </span>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand">Canal aberto</p>
              <p className="mt-1 text-sm text-white/70">Respondemos assim que a sessão terminar.</p>
            </div>
          </div>
        </div>

        <div className="glass-panel p-5 sm:p-8">
          {sent && (
            <div className="mb-6 flex items-start gap-3 rounded-xl border border-brand/25 bg-brand/10 p-4 text-sm text-brand" role="status">
              <FaCheckCircle className="mt-0.5 shrink-0" aria-hidden="true" />
              <p>Mensagem enviada! Obrigado por ajudar a construir a CAVEFLIX.</p>
            </div>
          )}

          <form className="grid gap-5" onSubmit={handleSubmit} noValidate>
            <div className="grid gap-5 sm:grid-cols-2">
              <FormField
                label="Seu nome"
                name="name"
                value={form.name}
                onChange={handleChange}
                error={errors.name}
                placeholder="Como podemos chamar você?"
              />
              <FormField
                label="Seu e-mail"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                error={errors.email}
                placeholder="voce@email.com"
              />
            </div>
            <FormField
              label="Assunto"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              error={errors.subject}
              placeholder="Sugestão de filme, dúvida..."
            />
            <FormField
              label="Mensagem"
              name="message"
              value={form.message}
              onChange={handleChange}
              error={errors.message}
              placeholder="Escreva sua mensagem..."
              textarea
            />
            <Button type="submit" icon={FaPaperPlane}>Enviar mensagem</Button>
          </form>
        </div>
      </div>
    </section>
  )
}

Contato.pageTitle = 'CAVEFLIX | Contato'

export default Contato
