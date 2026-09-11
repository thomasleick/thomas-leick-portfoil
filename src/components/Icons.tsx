import type { ReactNode } from 'react'

type IconProps = { size?: number; title?: string }

function Frame({ children, size = 20, title }: IconProps & { children: ReactNode }) {
  return (
    <svg aria-hidden={title ? undefined : true} aria-label={title} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {title ? <title>{title}</title> : null}
      {children}
    </svg>
  )
}

export function ArrowUpRight(props: IconProps) { return <Frame {...props}><path d="M6 18 18 6M9 6h9v9" /></Frame> }
export function Command(props: IconProps) { return <Frame {...props}><path d="M9 8a3 3 0 1 1-3-3 3 3 0 0 1 3 3v8a3 3 0 1 1-3-3 3 3 0 0 1 3 3h6a3 3 0 1 1 3-3 3 3 0 0 1-3 3V8a3 3 0 1 1 3 3 3 3 0 0 1-3-3H9Z" /></Frame> }
export function Menu(props: IconProps) { return <Frame {...props}><path d="M4 7h16M4 12h16M4 17h16" /></Frame> }
export function Close(props: IconProps) { return <Frame {...props}><path d="m6 6 12 12M18 6 6 18" /></Frame> }
export function Github(props: IconProps) { return <Frame {...props}><path d="M15 22v-3.9c.04-1-.35-1.95-1.08-2.64 3.6-.4 7.38-1.76 7.38-7.93a6.2 6.2 0 0 0-1.65-4.3 5.8 5.8 0 0 0-.16-4.24s-1.35-.43-4.42 1.64a15.3 15.3 0 0 0-8.05 0C3.95-1.44 2.6-1 2.6-1a5.8 5.8 0 0 0-.16 4.24A6.2 6.2 0 0 0 .8 7.54c0 6.15 3.76 7.52 7.36 7.93a3.42 3.42 0 0 0-1 2.48V22" /><path d="M8.2 19.2c-3 .93-3.63-1.45-3.63-1.45-.5-1.25-1.2-1.58-1.2-1.58-.97-.67.08-.65.08-.65 1.08.08 1.64 1.1 1.64 1.1.95 1.64 2.5 1.17 3.1.9" /></Frame> }
export function Linkedin(props: IconProps) { return <Frame {...props}><path d="M6.3 9.2V18M6.3 5.8v.1M10.4 18v-5.1a3.4 3.4 0 0 1 6.8 0V18M10.4 12.2V9.2" /><rect x="3" y="3" width="18" height="18" rx="2" /></Frame> }
export function Mail(props: IconProps) { return <Frame {...props}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></Frame> }
