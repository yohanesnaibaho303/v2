import { Fragment, useEffect, useRef, useState } from 'react'

const profile = {
  email: 'yohanespratama303@gmail.com',
  socials: [
    { label: 'GitHub', href: 'https://github.com/yohanesnaibaho303' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/yohanesnaibaho' },
    { label: 'npm', href: 'https://npmjs.com/~joethegreatest' },
    { label: 'Medium', href: 'https://medium.com/@yohanespratama303' },
  ],
}

const languages = [
  ['en', 'EN'], ['id', 'ID'], ['zh', 'ZH'], ['ko', 'KR'], ['ja', 'JPN'], ['ar-SA', 'AR'],
]

const translations = {
  en: {
    skip: 'Skip to content', home: 'Home', navigation: 'In-page navigation', menu: 'Open menu', closeMenu: 'Close menu', email: 'Email', language: 'Language', socialLinks: 'Social links', technologies: 'Technologies used', top: 'Top',
    nav: { about: 'About', experience: 'Experience', work: 'Work', skills: 'Skills' },
    role: 'Software Engineer', location: 'Jakarta, Indonesia',
    intro: 'I build scalable systems across the stack, with a focus on performance, clean architecture, and measurable engineering outcomes.',
    currently: 'Currently', currentRole: 'Frontend Engineer at Bank Rakyat Indonesia', workingAcross: 'Working across', domains: 'Smart Factory, Banking, Telecommunications, Data Center, Assurance, AI, Cloud and many more',
    sections: { about: ['About'], experience: ['Experience'], work: ['Selected', 'work'], skills: ['Technical', 'toolkit'] },
    aboutIntro: 'I’m a software engineer who works across frontend, backend, testing, and infrastructure.',
    aboutBody: 'Today, I work on QLola at Bank Rakyat Indonesia, building shared frontend foundations for a secure corporate banking platform. Previously, I delivered enterprise systems, smart-factory platforms, and cloud reliability work with global teams at LG Group.',
    education: 'I earned a Bachelor of Science in Computing from President University with a 70% Jababeka Scholarship.',
    resume: 'Read full résumé', theme: (next) => `Switch to ${next} mode`,
  },
  id: {
    skip: 'Lewati ke konten', home: 'Beranda', navigation: 'Navigasi halaman', menu: 'Buka menu', closeMenu: 'Tutup menu', email: 'Email', language: 'Bahasa', socialLinks: 'Tautan sosial', technologies: 'Teknologi yang digunakan', top: 'Atas',
    nav: { about: 'Tentang', experience: 'Pengalaman', work: 'Karya', skills: 'Keahlian' },
    role: 'Software Engineer', location: 'Jakarta, Indonesia',
    intro: 'Saya membangun sistem skalabel di seluruh stack, dengan fokus pada performa, arsitektur yang bersih, dan hasil engineering yang terukur.',
    currently: 'Saat ini', currentRole: 'Frontend Engineer di Bank Rakyat Indonesia', workingAcross: 'Lintas bidang', domains: 'Smart Factory, perbankan, telekomunikasi, pusat data, assurance, AI, cloud, dan lainnya',
    sections: { about: ['Tentang'], experience: ['Pengalaman'], work: ['Karya', 'pilihan'], skills: ['Toolkit', 'teknis'] },
    aboutIntro: 'Saya adalah software engineer yang bekerja di frontend, backend, testing, dan infrastructure.',
    aboutBody: 'Saat ini, saya mengembangkan QLola di Bank Rakyat Indonesia dengan membangun fondasi frontend bersama untuk platform corporate banking yang aman. Sebelumnya, saya mengerjakan sistem enterprise, platform smart factory, dan cloud reliability bersama tim global di LG Group.',
    education: 'Saya meraih gelar Bachelor of Science in Computing dari President University dengan Beasiswa Jababeka sebesar 70%.',
    resume: 'Lihat résumé lengkap', theme: (next) => `Ganti ke mode ${next}`,
  },
  zh: {
    skip: '跳至主要内容', home: '首页', navigation: '页内导航', menu: '打开菜单', closeMenu: '关闭菜单', email: '邮件', language: '语言', socialLinks: '社交链接', technologies: '使用的技术', top: '顶部',
    nav: { about: '关于', experience: '经历', work: '项目', skills: '技能' },
    role: '软件工程师', location: '印度尼西亚·雅加达',
    intro: '我构建可扩展的全栈系统，专注于性能、清晰架构和可衡量的工程成果。',
    currently: '目前', currentRole: '印度尼西亚人民银行前端工程师', workingAcross: '业务领域', domains: '智能工厂、银行、通信、数据中心、审计、人工智能和云等',
    sections: { about: ['关于'], experience: ['工作经历'], work: ['精选', '项目'], skills: ['技术', '工具'] },
    aboutIntro: '我是一名横跨前端、后端、测试和基础设施的软件工程师。',
    aboutBody: '目前，我在印度尼西亚人民银行参与 QLola 开发，为安全的企业银行平台搭建共享前端基础。此前，我曾与 LG Group 的全球团队交付企业系统、智能工厂平台和云可靠性项目。',
    education: '我获得了 President University 计算机科学理学学士学位，并获得 70% Jababeka 奖学金。',
    resume: '查看完整简历', theme: (next) => `切换到${next}模式`,
  },
  ko: {
    skip: '본문으로 건너뛰기', home: '홈', navigation: '페이지 내 탐색', menu: '메뉴 열기', closeMenu: '메뉴 닫기', email: '이메일', language: '언어', socialLinks: '소셜 링크', technologies: '사용 기술', top: '맨 위로',
    nav: { about: '소개', experience: '경력', work: '작업', skills: '기술' },
    role: '소프트웨어 엔지니어', location: '인도네시아 자카르타',
    intro: '성능, 깔끔한 아키텍처, 측정 가능한 엔지니어링 성과에 집중하며 확장 가능한 풀스택 시스템을 만듭니다.',
    currently: '현재', currentRole: 'Bank Rakyat Indonesia 프론트엔드 엔지니어', workingAcross: '업무 분야', domains: '스마트 팩토리, 금융, 통신, 데이터 센터, 보증, AI, 클라우드 등',
    sections: { about: ['소개'], experience: ['경력'], work: ['주요', '작업'], skills: ['기술', '도구'] },
    aboutIntro: '저는 프론트엔드, 백엔드, 테스트, 인프라스트럭처 전반에서 일하는 소프트웨어 엔지니어입니다.',
    aboutBody: '현재 Bank Rakyat Indonesia에서 QLola의 안전한 기업 금융 플랫폼을 위한 공유 프론트엔드 기반을 구축하고 있습니다. 이전에는 LG Group의 글로벌 팀과 기업 시스템, 스마트 팩토리 플랫폼, 클라우드 신뢰성 업무를 수행했습니다.',
    education: 'President University에서 70% Jababeka 장학금을 받으며 컴퓨팅 이학사 학위를 취득했습니다.',
    resume: '전체 이력서 보기', theme: (next) => `${next} 모드로 전환`,
  },
  ja: {
    skip: 'コンテンツへ移動', home: 'ホーム', navigation: 'ページ内ナビゲーション', menu: 'メニューを開く', closeMenu: 'メニューを閉じる', email: 'メール', language: '言語', socialLinks: 'SNSリンク', technologies: '使用技術', top: 'トップ',
    nav: { about: '紹介', experience: '経歴', work: '実績', skills: 'スキル' },
    role: 'ソフトウェアエンジニア', location: 'インドネシア・ジャカルタ',
    intro: 'パフォーマンス、明確なアーキテクチャ、測定可能な成果を重視し、スケーラブルなフルスタックシステムを構築します。',
    currently: '現在', currentRole: 'Bank Rakyat Indonesia フロントエンドエンジニア', workingAcross: '対応領域', domains: 'スマートファクトリー、金融、通信、データセンター、保証、AI、クラウドなど',
    sections: { about: ['紹介'], experience: ['経歴'], work: ['主な', '実績'], skills: ['技術', 'ツール'] },
    aboutIntro: '私はフロントエンド、バックエンド、テスト、インフラ全体に取り組むソフトウェアエンジニアです。',
    aboutBody: '現在は Bank Rakyat Indonesia で QLola の安全な法人向け銀行プラットフォームのための共通フロントエンド基盤を構築しています。以前は LG Group のグローバルチームと、企業システム、スマートファクトリー、クラウド信頼性に取り組みました。',
    education: 'President University で 70% の Jababeka 奨学金を受け、コンピューティング理学士を取得しました。',
    resume: '履歴書を見る', theme: (next) => `${next}モードに切り替え`,
  },
  'ar-SA': {
    skip: 'الانتقال إلى المحتوى', home: 'الرئيسية', navigation: 'التنقل داخل الصفحة', menu: 'فتح القائمة', closeMenu: 'إغلاق القائمة', email: 'البريد', language: 'اللغة', socialLinks: 'روابط التواصل', technologies: 'التقنيات المستخدمة', top: 'الأعلى',
    nav: { about: 'نبذة', experience: 'الخبرة', work: 'الأعمال', skills: 'المهارات' },
    role: 'مهندس برمجيات', location: 'جاكرتا، إندونيسيا',
    intro: 'أبني أنظمة متكاملة قابلة للتوسع، مع التركيز على الأداء ووضوح المعمارية ونتائج هندسية قابلة للقياس.',
    currently: 'حاليًا', currentRole: 'مهندس واجهات أمامية في Bank Rakyat Indonesia', workingAcross: 'مجالات العمل', domains: 'المصانع الذكية، والخدمات المصرفية، والاتصالات، ومراكز البيانات، والضمان، والذكاء الاصطناعي، والسحابة',
    sections: { about: ['نبذة'], experience: ['الخبرة'], work: ['أعمال', 'مختارة'], skills: ['الأدوات', 'التقنية'] },
    aboutIntro: 'أنا مهندس برمجيات أعمل عبر الواجهات الأمامية والخلفية والاختبار والبنية التحتية.',
    aboutBody: 'أعمل حاليًا على QLola في Bank Rakyat Indonesia، حيث أبني أسس واجهات أمامية مشتركة لمنصة مصرفية آمنة للشركات. سابقًا، قدمت أنظمة مؤسسية ومنصات مصانع ذكية وأعمال موثوقية سحابية مع فرق LG Group العالمية.',
    education: 'حصلت على بكالوريوس العلوم في الحوسبة من President University بمنحة Jababeka بنسبة 70%.',
    resume: 'عرض السيرة الذاتية', theme: (next) => `التبديل إلى الوضع ${next}`,
  },
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

function InkText({ children, language }) {
  const segments = [...new Intl.Segmenter(language, { granularity: 'word' }).segment(children)]
  const wordCount = segments.filter(({ isWordLike }) => isWordLike).length
  let wordIndex = 0

  return segments.map(({ segment, isWordLike }, index) => {
    if (!isWordLike) return <Fragment key={index}>{segment}</Fragment>

    const position = wordIndex++
    const step = 35 / Math.max(1, wordCount - 1)
    const style = position === 0 ? undefined : { '--ink-start': `${(position - 1) * step}%`, '--ink-end': `${position * step}%` }
    return <span data-word={segment} data-first={position === 0 ? '' : undefined} style={style} key={index}>{segment}</span>
  })
}

function SectionTitle({ words }) {
  return words.map((word, index) => <Fragment key={word}><span data-word={word}>{word}</span>{index < words.length - 1 && ' '}</Fragment>)
}

function TagList({ items, label }) {
  return <ul className="tags" aria-label={label}>{items.map((item) => <li key={item}>{item}</li>)}</ul>
}

function App() {
  const glow = useRef(null)
  const mobileMenu = useRef(null)
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme || 'dark')
  const [language, setLanguage] = useState(() => translations[localStorage.getItem('language')] ? localStorage.getItem('language') : 'en')
  const [headerVisible, setHeaderVisible] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)
  const copy = translations[language]

  useEffect(() => {
    document.documentElement.lang = language
    document.documentElement.dir = language === 'ar-SA' ? 'rtl' : 'ltr'
    localStorage.setItem('language', language)
  }, [language])

  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 761px)')
    const closeOnDesktop = () => {
      if (desktop.matches && mobileMenu.current?.open) mobileMenu.current.close()
    }

    desktop.addEventListener('change', closeOnDesktop)
    return () => {
      desktop.removeEventListener('change', closeOnDesktop)
      document.body.style.overflow = ''
    }
  }, [])

  useEffect(() => {
    let previousY = window.scrollY

    const handleScroll = () => {
      const currentY = window.scrollY
      const distance = currentY - previousY

      if (currentY <= 16) {
        setHeaderVisible(true)
        previousY = currentY
      }
      else if (Math.abs(distance) >= 8) {
        setHeaderVisible(distance < 0)
        previousY = currentY
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark'
    document.documentElement.dataset.theme = nextTheme
    document.querySelector('meta[name="theme-color"]').content = nextTheme === 'dark' ? '#050505' : '#f3f1eb'
    localStorage.setItem('theme', nextTheme)
    setTheme(nextTheme)
  }

  return (
    <>
      <a className="skip-link" href="#content">{copy.skip}</a>
      <div
        className="page-shell"
        onPointerEnter={() => { glow.current.style.opacity = '1' }}
        onPointerLeave={() => { glow.current.style.opacity = '0' }}
        onPointerMove={({ clientX, clientY }) => {
          glow.current.style.transform = `translate3d(${clientX - 260}px, ${clientY - 260}px, 0)`
        }}
      >
        <div ref={glow} className="cursor-glow" aria-hidden="true" />

        <header className="site-header" data-hidden={headerVisible ? undefined : ''}>
          <div className="header-inner">
            <a className="wordmark" href="#top" aria-label={copy.home}>YPN<span>®</span></a>
            <nav aria-label={copy.navigation}>
              <ol>
                {navigation.map((item) => <li key={item}><a href={`#${item}`}>{copy.nav[item]}</a></li>)}
              </ol>
            </nav>
            <div className="header-actions">
              <select className="language-select" value={language} onChange={({ target }) => setLanguage(target.value)} aria-label={copy.language}>
                {languages.map(([value, label]) => <option value={value} key={value}>{label}</option>)}
              </select>
              <a className="header-email" href={`mailto:${profile.email}`}>{copy.email} ↗</a>
              <button className="theme-toggle" type="button" onClick={toggleTheme} aria-label={copy.theme(theme === 'dark' ? 'light' : 'dark')}>
                {theme === 'dark' ? (
                  <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="3.5" /><path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.65 17.65l1.42 1.42M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.65 6.35l1.42-1.42" /></svg>
                ) : (
                  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5a8.5 8.5 0 1 0 11 11Z" /></svg>
                )}
              </button>
            </div>
          </div>
        </header>

        <dialog className="mobile-menu" id="mobile-menu" ref={mobileMenu} onClose={handleMenuClose} aria-label={copy.navigation}>
          <div className="mobile-menu-bar">
            <a className="wordmark" href="#top" aria-label={copy.home} onClick={closeMenu}>YPN<span>®</span></a>
            <div className="mobile-menu-bar-actions">
              <select className="language-select" value={language} onChange={({ target }) => setLanguage(target.value)} aria-label={copy.language}>
                {languages.map(([value, label]) => <option value={value} key={value}>{label}</option>)}
              </select>
              <button className="menu-close" type="button" onClick={closeMenu} aria-label={copy.closeMenu} autoFocus><span /><span /></button>
            </div>
          </div>
          <nav className="mobile-navigation" aria-label={copy.navigation}>
            <ol>
              {navigation.map((item, index) => <li key={item}><a href={`#${item}`} onClick={closeMenu}><span>0{index + 1}</span>{copy.nav[item]}</a></li>)}
            </ol>
          </nav>
          <div className="mobile-menu-footer">
            <a href={`mailto:${profile.email}`}>{copy.email} ↗</a>
          </div>
        </dialog>

        <main id="content">
          <section className="hero" id="top" aria-labelledby="hero-heading">
            <p className="hero-kicker"><span>{copy.role}</span><span>{copy.location}</span></p>
            <h1 id="hero-heading"><span>Yohanes</span><span>Pratama Naibaho</span></h1>
            <div className="hero-footer">
              <p className="intro">{copy.intro}</p>
              <dl className="quick-facts">
                <div><dt>{copy.currently}</dt><dd>{copy.currentRole}</dd></div>
                <div><dt>{copy.workingAcross}</dt><dd>{copy.domains}</dd></div>
              </dl>
            </div>
          </section>

          <section className="section-block" id="about" aria-labelledby="about-heading">
            <header className="section-heading"><p>01</p><h2 id="about-heading"><SectionTitle words={copy.sections.about} /></h2></header>
            <div className="section-content prose">
              <p className="about-intro">
                <InkText language={language}>{copy.aboutIntro}</InkText>
              </p>
              <p>{copy.aboutBody}</p>
              <p>{copy.education}</p>
            </div>
          </section>

          <section className="section-block" id="experience" aria-labelledby="experience-heading">
            <header className="section-heading"><p>02</p><h2 id="experience-heading"><SectionTitle words={copy.sections.experience} /></h2></header>
            <div className="section-content">
              <div className="experience-list" dir="ltr">
                {experience.map((item) => (
                  <article className="experience-item" key={`${item.company}-${item.period}`}>
                    <div className="experience-title">
                      <p className="period">{item.period}</p>
                      <div><h3>{item.role}</h3><p className="company">{item.company}</p></div>
                    </div>
                    <p className="summary">{item.summary}</p>
                    <TagList items={item.tags} label={copy.technologies} />
                  </article>
                ))}
              </div>
              <a className="text-link" href="/Yohanes-Pratama-Naibaho-resume.pdf" target="_blank">{copy.resume} <span>↗</span></a>
            </div>
          </section>

          <section className="section-block" id="work" aria-labelledby="work-heading">
            <header className="section-heading"><p>03</p><h2 id="work-heading"><SectionTitle words={copy.sections.work} /></h2></header>
            <div className="section-content project-list" dir="ltr">
              {projects.map((project, index) => (
                <article className="project-row" key={project.title}>
                  <p className="project-number">0{index + 1}</p>
                  <div className="project-copy">
                    <p className="project-type">{project.type}</p>
                    <h3>{project.href ? <a href={project.href} target="_blank" rel="noreferrer">{project.title} <span>↗</span></a> : project.title}</h3>
                    <p className="summary">{project.description}</p>
                    <TagList items={project.tags} label={copy.technologies} />
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="section-block" id="skills" aria-labelledby="skills-heading">
            <header className="section-heading"><p>04</p><h2 id="skills-heading"><SectionTitle words={copy.sections.skills} /></h2></header>
            <div className="section-content skill-grid" dir="ltr">
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
          <div className="socials" aria-label={copy.socialLinks}>
            {profile.socials.map((social) => <a key={social.label} href={social.href} target="_blank" rel="noreferrer">{social.label}</a>)}
          </div>
          <a href="#top">{copy.top} ↑</a>
        </footer>
      </div>
    </>
  )
}

export default App
