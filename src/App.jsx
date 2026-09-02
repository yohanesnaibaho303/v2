import { Fragment, useEffect, useRef, useState } from 'react'

const profile = {
  email: 'yohanespratama303@gmail.com',
  socials: [
    { label: 'v1', href: 'https://yohanes-portfolioo.netlify.app/' },
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
    skip: 'Skip to content', home: 'Home', navigation: 'In-page navigation', menu: 'Open menu', closeMenu: 'Close menu', email: 'Email', contact: 'Email me', viewWork: 'View selected work', language: 'Language', socialLinks: 'Social links', technologies: 'Technologies used', top: 'Top',
    nav: { about: 'About', experience: 'Experience', work: 'Work', skills: 'Skills' },
    role: 'Software Engineer', location: 'Jakarta, Indonesia',
    intro: 'I build frontend platforms and full-stack systems for banking and manufacturing. My current work includes shared architecture used by more than 20 product teams.',
    currently: 'Currently', currentRole: 'Frontend Engineer building QLola at Bank Rakyat Indonesia', workingAcross: 'Working across', domains: 'Frontend architecture, platform engineering, quality, and cloud reliability',
    sections: { about: ['About'], experience: ['Experience'], work: ['Selected', 'work'], skills: ['Technical', 'toolkit'] },
    aboutIntro: 'My main focus is frontend architecture. I also work with backend systems, test automation, and cloud infrastructure.',
    aboutBody: 'At Bank Rakyat Indonesia, I build shared frontend foundations for QLola, a corporate banking platform used by more than 20 teams. Before that, I led enterprise system work at LG Group and handled reliability during a three-wave cloud migration.',
    education: 'I earned a Bachelor of Science in Computing from President University on a 70% Jababeka Scholarship.',
    resume: 'View full résumé', github: 'View GitHub profile', theme: (next) => `Switch to ${next} mode`,
  },
  id: {
    skip: 'Lewati ke konten', home: 'Beranda', navigation: 'Navigasi halaman', menu: 'Buka menu', closeMenu: 'Tutup menu', email: 'Email', contact: 'Hubungi saya', viewWork: 'Lihat karya pilihan', language: 'Bahasa', socialLinks: 'Tautan sosial', technologies: 'Teknologi yang digunakan', top: 'Atas',
    nav: { about: 'Tentang', experience: 'Pengalaman', work: 'Karya', skills: 'Keahlian' },
    role: 'Software Engineer', location: 'Jakarta, Indonesia',
    intro: 'Saya membangun platform frontend dan sistem full-stack untuk perbankan dan manufaktur. Saat ini, saya mengerjakan arsitektur bersama yang digunakan oleh lebih dari 20 tim produk.',
    currently: 'Saat ini', currentRole: 'Frontend Engineer yang membangun QLola di Bank Rakyat Indonesia', workingAcross: 'Lintas bidang', domains: 'Arsitektur frontend, platform engineering, quality, dan cloud reliability',
    sections: { about: ['Tentang'], experience: ['Pengalaman'], work: ['Karya', 'pilihan'], skills: ['Toolkit', 'teknis'] },
    aboutIntro: 'Fokus utama saya adalah arsitektur frontend. Saya juga bekerja dengan sistem backend, test automation, dan cloud infrastructure.',
    aboutBody: 'Di Bank Rakyat Indonesia, saya membangun fondasi frontend bersama untuk QLola, platform corporate banking yang digunakan oleh lebih dari 20 tim. Sebelumnya, saya memimpin pengembangan sistem enterprise di LG Group dan menangani reliability selama cloud migration dalam tiga tahap.',
    education: 'Saya meraih gelar Bachelor of Science in Computing dari President University dengan Beasiswa Jababeka sebesar 70%.',
    resume: 'Lihat résumé lengkap', github: 'Lihat profil GitHub', theme: (next) => `Ganti ke mode ${next}`,
  },
  zh: {
    skip: '跳至主要内容', home: '首页', navigation: '页内导航', menu: '打开菜单', closeMenu: '关闭菜单', email: '邮件', contact: '联系我', viewWork: '查看精选项目', language: '语言', socialLinks: '社交链接', technologies: '使用的技术', top: '顶部',
    nav: { about: '关于', experience: '经历', work: '项目', skills: '技能' },
    role: '软件工程师', location: '印度尼西亚·雅加达',
    intro: '我为银行和制造业构建前端平台与全栈系统。目前的工作包括供 20 多个产品团队使用的共享架构。',
    currently: '目前', currentRole: '在 Bank Rakyat Indonesia 构建 QLola 的前端工程师', workingAcross: '业务领域', domains: '前端架构、平台工程、质量与云可靠性',
    sections: { about: ['关于'], experience: ['工作经历'], work: ['精选', '项目'], skills: ['技术', '工具'] },
    aboutIntro: '我的主要方向是前端架构，同时也参与后端系统、测试自动化和云基础设施工作。',
    aboutBody: '在 Bank Rakyat Indonesia，我为 QLola 构建共享前端基础。该企业银行平台由 20 多个团队使用。此前，我在 LG Group 负责企业系统开发，并承担三阶段云迁移的可靠性工作。',
    education: '我获得了 President University 计算机科学理学学士学位，并获得 70% Jababeka 奖学金。',
    resume: '查看完整简历', github: '查看 GitHub 主页', theme: (next) => `切换到${next}模式`,
  },
  ko: {
    skip: '본문으로 건너뛰기', home: '홈', navigation: '페이지 내 탐색', menu: '메뉴 열기', closeMenu: '메뉴 닫기', email: '이메일', contact: '이메일 보내기', viewWork: '주요 작업 보기', language: '언어', socialLinks: '소셜 링크', technologies: '사용 기술', top: '맨 위로',
    nav: { about: '소개', experience: '경력', work: '작업', skills: '기술' },
    role: '소프트웨어 엔지니어', location: '인도네시아 자카르타',
    intro: '금융과 제조 분야의 프론트엔드 플랫폼과 풀스택 시스템을 구축합니다. 현재는 20개 이상의 제품 팀이 사용하는 공유 아키텍처를 개발하고 있습니다.',
    currently: '현재', currentRole: 'Bank Rakyat Indonesia에서 QLola를 구축하는 프론트엔드 엔지니어', workingAcross: '업무 분야', domains: '프론트엔드 아키텍처, 플랫폼 엔지니어링, 품질, 클라우드 신뢰성',
    sections: { about: ['소개'], experience: ['경력'], work: ['주요', '작업'], skills: ['기술', '도구'] },
    aboutIntro: '주요 분야는 프론트엔드 아키텍처입니다. 백엔드 시스템, 테스트 자동화, 클라우드 인프라 업무도 수행합니다.',
    aboutBody: 'Bank Rakyat Indonesia에서 20개 이상의 팀이 사용하는 기업 금융 플랫폼 QLola의 공유 프론트엔드 기반을 구축하고 있습니다. 이전에는 LG Group에서 엔터프라이즈 시스템 개발을 이끌고 3단계 클라우드 마이그레이션의 신뢰성을 담당했습니다.',
    education: 'President University에서 70% Jababeka 장학금을 받으며 컴퓨팅 이학사 학위를 취득했습니다.',
    resume: '전체 이력서 보기', github: 'GitHub 프로필 보기', theme: (next) => `${next} 모드로 전환`,
  },
  ja: {
    skip: 'コンテンツへ移動', home: 'ホーム', navigation: 'ページ内ナビゲーション', menu: 'メニューを開く', closeMenu: 'メニューを閉じる', email: 'メール', contact: 'メールする', viewWork: '主な実績を見る', language: '言語', socialLinks: 'SNSリンク', technologies: '使用技術', top: 'トップ',
    nav: { about: '紹介', experience: '経歴', work: '実績', skills: 'スキル' },
    role: 'ソフトウェアエンジニア', location: 'インドネシア・ジャカルタ',
    intro: '金融・製造業向けのフロントエンドプラットフォームとフルスタックシステムを構築しています。現在は、20以上のプロダクトチームが利用する共通アーキテクチャを手がけています。',
    currently: '現在', currentRole: 'Bank Rakyat Indonesia で QLola を構築するフロントエンドエンジニア', workingAcross: '対応領域', domains: 'フロントエンドアーキテクチャ、プラットフォームエンジニアリング、品質、クラウド信頼性',
    sections: { about: ['紹介'], experience: ['経歴'], work: ['主な', '実績'], skills: ['技術', 'ツール'] },
    aboutIntro: '主な専門分野はフロントエンドアーキテクチャです。バックエンドシステム、テスト自動化、クラウドインフラにも携わっています。',
    aboutBody: 'Bank Rakyat Indonesia で、20以上のチームが利用する法人向け銀行プラットフォーム QLola の共通フロントエンド基盤を構築しています。以前は LG Group で企業システム開発をリードし、3段階のクラウド移行における信頼性を担当しました。',
    education: 'President University で 70% の Jababeka 奨学金を受け、コンピューティング理学士を取得しました。',
    resume: '履歴書を見る', github: 'GitHubプロフィールを見る', theme: (next) => `${next}モードに切り替え`,
  },
  'ar-SA': {
    skip: 'الانتقال إلى المحتوى', home: 'الرئيسية', navigation: 'التنقل داخل الصفحة', menu: 'فتح القائمة', closeMenu: 'إغلاق القائمة', email: 'البريد', contact: 'تواصل معي', viewWork: 'عرض الأعمال المختارة', language: 'اللغة', socialLinks: 'روابط التواصل', technologies: 'التقنيات المستخدمة', top: 'الأعلى',
    nav: { about: 'نبذة', experience: 'الخبرة', work: 'الأعمال', skills: 'المهارات' },
    role: 'مهندس برمجيات', location: 'جاكرتا، إندونيسيا',
    intro: 'أبني منصات frontend وأنظمة full-stack للخدمات المصرفية والتصنيع. يشمل عملي الحالي معمارية مشتركة تستخدمها أكثر من 20 فريقًا للمنتجات.',
    currently: 'حاليًا', currentRole: 'مهندس frontend يبني QLola في Bank Rakyat Indonesia', workingAcross: 'مجالات العمل', domains: 'معمارية frontend وplatform engineering والجودة وcloud reliability',
    sections: { about: ['نبذة'], experience: ['الخبرة'], work: ['أعمال', 'مختارة'], skills: ['الأدوات', 'التقنية'] },
    aboutIntro: 'تركيزي الأساسي هو معمارية frontend. أعمل أيضًا على أنظمة backend وtest automation وcloud infrastructure.',
    aboutBody: 'في Bank Rakyat Indonesia، أبني أسس frontend مشتركة لمنصة QLola المصرفية للشركات التي تستخدمها أكثر من 20 فريقًا. قبل ذلك، قدت تطوير أنظمة مؤسسية في LG Group وتوليت reliability خلال cloud migration من ثلاث مراحل.',
    education: 'حصلت على بكالوريوس العلوم في الحوسبة من President University بمنحة Jababeka بنسبة 70%.',
    resume: 'عرض السيرة الذاتية', github: 'عرض ملف GitHub', theme: (next) => `التبديل إلى الوضع ${next}`,
  },
}

