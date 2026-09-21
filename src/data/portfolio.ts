export type Locale = 'en' | 'pt'

type NavigationItem = {
  label: string
  href: string
}

type ProjectLink = {
  label: string
  href: string
}

type DomainVisual = {
  type: 'domains'
  label: string
  nodes: readonly string[]
  aiLabel: string
  aiDescription: string
  caption: string
}

type VocalisVisual = {
  type: 'vocalis'
  label: string
  productLabel: string
  productSteps: readonly string[]
  productFeedback: string
  researchLabel: string
  researchSteps: readonly string[]
  groundTruth: string
  outcomes: readonly string[]
  caption: string
}

type AgentVisual = {
  type: 'agent'
  label: string
  steps: readonly string[]
  systemLabel: string
  systemParts: readonly string[]
  caption: string
}

export type ProjectVisual = DomainVisual | VocalisVisual | AgentVisual

export type ProjectCase = {
  id: string
  number: string
  category: string
  title: string
  summary: string
  challengeLabel: string
  challenge: string
  roleLabel: string
  role: string
  decisionsLabel: string
  decisions: readonly { title: string; detail: string }[]
  evidenceLabel: string
  evidence: string
  stackLabel: string
  stack: readonly string[]
  links: readonly ProjectLink[]
  visual: ProjectVisual
}

type PageCopy = {
  metadata: {
    title: string
    description: string
    ogLocale: string
    imagePath: string
  }
  navigation: readonly NavigationItem[]
  menuTitle: string
  skipLink: string
  hero: {
    eyebrow: string
    lineOne: string
    emphasis: string
    lineThree: string
    introduction: string
    workCta: string
    contactCta: string
    location: string
    scrollHint: string
    principleLabel: string
    principle: string
    principleNote: string
    portraitLabel: string
  }
  work: {
    eyebrow: string
    title: string
    introduction: string
    questionsLabel: string
    questions: readonly { project: string; question: string }[]
    cases: readonly ProjectCase[]
  }
  engineering: {
    eyebrow: string
    title: string
    introduction: string
    capabilities: readonly {
      index: string
      title: string
      text: string
      tags: readonly string[]
    }[]
    principle: string
    principleLabel: string
  }
  career: {
    eyebrow: string
    title: string
    introduction: string
    experience: readonly {
      company: string
      role: string
      period: string
      focus: string
    }[]
  }
  outside: {
    eyebrow: string
    title: string
    introduction: string
    noteLabel: string
    note: string
    noteCaption: string
    signals: readonly { mark: string; title: string; text: string }[]
    chessLabel: string
    chessLink: string
  }
  contact: {
    eyebrow: string
    titleFirst: string
    titleSecond: string
    introduction: string
    emailLabel: string
    codeLabel: string
    profileLabel: string
    footerNote: string
    fuel: string
  }
  palette: {
    title: string
    trigger: string
    triggerLabel: string
    searchLabel: string
    searchPlaceholder: string
    sectionDetail: string
    caseDetail: string
    github: string
    linkedin: string
    email: string
    chess: string
    instagram: string
    noResults: string
    resultsLabel: string
    closeHint: string
    selectHint: string
  }
}

export const siteOrigin = 'https://thomas-leick-portfoil.vercel.app'

export const profile = {
  name: 'Thomas Andrioli Leick',
  email: 'leick.thom90@gmail.com',
  links: {
    github: 'https://github.com/thomasleick',
    linkedin: 'https://br.linkedin.com/in/thomasleick',
    instagram: 'https://www.instagram.com/thomasleick/',
    chess: 'https://www.chess.com/member/leickthomas',
  },
} as const

