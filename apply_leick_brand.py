#!/usr/bin/env python3
"""Leick & S. Software visual rebrand for thomas-leick-portfoil.
Run from the repository root: python3 apply_leick_brand.py
"""
from pathlib import Path

root = Path.cwd()
assert (root/'src/App.tsx').exists() and (root/'src/data/portfolio.ts').exists(), 'Execute na raiz do repositorio.'

def patch(path, old, new):
    p=root/path
    raw=p.read_text(encoding='utf-8')
    if new in raw:
        print('already applied:', path); return
    if old not in raw:
        raise RuntimeError(f'Anchor not found in {path}: {old[:85]}')
    p.write_text(raw.replace(old,new,1),encoding='utf-8')

p='src/data/portfolio.ts'
patch(p,"export const siteOrigin = 'https://thomas-leick-portfoil.vercel.app'", "export const siteOrigin = 'https://thomasleick.vercel.app'")
patch(p,"title: 'Thomas Andrioli Leick — Systems Builder'", "title: 'Leick & S. Software — Engineering the Answer'")
patch(p,"description: 'Systems engineering, applied audio research, and governed agent evaluation by Thomas Andrioli Leick.'", "description: 'Leick & S. Software — software engineering, systems integration, intelligent automation and applied AI. Founded by Thomas Leick.'")
patch(p,"title: 'Thomas Andrioli Leick — Engenharia de Sistemas'", "title: 'Leick & S. Software — Engenharia para a complexidade'")
patch(p,"description: 'Engenharia de sistemas, pesquisa aplicada em áudio e avaliação governada de agentes por Thomas Andrioli Leick.'", "description: 'Leick & S. Software — engenharia de software, integração de sistemas, automação inteligente e IA aplicada. Por Thomas Leick.'")
for old,new in [
("eyebrow: 'Product · systems · evidence'", "eyebrow: 'LEICK & S. SOFTWARE / DIGITAL ENGINEERING'"),
("lineOne: 'Engineering the'", "lineOne: 'Complexity is'"),
("emphasis: 'structure'", "emphasis: 'the puzzle.'"),
("lineThree: 'behind serious products.'", "lineThree: 'Engineering is the answer.'"),
("introduction: 'Thomas Andrioli Leick is a senior software engineer and systems builder. He works where product, infrastructure, data and business rules meet.'", "introduction: 'We design, integrate and automate intelligent software systems. Founded by Thomas Leick, Leick & S. Software turns complex challenges into reliable engineering.'"),
("eyebrow: 'Produto · sistemas · evidências'", "eyebrow: 'LEICK & S. SOFTWARE / ENGENHARIA DIGITAL'"),
("lineOne: 'A estrutura por trás'", "lineOne: 'A complexidade'"),
("emphasis: 'de'", "emphasis: 'é o desafio.'"),
("lineThree: 'produtos que importam.'", "lineThree: 'Engenharia é a resposta.'"),
("introduction: 'Thomas Andrioli Leick é engenheiro de software sênior e construtor de sistemas. Trabalha onde produto, infraestrutura, dados e regras de negócio se encontram.'", "introduction: 'Projetamos, integramos e automatizamos sistemas inteligentes. Fundada por Thomas Leick, a Leick & S. Software transforma desafios complexos em engenharia confiável.'"),
("principle: 'Complexity deserves an interface.'", "principle: 'Design. Integrate. Automate. Evolve.'"),
("principle: 'Complexidade merece uma interface à altura.'", "principle: 'Projetar. Integrar. Automatizar. Evoluir.'"),
("title: 'Systems under real constraints.'", "title: 'Engineering in the real world.'"),
("title: 'Sistemas sob restrições reais.'", "title: 'Engenharia no mundo real.'"),
]: patch(p,old,new)

