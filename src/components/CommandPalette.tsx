import { useEffect, useRef, useState } from 'react'
import { content, profile, type Locale } from '../data/portfolio'
import { ArrowUpRight, Close, Command } from './Icons'

type CommandPaletteProps = {
  open: boolean
  locale: Locale
  onOpenChange: (open: boolean) => void
}

type Action = {
  label: string
  detail: string
  href: string
  destination: 'section' | 'new-tab' | 'same-window'
}

export function CommandPalette({ open, locale, onOpenChange }: CommandPaletteProps) {
  const copy = content[locale]
  const dialogRef = useRef<HTMLDialogElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const openerRef = useRef<HTMLElement | null>(null)
  const [query, setQuery] = useState('')
  const [focusAfterCloseId, setFocusAfterCloseId] = useState<string | null>(null)
  const normalizedQuery = query.trim().toLocaleLowerCase(locale === 'pt' ? 'pt-BR' : 'en')
  const actions: readonly Action[] = [
    ...copy.navigation.map((item) => ({ label: item.label, detail: copy.palette.sectionDetail, href: item.href, destination: 'section' as const })),
    ...copy.work.cases.map((project) => ({ label: project.title, detail: copy.palette.caseDetail, href: '#' + project.id, destination: 'section' as const })),
    { label: 'GitHub', detail: copy.palette.github, href: profile.links.github, destination: 'new-tab' },
    { label: 'LinkedIn', detail: copy.palette.linkedin, href: profile.links.linkedin, destination: 'new-tab' },
    { label: copy.palette.email, detail: profile.email, href: 'mailto:' + profile.email, destination: 'same-window' },
    { label: copy.palette.chess, detail: 'Chess.com', href: profile.links.chess, destination: 'new-tab' },
    { label: copy.palette.instagram, detail: 'Instagram', href: profile.links.instagram, destination: 'new-tab' },
  ]
  const visibleActions = actions.filter((action) => (action.label + ' ' + action.detail).toLocaleLowerCase(locale === 'pt' ? 'pt-BR' : 'en').includes(normalizedQuery))

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (open && !dialog.open) {
      openerRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null
      dialog.showModal()
      window.requestAnimationFrame(() => inputRef.current?.focus())
    }
    if (!open && dialog.open) dialog.close()
  }, [open])

  function restoreFocus() {
    const destination = focusAfterCloseId ? document.getElementById(focusAfterCloseId) : openerRef.current
    setFocusAfterCloseId(null)
    window.requestAnimationFrame(() => destination?.focus({ preventScroll: true }))
  }

  return (
    <dialog
      ref={dialogRef}
      className="command-palette"
      aria-labelledby="palette-title"
      onClose={() => { onOpenChange(false); restoreFocus() }}
      onClick={(event) => { if (event.target === event.currentTarget) onOpenChange(false) }}
    >
      <div className="palette-header">
        <h2 id="palette-title"><Command size={16} />{copy.palette.title}</h2>
        <button type="button" className="icon-button" onClick={() => onOpenChange(false)} aria-label={locale === 'en' ? 'Close command palette' : 'Fechar paleta de navegação'}><Close size={19} /></button>
      </div>
      <label className="palette-search">
        <span className="sr-only">{copy.palette.searchLabel}</span>
        <input
          ref={inputRef}
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === 'ArrowDown') {
              event.preventDefault()
              event.currentTarget.closest('dialog')?.querySelector<HTMLElement>('[data-command-action]')?.focus()
            }
          }}
          placeholder={copy.palette.searchPlaceholder}
        />
      </label>
      <p className="sr-only" aria-live="polite">{visibleActions.length} {copy.palette.resultsLabel}</p>
      <ul className="palette-results" aria-label={copy.palette.searchLabel}>
        {visibleActions.length
          ? visibleActions.map((action, index) => (
            <li key={action.href}>
              <a
                href={action.href}
                target={action.destination === 'new-tab' ? '_blank' : undefined}
                rel={action.destination === 'new-tab' ? 'noopener noreferrer' : undefined}
                data-command-action
                onClick={() => {
                  if (action.destination === 'section') setFocusAfterCloseId(action.href.slice(1) + '-title')
                  onOpenChange(false)
                }}
                onKeyDown={(event) => {
                  if (event.key === 'ArrowDown') {
                    event.preventDefault()
                    const results = event.currentTarget.closest('ul')?.querySelectorAll<HTMLAnchorElement>('[data-command-action]')
                    if (results?.length) results[(index + 1) % results.length]?.focus()
                  }
                  if (event.key === 'ArrowUp') {
                    event.preventDefault()
                    if (index === 0) event.currentTarget.closest('dialog')?.querySelector<HTMLInputElement>('input')?.focus()
                    else {
                      const results = event.currentTarget.closest('ul')?.querySelectorAll<HTMLAnchorElement>('[data-command-action]')
                      results?.[index - 1]?.focus()
                    }
                  }
                }}
              >
                <span><strong>{action.label}</strong><small>{action.detail}</small></span>
                {action.destination === 'section' ? <span className="palette-go" aria-hidden="true">↵</span> : <span aria-hidden="true"><ArrowUpRight size={17} /></span>}
              </a>
            </li>
          ))
          : <li className="palette-empty">{copy.palette.noResults}</li>}
      </ul>
      <footer><span>{copy.palette.closeHint}</span><span><kbd>↑</kbd><kbd>↓</kbd> {copy.palette.selectHint}</span></footer>
    </dialog>
  )
}