const contentTranslations = {
  id: {
    experience: [
      'Membangun QLola, platform corporate banking dengan traffic tinggi. Merancang shared microfrontend framework, component library, dan multilingual system yang digunakan oleh lebih dari 20 tim.',
      'Memimpin pengembangan enterprise platform, MES, dan smart factory di lebih dari 10 lokasi global. Menangani reliability untuk cloud migration tiga tahap dengan availability 99,99% dan latency di bawah 52 ms.',
      'Menerapkan automated UI dan API testing, reusable end-to-end test suites, performance testing, serta eksekusi CI/CD pada workflow QA yang sebelumnya manual.',
      'Mengembangkan website full-stack untuk klien, dashboard inventory regional, serta Python automation untuk memigrasikan dan membersihkan lebih dari 10.000 data produk.',
    ],
    projectTypes: ['Tulisan teknis · Bagian 1', 'Tulisan teknis · Bagian 2', 'Proyek akademik', 'Eksperimen Machine Learning', 'Eksperimen Computer Vision'],
    projects: [
      'Pengantar tentang kapan microfrontends tepat digunakan, cara kerja host dan remote applications, serta kemampuan yang ditambahkan Module Federation 2.0 pada sistem React dan Vite.',
      'Panduan praktis membangun Vite monorepo dengan remote-to-remote modules, shared routing, Tailwind CSS, error boundaries, dan TypeScript.',
      'Kamus yang mudah digunakan dengan fuzzy search dan speech synthesis, dibuat sebagai proyek akhir universitas.',
      'Simulasi self-driving car berbasis browser untuk mengeksplorasi Neural Networks dan Machine Learning menggunakan vanilla JavaScript.',
      'Eksperimen Object Detection berbasis browser yang dibuat dengan JavaScript tanpa library Machine Learning eksternal.',
    ],
    skillGroups: ['Bahasa & web', 'Frontend', 'Backend & CMS', 'Arsitektur & sistem', 'Data & penyimpanan', 'Quality & observability', 'Platform & delivery', 'Applied ML & graphics', 'Produk & domain', 'Cara kerja'],
  },
  zh: {
    experience: [
      '参与构建高流量企业银行平台 QLola。设计了供 20 多个团队采用的 shared microfrontend framework、component library 和 multilingual system。',
      '主导 10 多个全球站点的 enterprise platform、MES 和 smart factory 交付。负责三阶段 cloud migration 的 reliability，保持 99.99% availability 和低于 52 ms 的 latency。',
      '在原本以手动为主的 QA workflow 中引入 automated UI 和 API testing、reusable end-to-end test suites、performance testing 及 CI/CD execution。',
      '交付 full-stack 客户网站、区域 inventory dashboard，以及用于迁移和清理超过 10,000 条产品记录的 Python automation。',
    ],
    projectTypes: ['技术文章 · 第一部分', '技术文章 · 第二部分', '学术项目', 'Machine Learning 实验', 'Computer Vision 实验'],
    projects: [
      '介绍 microfrontends 的适用场景、host 与 remote applications 的工作方式，以及 Module Federation 2.0 为 React 和 Vite 系统带来的能力。',
      '实践指南：使用 remote-to-remote modules、shared routing、Tailwind CSS、error boundaries 和 TypeScript 构建 Vite monorepo。',
      '一款支持 fuzzy search 和 speech synthesis 的易用词典，作为大学毕业项目开发。',
      '基于浏览器的 self-driving car 模拟，通过 vanilla JavaScript 探索 Neural Networks 和 Machine Learning。',
      '使用 JavaScript 构建的浏览器端 Object Detection 实验，不依赖外部 Machine Learning library。',
    ],
    skillGroups: ['编程语言与 Web', 'Frontend', 'Backend 与 CMS', '架构与系统', '数据与存储', '质量与可观测性', '平台与交付', 'Applied ML 与图形', '产品与领域', '工作方式'],
  },
  ko: {
    experience: [
      '트래픽이 많은 기업 금융 플랫폼 QLola를 개발하고 있습니다. 20개 이상의 팀이 사용하는 shared microfrontend framework, component library, multilingual system을 설계했습니다.',
      '10개 이상의 글로벌 사이트에서 enterprise platform, MES, smart factory 구축을 주도했습니다. 99.99% availability와 52 ms 미만의 latency를 유지한 3단계 cloud migration의 reliability를 담당했습니다.',
      '기존 수동 QA workflow에 automated UI 및 API testing, reusable end-to-end test suites, performance testing, CI/CD execution을 도입했습니다.',
      'full-stack 고객 웹사이트, 지역 inventory dashboard, 10,000개 이상의 제품 데이터를 이전하고 정리하는 Python automation을 구축했습니다.',
    ],
    projectTypes: ['기술 문서 · 1부', '기술 문서 · 2부', '학술 프로젝트', 'Machine Learning 실험', 'Computer Vision 실험'],
    projects: [
      'microfrontends가 적합한 시점, host와 remote applications의 동작 방식, Module Federation 2.0이 React 및 Vite 시스템에 추가하는 기능을 소개합니다.',
      'remote-to-remote modules, shared routing, Tailwind CSS, error boundaries, TypeScript로 Vite monorepo를 구축하는 실습 가이드입니다.',
      'fuzzy search와 speech synthesis를 지원하는 사용하기 쉬운 사전으로, 대학 졸업 프로젝트로 제작했습니다.',
      'vanilla JavaScript로 Neural Networks와 Machine Learning을 탐구하는 브라우저 기반 self-driving car 시뮬레이션입니다.',
      '외부 Machine Learning library 없이 JavaScript로 만든 브라우저 기반 Object Detection 실험입니다.',
    ],
    skillGroups: ['언어 및 Web', 'Frontend', 'Backend 및 CMS', '아키텍처 및 시스템', '데이터 및 스토리지', '품질 및 관측성', '플랫폼 및 배포', 'Applied ML 및 그래픽', '제품 및 도메인', '업무 방식'],
  },
  ja: {
    experience: [
      '高トラフィックの法人向け銀行プラットフォーム QLola を開発しています。20以上のチームが採用する shared microfrontend framework、component library、multilingual system を設計しました。',
      '10以上のグローバル拠点で enterprise platform、MES、smart factory の導入を主導しました。99.99% availability と 52 ms 未満の latency を維持した3段階の cloud migration で reliability を担当しました。',
      '手動中心だった QA workflow に automated UI と API testing、reusable end-to-end test suites、performance testing、CI/CD execution を導入しました。',
      'full-stack のクライアントサイト、地域 inventory dashboard、10,000件以上の商品データを移行・整理する Python automation を開発しました。',
    ],
    projectTypes: ['技術記事 · Part 1', '技術記事 · Part 2', '学術プロジェクト', 'Machine Learning 実験', 'Computer Vision 実験'],
    projects: [
      'microfrontends が適する場面、host と remote applications の仕組み、Module Federation 2.0 が React と Vite システムにもたらす機能を紹介します。',
      'remote-to-remote modules、shared routing、Tailwind CSS、error boundaries、TypeScript を使って Vite monorepo を構築する実践ガイドです。',
      'fuzzy search と speech synthesis に対応した使いやすい辞書で、大学の卒業制作として開発しました。',
      'vanilla JavaScript で Neural Networks と Machine Learning を学ぶブラウザベースの self-driving car シミュレーションです。',
      '外部の Machine Learning library を使わず、JavaScript で構築したブラウザベースの Object Detection 実験です。',
    ],
    skillGroups: ['言語と Web', 'Frontend', 'Backend と CMS', 'アーキテクチャとシステム', 'データとストレージ', '品質と可観測性', 'プラットフォームとデリバリー', 'Applied ML とグラフィックス', '製品とドメイン', '働き方'],
  },
  'ar-SA': {
    experience: [
      'أطوّر QLola، وهي منصة corporate banking ذات حركة استخدام عالية. صممت shared microfrontend framework وcomponent library وmultilingual system تعتمدها أكثر من 20 فريقًا.',
      'قدت تنفيذ enterprise platform وMES وsmart factory في أكثر من 10 مواقع عالمية. توليت reliability لعملية cloud migration من ثلاث مراحل حافظت على availability بنسبة 99.99% وlatency أقل من 52 ms.',
      'أدخلت automated UI وAPI testing وreusable end-to-end test suites وperformance testing وتنفيذ CI/CD إلى QA workflow كان يدويًا في السابق.',
      'طورت مواقع full-stack للعملاء وinventory dashboard إقليمية وPython automation لنقل وتنظيف أكثر من 10,000 سجل منتج.',
    ],
    projectTypes: ['كتابة تقنية · الجزء 1', 'كتابة تقنية · الجزء 2', 'مشروع أكاديمي', 'تجربة Machine Learning', 'تجربة Computer Vision'],
    projects: [
      'مقدمة حول متى تكون microfrontends مناسبة، وكيف تعمل host وremote applications، وما الذي تضيفه Module Federation 2.0 إلى أنظمة React وVite.',
      'دليل عملي لبناء Vite monorepo باستخدام remote-to-remote modules وshared routing وTailwind CSS وerror boundaries وTypeScript.',
      'قاموس سهل الاستخدام يدعم fuzzy search وspeech synthesis، أنشأته كمشروع تخرج جامعي.',
      'محاكاة self-driving car داخل المتصفح تستكشف Neural Networks وMachine Learning باستخدام vanilla JavaScript.',
      'تجربة Object Detection داخل المتصفح مبنية باستخدام JavaScript من دون Machine Learning library خارجية.',
    ],
    skillGroups: ['اللغات والويب', 'Frontend', 'Backend وCMS', 'المعمارية والأنظمة', 'البيانات والتخزين', 'الجودة وقابلية المراقبة', 'المنصات والتسليم', 'Applied ML والرسومات', 'المنتج والمجال', 'أساليب العمل'],
  },
}

