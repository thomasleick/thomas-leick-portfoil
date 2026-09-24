import { useEffect, useRef, useState } from 'react'
import { content, getLocaleHref, type Locale } from '../data/portfolio'
import { Close, Command, Menu } from './Icons'

type HeaderProps = {
  locale: Locale
  onCommand: () => void
}

function LanguageSwitch({ locale }: { locale: Locale }) {
  const otherLocale: Locale = locale === 'en' ? 'pt' : 'en'
  const link = getLocaleHref(otherLocale, window.location.pathname, window.location.search, window.location.hash)

  return (
    <nav className="language-switch" aria-label={locale === 'en' ? 'Language' : 'Idioma'}>
      {locale === 'en'
        ? <span lang="en" aria-current="page">EN</span>
        : <a href={link} lang="en" aria-label="Switch language to English">EN</a>}
      <i aria-hidden="true">/</i>
      {locale === 'pt'
        ? <span lang="pt-BR" aria-current="page">PT</span>
        : <a href={link} lang="pt-BR" aria-label="Mudar idioma para português do Brasil">PT</a>}
    </nav>
  )
}

export function Header({ locale, onCommand }: HeaderProps) {
  const copy = content[locale]
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const dialogRef = useRef<HTMLDialogElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const sections = copy.navigation
      .map((item) => document.querySelector(item.href))
      .filter((section): section is HTMLElement => section instanceof HTMLElement)
    if (!sections.length) return
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((left, right) => right.intersectionRatio - left.intersectionRatio)[0]
        if (visible) setActiveSection(visible.target.id)
      },
      { rootMargin: '-22% 0px -62% 0px', threshold: [0, .2, .5, .8] },
    )
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [copy.navigation])

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (menuOpen && !dialog.open) dialog.showModal()
    if (!menuOpen && dialog.open) dialog.close()
  }, [menuOpen])

  function closeMenu() {
    setMenuOpen(false)
    window.setTimeout(() => triggerRef.current?.focus(), 0)
  }

  function closeMenuAt(href: string) {
    setMenuOpen(false)
    window.setTimeout(() => {
      const id = href.slice(1)
      const heading = document.getElementById(id + '-title')
      const target = heading ?? document.getElementById(id)
      target?.focus({ preventScroll: true })
    }, 0)
  }

  function openPaletteFromMenu() {
    setMenuOpen(false)
    window.setTimeout(onCommand, 0)
  }

  return (
    <header className="site-header">
      <a className="monogram" href="#top" aria-label={locale === 'en' ? 'Back to the beginning' : 'Voltar ao início'}>TL<span>.</span></a>
      <nav className="desktop-nav" aria-label={locale === 'en' ? 'Primary navigation' : 'Navegação principal'}>
        {copy.navigation.map((item) => {
          const sectionId = item.href.slice(1)
          return <a className={activeSection === sectionId ? 'is-active' : undefined} key={item.href} href={item.href} aria-current={activeSection === sectionId ? 'location' : undefined} onClick={() => setActiveSection(sectionId)}>{item.label}</a>
        })}
      </nav>
      <div className="header-actions">
        <LanguageSwitch locale={locale} />
        <button className="command-trigger" type="button" onClick={onCommand} aria-label={copy.palette.triggerLabel}>
          <Command size={15} /><span>{copy.palette.trigger}</span><kbd>⌘K</kbd>
        </button>
        <button ref={triggerRef} className="menu-trigger" type="button" onClick={() => setMenuOpen(true)} aria-label={locale === 'en' ? 'Open navigation menu' : 'Abrir menu de navegação'} aria-haspopup="dialog" aria-expanded={menuOpen}>
          <Menu size={21} />
        </button>
      </div>
      <dialog ref={dialogRef} className="mobile-menu" aria-labelledby="mobile-menu-title" onClose={() => setMenuOpen(false)}>
        <div className="mobile-menu-top">
          <h2 className="sr-only" id="mobile-menu-title">{copy.menuTitle}</h2>
          <span className="eyebrow">Index / 01—05</span>
          <button type="button" className="icon-button" onClick={closeMenu} aria-label={locale === 'en' ? 'Close navigation menu' : 'Fechar menu de navegação'}><Close size={21} /></button>
        </div>
        <nav aria-label={locale === 'en' ? 'Mobile navigation' : 'Navegação mobile'}>
          {copy.navigation.map((item, index) => {
            const sectionId = item.href.slice(1)
            return <a className={activeSection === sectionId ? 'is-active' : undefined} key={item.href} href={item.href} aria-current={activeSection === sectionId ? 'location' : undefined} onClick={() => { setActiveSection(sectionId); closeMenuAt(item.href) }}><small>0{index + 1}</small>{item.label}</a>
          })}
        </nav>
        <button type="button" className="mobile-command" onClick={openPaletteFromMenu}><Command size={17} />{copy.palette.trigger}<kbd>⌘K</kbd></button>
        <div className="mobile-language"><LanguageSwitch locale={locale} /></div>
      </dialog>
    </header>
  )
}