const english: PageCopy = {
  metadata: {
    title: 'Thomas Andrioli Leick — Systems Builder',
    description: 'Systems engineering, applied audio research, and governed agent evaluation by Thomas Andrioli Leick.',
    ogLocale: 'en_US',
    imagePath: '/social-card.svg',
  },
  navigation: [
    { label: 'Work', href: '#work' },
    { label: 'Engineering', href: '#engineering' },
    { label: 'Career', href: '#career' },
    { label: 'Outside runtime', href: '#outside-runtime' },
    { label: 'Contact', href: '#contact' },
  ],
  menuTitle: 'Portfolio navigation',
  skipLink: 'Skip to content',
  hero: {
    eyebrow: 'Product · systems · evidence',
    lineOne: 'Engineering the',
    emphasis: 'structure',
    lineThree: 'behind serious products.',
    introduction: 'Thomas Andrioli Leick is a senior software engineer and systems builder. He works where product, infrastructure, data and business rules meet.',
    workCta: 'Explore selected work',
    contactCta: 'Start a conversation',
    location: 'São Paulo, Brazil',
    scrollHint: 'Scroll to explore',
    principleLabel: 'Working principle',
    principle: 'Complexity deserves an interface.',
    principleNote: 'model / verify / refine',
    portraitLabel: 'Portrait of Thomas Andrioli Leick',
  },
  work: {
    eyebrow: 'Selected work',
    title: 'Systems under real constraints.',
    introduction: 'Three different systems ask a related question: what makes an outcome trustworthy?',
    questionsLabel: 'Three questions of trust',
    questions: [
      { project: 'K-Libra', question: 'Can this business transition happen under the right authority?' },
      { project: 'Vocalis', question: 'Can this note event be trusted after separation?' },
      { project: 'AI-SDLC', question: 'Did the engineering agent actually solve the mission?' },
    ],
    cases: [
      {
        id: 'k-libra',
        number: '01',
        category: 'Systems engineering',
        title: 'K-Libra',
        summary: 'A private ERP and public product surface for the operational side of a 3D-printing business.',
        challengeLabel: 'The problem',
        challenge: 'The hard part is not listing modules. Sales, inventory, financial and fiscal records, returns and shipping must cross domain boundaries without losing authority, history or atomicity.',
        roleLabel: 'My role',
        role: 'Product architecture and engineering across API, web and institutional surfaces, including backend workflows and product interfaces.',
        decisionsLabel: 'Decisions that matter',
        decisions: [
          { title: 'Keep domain authority explicit', detail: 'Each domain owns its canonical state change; a neighboring context does not silently become the writer.' },
          { title: 'Separate request and worker composition', detail: 'HTTP handling and background work have different runtime responsibilities and are composed separately.' },
          { title: 'Make high-impact transitions atomic', detail: 'Selected shipping, stock and document operations use database boundaries, locks and idempotency controls.' },
          { title: 'Derive company scope on the server', detail: 'Protected workflows validate the company and related records at their authority boundary.' },
        ],
        evidenceLabel: 'What the evidence supports',
        evidence: 'Local contracts cover background composition, selected shipping and stock transitions, returns authority, and DMS concurrency. They do not certify remote deployment or tenant isolation.',
        stackLabel: 'Selected technologies',
        stack: ['React', 'Next.js', 'NestJS', 'Fastify', 'TypeScript', 'Supabase / PostgreSQL'],
        links: [
          { label: 'Institutional product site', href: 'https://k-libra-system-site.vercel.app/#conteudo' },
          { label: 'Customer portal · PX3 clients', href: 'https://k-libra-system-web.vercel.app/login' },
        ],
        visual: {
          type: 'domains',
          label: 'Selected system domains · conceptual map',
          nodes: ['Sales', 'Inventory', 'Shipping', 'Returns', 'Financial', 'Payments', 'Fiscal', 'DMS', 'Support'],
          aiLabel: 'AI-assisted workflows',
          aiDescription: 'Models may suggest intent; owning domains retain authority.',
          caption: 'Selected relationships, not a deployment topology.',
        },
      },
      {
        id: 'vocalis',
        number: '02',
        category: 'Applied research · music information retrieval',
        title: 'Vocalis',
        summary: 'A private vocal-practice environment paired with an applied question: can note-level events remain useful after a recorded voice is separated from its mix?',
        challengeLabel: 'The problem',
        challenge: 'Pitch (F0) is not yet a musical event. A system must infer note boundaries, handle uncertain frames and be evaluated on recordings outside its training and calibration data.',
        roleLabel: 'My role',
        role: 'Product engineering for private track practice and local pitch feedback, plus implementation and evaluation of note-transcription experiments.',
        decisionsLabel: 'Research decisions',
        decisions: [
          { title: 'Keep F0 separate from note events', detail: 'A stable pitch trace is an input to transcription, not proof that a useful note was recovered.' },
          { title: 'Make uncertainty visible', detail: 'Model candidates remain reviewable; uncertain output should not silently become musical ground truth.' },
          { title: 'Evaluate by singer, not random frame', detail: 'Singer-separated splits help test whether a model extends beyond the voices used for training.' },
          { title: 'Treat separation robustness as a question', detail: 'Codec and separation degradation belong in a controlled benchmark; no improvement is claimed here.' },
        ],
        evidenceLabel: 'What the evidence supports',
        evidence: 'The product combines private tracks, vocal stems, practice controls and local pitch feedback. Local note-transcription experiments and singer-separated evaluations remain QA-only; no research provider is selected in the product.',
        stackLabel: 'Selected technologies',
        stack: ['React', 'Vite', 'Web Audio', 'Tone.js', 'Supabase', 'Demucs / Python'],
        links: [
          { label: 'Open Vocalis', href: 'https://vocal-flow-pi.vercel.app/' },
        ],
        visual: {
          type: 'vocalis',
          label: 'Product workflow and research direction',
          productLabel: 'Product workflow',
          productSteps: ['Private track', 'Vocal stem', 'Loop and practice'],
          productFeedback: 'Local F0 feedback',
          researchLabel: 'Controlled benchmark design · research direction',
          researchSteps: ['Annotated vocal', 'Controlled mix', 'Separation', 'Recovered stem', 'Note events'],
          groundTruth: 'Compare with known note ground truth',
          outcomes: ['Confirmed after review', 'Suggested', 'Abstain when uncertain'],
          caption: 'Method under development; this diagram is not a measured result.',
        },
      },
      {
        id: 'ai-sdlc',
        number: '03',
        category: 'Agentic engineering · engineering systems',
        title: 'AI-SDLC',
        summary: 'A governed engineering runtime built around a hard question: did an agent solve the mission, or only produce plausible code?',
        challengeLabel: 'The problem',
        challenge: 'Engineering work can fail at scope, evidence, validation or recovery even when its output looks convincing. The runtime must record what authority was granted and what makes an outcome eligible for evaluation.',
        roleLabel: 'My role',
        role: 'Architecture and implementation of mission governance, scoped execution, candidate runtime and evaluation machinery.',
        decisionsLabel: 'System decisions',
        decisions: [
          { title: 'Make authority part of the mission', detail: 'Project profiles, READ_ONLY and scoped-write modes, and authorized roots define where a candidate can act.' },
          { title: 'Keep execution bounded', detail: 'Sandboxing, explicit stop conditions and human gates constrain sensitive or external actions.' },
          { title: 'Preserve cell and attempt identity', detail: 'A retry is a distinct attempt; persistent records prevent an outcome from being scored twice.' },
          { title: 'Separate failure classes', detail: 'Infrastructure and oracle failures remain distinct from terminal engineering outcomes under a versioned policy.' },
        ],
        evidenceLabel: 'What the evidence supports',
        evidence: 'The system includes governed missions, scoped execution, a persistent evaluation ledger and explicit score eligibility. Campaigns are experimental; their results are not presented as a quality certification.',
        stackLabel: 'Selected technologies',
        stack: ['TypeScript', 'Node.js', 'Codex executor', 'Sandboxed runtime', 'Persistent ledger'],
        links: [],
        visual: {
          type: 'agent',
          label: 'Governed evaluation lifecycle',
          steps: ['Mission', 'Authority', 'Sandboxed run', 'Evidence', 'Score eligibility', 'Human review'],
          systemLabel: 'The measurement system',
          systemParts: ['Executable fixtures', 'Persistent attempts', 'Crash and resume', 'Versioned policy'],
          caption: 'An experimental evaluation system, not a benchmark certification.',
        },
      },
    ],
  },
  engineering: {
    eyebrow: 'Engineering responsibility',
    title: 'Technology follows the boundary.',
    introduction: 'The stack matters when it carries a real responsibility. These are the concerns surfaced across the work.',
    capabilities: [
      { index: 'A', title: 'Authority and transitions', text: 'Keep business decisions, tenant context and durable state changes at the boundary that owns them.', tags: ['domain ownership', 'transactions', 'access scope'] },
      { index: 'B', title: 'Interfaces to operations', text: 'Make state, exceptions and the next valid action understandable to the person doing the work.', tags: ['product design', 'frontend', 'workflow'] },
      { index: 'C', title: 'Signals into decisions', text: 'Separate raw measurements from useful events, expose uncertainty and evaluate before promotion.', tags: ['audio', 'MIR', 'evaluation'] },
      { index: 'D', title: 'Agents under governance', text: 'Constrain execution, preserve attempts and require evidence before treating an outcome as successful.', tags: ['agent runtime', 'sandbox', 'evidence'] },
    ],
    principle: 'A system should make the next valid action visible—and make its limits visible too.',
    principleLabel: 'Working principle / 01',
  },
  career: {
    eyebrow: 'Career',
    title: 'Context earned across domains.',
    introduction: 'Roles across financial products, distributed systems, business software and operational reporting.',
    experience: [
      { company: 'Galápagos Capital', role: 'Tech Leader', period: 'Jun 2026 — present', focus: 'Architecture authority, technical standards, full-stack and cloud evolution.' },
      { company: 'Thomson Reuters', role: 'Senior Software Engineer 1', period: 'Mar 2026 — Jun 2026', focus: 'Distributed Node.js systems, cloud architecture, security and automated testing.' },
      { company: 'Sparta Fundos de Investimento', role: 'Senior Software Engineer / Squad Lead', period: 'Jul 2024 — Jan 2026', focus: 'Financial systems, risk APIs, event-driven pipelines and database performance.' },
      { company: 'Tivita Tecnologia', role: 'Full-Stack Developer', period: 'Jan 2022 — Jan 2023', focus: 'Administrative management product with Node.js, TypeScript, MongoDB and React.' },
      { company: 'Buffet GulaMania', role: 'Full-Stack Developer', period: 'Jul 2019 — Jan 2022', focus: 'Corporate web, internal sales support systems and business-rule APIs.' },
      { company: 'Elis Brasil', role: 'Data Analyst', period: 'Oct 2018 — May 2019', focus: 'Automated accounting and financial reports and operational-control tools.' },
    ],
  },
  outside: {
    eyebrow: 'Outside the runtime',
    title: 'Precision has a life beyond the terminal.',
    introduction: 'Personal references stay quiet: long practice, strategic play and a preference for meaningful detail.',
    noteLabel: 'A working thesis',
    note: 'Discipline compounds when the feedback loop is honest.',
    noteCaption: 'progressive overload / systems iteration',
    signals: [
      { mark: 'Nf3', title: 'Strategic play', text: 'Chess: attention to position, trade-offs and the next legal move.' },
      { mark: '22Y', title: 'Long practice', text: 'Strength training as a long-running practice in progressive overload.' },
      { mark: '∞', title: 'Continuity', text: 'A quiet infinity path acknowledges TEA as part of the person behind the work.' },
      { mark: '01', title: 'Fuel', text: 'runtime.fuel = coffee; Monster is an occasional footnote.' },
    ],
    chessLabel: 'Side channel',
    chessLink: 'Find the player on Chess.com',
  },
  contact: {
    eyebrow: 'Contact',
    titleFirst: 'Bring a real',
    titleSecond: 'systems problem.',
    introduction: 'For product engineering, architecture and difficult operational surfaces, start with the context, constraints and consequence of getting it wrong.',
    emailLabel: 'Email',
    codeLabel: 'Code',
    profileLabel: 'Professional profile',
    footerNote: 'Built as a static, privacy-respecting portfolio.',
    fuel: 'fuel: coffee',
  },
  palette: {
    title: 'Navigate this portfolio',
    trigger: 'Navigate',
    triggerLabel: 'Open navigation command palette',
    searchLabel: 'Find a destination',
    searchPlaceholder: 'Find a destination…',
    sectionDetail: 'Jump to section',
    caseDetail: 'Read the case study',
    github: 'View public repositories',
    linkedin: 'Open professional profile',
    email: 'Start an email',
    chess: 'Open Chess.com profile',
    instagram: 'Open Instagram profile',
    noResults: 'No destinations match that search.',
    resultsLabel: 'results',
    closeHint: 'Esc closes',
    selectHint: 'Enter selects',
  },
}

