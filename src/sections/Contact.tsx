import { ArrowUpRight, Github, Linkedin, Mail } from '../components/Icons'
import { content, profile, type Locale } from '../data/portfolio'

export function Contact({ locale }: { locale: Locale }) {
  const copy = content[locale].contact

  return (
    <section id="contact" className="contact-section" aria-labelledby="contact-title">
      <div className="contact-grid" data-reveal>
        <div><p className="eyebrow">{copy.eyebrow} / 05</p><h2 id="contact-title" tabIndex={-1}>{copy.titleFirst}<br /><em>{copy.titleSecond}</em></h2></div>
        <p>{copy.introduction}</p>
      </div>
      <div className="contact-links" data-reveal>
        <a href={'mailto:' + profile.email}><Mail size={19} /><span><small>{copy.emailLabel}</small>{profile.email}</span><ArrowUpRight size={18} /></a>
        <a href={profile.links.github} target="_blank" rel="noopener noreferrer"><Github size={19} /><span><small>{copy.codeLabel}</small>GitHub / thomasleick</span><ArrowUpRight size={18} /></a>
        <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin size={19} /><span><small>{copy.profileLabel}</small>LinkedIn / Thomas Andrioli Leick</span><ArrowUpRight size={18} /></a>
      </div>
      <footer className="site-footer">
        <span>© {new Date().getFullYear()} Thomas Andrioli Leick</span>
        <span>{copy.footerNote}</span>
        <span>{copy.fuel}</span>
      </footer>
    </section>
  )
}
