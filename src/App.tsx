import { useEffect, useState } from 'react'
import { CommandPalette } from './components/CommandPalette'
import { Header } from './components/Header'
import { useReveal } from './hooks/useReveal'
import { content, getLocaleFromPath, siteOrigin } from './data/portfolio'
import { Career } from './sections/Career'
import { Contact } from './sections/Contact'
import { Engineering } from './sections/Engineering'
import { Hero } from './sections/Hero'
import { OutsideRuntime } from './sections/OutsideRuntime'
import { Work } from './sections/Work'

function updateMetadata(locale: 'en' | 'pt') {
  const copy = content[locale]
  const canonicalUrl = locale === 'pt' ? siteOrigin + '/pt/' : siteOrigin + '/'
  document.documentElement.lang = locale === 'pt' ? 'pt-BR' : 'en'
  document.title = copy.metadata.title

  const description = document.getElementById('meta-description')
  if (description instanceof HTMLMetaElement) description.content = copy.metadata.description
  const ogTitle = document.getElementById('og-title')
  if (ogTitle instanceof HTMLMetaElement) ogTitle.content = copy.metadata.title
  const ogDescription = document.getElementById('og-description')
  if (ogDescription instanceof HTMLMetaElement) ogDescription.content = copy.metadata.description
  const ogUrl = document.getElementById('og-url')
  if (ogUrl instanceof HTMLMetaElement) ogUrl.content = canonicalUrl
  const ogLocale = document.getElementById('og-locale')
  if (ogLocale instanceof HTMLMetaElement) ogLocale.content = copy.metadata.ogLocale
  const alternateLocale = document.getElementById('og-locale-alternate')
  if (alternateLocale instanceof HTMLMetaElement) alternateLocale.content = locale === 'pt' ? 'en_US' : 'pt_BR'
  const socialImage = siteOrigin + copy.metadata.imagePath
  const ogImage = document.getElementById('og-image')
  if (ogImage instanceof HTMLMetaElement) ogImage.content = socialImage
  const twitterImage = document.getElementById('twitter-image')
  if (twitterImage instanceof HTMLMetaElement) twitterImage.content = socialImage
  const twitterTitle = document.getElementById('twitter-title')
  if (twitterTitle instanceof HTMLMetaElement) twitterTitle.content = copy.metadata.title
  const twitterDescription = document.getElementById('twitter-description')
  if (twitterDescription instanceof HTMLMetaElement) twitterDescription.content = copy.metadata.description
  const canonical = document.getElementById('canonical')
  if (canonical instanceof HTMLLinkElement) canonical.href = canonicalUrl
}

export default function App() {
  const locale = getLocaleFromPath(window.location.pathname)
  const copy = content[locale]
  const [paletteOpen, setPaletteOpen] = useState(false)
  const mainRef = useReveal()

  useEffect(() => {
    updateMetadata(locale)
  }, [locale])

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      const target = event.target
      const typing = target instanceof HTMLInputElement
        || target instanceof HTMLTextAreaElement
        || target instanceof HTMLSelectElement
        || (target instanceof HTMLElement && target.isContentEditable)
      if (!typing && (event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault()
        setPaletteOpen(true)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">{copy.skipLink}</a>
      <Header locale={locale} onCommand={() => setPaletteOpen(true)} />
      <main id="main-content" ref={mainRef} tabIndex={-1}>
        <Hero locale={locale} />
        <Work locale={locale} />
        <Engineering locale={locale} />
        <Career locale={locale} />
        <OutsideRuntime locale={locale} />
        <Contact locale={locale} />
      </main>
      <CommandPalette open={paletteOpen} locale={locale} onOpenChange={setPaletteOpen} />
    </div>
  )
}
