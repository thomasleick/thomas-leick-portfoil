import { useEffect, useRef, useState } from 'react'
import { navItems } from '../data/portfolio'
import { Close, Command, Menu } from './Icons'

type HeaderProps = { onCommand: () => void }

export function Header({ onCommand }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const dialogRef = useRef<HTMLDialogElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const sections = navItems
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
  }, [])

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

  return (
    <header className="site-header">
      <a className="monogram" href="#top" aria-label="Back to the beginning">TL<span>.</span></a>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {navItems.map((item) => {
          const sectionId = item.href.slice(1)
          return <a className={activeSection === sectionId ? 'is-active' : undefined} key={item.href} href={item.href} aria-current={activeSection === sectionId ? 'location' : undefined} onClick={() => setActiveSection(sectionId)}>{item.label}</a>
        })}
      </nav>
      <div className="header-actions">
        <button className="command-trigger" type="button" onClick={onCommand} aria-label="Open navigation command palette">
          <Command size={15} /><span>Navigate</span><kbd>⌘K</kbd>
        </button>
        <button ref={triggerRef} className="menu-trigger" type="button" onClick={() => setMenuOpen(true)} aria-label="Open navigation menu" aria-haspopup="dialog">
          <Menu size={21} />
        </button>
      </div>
      <dialog ref={dialogRef} className="mobile-menu" aria-label="Navigation menu" onClose={() => setMenuOpen(false)}>
        <div className="mobile-menu-top"><span className="eyebrow">Index / 01—04</span><button type="button" className="icon-button" onClick={closeMenu} aria-label="Close navigation menu"><Close size={21} /></button></div>
        <nav aria-label="Mobile navigation">
          {navItems.map((item, index) => {
            const sectionId = item.href.slice(1)
            return <a className={activeSection === sectionId ? 'is-active' : undefined} key={item.href} href={item.href} aria-current={activeSection === sectionId ? 'location' : undefined} onClick={() => { setActiveSection(sectionId); closeMenu() }}><small>0{index + 1}</small>{item.label}</a>
          })}
        </nav>
        <button type="button" className="mobile-command" onClick={() => { closeMenu(); onCommand() }}><Command size={17} />Open command palette <kbd>⌘K</kbd></button>
      </dialog>
    </header>
  )
}
