import { useEffect, useRef, useState } from 'react'
import { navItems, profile, projects } from '../data/portfolio'
import { ArrowUpRight, Close, Command } from './Icons'

type CommandPaletteProps = { open: boolean; onOpenChange: (open: boolean) => void }

type Action = { label: string; detail: string; href: string; external?: boolean }

const actions: readonly Action[] = [
  ...navItems.map((item) => ({ label: item.label, detail: 'Jump to section', href: item.href })),
  ...projects.map((project) => ({
    label: project.title,
    detail: project.id === 'k-libra' ? 'Read institutional site' : 'Open live product',
    href: project.links[0].href,
    external: true,
  })),
  { label: 'GitHub', detail: 'View public repositories', href: profile.links.github, external: true },
  { label: 'Chess', detail: 'Open Chess.com profile', href: profile.links.chess, external: true },
  { label: 'Instagram', detail: 'Open Instagram profile', href: profile.links.instagram, external: true },
]

export function CommandPalette({ open, onOpenChange }: CommandPaletteProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const [query, setQuery] = useState('')
  const normalizedQuery = query.trim().toLowerCase()
  const visibleActions = actions.filter((action) => `${action.label} ${action.detail}`.toLowerCase().includes(normalizedQuery))

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (open && !dialog.open) {
      dialog.showModal()
      window.setTimeout(() => inputRef.current?.focus(), 0)
    }
    if (!open && dialog.open) dialog.close()
  }, [open])

  function select(action: Action) {
    onOpenChange(false)
    if (action.external) window.open(action.href, '_blank', 'noopener,noreferrer')
    else window.location.assign(action.href)
  }

  return (
    <dialog ref={dialogRef} className="command-palette" aria-labelledby="palette-title" onClose={() => onOpenChange(false)}>
      <div className="palette-header"><span id="palette-title"><Command size={16} /> Navigate the position</span><button type="button" className="icon-button" onClick={() => onOpenChange(false)} aria-label="Close command palette"><Close size={19} /></button></div>
      <label className="palette-search"><span className="sr-only">Find a destination</span><input ref={inputRef} type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Find a destination…" /></label>
      <div className="palette-results" aria-live="polite">
        {visibleActions.length ? visibleActions.map((action) => <button type="button" key={`${action.label}-${action.href}`} onClick={() => select(action)}><span><strong>{action.label}</strong><small>{action.detail}</small></span>{action.external ? <ArrowUpRight size={17} /> : <span className="palette-go">↵</span>}</button>) : <p>No destinations match that query.</p>}
      </div>
      <footer><span>Esc closes</span><span><kbd>Enter</kbd> selects</span></footer>
    </dialog>
  )
}