patch('src/components/Header.tsx', '<a className="monogram" href="#top" aria-label={locale === \'en\' ? \'Back to the beginning\' : \'Voltar ao início\'}>TL<span>.</span></a>', '<a className="monogram brand-lockup" href="#top" aria-label="Leick & S. Software — início"><span className="brand-symbol" aria-hidden="true">LS</span><span className="brand-wordmark">Leick <b>&amp; S.</b><small>SOFTWARE</small></span></a>')
patch('src/sections/Hero.tsx', '<div className="hero-content">', '<div className="hero-content"><span className="hero-brand-kicker"><span className="brand-mini-mark" aria-hidden="true">LS</span> Leick &amp; S. <span>SOFTWARE</span></span>')
patch('src/sections/Hero.tsx', '<div className="hero-meta">', '<div className="hero-brand-glow" aria-hidden="true"><span className="brand-prism prism-one"/><span className="brand-prism prism-two"/><span className="brand-prism prism-three"/><span className="brand-prism prism-four"/><span className="brand-cube-label">L<span>S</span></span></div><div className="hero-meta">')
patch('src/sections/Contact.tsx', '<span>© {new Date().getFullYear()} Thomas Andrioli Leick</span>', '<span>© {new Date().getFullYear()} Leick &amp; S. Software · Thomas Leick</span>')
patch('index.html','<meta name="theme-color" content="#0a0b0f" />','<meta name="theme-color" content="#070c1a" />')
patch('index.html','<meta property="og:site_name" content="Thomas Andrioli Leick" />','<meta property="og:site_name" content="Leick &amp; S. Software" />')
patch('index.html','<title>Thomas Andrioli Leick — Systems Builder</title>','<title>Leick &amp; S. Software — Engineering the Answer</title>')
patch('index.html','"@type": "Person",','"@type": "Organization",')
patch('index.html','"name": "Thomas Andrioli Leick",','"name": "Leick & S. Software",')
patch('index.html','"jobTitle": "Senior Software Engineer and Systems Builder",','"founder": { "@type": "Person", "name": "Thomas Andrioli Leick" },')
patch('index.html','https://thomas-leick-portfoil.vercel.app','https://thomasleick.vercel.app')

(root/'public/favicon.svg').write_text('''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><linearGradient id="b"><stop stop-color="#0a84ff"/><stop offset="1" stop-color="#5bd7ff"/></linearGradient><linearGradient id="p"><stop stop-color="#f0b0d9"/><stop offset="1" stop-color="#bb66e7"/></linearGradient></defs><rect width="64" height="64" rx="14" fill="#070c1a"/><path d="M10 13h10v31h16v9H10z" fill="url(#b)"/><path d="M53 17H32v8h12v5H34v8h10v6H30v9h23V29H41v-4h12z" fill="url(#p)"/></svg>''', encoding='utf-8')

