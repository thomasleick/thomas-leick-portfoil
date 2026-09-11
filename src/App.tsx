import { useEffect, useState } from 'react'
import { CommandPalette } from './components/CommandPalette'
import { Header } from './components/Header'
import { useReveal } from './hooks/useReveal'
import { Contact } from './sections/Contact'
import { Engineering } from './sections/Engineering'
import { Hero } from './sections/Hero'
import { OutsideRuntime } from './sections/OutsideRuntime'
import { Work } from './sections/Work'

export default function App() {
  const [paletteOpen, setPaletteOpen] = useState(false)
  const mainRef = useReveal()

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault()
        setPaletteOpen(true)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return <div className="site-shell"><a className="skip-link" href="#main-content">Skip to content</a><Header onCommand={() => setPaletteOpen(true)} /><main id="main-content" ref={mainRef}><Hero /><Work /><Engineering /><OutsideRuntime /><Contact /></main><CommandPalette open={paletteOpen} onOpenChange={setPaletteOpen} /></div>
}
