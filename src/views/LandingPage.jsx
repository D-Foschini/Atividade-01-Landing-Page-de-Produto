import { useEffect, useRef } from 'react'
import {
  ArrowRight,
  Check,
  ChevronDown,
  Clock3,
  Droplets,
  Leaf,
  Menu,
  PackageCheck,
  ShieldCheck,
  ShoppingBag,
  Snowflake,
  Sparkles,
  ThermometerSun,
  X,
  Zap,
} from 'lucide-react'
import { benefits, faqs, reviews, steps } from '../models/product.js'
import { useLandingPageViewModel } from '../viewmodels/useLandingPageViewModel.js'
import styles from './LandingPage.module.css'

const css = (...names) => names.map((name) => styles[name]).filter(Boolean).join(' ')
const benefitIcons = { temperature: ThermometerSun, droplets: Droplets, leaf: Leaf }

function Logo() {
  return (
    <a className={css('logo')} href="#top" aria-label="ThermoViva - início">
      <span className={css('logo-mark')} aria-hidden="true"><Zap size={18} strokeWidth={2.6} /></span>
      <span>THERMO<span>VIVA</span></span>
    </a>
  )
}

function Header({ onBuy, open, onToggle, onClose }) {
  const menuButtonRef = useRef(null)

  useEffect(() => {
    if (!open) return undefined
    const onKey = (event) => {
      if (event.key !== 'Escape') return
      onClose()
      menuButtonRef.current?.focus()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, onClose])

  return (
    <header className={css('site-header')}>
      <div className={css('container', 'nav-wrap')}>
        <Logo />
        <nav id="primary-navigation" className={open ? css('nav-links', 'is-open') : css('nav-links')} aria-label="Navegação principal">
          <a href="#beneficios" onClick={onClose}>Benefícios</a>
          <a href="#como-funciona" onClick={onClose}>Como funciona</a>
          <a href="#avaliacoes" onClick={onClose}>Avaliações</a>
          <a href="#faq" onClick={onClose}>FAQ</a>
          <button className={css('btn', 'btn-small', 'mobile-buy')} onClick={onBuy}>
            Quero a minha <ArrowRight size={16} />
          </button>
        </nav>
        <button className={css('btn', 'btn-small', 'desktop-buy')} onClick={onBuy}>
          Quero a minha <ArrowRight size={16} />
        </button>
        <button id="menu-toggle" ref={menuButtonRef} className={css('menu-button')} onClick={onToggle} aria-label={open ? 'Fechar menu' : 'Abrir menu'} aria-expanded={open} aria-controls="primary-navigation">
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  )
}

function Hero({ onBuy }) {
  return (
    <>
      <section className={css('hero')}>
        <div className={css('hero-image')} role="img" aria-label="Garrafa térmica ThermoViva One preta sobre pedra"></div>
        <div className={css('hero-shade')}></div>
        <div className={css('container', 'hero-content')}>
          <div className={css('eyebrow')}><span></span> NOVA THERMOVIVA ONE</div>
          <h1>Seu ritmo muda.<br /><em>Sua bebida não.</em></h1>
          <p>A garrafa térmica de 750 ml feita para acompanhar cada mudança do seu dia — do primeiro café ao último treino.</p>
          <div className={css('hero-actions')}>
            <button className={css('btn', 'btn-primary')} onClick={onBuy}>Garantir a minha <ShoppingBag size={19} /></button>
            <a href="#como-funciona" className={css('text-link')}>Descobrir como funciona <ArrowRight size={17} /></a>
          </div>
          <div className={css('hero-proof')}>
            <div className={css('avatars')} aria-hidden="true"><span>MA</span><span>CM</span><span>BR</span></div>
            <div><div className={css('stars')} aria-label="5 de 5 estrelas">★★★★★</div><small>Aprovada por quem não para</small></div>
          </div>
        </div>
        <div className={css('spec-strip')} aria-label="Resumo das especificações">
          <div><strong>24H</strong><span>gelado</span></div>
          <div><strong>12H</strong><span>quente</span></div>
          <div><strong>750</strong><span>mililitros</span></div>
          <div><strong>100%</strong><span>à prova de vazamentos</span></div>
        </div>
      </section>

      <section className={css('marquee')} aria-label="Qualidades do produto">
        <div>SEM SUOR <Sparkles size={16} /> AÇO INOX 304 <Sparkles size={16} /> LIVRE DE BPA <Sparkles size={16} /> DESIGN PARA A ROTINA <Sparkles size={16} /></div>
      </section>
    </>
  )
}

function Benefits() {
  return (
    <section className={css('section', 'benefits')} id="beneficios">
      <div className={css('container')}>
        <div className={css('section-heading', 'split-heading')}>
          <div>
            <span className={css('section-tag')}>POR QUE THERMOVIVA?</span>
            <h2>Projetada para<br />dias <em>imprevisíveis.</em></h2>
          </div>
          <p>Sua agenda muda. O clima muda. Seus planos mudam. Criamos uma garrafa que mantém pelo menos uma coisa exatamente como você quer.</p>
        </div>
        <div className={css('benefit-grid')}>
          {benefits.map(({ number, icon, title, text }) => {
            const Icon = benefitIcons[icon]
            return (
            <article className={css('benefit-card')} key={number}>
              <div className={css('benefit-top')}><span>{number}</span><Icon size={29} strokeWidth={1.7} /></div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function Technology() {
  return (
    <section className={css('section', 'technology')}>
      <div className={css('container', 'tech-grid')}>
        <div className={css('bottle-stage')} aria-label="Representação técnica das camadas da ThermoViva One">
          <div className={css('orbit', 'orbit-one')}></div>
          <div className={css('orbit', 'orbit-two')}></div>
          <div className={css('bottle-illustration')}>
            <div className={css('bottle-cap')}></div>
            <div className={css('bottle-body')}><span>THERMO<br />VIVA</span></div>
          </div>
          <span className={css('callout', 'callout-a')}>Aço inox 304</span>
          <span className={css('callout', 'callout-b')}>Parede dupla</span>
          <span className={css('callout', 'callout-c')}>Isolamento a vácuo</span>
        </div>
        <div className={css('tech-copy')}>
          <span className={css('section-tag')}>TECNOLOGIA THERMOCORE™</span>
          <h2>O lado de fora não conta o que acontece <em>por dentro.</em></h2>
          <p>Duas paredes de aço inoxidável criam uma câmara de vácuo que reduz a troca de calor. Resultado: café quente, água gelada e suas mãos sempre confortáveis.</p>
          <ul>
            <li><Snowflake size={20} /><span><strong>Frio fica frio</strong> — até 24 horas, sem condensação externa.</span></li>
            <li><ThermometerSun size={20} /><span><strong>Quente fica quente</strong> — até 12 horas, sem aquecer as mãos.</span></li>
            <li><ShieldCheck size={20} /><span><strong>Sabor intacto</strong> — material atóxico que não retém odor.</span></li>
          </ul>
        </div>
      </div>
    </section>
  )
}

function HowItWorks() {
  return (
    <section className={css('section', 'how')} id="como-funciona">
      <div className={css('container')}>
        <div className={css('section-heading', 'centered')}>
          <span className={css('section-tag')}>SIMPLES COMO DEVE SER</span>
          <h2>Três passos. <em>Zero complicação.</em></h2>
        </div>
        <div className={css('steps')}>
          {steps.map(([title, text], index) => (
            <article className={css('step')} key={title}>
              <div className={css('step-number')}>0{index + 1}</div>
              <div className={css('step-line')}></div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
        <div className={css('day-strip')}>
          <div className={css('day-copy')}><Clock3 size={24} /><span><strong>07:30</strong> Café passado, dia iniciado.</span></div>
          <div className={css('temp-line')}><span></span><i></i><span></span></div>
          <div className={css('day-copy', 'right')}><span><strong>15:30</strong> Ainda quente. Ainda perfeito.</span><ThermometerSun size={24} /></div>
        </div>
      </div>
    </section>
  )
}

function Reviews() {
  return (
    <section className={css('section', 'reviews')} id="avaliacoes">
      <div className={css('container')}>
        <div className={css('review-heading')}>
          <div><span className={css('section-tag')}>AVALIAÇÕES ILUSTRATIVAS</span><h2>Quem usa,<br /><em>não larga.</em></h2></div>
          <div className={css('rating-big')}><strong>4.9</strong><span className={css('stars')}>★★★★★</span><small>avaliação fictícia do protótipo</small></div>
        </div>
        <div className={css('review-grid')}>
          {reviews.map((review) => (
            <article className={css('review-card')} key={review.name}>
              <div className={css('stars')}>★★★★★</div>
              <blockquote>“{review.quote}”</blockquote>
              <div className={css('reviewer')}><span>{review.initials}</span><div><strong>{review.name}</strong><small>{review.role}</small></div></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Offer({ onBuy }) {
  return (
    <section className={css('section', 'offer')} id="oferta">
      <div className={css('container', 'offer-shell')}>
        <div className={css('offer-copy')}>
          <span className={css('section-tag', 'light')}>LOTE DE LANÇAMENTO</span>
          <h2>Menos descartáveis.<br />Mais <em>momentos.</em></h2>
          <p>ThermoViva One 750 ml na cor Eclipse, com alça de silicone e embalagem reciclável.</p>
          <ul>
            <li><Check size={18} /> Frete grátis para todo o Brasil</li>
            <li><Check size={18} /> 30 dias para testar</li>
            <li><Check size={18} /> 2 anos de garantia</li>
          </ul>
        </div>
        <div className={css('price-panel')}>
          <span>DE <s>R$ 249,90</s> POR</span>
          <div className={css('price')}><small>R$</small><strong>189</strong><sup>,90</sup></div>
          <p>ou 6× de R$ 31,65 sem juros</p>
          <button className={css('btn', 'btn-dark')} onClick={onBuy}>Comprar agora <ArrowRight size={19} /></button>
          <small><ShieldCheck size={15} /> Checkout demonstrativo e sem cobrança</small>
        </div>
      </div>
    </section>
  )
}

function FAQ({ active, onToggle }) {
  return (
    <section className={css('section', 'faq')} id="faq">
      <div className={css('container', 'faq-grid')}>
        <div className={css('faq-heading')}>
          <span className={css('section-tag')}>DÚVIDAS? A GENTE RESPONDE.</span>
          <h2>Tudo o que você precisa <em>saber.</em></h2>
          <p>Ainda ficou com alguma pergunta? Escreva para <a href="mailto:ola@thermoviva.com">ola@thermoviva.com</a></p>
        </div>
        <div className={css('accordion')}>
          {faqs.map(([question, answer], index) => {
            const isOpen = active === index
            return (
              <article className={isOpen ? css('faq-item', 'open') : css('faq-item')} key={question}>
                <button id={`faq-question-${index}`} onClick={() => onToggle(index)} aria-expanded={isOpen} aria-controls={`faq-answer-${index}`}>
                  <span>{question}</span><ChevronDown size={21} />
                </button>
                <div id={`faq-answer-${index}`} className={css('faq-answer')} role="region" aria-labelledby={`faq-question-${index}`} hidden={!isOpen}><p>{answer}</p></div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function Footer({ onBuy }) {
  return (
    <footer>
      <div className={css('container', 'footer-top')}>
        <div><span className={css('section-tag', 'light')}>PRONTO PARA MUDAR O RITMO?</span><h2>Leve a temperatura certa <em>com você.</em></h2></div>
        <button className={css('btn', 'btn-primary')} onClick={onBuy}>Quero minha ThermoViva <ArrowRight size={19} /></button>
      </div>
      <div className={css('container', 'footer-bottom')}>
        <Logo />
        <p>Produto e avaliações fictícios. Projeto acadêmico desenvolvido em React.</p>
        <div><a href="#beneficios">Produto</a><a href="#faq">Ajuda</a><a href="#top">Voltar ao topo ↑</a></div>
      </div>
    </footer>
  )
}

function CheckoutModal({ onClose, onSubmit, loading, returnFocusTo }) {
  const dialogRef = useRef(null)
  const nameInputRef = useRef(null)

  useEffect(() => {
    const dialog = dialogRef.current
    const previousOverflow = document.body.style.overflow
    dialog.showModal()
    nameInputRef.current.focus()
    document.body.style.overflow = 'hidden'
    return () => {
      dialog.close()
      document.body.style.overflow = previousOverflow
      // O CTA do menu móvel fica oculto ao abrir o checkout.
      const target = returnFocusTo?.isConnected && returnFocusTo.getClientRects().length
        ? returnFocusTo
        : document.getElementById('menu-toggle')
      target?.focus({ preventScroll: true })
    }
  }, [returnFocusTo])

  const closeOnBackdrop = (event) => {
    if (event.target !== event.currentTarget) return
    const bounds = event.currentTarget.getBoundingClientRect()
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) onClose()
  }

  const keepFocusInDialog = (event) => {
    if (event.key !== 'Tab') return
    const controls = event.currentTarget.querySelectorAll('button:not(:disabled), input:not(:disabled), select:not(:disabled)')
    const first = controls[0]
    const last = controls[controls.length - 1]
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault()
      last.focus()
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault()
      first.focus()
    }
  }

  return (
      <dialog ref={dialogRef} className={css('modal')} aria-labelledby="checkout-title" aria-describedby="checkout-description" onCancel={(event) => { event.preventDefault(); onClose() }} onClick={closeOnBackdrop} onKeyDown={keepFocusInDialog}>
        <button className={css('modal-close')} onClick={onClose} aria-label="Fechar checkout"><X size={20} /></button>
        <div className={css('modal-icon')}><PackageCheck size={28} /></div>
        <span className={css('section-tag')}>RESERVA SIMULADA</span>
        <h2 id="checkout-title">Garanta sua ThermoViva.</h2>
        <p id="checkout-description">Preencha seus dados para simular a reserva. Nenhuma cobrança será feita.</p>
        <form onSubmit={onSubmit} aria-busy={loading}>
          <label>Nome completo<input ref={nameInputRef} autoFocus required autoComplete="name" name="name" placeholder="Como podemos chamar você?" /></label>
          <label>E-mail<input required type="email" autoComplete="email" name="email" placeholder="voce@exemplo.com" /></label>
          <label>Cor preferida<select name="color" defaultValue="Eclipse"><option>Eclipse</option><option>Areia</option><option>Verde musgo</option></select></label>
          <button className={css('btn', 'btn-primary')} type="submit" disabled={loading}>{loading ? 'Processando...' : 'Confirmar reserva'} {!loading && <ArrowRight size={18} />}</button>
        </form>
        <small><ShieldCheck size={14} /> Seus dados não são enviados nem armazenados.</small>
      </dialog>
  )
}

function LandingPage() {
  const vm = useLandingPageViewModel()
  const checkoutTriggerRef = useRef(null)
  const onBuy = (event) => {
    checkoutTriggerRef.current = event.currentTarget
    vm.openCheckout()
  }

  return (
    <>
      <a className={css('skip-link')} href="#conteudo">Pular para o conteúdo</a>
      <Header onBuy={onBuy} open={vm.menuOpen} onToggle={vm.toggleMenu} onClose={vm.closeMenu} />
      <main id="conteudo" tabIndex={-1}>
        <div id="top" />
        <Hero onBuy={onBuy} />
        <Benefits />
        <Technology />
        <HowItWorks />
        <Reviews />
        <Offer onBuy={onBuy} />
        <FAQ active={vm.activeFaq} onToggle={vm.toggleFaq} />
      </main>
      <Footer onBuy={onBuy} />
      {vm.checkoutOpen && <CheckoutModal onClose={vm.closeCheckout} onSubmit={vm.submitCheckout} loading={vm.checkoutLoading} returnFocusTo={checkoutTriggerRef.current} />}
      <div className={vm.success ? css('toast', 'show') : css('toast')} role="status" aria-atomic="true">
        {vm.success && <><span><Check size={18} /></span><div><strong>Reserva confirmada!</strong><small>Simulação concluída com sucesso.</small></div></>}
      </div>
    </>
  )
}

export default LandingPage