const experience = [
  {
    period: 'May 2026 — Present',
    role: 'Frontend Engineer',
    company: 'Bank Rakyat Indonesia',
    href: 'https://bri.co.id/',
    summary: 'I build shared frontend foundations for QLola, a high-traffic corporate banking platform. The microfrontend framework, component library, and multilingual system are used by more than 20 teams.',
    tags: ['Next.js', 'TypeScript', 'Module Federation', 'Storybook'],
  },
  {
    period: 'May 2024 — May 2026',
    role: 'Associate Software Engineer · Fullstack',
    company: 'LG Group',
    href: 'https://www.lgcns.com/',
    summary: 'I led enterprise platform, MES, and smart-factory work across more than 10 global sites. I also handled reliability during a three-wave cloud migration that held 99.99% availability, latency below 52 ms, and an error rate below 0.1%.',
    tags: ['React', 'Spring Boot', '.NET', 'Microservices'],
  },
  {
    period: 'Feb — May 2024',
    role: 'QA Automation Engineer',
    company: 'BPJS Kesehatan',
    href: 'https://www.bpjs-kesehatan.go.id/',
    summary: 'I introduced UI and API automation to a team that had relied on manual testing. The work included reusable end-to-end suites, performance testing, and CI/CD runs on every commit.',
    tags: ['Selenium', 'Katalon', 'JMeter', 'CI/CD'],
  },
  {
    period: 'Jan — Dec 2023',
    role: 'Software Developer',
    company: 'Knight Connections',
    href: 'https://knight-connections.com/',
    summary: 'I built client websites, a regional inventory dashboard, and a Python script that migrated and cleaned more than 10,000 product records.',
    tags: ['MERN', 'Python', 'Laravel', 'MySQL'],
  },
]

