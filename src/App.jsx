import { useRef } from 'react'

const profile = {
  name: 'Alex Morgan',
  role: 'Frontend Engineer',
  intro: 'I build thoughtful digital products where engineering meets useful design.',
  email: 'hello@example.com',
  socials: [
    { label: 'GitHub', href: 'https://github.com/' },
    { label: 'LinkedIn', href: 'https://linkedin.com/' },
  ],
}

const experience = [
  {
    period: '2023 — Present',
    role: 'Senior Frontend Engineer',
    company: 'Northstar Studio',
    summary: 'Leading frontend architecture and product delivery for creative teams.',
    tags: ['React', 'TypeScript', 'Design Systems'],
  },
  {
    period: '2021 — 2023',
    role: 'Product Engineer',
    company: 'Fieldwork',
    summary: 'Built accessible, high-performance product experiences with design and research.',
    tags: ['Next.js', 'Node.js', 'PostgreSQL'],
  },
]

const projects = [
  {
    type: 'Featured project',
    title: 'Signal',
    description: 'A calm command center that turns product feedback into clear decisions.',
    tags: ['React', 'Vite', 'API'],
  },
  {
    type: 'Independent project',
    title: 'Tempo',
    description: 'A privacy-first focus timer designed around sustainable routines.',
    tags: ['TypeScript', 'IndexedDB', 'PWA'],
  },
]

const skills = [
  { group: 'Frontend', items: ['React', 'TypeScript', 'JavaScript', 'HTML & CSS'] },
  { group: 'Product craft', items: ['Design systems', 'Accessibility', 'Performance'] },
]

const navigation = ['about', 'experience', 'work', 'skills']

function TagList({ items }) {
  return <ul className="tags" aria-label="Technologies used">{items.map((item) => <li key={item}>{item}</li>)}</ul>
}

function App() {
  const glow = useRef(null)

  return (
    <>
      <a className="skip-link" href="#content">Skip to content</a>
      <div
        className="page-shell"
        onPointerEnter={() => { glow.current.style.opacity = '1' }}
        onPointerLeave={() => { glow.current.style.opacity = '0' }}
        onPointerMove={({ clientX, clientY }) => {
          glow.current.style.transform = `translate3d(${clientX - 300}px, ${clientY - 300}px, 0)`
        }}
      >
        <div ref={glow} className="cursor-glow" aria-hidden="true" />
        <header className="site-header">
          <a className="wordmark" href="#top" aria-label="Home">AM</a>
          <nav aria-label="In-page navigation">
            <ol>{navigation.map((item) => <li key={item}><a href={`#${item}`}>{item}</a></li>)}</ol>
          </nav>
          <a className="header-email" href={`mailto:${profile.email}`}>Email ↗</a>
        </header>

        <main id="content">
          <section className="hero" id="top" aria-labelledby="hero-heading">
            <p className="hero-kicker"><span>{profile.role}</span><span>Available for select projects</span></p>
            <h1 id="hero-heading"><span>Alex</span><span>Morgan</span></h1>
            <div className="hero-footer">
              <p className="intro">{profile.intro}</p>
              <dl className="quick-facts">
                <div><dt>Currently</dt><dd>Senior Frontend Engineer</dd></div>
                <div><dt>Working across</dt><dd>Product UI and design systems</dd></div>
              </dl>
            </div>
          </section>

          <section className="section-block" id="about" aria-labelledby="about-heading">
            <header className="section-heading"><p>01</p><h2 id="about-heading">About</h2></header>
            <div className="section-content prose">
              <p>I’m a frontend engineer who enjoys translating complex ideas into clear interfaces.</p>
              <p>My work sits between design and engineering: shaping systems, refining interaction details, and shipping dependable code.</p>
            </div>
          </section>

          <section className="section-block" id="experience" aria-labelledby="experience-heading">
            <header className="section-heading"><p>02</p><h2 id="experience-heading">Experience</h2></header>
            <div className="section-content">
              <div className="experience-list">
                {experience.map((item) => (
                  <article className="experience-item" key={`${item.company}-${item.period}`}>
                    <div className="experience-title"><p className="period">{item.period}</p><div><h3>{item.role}</h3><p className="company">{item.company}</p></div></div>
                    <p className="summary">{item.summary}</p><TagList items={item.tags} />
                  </article>
                ))}
              </div>
              <a className="text-link" href="#">Read full résumé <span>↗</span></a>
            </div>
          </section>

          <section className="section-block" id="work" aria-labelledby="work-heading">
            <header className="section-heading"><p>03</p><h2 id="work-heading">Selected work</h2></header>
            <div className="section-content project-list">
              {projects.map((project, index) => (
                <article className="project-row" key={project.title}>
                  <p className="project-number">0{index + 1}</p>
                  <div className="project-copy"><p className="project-type">{project.type}</p><h3>{project.title}</h3><p className="summary">{project.description}</p><TagList items={project.tags} /></div>
                </article>
              ))}
            </div>
          </section>

          <section className="section-block" id="skills" aria-labelledby="skills-heading">
            <header className="section-heading"><p>04</p><h2 id="skills-heading">Skills</h2></header>
            <div className="section-content skill-grid">
              {skills.map((skill) => <div className="skill-group" key={skill.group}><h3>{skill.group}</h3><p>{skill.items.join(', ')}</p></div>)}
            </div>
          </section>
        </main>

        <footer>
          <a className="footer-email" href={`mailto:${profile.email}`}>{profile.email}</a>
          <div className="socials">{profile.socials.map((social) => <a key={social.label} href={social.href}>{social.label}</a>)}</div>
          <a href="#top">Top ↑</a>
        </footer>
      </div>
    </>
  )
}

export default App
