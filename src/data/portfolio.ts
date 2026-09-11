export type Project = {
  id: string
  label: string
  title: string
  eyebrow: string
  description: string
  detail: string
  capabilities: readonly string[]
  stack: readonly string[]
  links: readonly { label: string; href: string }[]
}

export const profile = {
  name: 'Thomas Andrioli Leick',
  role: 'Senior software engineer · systems builder',
  email: 'thomasaleick@gmail.com',
  links: {
    github: 'https://github.com/thomasleick',
    linkedin: 'https://br.linkedin.com/in/thomasleick',
    instagram: 'https://www.instagram.com/thomasleick/',
    chess: 'https://www.chess.com/member/leickthomas',
  },
} as const

export const projects: readonly Project[] = [
  {
    id: 'k-libra',
    label: '01',
    eyebrow: 'Operational system · primary case study',
    title: 'K-Libra',
    description: 'A product surface where commercial operations, inventory, finance, fiscal state and customer context must agree.',
    detail:
      'The local product map exposes dedicated domains for sales, products, inventory, payments, financial operations, fiscal documents, customers, returns, shipping and intelligence. The interesting part is not the menu—it is preserving the boundaries between those decisions.',
    capabilities: ['sales', 'inventory', 'financial', 'fiscal', 'payments', 'customers', 'returns', 'shipping', 'AI'],
    stack: ['React', 'Next.js', 'NestJS', 'Fastify', 'Supabase', 'TypeScript'],
    links: [
      { label: 'Open product', href: 'https://k-libra-system-web.vercel.app/' },
      { label: 'See the product site', href: 'https://k-libra-system-site.vercel.app/' },
    ],
  },
  {
    id: 'vocal-flow',
    label: '02',
    eyebrow: 'Audio practice · privacy-conscious product',
    title: 'Vocal Flow',
    description: 'A vocal-practice environment that treats audio, timing and pitch feedback as one deliberate system.',
    detail:
      'Track Studio brings private stems, a synchronized practice mixer, local microphone pitch estimation and MIDI reference alignment into one workflow. Suggested melody data only becomes a target after review, keeping the practice signal explicit.',
    capabilities: ['private tracks', 'stem workflow', 'MIDI reference', 'pitch feedback', 'local analysis'],
    stack: ['React', 'Vite', 'TensorFlow.js', 'Tone.js', 'MIDI', 'Supabase'],
    links: [{ label: 'Open Vocal Flow', href: 'https://vocal-flow-pi.vercel.app/app/' }],
  },
]

export const capabilities = [
  {
    index: 'A',
    title: 'Product systems',
    text: 'Model business domains as connected responsibilities—not as an assortment of disconnected screens.',
    tags: ['sales', 'inventory', 'financial', 'fiscal'],
  },
  {
    index: 'B',
    title: 'Interfaces with consequences',
    text: 'Build product interfaces that make state, exceptions and the next valid move understandable.',
    tags: ['React', 'Next.js', 'Vite', 'TypeScript'],
  },
  {
    index: 'C',
    title: 'Data and access boundaries',
    text: 'Keep tenant-aware access, authorization and data scope close to the operation they protect.',
    tags: ['NestJS', 'Fastify', 'Supabase', 'Postgres'],
  },
  {
    index: 'D',
    title: 'Signals, media and AI',
    text: 'Design practical workflows around inference, audio, MIDI and feedback without hiding their uncertainty.',
    tags: ['TensorFlow.js', 'Tone.js', 'MIDI', 'OpenAI'],
  },
] as const

export const personalSignals = [
  { mark: 'Nf3', title: 'Strategic play', text: 'Chess: attention to position, trade-offs and the next legal move.' },
  { mark: '22Y', title: 'Long practice', text: 'Strength training as a long-running practice in progressive overload.' },
  { mark: '∞', title: 'Continuity', text: 'A quiet infinity path acknowledges TEA as part of the person behind the work.' },
  { mark: '01', title: 'Fuel', text: 'runtime.fuel = coffee; Monster is kept as an occasional footnote.' },
] as const

export const navItems = [
  { label: 'Work', href: '#work' },
  { label: 'Engineering', href: '#engineering' },
  { label: 'Outside runtime', href: '#outside-runtime' },
  { label: 'Contact', href: '#contact' },
] as const
