import React, { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { Icon } from './icons.jsx'
import './theme.css'
import './styles.css'


/* =========================================================
   NAVIGATION
   ========================================================= */

const LINKS = [
  ['Home', 'index.html'],
  ['About', 'about.html'],
  ['Skills', 'skills.html'],
  ['Experience', 'experience.html'],
  ['Projects', 'projects.html'],
  ['Certifications', 'certifications.html'],
  ['Contact', 'contact.html']
]


/* =========================================================
   SKILLS
   ========================================================= */

const skills = [
  {
    title: 'Mobile Development',
    icon: 'mobile',
    items: ['Flutter', 'Dart'],
    note: 'Cross-platform mobile applications and responsive UI development.'
  },

  {
    title: 'Backend',
    icon: 'server',
    items: ['Python', 'FastAPI', 'Django', 'PHP'],
    note: 'Server-side logic, API development, validation and maintainable backend architecture.'
  },

  {
    title: 'API Development',
    icon: 'api',
    items: ['REST APIs', 'JSON', 'Swagger/OpenAPI'],
    note: 'RESTful interfaces, structured data contracts and API documentation.'
  },

  {
    title: 'Databases',
    icon: 'database',
    items: ['PostgreSQL', 'MySQL'],
    note: 'Relational data modelling, queries and application integration.'
  },

  {
    title: 'Frontend',
    icon: 'code',
    items: [
      'React.js',
      'JavaScript',
      'HTML5',
      'CSS3',
      'Material UI'
    ],
    note: 'Responsive interfaces, reusable components and modern web experiences.'
  },

  {
    title: 'Tools & DevOps',
    icon: 'tools',
    items: [
      'Git',
      'GitHub',
      'Docker',
      'Postman'
    ],
    note: 'Version control, containers, collaboration and API testing workflows.'
  },

  {
    title: 'AI & GenAI',
    icon: 'spark',
    items: [
      'Generative AI',
      'Prompt Engineering',
      'LLMs',
      'Agentic AI',
      'JSON Processing'
    ],
    note: 'AI-assisted workflows, prompt design, structured extraction and intelligent backend solutions.'
  },

  {
    title: 'Core Concepts',
    icon: 'spark',
    items: [
      'OOP',
      'CRUD Operations',
      'API Integration',
      'Exception Handling',
      'Debugging'
    ],
    note: 'Strong software fundamentals used across application development.'
  }
]


/* =========================================================
   PROJECTS
   ========================================================= */

const projects = [
  {
    title: 'Pulse — Social Platform',
    kind: 'Full Stack',
    text:
      'Modern social platform with authentication, CRUD posts, image uploads, likes, comments, bookmarks, profiles, search and staff moderation.',
    stack: [
      'Python',
      'Django',
      'JavaScript',
      'CSS'
    ],
    github:
      'https://github.com/vikas-11/Pulse-Social-App',
    featured: true
  },

  {
    title: 'Task Management API',
    kind: 'Backend',
    text:
      'Backend application built around CRUD flows, authentication, relational data, PostgreSQL and containerized deployment.',
    stack: [
      'FastAPI',
      'PostgreSQL',
      'SQLAlchemy',
      'Docker'
    ],
    github:
      'https://github.com/vikas-11',
    featured: true
  },

  {
    title: 'AI Claims Comparison',
    kind: 'Automation',
    text:
      'Enterprise automation work using Python extraction, JSON processing, comparison rules and prompt-driven validation workflows.',
    stack: [
      'Python',
      'GenAI',
      'JSON',
      'Prompt Engineering'
    ],
    github: null,
    featured: true
  },

  {
    title: 'Carwash Web Experience',
    kind: 'Frontend',
    text:
      'Responsive React interface with reusable components, API integration, routing and polished Material UI patterns.',
    stack: [
      'React.js',
      'REST API',
      'Material UI'
    ],
    github:
      'https://github.com/vikas-11'
  },

  {
    title: 'ATM Simulator System',
    kind: 'Desktop',
    text:
      'Desktop banking simulation implementing transactional workflows and persistent data using Java Swing and JDBC.',
    stack: [
      'Java',
      'Swing',
      'JDBC',
      'MySQL'
    ],
    github: null
  },

  {
    title: 'Hotel Management System',
    kind: 'Desktop',
    text:
      'Management application for hotel operations, booking records and database-backed workflows.',
    stack: [
      'Java',
      'Swing',
      'MySQL'
    ],
    github: null
  }
]


/* =========================================================
   EXPERIENCE
   ========================================================= */

const experience = [
  {
    date: 'Current',
    title: 'Backend / Python Development',
    place: 'Accenture',
    icon: 'briefcase',
    text:
      'Working on backend-oriented automation and validation workflows using Python, APIs, structured JSON data and GenAI-assisted logic.'
  },

  {
    date: 'Jun 2023 — Dec 2023',
    title: 'Software Developer Intern',
    place: 'Spirale Infosoft · Noida',
    icon: 'briefcase',
    text:
      'Built responsive React interfaces, integrated REST APIs, developed reusable UI components and collaborated on feature delivery and bug fixes.'
  },

  {
    date: '2019 — 2023',
    title: 'B.Tech — Computer Science & Engineering',
    place: 'AKTU',
    icon: 'graduation',
    text:
      'Built a foundation in programming, databases, software engineering and web development while completing a B.Tech in Computer Science.'
  }
]


/* =========================================================
   CERTIFICATIONS
   ========================================================= */

const certificates = [
  {
    name: 'GitHub Copilot Certification',
    issuer: 'GitHub',
    badge: 'GH-300',
    href: null
  },

  {
    name: 'Claude Certified Associate - Foundations',
    issuer: 'Anthropic',
    badge: 'CLAUDE',
    href: null
  },

  {
    name: 'Microsoft Azure AI Fundamentals',
    issuer: 'Microsoft',
    badge: 'AI-901',
    href: null
  },

  {
    name: 'Data Structures',
    issuer: 'IIT Kanpur',
    badge: 'DSA',
    href: './assets/certificates/dsa.pdf'
  },

  {
    name: 'Core Java',
    issuer: 'IIT Kanpur',
    badge: 'JAVA',
    href: './assets/certificates/core java.pdf'
  }
]


/* =========================================================
   THEME
   ========================================================= */

function useTheme() {
  const [theme, setTheme] = useState(
    () =>
      localStorage.getItem('portfolio-theme') ||
      'dark'
  )

  useEffect(() => {
    document.documentElement.dataset.theme = theme

    localStorage.setItem(
      'portfolio-theme',
      theme
    )
  }, [theme])

  return [
    theme,
    setTheme
  ]
}


/* =========================================================
   SCROLL REVEAL
   ========================================================= */

function useReveal() {

  useEffect(() => {

    const nodes = [
      ...document.querySelectorAll(
        '[data-reveal]'
      )
    ]

    const observer =
      new IntersectionObserver(
        entries => {

          entries.forEach(entry => {

            if (entry.isIntersecting) {
              entry.target.classList.add(
                'is-visible'
              )
            }

          })

        },
        {
          threshold: .12
        }
      )

    nodes.forEach(node =>
      observer.observe(node)
    )

    return () =>
      observer.disconnect()

  }, [])

}


/* =========================================================
   POINTER GLOW
   ========================================================= */

function usePointerGlow() {

  useEffect(() => {

    const move = event => {

      document.documentElement.style.setProperty(
        '--mx',
        `${event.clientX}px`
      )

      document.documentElement.style.setProperty(
        '--my',
        `${event.clientY}px`
      )

    }

    window.addEventListener(
      'pointermove',
      move,
      {
        passive: true
      }
    )

    return () =>
      window.removeEventListener(
        'pointermove',
        move
      )

  }, [])

}


/* =========================================================
   MAIN LAYOUT
   ========================================================= */

function Layout({
  children,
  page
}) {

  const [
    theme,
    setTheme
  ] = useTheme()

  const [
    open,
    setOpen
  ] = useState(false)

  const [
    progress,
    setProgress
  ] = useState(0)

  usePointerGlow()
  useReveal()

  useEffect(() => {

    const updateProgress = () => {

      const documentElement =
        document.documentElement

      const max =
        documentElement.scrollHeight -
        documentElement.clientHeight

      setProgress(
        max
          ? (
              documentElement.scrollTop /
              max
            ) * 100
          : 0
      )

    }

    window.addEventListener(
      'scroll',
      updateProgress,
      {
        passive: true
      }
    )

    updateProgress()

    return () =>
      window.removeEventListener(
        'scroll',
        updateProgress
      )

  }, [])


  return (
    <>

      {/* Progress bar */}

      <div
        className="progress"
        style={{
          width: `${progress}%`
        }}
      />


      {/* Background Effects */}

      <div className="ambient ambient-a" />
      <div className="ambient ambient-b" />
      <div className="cursor-glow" />


      {/* Navigation */}

      <header className="site-header">

        <div className="nav-shell">

          <a
            className="brand"
            href="index.html"
          >

            <span className="brand-mark">
              VY
            </span>

            <span>

              <b>
                Vikas Yadav
              </b>

              <small>
                Developer Portfolio
              </small>

            </span>

          </a>


          <nav
            className={
              open
                ? 'nav-links open'
                : 'nav-links'
            }
          >

            {LINKS.map(
              ([
                label,
                href
              ]) => (

                <a
                  key={href}
                  className={
                    page ===
                      href.replace(
                        '.html',
                        ''
                      ) ||
                    (
                      page ===
                        'home' &&
                      href ===
                        'index.html'
                    )
                      ? 'active'
                      : ''
                  }
                  href={href}
                >

                  {label}

                </a>

              )
            )}

          </nav>


          <div className="nav-actions">

            <button
              className="icon-btn"
              aria-label="Toggle color theme"
              onClick={() =>
                setTheme(
                  theme === 'dark'
                    ? 'light'
                    : 'dark'
                )
              }
            >

              <Icon
                name={
                  theme === 'dark'
                    ? 'sun'
                    : 'moon'
                }
                size={18}
              />

            </button>


            <a
              className="btn primary nav-resume"
              href="./assets/resume/Vikas_Yadav_Resume.pdf"
              target="_blank"
              rel="noreferrer"
            >

              <Icon
                name="download"
                size={16}
              />

              Resume

            </a>


            <button
              className="icon-btn menu-btn"
              aria-label="Toggle navigation"
              onClick={() =>
                setOpen(
                  value => !value
                )
              }
            >

              <Icon
                name={
                  open
                    ? 'close'
                    : 'menu'
                }
                size={20}
              />

            </button>

          </div>

        </div>

      </header>


      {/* Page */}

      <main className="page-enter">
        {children}
      </main>


      {/* Footer */}

      <footer>

        <div className="container footer-inner">

          <div>

            <a
              className="brand footer-brand"
              href="index.html"
            >

              <span className="brand-mark">
                VY
              </span>

              <span>

                <b>
                  Vikas Yadav
                </b>

                <small>
                  Build · Learn · Improve
                </small>

              </span>

            </a>

            <p>
              Designed and built with
              React, Vite, CSS and a lot
              of curiosity.
            </p>

          </div>


          <div className="footer-links">

            <a href="projects.html">
              Projects
            </a>

            <a href="certifications.html">
              Credentials
            </a>

            <a href="contact.html">
              Contact
            </a>

          </div>

        </div>

      </footer>

    </>
  )
}


/* =========================================================
   PAGE HERO
   ========================================================= */

function PageHero({
  eyebrow,
  title,
  accent,
  copy,
  icon
}) {

  return (

    <section className="page-hero">

      <div className="container page-hero-grid">

        <div data-reveal>

          <div className="eyebrow">

            <Icon
              name={
                icon ||
                'spark'
              }
              size={15}
            />

            {eyebrow}

          </div>


          <h1>

            {title}{' '}

            <span>
              {accent}
            </span>

          </h1>


          <p>
            {copy}
          </p>

        </div>


        <div
          className="hero-orbit"
          aria-hidden="true"
        >

          <div className="orbit-ring ring-a" />

          <div className="orbit-ring ring-b" />

          <div className="orbit-core">

            <Icon
              name={
                icon ||
                'code'
              }
              size={36}
            />

          </div>

          <span className="satellite s1">
            01
          </span>

          <span className="satellite s2">
            {'</>'}
          </span>

          <span className="satellite s3">
            API
          </span>

        </div>

      </div>

    </section>

  )
}


/* =========================================================
   HOME PAGE
   ========================================================= */

function Home() {

  return (

    <Layout page="home">


      {/* ================= HERO ================= */}

      <section className="home-hero">

        <div className="container hero-grid">


          {/* LEFT SIDE */}

          <div
            className="hero-copy"
            data-reveal
          >

            <div className="status-pill">

              <span />

              Available for backend &
              full-stack opportunities

            </div>


            <p className="eyebrow plain">

              BACKEND DEVELOPER ·
              API BUILDER ·
              PROBLEM SOLVER

            </p>


            <h1>

              I build reliable software
              with{' '}

              <span>
                clean logic
              </span>

              {' '}and thoughtful
              experiences.

            </h1>


            <p className="lead">

              Python, FastAPI, Django,
              PostgreSQL, Docker, React
              and Generative AI —
              focused on turning
              requirements into clean,
              maintainable and scalable
              products.

            </p>


            <div className="hero-actions">

              <a
                className="btn primary"
                href="projects.html"
              >

                Explore Projects

                <Icon
                  name="arrow"
                  size={16}
                />

              </a>


              <a
                className="btn secondary"
                href="contact.html"
              >

                Let’s Connect

              </a>

            </div>


            <div className="social-row">

              <a
                href="https://github.com/vikas-11"
                target="_blank"
                rel="noreferrer"
              >

                <Icon name="github" />

                GitHub

              </a>


              <a
                href="https://www.linkedin.com/in/vikas-yadav-a67a78179/"
                target="_blank"
                rel="noreferrer"
              >

                <Icon name="linkedin" />

                LinkedIn

              </a>


              <a
                href="mailto:yad.vikas.11@gmail.com"
              >

                <Icon name="mail" />

                Email

              </a>

            </div>

          </div>


          {/* RIGHT SIDE — NO PROFILE IMAGE */}

          <div
            className="visual-wrap"
            data-reveal
          >

            <div className="visual-grid" />


            <div className="hero-photo-card tilt-card">


              {/* Window Header */}

              <div className="code-strip">

                <span>
                  backend_profile.py
                </span>

                <i />
                <i />
                <i />

              </div>


              {/* Terminal */}

              <div className="developer-terminal">


                <div className="terminal-title">

                  <span>
                    ~/vikas/backend
                  </span>

                  <b>

                    <i />

                    ONLINE

                  </b>

                </div>


                <div className="terminal-command">

                  <span>
                    $
                  </span>

                  python profile.py

                </div>


                <div className="terminal-output">

                  <p>

                    <span>
                      developer
                    </span>

                    <b>
                      "Vikas Yadav"
                    </b>

                  </p>


                  <p>

                    <span>
                      role
                    </span>

                    <b>
                      "Backend Developer"
                    </b>

                  </p>


                  <p>

                    <span>
                      language
                    </span>

                    <b>
                      "Python"
                    </b>

                  </p>


                  <p>

                    <span>
                      frameworks
                    </span>

                    <b>
                      ["FastAPI", "Django"]
                    </b>

                  </p>


                  <p>

                    <span>
                      database
                    </span>

                    <b>
                      "PostgreSQL"
                    </b>

                  </p>


                  <p>

                    <span>
                      devops
                    </span>

                    <b>
                      "Docker"
                    </b>

                  </p>


                  <p>

                    <span>
                      focus
                    </span>

                    <b>
                      "APIs + GenAI"
                    </b>

                  </p>

                </div>


                <div className="terminal-ready">

                  <i />

                  ready_to_build = True

                </div>

              </div>


              <div className="photo-meta">

                <span>
                  VIKAS_YADAV
                </span>

                <b>
                  Backend Developer
                </b>

              </div>

            </div>


            {/* Floating Skills */}

            <div className="float-chip chip-a">

              <Icon
                name="server"
                size={18}
              />

              <span>
                FastAPI
              </span>

            </div>


            <div className="float-chip chip-b">

              <Icon
                name="database"
                size={18}
              />

              <span>
                PostgreSQL
              </span>

            </div>


            <div className="float-chip chip-c">

              <Icon
                name="spark"
                size={18}
              />

              <span>
                GenAI
              </span>

            </div>

          </div>

        </div>

      </section>


      {/* ================= METRICS ================= */}

      <section className="metric-strip">

        <div className="container metrics">

          <div>

            <b>
              Python
            </b>

            <span>
              Backend-first
            </span>

          </div>


          <div>

            <b>
              REST
            </b>

            <span>
              API design
            </span>

          </div>


          <div>

            <b>
              PostgreSQL
            </b>

            <span>
              Data driven
            </span>

          </div>


          <div>

            <b>
              Docker
            </b>

            <span>
              Deployment ready
            </span>

          </div>

        </div>

      </section>


      {/* ================= QUICK OVERVIEW ================= */}

      <section className="section">

        <div className="container">

          <div
            className="section-heading"
            data-reveal
          >

            <div>

              <span>
                Quick overview
              </span>

              <h2>
                A portfolio built around
                real work.
              </h2>

            </div>


            <p>

              Explore my background,
              current technical stack,
              hands-on projects and
              certifications through
              dedicated pages.

            </p>

          </div>


          <div className="portal-grid">

            {[
              [
                'About',
                'Who I am and how I work.',
                'about.html',
                'spark'
              ],

              [
                'Skills',
                'The tools I use to build.',
                'skills.html',
                'tools'
              ],

              [
                'Experience',
                'Work and education timeline.',
                'experience.html',
                'briefcase'
              ],

              [
                'Projects',
                'Applications and engineering work.',
                'projects.html',
                'code'
              ],

              [
                'Certifications',
                'Credentials and learning milestones.',
                'certifications.html',
                'certificate'
              ],

              [
                'Contact',
                'Let’s build something useful.',
                'contact.html',
                'mail'
              ]

            ].map(
              (
                [
                  title,
                  description,
                  href,
                  icon
                ],
                index
              ) => (

                <a
                  data-reveal
                  style={{
                    '--delay':
                      `${index * 70}ms`
                  }}
                  className="portal-card spotlight"
                  href={href}
                  key={href}
                >

                  <span className="portal-icon">

                    <Icon name={icon} />

                  </span>

                  <h3>
                    {title}
                  </h3>

                  <p>
                    {description}
                  </p>

                  <span className="learn-more">

                    Open page

                    <Icon
                      name="arrow"
                      size={15}
                    />

                  </span>

                </a>

              )
            )}

          </div>

        </div>

      </section>

    </Layout>

  )
}


/* =========================================================
   ABOUT PAGE
   ========================================================= */

function About() {

  return (

    <Layout page="about">

      <PageHero
        eyebrow="About me"
        title="Engineering with"
        accent="purpose."
        copy="I enjoy backend development, API design and building useful products that make complex workflows feel simple."
        icon="spark"
      />


      <section className="section">

        <div className="container about-layout">


          {/* STORY */}

          <article
            className="story-card spotlight"
            data-reveal
          >

            <span className="kicker">
              My story
            </span>


            <h2>
              From interfaces to backend
              systems.
            </h2>


            <p>

              I started with frontend
              development and gradually
              moved deeper into APIs,
              Python, database-backed
              applications and automation.

              That journey gives me a
              useful perspective: I care
              about both how a system
              works and how it feels to
              use.

            </p>


            <p>

              My recent work has centered
              on Python-based validation,
              structured JSON processing,
              API development and
              GenAI-assisted workflows,
              while I continue building
              projects with FastAPI,
              Django, React, Docker and
              databases.

            </p>


            <div className="values">

              <span>

                <Icon name="check" />

                Clear code

              </span>


              <span>

                <Icon name="check" />

                Practical problem solving

              </span>


              <span>

                <Icon name="check" />

                Continuous learning

              </span>

            </div>

          </article>


          {/* RIGHT SIDE — PROFILE IMAGE REMOVED */}

          <div className="about-side">


            {/* Developer Identity Card */}

            <div
              className="photo-panel developer-profile-panel"
              data-reveal
            >

              <div className="profile-glow" />


              <div className="developer-monogram">

                <span>
                  VY
                </span>

              </div>


              <span className="profile-kicker">

                BACKEND ENGINEERING

              </span>


              <h3>

                Building reliable systems
                with clean logic.

              </h3>


              <p className="profile-description">

                Focused on APIs, backend
                architecture, databases,
                automation and AI-powered
                workflows.

              </p>


              <div className="profile-stack">

                <span>
                  Python
                </span>

                <span>
                  FastAPI
                </span>

                <span>
                  Django
                </span>

                <span>
                  PostgreSQL
                </span>

                <span>
                  Docker
                </span>

                <span>
                  GenAI
                </span>

              </div>


              <div className="profile-status">

                <i />

                BUILDING · LEARNING ·
                IMPROVING

              </div>

            </div>


            {/* Quote */}

            <div
              className="quote-panel"
              data-reveal
            >

              <p>

                “I prefer learning by
                building — write it,
                break it, debug it,
                improve it.”

              </p>

              <span>
                — Vikas Yadav
              </span>

            </div>

          </div>

        </div>

      </section>

    </Layout>

  )
}


/* =========================================================
   SKILLS PAGE
   ========================================================= */

function Skills() {

  return (

    <Layout page="skills">

      <PageHero
        eyebrow="Technical toolkit"
        title="Skills that turn ideas into"
        accent="working software."
        copy="A practical stack across mobile, backend, APIs, databases, frontend, AI and developer tooling."
        icon="tools"
      />


      <section className="section">

        <div className="container skill-grid">

          {skills.map(
            (
              skill,
              index
            ) => (

              <article
                className="skill-card spotlight"
                data-reveal
                style={{
                  '--delay':
                    `${index * 70}ms`
                }}
                key={skill.title}
              >

                <div className="skill-icon">

                  <Icon
                    name={skill.icon}
                  />

                </div>


                <div>

                  <span className="index">

                    0{index + 1}

                  </span>


                  <h2>
                    {skill.title}
                  </h2>


                  <p>
                    {skill.note}
                  </p>

                </div>


                <div className="tags">

                  {skill.items.map(
                    item => (

                      <span key={item}>
                        {item}
                      </span>

                    )
                  )}

                </div>

              </article>

            )
          )}

        </div>

      </section>

    </Layout>

  )
}


/* =========================================================
   EXPERIENCE PAGE
   ========================================================= */

function Experience() {

  return (

    <Layout page="experience">

      <PageHero
        eyebrow="Journey"
        title="Experience built through"
        accent="real delivery."
        copy="A timeline of professional work, practical development and formal education."
        icon="briefcase"
      />


      <section className="section">

        <div className="container timeline">

          {experience.map(
            (
              item,
              index
            ) => (

              <article
                className="timeline-row"
                data-reveal
                style={{
                  '--delay':
                    `${index * 90}ms`
                }}
                key={item.title}
              >


                <div className="timeline-axis">

                  <span>

                    <Icon
                      name={item.icon}
                    />

                  </span>


                  {
                    index <
                    experience.length - 1 &&
                    <i />
                  }

                </div>


                <div className="timeline-card spotlight">

                  <small>
                    {item.date}
                  </small>

                  <h2>
                    {item.title}
                  </h2>

                  <h3>
                    {item.place}
                  </h3>

                  <p>
                    {item.text}
                  </p>

                </div>

              </article>

            )
          )}

        </div>

      </section>

    </Layout>

  )
}


/* =========================================================
   PROJECTS PAGE
   ========================================================= */

function Projects() {

  const [
    filter,
    setFilter
  ] = useState('All')


  const kinds = [
    'All',
    ...new Set(
      projects.map(
        project =>
          project.kind
      )
    )
  ]


  const visible =
    filter === 'All'
      ? projects
      : projects.filter(
          project =>
            project.kind === filter
        )


  return (

    <Layout page="projects">

      <PageHero
        eyebrow="Selected work"
        title="Projects that show how I"
        accent="build."
        copy="A mix of backend systems, automation, full-stack products and earlier application work."
        icon="code"
      />


      <section className="section">

        <div className="container">


          {/* FILTER */}

          <div className="filter-row">

            {kinds.map(
              kind => (

                <button
                  className={
                    filter === kind
                      ? 'active'
                      : ''
                  }
                  onClick={() =>
                    setFilter(kind)
                  }
                  key={kind}
                >

                  {kind}

                </button>

              )
            )}

          </div>


          {/* PROJECT CARDS */}

          <div className="project-grid">

            {visible.map(
              (
                project,
                index
              ) => (

                <article
                  className={
                    `project-card spotlight ${
                      project.featured
                        ? 'featured'
                        : ''
                    }`
                  }
                  data-reveal
                  style={{
                    '--delay':
                      `${index * 60}ms`
                  }}
                  key={project.title}
                >


                  <div className="project-top">

                    <span>
                      {project.kind}
                    </span>

                    {
                      project.featured &&
                      <b>
                        FEATURED
                      </b>
                    }

                  </div>


                  <h2>
                    {project.title}
                  </h2>


                  <p>
                    {project.text}
                  </p>


                  <div className="tags">

                    {project.stack.map(
                      tech => (

                        <span key={tech}>
                          {tech}
                        </span>

                      )
                    )}

                  </div>


                  <div className="project-links">

                    {
                      project.github
                        ? (

                          <a
                            href={
                              project.github
                            }
                            target="_blank"
                            rel="noreferrer"
                          >

                            <Icon name="github" />

                            Repository

                            <Icon
                              name="external"
                              size={14}
                            />

                          </a>

                        )
                        : (

                          <span>
                            Private / enterprise
                            work
                          </span>

                        )
                    }

                  </div>

                </article>

              )
            )}

          </div>

        </div>

      </section>

    </Layout>

  )
}


/* =========================================================
   CERTIFICATIONS PAGE
   ========================================================= */

function Certifications() {

  return (

    <Layout page="certifications">

      <PageHero
        eyebrow="Credentials"
        title="Learning backed by"
        accent="certification."
        copy="A growing set of credentials across AI, AI-assisted development, programming and software engineering."
        icon="certificate"
      />


      <section className="section">

        <div className="container cert-grid">

          {certificates.map(
            (
              certificate,
              index
            ) => (

              <article
                className="cert-card spotlight"
                data-reveal
                style={{
                  '--delay':
                    `${index * 55}ms`
                }}
                key={
                  certificate.name
                }
              >


                <div className="cert-badge">

                  <Icon
                    name="certificate"
                  />

                  <span>
                    {certificate.badge}
                  </span>

                </div>


                <div>

                  <small>
                    {certificate.issuer}
                  </small>

                  <h2>
                    {certificate.name}
                  </h2>

                  <p>
                    Credential added to my
                    continuous learning
                    journey.
                  </p>

                </div>


                {
                  certificate.href
                    ? (

                      <a
                        className="cert-open"
                        href={
                          certificate.href
                        }
                        target="_blank"
                        rel="noreferrer"
                        aria-label={
                          `View ${certificate.name}`
                        }
                      >

                        <Icon
                          name="external"
                        />

                      </a>

                    )
                    : (

                      <span className="verified">
                        Verified
                      </span>

                    )
                }

              </article>

            )
          )}

        </div>

      </section>

    </Layout>

  )
}


/* =========================================================
   CONTACT PAGE
   ========================================================= */

function Contact() {

  const [
    copied,
    setCopied
  ] = useState(false)


  const email =
    'yad.vikas.11@gmail.com'


  async function copy() {

    try {

      await navigator.clipboard.writeText(
        email
      )

      setCopied(true)

      setTimeout(
        () =>
          setCopied(false),
        1800
      )

    } catch {

      location.href =
        `mailto:${email}`

    }

  }


  return (

    <Layout page="contact">

      <PageHero
        eyebrow="Contact"
        title="Let’s build something"
        accent="useful."
        copy="Open to backend, Python, API and full-stack opportunities. The quickest way to reach me is email or LinkedIn."
        icon="mail"
      />


      <section className="section">

        <div className="container contact-grid">


          {/* CONTACT MAIN */}

          <article
            className="contact-main spotlight"
            data-reveal
          >

            <span className="kicker">
              Start a conversation
            </span>


            <h2>

              Have a role, project or
              idea in mind?

            </h2>


            <p>

              Send me a message with a
              little context and I’ll get
              back to you.

            </p>


            <div className="contact-actions">

              <a
                className="btn primary"
                href={
                  `mailto:${email}`
                }
              >

                <Icon name="mail" />

                Email me

              </a>


              <button
                className="btn secondary"
                onClick={copy}
              >

                <Icon name="copy" />

                {
                  copied
                    ? 'Copied!'
                    : 'Copy email'
                }

              </button>

            </div>


            <div className="availability">

              <span />

              <div>

                <b>
                  Open to opportunities
                </b>

                <small>
                  Backend · Python ·
                  APIs · Full Stack
                </small>

              </div>

            </div>

          </article>


          {/* CONTACT DETAILS */}

          <aside
            className="contact-list"
            data-reveal
          >

            <a
              href={
                `mailto:${email}`
              }
            >

              <span>
                <Icon name="mail" />
              </span>

              <div>

                <small>
                  Email
                </small>

                <b>
                  {email}
                </b>

              </div>

              <Icon name="arrow" />

            </a>


            <a
              href="https://www.linkedin.com/in/vikas-yadav-a67a78179/"
              target="_blank"
              rel="noreferrer"
            >

              <span>
                <Icon name="linkedin" />
              </span>

              <div>

                <small>
                  LinkedIn
                </small>

                <b>
                  Connect professionally
                </b>

              </div>

              <Icon name="external" />

            </a>


            <a
              href="https://github.com/vikas-11"
              target="_blank"
              rel="noreferrer"
            >

              <span>
                <Icon name="github" />
              </span>

              <div>

                <small>
                  GitHub
                </small>

                <b>
                  Explore my code
                </b>

              </div>

              <Icon name="external" />

            </a>


            <div className="location-row">

              <span>
                <Icon name="location" />
              </span>

              <div>

                <small>
                  Location
                </small>

                <b>
                  India
                </b>

              </div>

            </div>

          </aside>

        </div>

      </section>

    </Layout>

  )
}


/* =========================================================
   PAGE ROUTING
   ========================================================= */

const page =
  document.body.dataset.page ||
  'home'


const pageMap = {
  home: Home,
  about: About,
  skills: Skills,
  experience: Experience,
  projects: Projects,
  certifications: Certifications,
  contact: Contact
}


const Component =
  pageMap[page] ||
  Home


createRoot(
  document.getElementById('root')
).render(
  <Component />
)
