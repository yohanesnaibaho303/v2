import { useRef, useState } from 'react'

const profile = {
  role: 'Software Engineer',
  intro: 'I build scalable systems across the stack, with a focus on performance, clean architecture, and measurable engineering outcomes.',
  email: 'yohanespratama303@gmail.com',
  socials: [
    { label: 'GitHub', href: 'https://github.com/yohanesnaibaho303' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/yohanesnaibaho' },
    { label: 'npm', href: 'https://npmjs.com/~joethegreatest' },
    { label: 'Medium', href: 'https://medium.com/@yohanespratama303' },
  ],
}

const experience = [
  {
    period: 'May 2026 — Present',
    role: 'Frontend Engineer · via Entrust Digital',
    company: 'Bank Rakyat Indonesia',
    summary: 'Building QLola, a high-traffic corporate banking platform. Architected a shared microfrontend framework, component library, and multilingual system adopted across 20+ teams.',
    tags: ['Next.js', 'TypeScript', 'Module Federation', 'Storybook'],
  },
  {
    period: 'May 2024 — May 2026',
    role: 'Associate Software Engineer · Fullstack',
    company: 'LG Group',
    summary: 'Led enterprise platform, MES, and smart-factory delivery across 10+ global sites. Owned reliability for a three-wave cloud migration that maintained 99.99% availability and sub-52ms latency.',
    tags: ['React', 'Spring Boot', '.NET', 'Microservices'],
  },
  {
    period: 'Feb — May 2024',
    role: 'QA Automation Engineer',
    company: 'BPJS Kesehatan',
    summary: 'Introduced automated UI and API testing, reusable end-to-end suites, performance testing, and CI/CD execution to a previously manual QA workflow.',
    tags: ['Selenium', 'Katalon', 'JMeter', 'CI/CD'],
  },
  {
    period: 'Jan — Dec 2023',
    role: 'Software Developer',
    company: 'Knight Connections',
    summary: 'Delivered full-stack client websites, a regional inventory dashboard, and Python automation that migrated and cleaned more than 10,000 product records.',
    tags: ['MERN', 'Python', 'Laravel', 'MySQL'],
  },
]

const projects = [
  {
    type: 'Technical writing · Part 1',
    title: 'Micro Frontend Architecture: Concepts & Design Patterns',
    href: 'https://medium.com/@yohanespratama303/micro-frontend-dengan-module-federation-2-0-part-1-konsep-arsitektur-57ca1bb83367',
    description: 'An introduction to when micro frontends fit, how host and remote applications work, and what Module Federation 2.0 adds to React and Vite systems.',
    tags: ['Micro Frontends', 'React', 'Vite', 'Module Federation 2.0'],
  },
  {
    type: 'Technical writing · Part 2',
    title: 'Implementing Micro Frontends with Module Federation 2.0',
    href: 'https://medium.com/@yohanespratama303/microfrontend-architecture-in-react-with-vite-module-federation-part-2-id-e482e9c3ae47',
    description: 'A hands-on guide to building a Vite monorepo with remote-to-remote modules, shared routing, Tailwind CSS, error boundaries, and TypeScript.',
    tags: ['Module Federation 2.0', 'Vite', 'TypeScript', 'Tailwind CSS'],
  },
  {
    type: 'Academic project',
    title: 'English–Batak Toba Dictionary',
    href: 'https://bataktoba-english-dictionary.netlify.app/',
    description: 'A user-friendly dictionary with fuzzy search and speech synthesis, built as my final university project.',
    tags: ['Vue.js', 'Fuse.js', 'Web Speech API'],
  },
  {
    type: 'Machine learning experiment',
    title: 'Self-Driving Car',
    href: 'https://github.com/yohanesnaibaho303/self-driving-car',
    description: 'A browser-based self-driving car simulation that explores neural networks and machine learning with vanilla JavaScript.',
    tags: ['JavaScript', 'Neural Networks', 'Machine Learning', 'Simulation'],
  },
  {
    type: 'Computer vision experiment',
    title: 'Object Detection with JavaScript',
    href: 'https://github.com/yohanesnaibaho303/object-detection-machinelearning',
    description: 'A browser-based object detection experiment built in JavaScript without an external machine learning library.',
    tags: ['JavaScript', 'Object Detection', 'Machine Learning', 'Computer Vision'],
  },
]

const skills = [
  { group: 'Languages & web', items: ['JavaScript', 'TypeScript', 'Python', 'C#', 'Java', 'Go', 'PHP', 'Kotlin', 'SQL', 'HTML5', 'CSS'] },
  { group: 'Frontend', items: ['React', 'Next.js', 'Vue.js', 'Tailwind CSS', 'shadcn/ui', 'Bootstrap', 'Storybook', 'Redux', 'TanStack Query', 'React Hook Form', 'Zod', 'i18next', 'Highcharts', 'Wijmo'] },
  { group: 'Backend & CMS', items: ['Node.js', '.NET', 'Spring Boot', 'Spring Framework', 'Laravel', 'REST APIs', 'WordPress', 'Sanity', 'Voyager CMS'] },
  { group: 'Architecture & systems', items: ['System Design', 'Microfrontends', 'Module Federation', 'Microservices', 'Clean Architecture', 'WPF', 'IoT', 'MQTT', 'Solace', 'BizActor'] },
  { group: 'Data & storage', items: ['SQL Server', 'Oracle', 'PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Data Analytics'] },
  { group: 'Quality & observability', items: ['Jest', 'Selenium', 'Katalon', 'JMeter', 'k6', 'SonarQube', 'Datadog', 'Grafana', 'Performance & Load Testing'] },
  { group: 'Platform & delivery', items: ['Docker', 'Git', 'CI/CD', 'Vite', 'Webpack', 'AWS', 'Google Cloud', 'Tencent Cloud', 'Jira', 'Confluence', 'n8n', 'Agile', 'Scrum'] },
  { group: 'Applied ML & graphics', items: ['Machine Learning', 'Neural Networks', 'Object Detection', 'Computer Vision', 'AI & LLM', 'OpenGL', 'Fuse.js', 'Web Speech API'] },
  { group: 'Product & domain', items: ['UI/UX', 'Product UI', 'Manufacturing Execution Systems', 'Smart Factory', 'Battery Manufacturing'] },
  { group: 'Ways of working', items: ['Communication', 'Problem Solving', 'Collaboration', 'Adaptability', 'Ownership', 'Time Management', 'Attention to Detail'] },
]

const navigation = ['about', 'experience', 'work', 'skills']

function TagList({ items }) {
  return <ul className="tags" aria-label="Technologies used">{items.map((item) => <li key={item}>{item}</li>)}</ul>
}

function App() {
  const glow = useRef(null)
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme || 'dark')

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark'
    document.documentElement.dataset.theme = nextTheme
    document.querySelector('meta[name="theme-color"]').content = nextTheme === 'dark' ? '#050505' : '#f3f1eb'
    localStorage.setItem('theme', nextTheme)
    setTheme(nextTheme)
  }

  return (
    <>
      <a className="skip-link" href="#content">Skip to content</a>
      <div
        className="page-shell"
        onPointerEnter={() => { glow.current.style.opacity = '1' }}
        onPointerLeave={() => { glow.current.style.opacity = '0' }}
        onPointerMove={({ clientX, clientY }) => {
          glow.current.style.transform = `translate3d(${clientX - 260}px, ${clientY - 260}px, 0)`
        }}
      >
        <div ref={glow} className="cursor-glow" aria-hidden="true" />

        <header className="site-header">
          <div className="header-inner">
            <a className="wordmark" href="#top" aria-label="Home">YPN<span>®</span></a>
            <nav aria-label="In-page navigation">
              <ol>
                {navigation.map((item) => <li key={item}><a href={`#${item}`}>{item}</a></li>)}
              </ol>
            </nav>
            <div className="header-actions">
              <a className="header-email" href={`mailto:${profile.email}`}>Email ↗</a>
              <button className="theme-toggle" type="button" onClick={toggleTheme} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}>
                {theme === 'dark' ? (
                  <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="3.5" /><path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.65 17.65l1.42 1.42M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.65 6.35l1.42-1.42" /></svg>
                ) : (
                  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5a8.5 8.5 0 1 0 11 11Z" /></svg>
                )}
              </button>
            </div>
          </div>
        </header>

        <main id="content">
          <section className="hero" id="top" aria-labelledby="hero-heading">
            <p className="hero-kicker"><span>{profile.role}</span><span>Jakarta, Indonesia</span></p>
            <h1 id="hero-heading"><span>Yohanes</span><span>Pratama Naibaho</span></h1>
            <div className="hero-footer">
              <p className="intro">{profile.intro}</p>
              <dl className="quick-facts">
                <div><dt>Currently</dt><dd>Frontend Engineer at Bank Rakyat Indonesia</dd></div>
                <div><dt>Working across</dt><dd>Product UI, platforms, quality, and reliability</dd></div>
              </dl>
            </div>
          </section>

          <section className="section-block" id="about" aria-labelledby="about-heading">
            <header className="section-heading"><p>01</p><h2 id="about-heading">About</h2></header>
            <div className="section-content prose">
              <p>I’m a software engineer who works across frontend, backend, testing, and infrastructure.</p>
              <p>Today, I work on QLola at Bank Rakyat Indonesia, building shared frontend foundations for a secure corporate banking platform. Previously, I delivered enterprise systems, smart-factory platforms, and cloud reliability work with global teams at LG Group.</p>
              <p>I earned a Bachelor of Science in Computing from President University with a 70% Jababeka Scholarship.</p>
            </div>
          </section>

          <section className="section-block" id="experience" aria-labelledby="experience-heading">
            <header className="section-heading"><p>02</p><h2 id="experience-heading">Experience</h2></header>
            <div className="section-content">
              <div className="experience-list">
                {experience.map((item) => (
                  <article className="experience-item" key={`${item.company}-${item.period}`}>
                    <div className="experience-title">
                      <p className="period">{item.period}</p>
                      <div><h3>{item.role}</h3><p className="company">{item.company}</p></div>
                    </div>
                    <p className="summary">{item.summary}</p>
                    <TagList items={item.tags} />
                  </article>
                ))}
              </div>
              <a className="text-link" href="/Yohanes-Pratama-Naibaho-resume.pdf" target="_blank">Read full résumé <span>↗</span></a>
            </div>
          </section>

          <section className="section-block" id="work" aria-labelledby="work-heading">
            <header className="section-heading"><p>03</p><h2 id="work-heading">Selected work</h2></header>
            <div className="section-content project-list">
              {projects.map((project, index) => (
                <article className="project-row" key={project.title}>
                  <p className="project-number">0{index + 1}</p>
                  <div className="project-copy">
                    <p className="project-type">{project.type}</p>
                    <h3>{project.href ? <a href={project.href} target="_blank" rel="noreferrer">{project.title} <span>↗</span></a> : project.title}</h3>
                    <p className="summary">{project.description}</p>
                    <TagList items={project.tags} />
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="section-block" id="skills" aria-labelledby="skills-heading">
            <header className="section-heading"><p>04</p><h2 id="skills-heading">Technical toolkit</h2></header>
            <div className="section-content skill-grid">
              {skills.map((skill) => (
                <div className="skill-group" key={skill.group}>
                  <h3>{skill.group}</h3>
                  <p>{skill.items.join(', ')}</p>
                </div>
              ))}
            </div>
          </section>
        </main>

        <footer>
          <a className="footer-email" href={`mailto:${profile.email}`}>yohanespratama303@gmail.com</a>
          <div className="socials" aria-label="Social links">
            {profile.socials.map((social) => <a key={social.label} href={social.href} target="_blank" rel="noreferrer">{social.label}</a>)}
          </div>
          <a href="#top">Top ↑</a>
        </footer>
      </div>
    </>
  )
}

export default App
