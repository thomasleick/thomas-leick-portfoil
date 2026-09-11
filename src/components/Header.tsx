import { useEffect, useRef, useState } from 'react'
import { navItems } from '../data/portfolio'
import { Close, Command, Menu } from './Icons'

type HeaderProps = { onCommand: () => void }

export function Header({ onCommand }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const dialogRef = useRef<HTMLDialogElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)

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
        {navItems.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
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
          {navItems.map((item, index) => <a key={item.href} href={item.href} onClick={closeMenu}><small>0{index + 1}</small>{item.label}</a>)}
        </nav>
        <button type="button" className="mobile-command" onClick={() => { closeMenu(); onCommand() }}><Command size={17} />Open command palette <kbd>⌘K</kbd></button>
      </dialog>
    </header>
  )
}