const projects = [
  {
    type: 'Technical writing · Part 1',
    title: 'Micro Frontend Architecture: Concepts & Design Patterns',
    href: 'https://medium.com/@yohanespratama303/micro-frontend-dengan-module-federation-2-0-part-1-konsep-arsitektur-57ca1bb83367',
    description: 'This article explains when micro frontends make sense, how host and remote applications work, and what Module Federation 2.0 brings to React and Vite.',
    tags: ['Micro Frontends', 'React', 'Vite', 'Module Federation 2.0'],
  },
  {
    type: 'Technical writing · Part 2',
    title: 'Implementing Micro Frontends with Module Federation 2.0',
    href: 'https://medium.com/@yohanespratama303/microfrontend-architecture-in-react-with-vite-module-federation-part-2-id-e482e9c3ae47',
    description: 'This follow-up walks through a Vite monorepo with remote-to-remote modules, shared routing, Tailwind CSS, error boundaries, and TypeScript.',
    tags: ['Module Federation 2.0', 'Vite', 'TypeScript', 'Tailwind CSS'],
  },
  {
    type: 'Academic project',
    title: 'English–Batak Toba Dictionary',
    href: 'https://bataktoba-english-dictionary.netlify.app/',
    description: 'My university final project: an English-to-Batak Toba dictionary with fuzzy search and speech synthesis.',
    tags: ['Vue.js', 'Fuse.js', 'Web Speech API'],
  },
  {
    type: 'Machine learning experiment',
    title: 'Self-Driving Car',
    href: 'https://github.com/yohanesnaibaho303/self-driving-car',
    description: 'A browser-based self-driving car simulation built with vanilla JavaScript to explore neural networks and machine learning.',
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
const geometryCount = 3

function getInitialGeometry() {
  const previous = Number(sessionStorage.getItem('hero-geometry'))
  return Number.isInteger(previous) && previous >= 0 && previous < geometryCount
    ? (previous + 1) % geometryCount
    : Math.floor(Math.random() * geometryCount)
}

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
  return <ul className="tags" dir="ltr" aria-label={label}>{items.map((item) => <li key={item}>{item}</li>)}</ul>
}

function App() {
  const glow = useRef(null)
  const atmosphere = useRef(null)
  const mobileMenu = useRef(null)
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme || 'dark')
  const [language, setLanguage] = useState(() => translations[localStorage.getItem('language')] ? localStorage.getItem('language') : 'en')
  const [headerVisible, setHeaderVisible] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)
  const [geometry, setGeometry] = useState(getInitialGeometry)
  const copy = translations[language]
  const localizedContent = contentTranslations[language]
  const contentDirection = language === 'ar-SA' ? 'rtl' : 'ltr'

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
    return () => desktop.removeEventListener('change', closeOnDesktop)
  }, [])

  useEffect(() => {
    const sections = [...document.querySelectorAll('.section-content')]
    if (!('IntersectionObserver' in window)) {
      sections.forEach((section) => section.setAttribute('data-visible', ''))
      return
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.setAttribute('data-visible', '')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12 })
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    sessionStorage.setItem('hero-geometry', geometry)
  }, [geometry])

  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 761px)')
    const animateOnReturn = () => {
      if (desktop.matches && document.visibilityState === 'visible') setGeometry((current) => (current + 1) % geometryCount)
    }
    document.addEventListener('visibilitychange', animateOnReturn)
    return () => document.removeEventListener('visibilitychange', animateOnReturn)
  }, [])

  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 761px)')
    let previousY = window.scrollY
    const hero = atmosphere.current?.parentElement
    let wasBelowHero = hero ? previousY > hero.offsetTop + hero.offsetHeight * .75 : false

    const handleScroll = () => {
      const currentY = window.scrollY
      const distance = currentY - previousY
      const geometryThreshold = hero ? hero.offsetTop + hero.offsetHeight * .75 : Infinity

      if (desktop.matches && currentY > geometryThreshold) wasBelowHero = true
      else if (desktop.matches && wasBelowHero && distance < 0) {
        setGeometry((current) => (current + 1) % geometryCount)
        wasBelowHero = false
      }

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

  const openMenu = () => {
    setHeaderVisible(true)
    setMenuOpen(true)
    mobileMenu.current.removeAttribute('data-closing')
    mobileMenu.current.showModal()
    mobileMenu.current.querySelector('.menu-close').focus()
  }

  const closeMenu = () => {
    const menu = mobileMenu.current
    if (!menu?.open || menu.hasAttribute('data-closing')) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      menu.close()
      return
    }
    menu.setAttribute('data-closing', '')
  }

  const handleMenuClose = () => {
    mobileMenu.current?.removeAttribute('data-closing')
    setMenuOpen(false)
  }

  const finishMenuClose = (event) => {
    if (event.target === event.currentTarget && event.propertyName === 'transform' && event.currentTarget.hasAttribute('data-closing')) event.currentTarget.close()
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

        <header className="site-header" data-hidden={headerVisible ? undefined : ''} onFocusCapture={() => setHeaderVisible(true)}>
          <div className="header-inner">
            <a className="wordmark" href="#top" aria-label={copy.home}>YPN<span>®</span></a>
            <nav aria-label={copy.navigation}>
              <ol>
                {navigation.map((item) => <li key={item}><a href={`#${item}`}>{copy.nav[item]}</a></li>)}
              </ol>
            </nav>
            <div className="header-actions">
              <a className="header-email" href={`mailto:${profile.email}`}>{copy.email} ↗</a>
              <span className="header-divider" aria-hidden="true" />
              <select className="language-select" value={language} onChange={({ target }) => setLanguage(target.value)} aria-label={copy.language}>
                {languages.map(([value, label]) => <option value={value} key={value}>{label}</option>)}
              </select>
              <button className="theme-toggle" type="button" onClick={toggleTheme} aria-label={copy.theme(theme === 'dark' ? 'light' : 'dark')}>
                <span className="theme-icon" data-theme={theme}>
                {theme === 'dark' ? (
                  <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="3.5" /><path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.65 17.65l1.42 1.42M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.65 6.35l1.42-1.42" /></svg>
                ) : (
                  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5a8.5 8.5 0 1 0 11 11Z" /></svg>
                )}
                </span>
              </button>
              <button className="menu-toggle" type="button" onClick={openMenu} aria-label={copy.menu} aria-controls="mobile-menu" aria-expanded={menuOpen}>
                <span /><span />
              </button>
            </div>
          </div>
        </header>

        <dialog className="mobile-menu" id="mobile-menu" ref={mobileMenu} onClose={handleMenuClose} onCancel={(event) => { event.preventDefault(); closeMenu() }} onTransitionEnd={finishMenuClose} aria-label={copy.navigation}>
          <div className="mobile-menu-bar">
            <a className="wordmark" href="#top" aria-label={copy.home} onClick={closeMenu}>YPN<span>®</span></a>
            <button className="menu-close" type="button" onClick={closeMenu} aria-label={copy.closeMenu} autoFocus><span /><span /></button>
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
            <div className="hero-atmosphere" ref={atmosphere} aria-hidden="true">
              <div className="hero-orbits">
                <div className="geometry-layer" data-geometry={geometry} key={geometry} />
              </div>
            </div>
            <p className="hero-kicker"><span>{copy.role}</span><span>{copy.location}</span></p>
            <h1 id="hero-heading"><span>Yohanes</span>{' '}<span>Pratama Naibaho</span></h1>
            <div className="hero-footer">
              <div className="hero-copy">
                <p className="intro">{copy.intro}</p>
                <div className="hero-actions">
                  <a href={`mailto:${profile.email}`}>{copy.contact} <span>↗</span></a>
                  <a href="#work">{copy.viewWork} <span>↓</span></a>
                </div>
              </div>
              <dl className="quick-facts">
                <div><dt>{copy.currently}</dt><dd>{copy.currentRole}</dd></div>
                <div><dt>{copy.workingAcross}</dt><dd>{copy.domains}</dd></div>
              </dl>
            </div>
          </section>

          <section className="section-block" id="about" aria-labelledby="about-heading">
            <header className="section-heading"><p>01</p><h2 id="about-heading"><SectionTitle words={copy.sections.about} /></h2></header>
            <div className="section-content prose" data-reveal>
              <p className="about-intro">
                <InkText language={language}>{copy.aboutIntro}</InkText>
              </p>
              <p>{copy.aboutBody}</p>
              <p>{copy.education}</p>
            </div>
          </section>

          <section className="section-block" id="experience" aria-labelledby="experience-heading">
            <header className="section-heading"><p>02</p><h2 id="experience-heading"><SectionTitle words={copy.sections.experience} /></h2></header>
            <div className="section-content" data-reveal>
              <div className="experience-list">
                {experience.map((item, index) => (
                  <a className="experience-item" href={item.href} target="_blank" rel="noreferrer" key={`${item.company}-${item.period}`}>
                    <div className="experience-title">
                      <p className="period" dir="ltr">{item.period}</p>
                      <div dir="ltr"><h3>{item.role} <span className="experience-arrow" aria-hidden="true">↗</span></h3><p className="company">{item.company}</p></div>
                    </div>
                    <p className="summary" dir={contentDirection}>{localizedContent?.experience[index] ?? item.summary}</p>
                    <TagList items={item.tags} label={copy.technologies} />
                  </a>
                ))}
              </div>
              <a className="text-link" href="/Yohanes-Pratama-Naibaho-resume.pdf" target="_blank">{copy.resume} <span>↗</span></a>
            </div>
          </section>

          <section className="section-block" id="work" aria-labelledby="work-heading">
            <header className="section-heading"><p>03</p><h2 id="work-heading"><SectionTitle words={copy.sections.work} /></h2></header>
            <div className="section-content project-list" data-reveal>
              {projects.map((project, index) => (
                <a className="project-row" href={project.href} target="_blank" rel="noreferrer" key={project.title}>
                  <p className="project-number" dir="ltr">0{index + 1}</p>
                  <div className="project-copy">
                    <p className="project-type" dir={contentDirection}>{localizedContent?.projectTypes[index] ?? project.type}</p>
                    <h3 dir="ltr">{project.title} <span>↗</span></h3>
                    <p className="summary" dir={contentDirection}>{localizedContent?.projects[index] ?? project.description}</p>
                    <TagList items={project.tags} label={copy.technologies} />
                  </div>
                </a>
              ))}
              <a className="text-link" href="https://github.com/yohanesnaibaho303" target="_blank" rel="noreferrer">{copy.github} <span>↗</span></a>
            </div>
          </section>

          <section className="section-block" id="skills" aria-labelledby="skills-heading">
            <header className="section-heading"><p>04</p><h2 id="skills-heading"><SectionTitle words={copy.sections.skills} /></h2></header>
            <div className="section-content skill-grid" data-reveal>
              {skills.map((skill, index) => (
                <div className="skill-group" key={skill.group}>
                  <h3 dir={contentDirection}>{localizedContent?.skillGroups[index] ?? skill.group}</h3>
                  <p dir="ltr">{skill.items.join(', ')}</p>
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