const portuguese: PageCopy = {
  metadata: {
    title: 'Thomas Andrioli Leick — Engenharia de Sistemas',
    description: 'Engenharia de sistemas, pesquisa aplicada em áudio e avaliação governada de agentes por Thomas Andrioli Leick.',
    ogLocale: 'pt_BR',
    imagePath: '/social-card-pt.svg',
  },
  navigation: [
    { label: 'Trabalhos', href: '#work' },
    { label: 'Engenharia', href: '#engineering' },
    { label: 'Carreira', href: '#career' },
    { label: 'Fora do runtime', href: '#outside-runtime' },
    { label: 'Contato', href: '#contact' },
  ],
  menuTitle: 'Navegação do portfólio',
  skipLink: 'Pular para o conteúdo',
  hero: {
    eyebrow: 'Produto · sistemas · evidências',
    lineOne: 'A estrutura por trás',
    emphasis: 'de',
    lineThree: 'produtos que importam.',
    introduction: 'Thomas Andrioli Leick é engenheiro de software sênior e construtor de sistemas. Trabalha onde produto, infraestrutura, dados e regras de negócio se encontram.',
    workCta: 'Conheça os projetos',
    contactCta: 'Vamos conversar',
    location: 'São Paulo, Brasil',
    scrollHint: 'Role para explorar',
    principleLabel: 'Princípio de trabalho',
    principle: 'Complexidade merece uma interface à altura.',
    principleNote: 'modelar / verificar / refinar',
    portraitLabel: 'Retrato de Thomas Andrioli Leick',
  },
  work: {
    eyebrow: 'Trabalhos selecionados',
    title: 'Sistemas sob restrições reais.',
    introduction: 'Três sistemas diferentes partem de uma pergunta em comum: o que torna um resultado confiável?',
    questionsLabel: 'Três perguntas sobre confiança',
    questions: [
      { project: 'K-Libra', question: 'Esta transição de negócio respeita a autoridade correta?' },
      { project: 'Vocalis', question: 'Dá para confiar nesta nota depois da separação vocal?' },
      { project: 'AI-SDLC', question: 'O agente de engenharia realmente resolveu a missão?' },
    ],
    cases: [
      {
        id: 'k-libra',
        number: '01',
        category: 'Engenharia de sistemas',
        title: 'K-Libra',
        summary: 'Um ERP privado e uma superfície pública de produto para a operação de uma empresa de impressão 3D.',
        challengeLabel: 'O problema',
        challenge: 'O desafio não é listar módulos. Vendas, estoque, registros financeiros e fiscais, devoluções e envios precisam atravessar fronteiras entre domínios sem perder autoridade, histórico ou atomicidade.',
        roleLabel: 'Minha atuação',
        role: 'Arquitetura de produto e engenharia nas superfícies de API, web e site institucional, incluindo fluxos de backend e interfaces de produto.',
        decisionsLabel: 'Decisões relevantes',
        decisions: [
          { title: 'Manter explícita a autoridade de cada domínio', detail: 'Cada domínio é responsável por suas transições canônicas; outro contexto não vira escritor por conveniência.' },
          { title: 'Separar composição de requisições e workers', detail: 'O processamento HTTP e o trabalho em background têm responsabilidades e composições de runtime diferentes.' },
          { title: 'Tornar atômicas as transições críticas', detail: 'Operações selecionadas de envio, estoque e documentos usam transações, locks e controles de idempotência.' },
          { title: 'Derivar o escopo da empresa no servidor', detail: 'Fluxos protegidos validam a empresa e os registros relacionados na fronteira de autoridade.' },
        ],
        evidenceLabel: 'O que as evidências sustentam',
        evidence: 'Contratos locais cobrem a composição de background, transições selecionadas de envio e estoque, autoridade em devoluções e concorrência no DMS. Eles não certificam deploy remoto nem isolamento entre empresas.',
        stackLabel: 'Tecnologias selecionadas',
        stack: ['React', 'Next.js', 'NestJS', 'Fastify', 'TypeScript', 'Supabase / PostgreSQL'],
        links: [
          { label: 'Site institucional do produto', href: 'https://k-libra-system-site.vercel.app/#conteudo' },
          { label: 'Portal de clientes · PX3', href: 'https://k-libra-system-web.vercel.app/login' },
        ],
        visual: {
          type: 'domains',
          label: 'Domínios selecionados do sistema · mapa conceitual',
          nodes: ['Vendas', 'Estoque', 'Envios', 'Devoluções', 'Financeiro', 'Pagamentos', 'Fiscal', 'DMS', 'Suporte'],
          aiLabel: 'Fluxos apoiados por IA',
          aiDescription: 'Modelos podem sugerir intenções; os domínios mantêm a autoridade.',
          caption: 'Relações selecionadas, não uma topologia de deploy.',
        },
      },
      {
        id: 'vocalis',
        number: '02',
        category: 'Pesquisa aplicada · recuperação de informação musical',
        title: 'Vocalis',
        summary: 'Um ambiente privado de prática vocal ligado a uma pergunta de pesquisa: eventos de nota continuam úteis depois que a voz é separada da mixagem?',
        challengeLabel: 'O problema',
        challenge: 'Pitch (F0) ainda não é um evento musical. É preciso inferir limites de notas, lidar com frames incertos e avaliar gravações que não participaram do treino ou da calibração.',
        roleLabel: 'Minha atuação',
        role: 'Engenharia do produto para prática com faixas privadas e feedback local de pitch, além da implementação e avaliação de experimentos de transcrição de notas.',
        decisionsLabel: 'Decisões de pesquisa',
        decisions: [
          { title: 'Separar F0 de eventos de nota', detail: 'Um traço de pitch estável é entrada para a transcrição, não prova de que uma nota útil foi recuperada.' },
          { title: 'Tornar a incerteza visível', detail: 'Candidatos do modelo continuam sujeitos a revisão; uma previsão incerta não deve virar verdade musical sem aviso.' },
          { title: 'Avaliar por cantor, não por frame aleatório', detail: 'Separar cantores entre os splits ajuda a verificar se o modelo funciona além das vozes usadas no treino.' },
          { title: 'Tratar robustez à separação como pergunta', detail: 'Degradação por codec e separação pertence a um benchmark controlado; não há ganho alegado aqui.' },
        ],
        evidenceLabel: 'O que as evidências sustentam',
        evidence: 'O produto combina faixas privadas, stems vocais, controles de prática e feedback local de pitch. Experimentos de transcrição e avaliações por cantor seguem como QA; nenhum provider de pesquisa foi selecionado no produto.',
        stackLabel: 'Tecnologias selecionadas',
        stack: ['React', 'Vite', 'Web Audio', 'Tone.js', 'Supabase', 'Demucs / Python'],
        links: [
          { label: 'Abrir Vocalis', href: 'https://vocal-flow-pi.vercel.app/' },
        ],
        visual: {
          type: 'vocalis',
          label: 'Fluxo do produto e direção de pesquisa',
          productLabel: 'Fluxo do produto',
          productSteps: ['Faixa privada', 'Stem vocal', 'Loop e prática'],
          productFeedback: 'Feedback local de F0',
          researchLabel: 'Desenho de benchmark controlado · direção de pesquisa',
          researchSteps: ['Vocal anotado', 'Mix controlada', 'Separação', 'Stem recuperado', 'Eventos de nota'],
          groundTruth: 'Comparar com notas de referência conhecidas',
          outcomes: ['Confirmado após revisão', 'Sugerido', 'Abster-se quando incerto'],
          caption: 'Método em construção; o diagrama não representa um resultado medido.',
        },
      },
      {
        id: 'ai-sdlc',
        number: '03',
        category: 'Engenharia agêntica · sistemas de engenharia',
        title: 'AI-SDLC',
        summary: 'Um runtime governado de engenharia, orientado por uma pergunta difícil: o agente resolveu a missão ou apenas produziu código plausível?',
        challengeLabel: 'O problema',
        challenge: 'Um trabalho de engenharia pode falhar em escopo, evidências, validação ou recuperação mesmo quando o resultado parece convincente. O runtime precisa registrar a autoridade concedida e o que torna um resultado elegível para avaliação.',
        roleLabel: 'Minha atuação',
        role: 'Arquitetura e implementação da governança das missões, execução com escopo definido, runtime dos candidatos e mecanismos de avaliação.',
        decisionsLabel: 'Decisões de sistema',
        decisions: [
          { title: 'Incluir autoridade na própria missão', detail: 'Perfis de projeto, modos READ_ONLY e de escrita com escopo, e raízes autorizadas limitam onde o candidato pode agir.' },
          { title: 'Conter a execução', detail: 'Sandbox, condições explícitas de parada e gates humanos limitam ações protegidas ou externas.' },
          { title: 'Preservar identidades de célula e tentativa', detail: 'Cada retry é uma tentativa diferente; registros persistentes evitam pontuar o mesmo resultado duas vezes.' },
          { title: 'Separar classes de falha', detail: 'Falhas de infraestrutura e do oráculo ficam distintas dos resultados terminais de engenharia, sob uma política versionada.' },
        ],
        evidenceLabel: 'O que as evidências sustentam',
        evidence: 'O sistema inclui missões governadas, execução com escopo, ledger persistente de avaliação e critérios explícitos de elegibilidade. As campanhas são experimentais; seus resultados não são apresentados como certificação de qualidade.',
        stackLabel: 'Tecnologias selecionadas',
        stack: ['TypeScript', 'Node.js', 'Executor Codex', 'Runtime em sandbox', 'Ledger persistente'],
        links: [],
        visual: {
          type: 'agent',
          label: 'Ciclo de avaliação governada',
          steps: ['Missão', 'Autoridade', 'Execução em sandbox', 'Evidências', 'Elegibilidade', 'Revisão humana'],
          systemLabel: 'O sistema de medição',
          systemParts: ['Fixtures executáveis', 'Tentativas persistentes', 'Retomada após falha', 'Política versionada'],
          caption: 'Sistema experimental de avaliação, não certificação de benchmark.',
        },
      },
    ],
  },
  engineering: {
    eyebrow: 'Responsabilidade de engenharia',
    title: 'A tecnologia segue a fronteira.',
    introduction: 'A stack importa quando sustenta uma responsabilidade real. Estes são os desafios que aparecem nos projetos.',
    capabilities: [
      { index: 'A', title: 'Autoridade e transições', text: 'Manter decisões de negócio, escopo de empresa e mudanças persistidas na fronteira que é responsável por eles.', tags: ['domínios', 'transações', 'acesso'] },
      { index: 'B', title: 'Interfaces para operação', text: 'Tornar estados, exceções e a próxima ação válida compreensíveis para quem executa o trabalho.', tags: ['produto', 'frontend', 'fluxos'] },
      { index: 'C', title: 'Sinais que orientam decisões', text: 'Separar medidas brutas de eventos úteis, mostrar incerteza e avaliar antes de promover.', tags: ['áudio', 'MIR', 'avaliação'] },
      { index: 'D', title: 'Agentes sob governança', text: 'Limitar execução, preservar tentativas e exigir evidência antes de considerar um resultado bem-sucedido.', tags: ['runtime agêntico', 'sandbox', 'evidências'] },
    ],
    principle: 'Um sistema deve mostrar a próxima ação válida — e também deixar claros os seus limites.',
    principleLabel: 'Princípio de trabalho / 01',
  },
  career: {
    eyebrow: 'Carreira',
    title: 'Contexto construído entre domínios.',
    introduction: 'Experiência em produtos financeiros, sistemas distribuídos, software de negócio e relatórios operacionais.',
    experience: [
      { company: 'Galápagos Capital', role: 'Tech Leader', period: 'Jun 2026 — atual', focus: 'Autoridade de arquitetura, padrões técnicos e evolução full-stack e cloud.' },
      { company: 'Thomson Reuters', role: 'Senior Software Engineer 1', period: 'Mar 2026 — Jun 2026', focus: 'Sistemas distribuídos em Node.js, arquitetura cloud, segurança e testes automatizados.' },
      { company: 'Sparta Fundos de Investimento', role: 'Senior Software Engineer / Squad Lead', period: 'Jul 2024 — Jan 2026', focus: 'Sistemas financeiros, APIs de risco, pipelines orientados a eventos e desempenho de banco de dados.' },
      { company: 'Tivita Tecnologia', role: 'Desenvolvedor Full-Stack', period: 'Jan 2022 — Jan 2023', focus: 'Produto de gestão administrativa com Node.js, TypeScript, MongoDB e React.' },
      { company: 'Buffet GulaMania', role: 'Desenvolvedor Full-Stack', period: 'Jul 2019 — Jan 2022', focus: 'Web corporativa, sistemas internos de apoio a vendas e APIs com regras de negócio.' },
      { company: 'Elis Brasil', role: 'Analista de Dados', period: 'Out 2018 — Mai 2019', focus: 'Automação de relatórios contábeis e financeiros e ferramentas de controle operacional.' },
    ],
  },
  outside: {
    eyebrow: 'Fora do runtime',
    title: 'Precisão também existe além do terminal.',
    introduction: 'Referências pessoais em segundo plano: prática de longo prazo, jogo estratégico e atenção aos detalhes que importam.',
    noteLabel: 'Uma ideia de trabalho',
    note: 'A disciplina se acumula quando o ciclo de feedback é honesto.',
    noteCaption: 'sobrecarga progressiva / iteração de sistemas',
    signals: [
      { mark: 'Nf3', title: 'Jogo estratégico', text: 'Xadrez: atenção à posição, às trocas e ao próximo lance legal.' },
      { mark: '22Y', title: 'Prática de longo prazo', text: 'Treino de força como prática contínua de sobrecarga progressiva.' },
      { mark: '∞', title: 'Continuidade', text: 'O símbolo do infinito reconhece o TEA como parte de quem está por trás do trabalho.' },
      { mark: '01', title: 'Combustível', text: 'runtime.fuel = café; Monster fica como uma nota de rodapé ocasional.' },
    ],
    chessLabel: 'Canal paralelo',
    chessLink: 'Encontre o jogador no Chess.com',
  },
  contact: {
    eyebrow: 'Contato',
    titleFirst: 'Traga um problema',
    titleSecond: 'real de sistemas.',
    introduction: 'Para engenharia de produto, arquitetura e desafios operacionais, comece pelo contexto, pelas restrições e pelas consequências de errar.',
    emailLabel: 'E-mail',
    codeLabel: 'Código',
    profileLabel: 'Perfil profissional',
    footerNote: 'Portfólio estático, sem rastreamento.',
    fuel: 'combustível: café',
  },
  palette: {
    title: 'Navegue pelo portfólio',
    trigger: 'Navegar',
    triggerLabel: 'Abrir paleta de navegação',
    searchLabel: 'Buscar destino',
    searchPlaceholder: 'Buscar um destino…',
    sectionDetail: 'Ir para a seção',
    caseDetail: 'Ler o estudo de caso',
    github: 'Ver repositórios públicos',
    linkedin: 'Abrir perfil profissional',
    email: 'Escrever um e-mail',
    chess: 'Abrir perfil no Chess.com',
    instagram: 'Abrir perfil no Instagram',
    noResults: 'Nenhum destino corresponde à busca.',
    resultsLabel: 'resultados',
    closeHint: 'Esc fecha',
    selectHint: 'Enter seleciona',
  },
}

export const content: Record<Locale, PageCopy> = {
  en: english,
  pt: portuguese,
}

export const experience = english.career.experience
export const personalSignals = english.outside.signals

export function getLocaleFromPath(pathname: string): Locale {
  return /^\/pt(?:\/|$)/.test(pathname) ? 'pt' : 'en'
}

export function getLocaleHref(locale: Locale, pathname: string, search = '', hash = ''): string {
  const withoutLocale = pathname.replace(/^\/pt(?=\/|$)/, '') || '/'
  const normalizedPath = withoutLocale.startsWith('/') ? withoutLocale : '/' + withoutLocale
  const pathForLocale = locale === 'pt'
    ? normalizedPath === '/' ? '/pt/' : '/pt' + normalizedPath
    : normalizedPath
  return pathForLocale + search + hash
}