css = r'''
/* Leick & S. Software · brand layer */
:root {
  --ink:#070c1a; --ink-raised:#0d1426; --ink-soft:#111c32;
  --paper:#f3f7ff; --muted:#a1b2cc; --faint:#8397b3;
  --line:rgba(127,172,238,.16); --line-strong:rgba(127,172,238,.32);
  --violet:#4a9dff; --violet-bright:#dca6d5; --lime:#76caff;
}
body {background:#070c1a}
.site-shell {background: radial-gradient(ellipse at 80% 8%,rgba(189,75,183,.11),transparent 32rem),radial-gradient(ellipse at 12% 18%,rgba(14,115,255,.12),transparent 39rem),#070c1a}
.site-header {background:rgba(6,11,24,.84);box-shadow:0 5px 42px rgba(0,0,0,.18)}
.brand-lockup {display:inline-flex;align-items:center;gap:.65rem;letter-spacing:0}
.brand-symbol,.brand-mini-mark {display:grid;place-items:center;flex:none;font-family:Inter,system-ui,sans-serif;font-size:.9rem;font-weight:950;letter-spacing:-.17em;color:#d9eaff;background:linear-gradient(135deg,#0078fc 0%,#52c9ff 44%,#e6a3cf 75%,#db80d0 100%);border:1px solid #73b6ff66;box-shadow:inset 0 0 0 3px #071126,0 0 24px #067aff38;border-radius:.65rem;width:2.65rem;height:2.65rem}
.brand-wordmark {display:flex;flex-direction:column;color:#f8faff;white-space:nowrap;font-size:.98rem;font-weight:750;letter-spacing:-.05em;line-height:1}
.brand-wordmark b {color:#eab3d9;font-weight:750}
.brand-wordmark small {margin-top:.34rem;font-size:.51rem;letter-spacing:.31em;font-weight:550;color:#88b9e7}
.hero {background:radial-gradient(circle at 79% 40%,rgba(0,113,245,.15),transparent 30rem),radial-gradient(circle at 94% 15%,rgba(219,84,194,.16),transparent 30rem)}
.hero-grid::before {background:radial-gradient(circle at 74% 35%,rgba(42,137,255,.18),transparent 20rem),linear-gradient(to bottom,transparent 70%,var(--ink))}
.hero h1 {font-size:clamp(2.65rem,8.6vw,7.1rem);letter-spacing:-.075em;max-width:13ch}
.hero h1 em {font-family:inherit;font-style:normal;letter-spacing:-.075em;background:linear-gradient(100deg,#5dbaff 10%,#eeb1db 95%);-webkit-background-clip:text;background-clip:text;color:transparent}
.hero-brand-kicker {display:inline-flex;align-items:center;gap:.55rem;font-weight:700;color:#f3f5ff;letter-spacing:.015em;margin:0 0 1.15rem;font-size:.9rem}
.hero-brand-kicker > span:last-child {color:#86b5ea;font-size:.58rem;letter-spacing:.32em;margin-left:.3rem}
.brand-mini-mark {width:1.9rem;height:1.9rem;font-size:.65rem;border-radius:.45rem}
.status-dot {background:#65c5ff;box-shadow:0 0 0 .25rem #64aaff20,0 0 18px #0a84ff}
.hero-actions .button-primary {background:linear-gradient(110deg,#1066db,#8c4dc6);color:#fff;border-color:#579bfc;box-shadow:0 10px 34px #0a84ff35}
.hero-actions .button-primary:hover {box-shadow:0 12px 40px #d17db444}
.hero-portrait-slot {border-color:#5684bf80;box-shadow:0 0 80px #087bff16,0 0 90px #d477cb14}
.portrait-orbit {border-color:#db90d070}
.infinity-line {color:#bc7bd7;opacity:.27;filter:drop-shadow(0 0 12px #379dff)}
.hero-brand-glow {position:absolute;right:7%;top:20%;width:clamp(110px,14vw,245px);aspect-ratio:1;transform:rotate(-11deg);opacity:.65;pointer-events:none;filter:drop-shadow(0 0 30px #208bfa75)}
.brand-prism {position:absolute;inset:12%;border:2px solid #5dadff88;border-radius:18%;transform:rotate(45deg);box-shadow:inset 0 0 35px #0a84ff35,0 0 30px #8b5cf630}
.prism-two {inset:24%;border-color:#e5a8d7;transform:rotate(0)}.prism-three {inset:4%;transform:rotate(-5deg);border-color:#7eb8f744}.prism-four {inset:36%;border-color:#e1a1e3;transform:rotate(45deg)}
.brand-cube-label {position:absolute;inset:0;display:grid;place-items:center;font-size:clamp(2rem,6vw,5rem);font-weight:950;letter-spacing:-.22em;color:#61c6ff;text-shadow:0 0 23px #0a84ff}
.brand-cube-label span {color:#eab1e0}
.capability-card,.project-card {border-color:#5c91d233;background:linear-gradient(140deg,#111d32,#0a1122)}
.capability-card:hover,.project-card:hover {border-color:#70b8ff88}
.principle-strip {background:linear-gradient(120deg,#0b2451,#25132e);border-color:#8c8de755}
.contact-section {background:radial-gradient(ellipse at 85% 15%,#5b2d6229,transparent 40rem),#0b1221}
::selection {background:#73c0ff;color:#071020}
:focus-visible,h2[tabindex="-1"]:focus {outline-color:#7dc9ff}
@media(max-width:900px){.hero-brand-glow{top:6rem;right:1rem;width:105px;opacity:.32}.hero h1{max-width:18ch}}
@media(max-width:480px){.brand-wordmark{font-size:.84rem}.hero-brand-glow{opacity:.18}.hero-brand-kicker>span:last-child{font-size:.46rem}}
@media(prefers-reduced-motion:reduce){.hero-brand-glow,.brand-prism{animation:none!important}}
'''
csspath=root/'src/styles/index.css'
raw=csspath.read_text(encoding='utf-8')
if '/* Leick & S. Software · brand layer */' not in raw: csspath.write_text(raw+'\n'+css,encoding='utf-8')
print('Brand applied. Run: npm ci && npm run typecheck && npm run lint && npm run build')
