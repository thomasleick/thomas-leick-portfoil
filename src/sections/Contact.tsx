import { ArrowUpRight, Github, Linkedin, Mail } from '../components/Icons'
import { profile } from '../data/portfolio'

export function Contact() {
  return <section id="contact" className="contact-section" aria-labelledby="contact-title">
    <div className="contact-grid" data-reveal><div><p className="eyebrow">04 / Contact</p><h2 id="contact-title">Bring a real<br /><em>system problem.</em></h2></div><p>For product engineering, architecture and difficult operational surfaces—start with context, constraints and the consequence of getting it wrong.</p></div>
    <div className="contact-links" data-reveal><a href={`mailto:${profile.email}`}><Mail size={19} /><span><small>Email</small>{profile.email}</span><ArrowUpRight size={18} /></a><a href={profile.links.github} target="_blank" rel="noreferrer"><Github size={19} /><span><small>Code</small>GitHub / thomasleick</span><ArrowUpRight size={18} /></a><a href={profile.links.linkedin} target="_blank" rel="noreferrer"><Linkedin size={19} /><span><small>Professional profile</small>LinkedIn / Thomas Andrioli Leick</span><ArrowUpRight size={18} /></a></div>
    <footer className="site-footer"><span>© {new Date().getFullYear()} Thomas Andrioli Leick</span><span>Built as a static, privacy-respecting portfolio.</span><span>fuel: coffee</span></footer>
  </section>
}
