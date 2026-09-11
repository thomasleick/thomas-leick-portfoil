import { useEffect, useRef } from 'react'

export function useReveal() {
  const rootRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const root = rootRef.current
    if (!root || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const elements = Array.from(root.querySelectorAll<HTMLElement>('[data-reveal]'))
    elements.forEach((element) => element.classList.add('reveal-pending'))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('reveal-pending')
            entry.target.classList.add('reveal-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -48px 0px' },
    )
    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  return rootRef
}
