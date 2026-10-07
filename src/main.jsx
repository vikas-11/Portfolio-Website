import React, { useEffect, useMemo, useRef, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { Icon } from './icons.jsx'
import './theme.css'
import './styles.css'

const LINKS = [
  ['Home', 'index.html'], ['About', 'about.html'], ['Skills', 'skills.html'],
  ['Experience', 'experience.html'], ['Projects', 'projects.html'],
  ['Certifications', 'certifications.html'], ['Contact', 'contact.html']
]

const skills = [
  {title:'Mobile Development', icon:'mobile', items:['Flutter','Dart'], note:'Cross-platform mobile applications and responsive UI development.'},
  {title:'Backend', icon:'server', items:['PHP','Python','FastAPI'], note:'Server-side logic, API development, validation and maintainable backend architecture.'},
  {title:'API Development', icon:'api', items:['REST APIs','JSON','Swagger/OpenAPI'], note:'RESTful interfaces, structured data contracts and API documentation.'},
  {title:'Databases', icon:'database', items:['MySQL','PostgreSQL'], note:'Relational data modelling, queries and application integration.'},
  {title:'Frontend', icon:'code', items:['React.js','HTML5','CSS3','Material UI'], note:'Responsive interfaces, reusable components and modern web experiences.'},
  {title:'Tools & DevOps', icon:'tools', items:['Git','GitHub','Docker','Postman'], note:'Version control, containers, collaboration and API testing workflows.'},
  {title:'Core Concepts', icon:'spark', items:['OOP','CRUD Operations','API Integration','Exception Handling','Debugging'], note:'Strong software fundamentals used across application development.'}
]

const projects = [
  {title:'Pulse — Social Platform', kind:'Full Stack', text:'Modern social platform with authentication, CRUD posts, image uploads, likes, comments, bookmarks, profiles, search and staff moderation.', stack:['Python','Django','JavaScript','CSS'], github:'https://github.com/vikas-11/Pulse-Social-App', featured:true},
  {title:'Task Management API', kind:'Backend', text:'Backend application built around CRUD flows, authentication, relational data, PostgreSQL and containerized deployment.', stack:['FastAPI','PostgreSQL','SQLAlchemy','Docker'], github:'https://github.com/vikas-11', featured:true},
  {title:'AI Claims Comparison', kind:'Automation', text:'Enterprise automation work using Python extraction, JSON processing, comparison rules and prompt-driven validation workflows.', stack:['Python','GenAI','JSON','Prompt Engineering'], github:null, featured:true},
  {title:'Carwash Web Experience', kind:'Frontend', text:'Responsive React interface with reusable components, API integration, routing and polished Material UI patterns.', stack:['React.js','REST API','Material UI'], github:'https://github.com/vikas-11'},
  {title:'ATM Simulator System', kind:'Desktop', text:'Desktop banking simulation implementing transactional workflows and persistent data using Java Swing and JDBC.', stack:['Java','Swing','JDBC','MySQL'], github:null},
  {title:'Hotel Management System', kind:'Desktop', text:'Management application for hotel operations, booking records and database-backed workflows.', stack:['Java','Swing','MySQL'], github:null}
]

const experience = [
  {date:'Current', title:'Backend / Python Development', place:'Accenture', icon:'briefcase', text:'Working on backend-oriented automation and validation workflows using Python, APIs, structured JSON data and GenAI-assisted logic.'},
  {date:'Jun 2023 — Dec 2023', title:'Software Developer Intern', place:'Spirale Infosoft · Noida', icon:'briefcase', text:'Built responsive React interfaces, integrated REST APIs, developed reusable UI components and collaborated on feature delivery and bug fixes.'},
  {date:'2019 — 2023', title:'B.Tech — Computer Science & Engineering', place:'AKTU', icon:'graduation', text:'Built a foundation in programming, databases, software engineering and web development while completing a B.Tech in Computer Science.'}
]

const certificates = [
  {name:'GitHub Copilot Certification', issuer:'GitHub', badge:'GH-300', href:null},
  {name:'Claude Certified Associate - Foundations', issuer:'Anthropic', badge:'CLAUDE', href:null},
  {name:'Microsoft Azure AI Fundamentals', issuer:'Microsoft', badge:'AI-901', href:null},
  {name:'Data Structures', issuer:'IIT Kanpur', badge:'DSA', href:'./assets/certificates/dsa.pdf'},
  {name:'Core Java', issuer:'IIT Kanpur', badge:'JAVA', href:'./assets/certificates/core java.pdf'},
]

function useTheme(){
  const [theme,setTheme]=useState(()=>localStorage.getItem('portfolio-theme')||'dark')
  useEffect(()=>{document.documentElement.dataset.theme=theme;localStorage.setItem('portfolio-theme',theme)},[theme])
  return [theme,setTheme]
}

function useReveal(){
  useEffect(()=>{
    const nodes=[...document.querySelectorAll('[data-reveal]')]
    const io=new IntersectionObserver(entries=>entries.forEach(e=>e.isIntersecting&&e.target.classList.add('is-visible')),{threshold:.12})
    nodes.forEach(n=>io.observe(n)); return ()=>io.disconnect()
  },[])
}

function usePointerGlow(){
  useEffect(()=>{
    const move=e=>{
      document.documentElement.style.setProperty('--mx',`${e.clientX}px`)
      document.documentElement.style.setProperty('--my',`${e.clientY}px`)
    }
    window.addEventListener('pointermove',move,{passive:true}); return()=>window.removeEventListener('pointermove',move)
  },[])
}

function Layout({children,page}){
  const [theme,setTheme]=useTheme(); const [open,setOpen]=useState(false); const [progress,setProgress]=useState(0)
  usePointerGlow(); useReveal()
  useEffect(()=>{
    const s=()=>{const d=document.documentElement;const max=d.scrollHeight-d.clientHeight;setProgress(max?d.scrollTop/max*100:0)}
    window.addEventListener('scroll',s,{passive:true});s();return()=>window.removeEventListener('scroll',s)
  },[])
  return <>
    <div className="progress" style={{width:`${progress}%`}} />
    <div className="ambient ambient-a"/><div className="ambient ambient-b"/><div className="cursor-glow"/>
    <header className="site-header"><div className="nav-shell">
      <a className="brand" href="index.html"><span className="brand-mark">VY</span><span><b>Vikas Yadav</b><small>Developer Portfolio</small></span></a>
      <nav className={open?'nav-links open':'nav-links'}>{LINKS.map(([label,href])=><a key={href} className={page===href.replace('.html','')|| (page==='home'&&href==='index.html')?'active':''} href={href}>{label}</a>)}</nav>
      <div className="nav-actions">
        <button className="icon-btn" aria-label="Toggle color theme" onClick={()=>setTheme(theme==='dark'?'light':'dark')}><Icon name={theme==='dark'?'sun':'moon'} size={18}/></button>
        <a className="btn primary nav-resume" href="./assets/resume/Vikas_Yadav_Resume.pdf" target="_blank" rel="noreferrer"><Icon name="download" size={16}/> Resume</a>
        <button className="icon-btn menu-btn" aria-label="Toggle navigation" onClick={()=>setOpen(v=>!v)}><Icon name={open?'close':'menu'} size={20}/></button>
      </div>
    </div></header>
    <main className="page-enter">{children}</main>
    <footer><div className="container footer-inner"><div><a className="brand footer-brand" href="index.html"><span className="brand-mark">VY</span><span><b>Vikas Yadav</b><small>Build · Learn · Improve</small></span></a><p>Designed and built with React, Vite, CSS and a lot of curiosity.</p></div><div className="footer-links"><a href="projects.html">Projects</a><a href="certifications.html">Credentials</a><a href="contact.html">Contact</a></div></div></footer>
  </>
}

function PageHero({eyebrow,title,accent,copy,icon}){
  return <section className="page-hero"><div className="container page-hero-grid"><div data-reveal><div className="eyebrow"><Icon name={icon||'spark'} size={15}/>{eyebrow}</div><h1>{title} <span>{accent}</span></h1><p>{copy}</p></div><div className="hero-orbit" aria-hidden="true"><div className="orbit-ring ring-a"/><div className="orbit-ring ring-b"/><div className="orbit-core"><Icon name={icon||'code'} size={36}/></div><span className="satellite s1">01</span><span className="satellite s2">{`</>`}</span><span className="satellite s3">API</span></div></div></section>
}

function Home(){
  return <Layout page="home">
    <section className="home-hero"><div className="container hero-grid"><div className="hero-copy" data-reveal>
      <div className="status-pill"><span/> Available for backend & full-stack opportunities</div>
      <p className="eyebrow plain">BACKEND DEVELOPER · API BUILDER · PROBLEM SOLVER</p>
      <h1>I build reliable software with <span>clean logic</span> and thoughtful experiences.</h1>
      <p className="lead">Python, FastAPI, PHP, React, Flutter, PostgreSQL and practical engineering — focused on turning requirements into maintainable products.</p>
      <div className="hero-actions"><a className="btn primary" href="projects.html">Explore Projects <Icon name="arrow" size={16}/></a><a className="btn secondary" href="contact.html">Let’s Connect</a></div>
      <div className="social-row"><a href="https://github.com/vikas-11" target="_blank" rel="noreferrer"><Icon name="github"/> GitHub</a><a href="https://www.linkedin.com/in/vikas-yadav-a67a78179/" target="_blank" rel="noreferrer"><Icon name="linkedin"/> LinkedIn</a><a href="mailto:samrathyadav1103@gmail.com"><Icon name="mail"/> Email</a></div>
    </div><div className="visual-wrap" data-reveal>
      <div className="visual-grid"/><div className="hero-photo-card tilt-card"><div className="code-strip"><span>portfolio.tsx</span><i/><i/><i/></div><div className="photo-frame"><img src="./assets/img/profile-hero.png" alt="Vikas Yadav"/></div><div className="photo-meta"><span>VIKAS_YADAV</span><b>Backend Developer</b></div></div>
      <div className="float-chip chip-a"><Icon name="server" size={18}/><span>FastAPI</span></div><div className="float-chip chip-b"><Icon name="database" size={18}/><span>PostgreSQL</span></div><div className="float-chip chip-c"><Icon name="mobile" size={18}/><span>Flutter</span></div>
    </div></div></section>
    <section className="metric-strip"><div className="container metrics"><div><b>Python</b><span>Backend-first</span></div><div><b>REST</b><span>API design</span></div><div><b>React</b><span>Interactive UI</span></div><div><b>Docker</b><span>Deployment ready</span></div></div></section>
    <section className="section"><div className="container"><div className="section-heading" data-reveal><div><span>Quick overview</span><h2>A portfolio built around real work.</h2></div><p>Explore my background, current technical stack, hands-on projects and certifications through dedicated pages.</p></div><div className="portal-grid">
      {[['About','Who I am and how I work.','about.html','spark'],['Skills','The tools I use to build.','skills.html','tools'],['Experience','Work and education timeline.','experience.html','briefcase'],['Projects','Applications and engineering work.','projects.html','code'],['Certifications','Credentials and learning milestones.','certifications.html','certificate'],['Contact','Let’s build something useful.','contact.html','mail']].map(([a,b,c,d],i)=><a data-reveal style={{'--delay':`${i*70}ms`}} className="portal-card spotlight" href={c} key={c}><span className="portal-icon"><Icon name={d}/></span><h3>{a}</h3><p>{b}</p><span className="learn-more">Open page <Icon name="arrow" size={15}/></span></a>)}
    </div></div></section>
  </Layout>
}

function About(){return <Layout page="about"><PageHero eyebrow="About me" title="Engineering with" accent="purpose." copy="I enjoy backend development, API design and building useful products that make complex workflows feel simple." icon="spark"/><section className="section"><div className="container about-layout"><article className="story-card spotlight" data-reveal><span className="kicker">My story</span><h2>From interfaces to backend systems.</h2><p>I started with frontend development and gradually moved deeper into APIs, Python, database-backed applications and automation. That journey gives me a useful perspective: I care about both how a system works and how it feels to use.</p><p>My recent work has centered on Python-based validation, structured JSON processing, API development and GenAI-assisted workflows, while I continue building projects with FastAPI, React, Flutter and databases.</p><div className="values"><span><Icon name="check"/> Clear code</span><span><Icon name="check"/> Practical problem solving</span><span><Icon name="check"/> Continuous learning</span></div></article><div className="about-side"><div className="photo-panel" data-reveal><img src="./assets/img/profile-about.jpg" alt="Vikas Yadav"/></div><div className="quote-panel" data-reveal><p>“I prefer learning by building — write it, break it, debug it, improve it.”</p><span>— Vikas Yadav</span></div></div></div></section></Layout>}

function Skills(){return <Layout page="skills"><PageHero eyebrow="Technical toolkit" title="Skills that turn ideas into" accent="working software." copy="A practical stack across mobile, backend, APIs, databases, frontend and developer tooling." icon="tools"/><section className="section"><div className="container skill-grid">{skills.map((s,i)=><article className="skill-card spotlight" data-reveal style={{'--delay':`${i*70}ms`}} key={s.title}><div className="skill-icon"><Icon name={s.icon}/></div><div><span className="index">0{i+1}</span><h2>{s.title}</h2><p>{s.note}</p></div><div className="tags">{s.items.map(x=><span key={x}>{x}</span>)}</div></article>)}</div></section></Layout>}

function Experience(){return <Layout page="experience"><PageHero eyebrow="Journey" title="Experience built through" accent="real delivery." copy="A timeline of professional work, practical development and formal education." icon="briefcase"/><section className="section"><div className="container timeline">{experience.map((e,i)=><article className="timeline-row" data-reveal style={{'--delay':`${i*90}ms`}} key={e.title}><div className="timeline-axis"><span><Icon name={e.icon}/></span>{i<experience.length-1&&<i/>}</div><div className="timeline-card spotlight"><small>{e.date}</small><h2>{e.title}</h2><h3>{e.place}</h3><p>{e.text}</p></div></article>)}</div></section></Layout>}

function Projects(){const [filter,setFilter]=useState('All');const kinds=['All',...new Set(projects.map(p=>p.kind))];const visible=filter==='All'?projects:projects.filter(p=>p.kind===filter);return <Layout page="projects"><PageHero eyebrow="Selected work" title="Projects that show how I" accent="build." copy="A mix of backend systems, automation, full-stack products and earlier application work." icon="code"/><section className="section"><div className="container"><div className="filter-row">{kinds.map(k=><button className={filter===k?'active':''} onClick={()=>setFilter(k)} key={k}>{k}</button>)}</div><div className="project-grid">{visible.map((p,i)=><article className={`project-card spotlight ${p.featured?'featured':''}`} data-reveal style={{'--delay':`${i*60}ms`}} key={p.title}><div className="project-top"><span>{p.kind}</span>{p.featured&&<b>FEATURED</b>}</div><h2>{p.title}</h2><p>{p.text}</p><div className="tags">{p.stack.map(s=><span key={s}>{s}</span>)}</div><div className="project-links">{p.github?<a href={p.github} target="_blank" rel="noreferrer"><Icon name="github"/> Repository <Icon name="external" size={14}/></a>:<span>Private / enterprise work</span>}</div></article>)}</div></div></section></Layout>}

function Certifications(){return <Layout page="certifications"><PageHero eyebrow="Credentials" title="Learning backed by" accent="certification." copy="A growing set of credentials across AI-assisted development, programming, databases and web technologies." icon="certificate"/><section className="section"><div className="container cert-grid">{certificates.map((c,i)=><article className="cert-card spotlight" data-reveal style={{'--delay':`${i*55}ms`}} key={c.name}><div className="cert-badge"><Icon name="certificate"/><span>{c.badge}</span></div><div><small>{c.issuer}</small><h2>{c.name}</h2><p>Credential added to my continuous learning journey.</p></div>{c.href?<a className="cert-open" href={c.href} target="_blank" rel="noreferrer" aria-label={`View ${c.name}`}><Icon name="external"/></a>:<span className="verified">Verified</span>}</article>)}</div></section></Layout>}

function Contact(){const [copied,setCopied]=useState(false);const email='samrathyadav1103@gmail.com';async function copy(){try{await navigator.clipboard.writeText(email);setCopied(true);setTimeout(()=>setCopied(false),1800)}catch{location.href=`mailto:${email}`}}return <Layout page="contact"><PageHero eyebrow="Contact" title="Let’s build something" accent="useful." copy="Open to backend, Python, API and full-stack opportunities. The quickest way to reach me is email or LinkedIn." icon="mail"/><section className="section"><div className="container contact-grid"><article className="contact-main spotlight" data-reveal><span className="kicker">Start a conversation</span><h2>Have a role, project or idea in mind?</h2><p>Send me a message with a little context and I’ll get back to you.</p><div className="contact-actions"><a className="btn primary" href={`mailto:${email}`}><Icon name="mail"/> Email me</a><button className="btn secondary" onClick={copy}><Icon name="copy"/>{copied?'Copied!':'Copy email'}</button></div><div className="availability"><span/><div><b>Open to opportunities</b><small>Backend · Python · APIs · Full Stack</small></div></div></article><aside className="contact-list" data-reveal><a href={`mailto:${email}`}><span><Icon name="mail"/></span><div><small>Email</small><b>{email}</b></div><Icon name="arrow"/></a><a href="https://www.linkedin.com/in/vikas-yadav-a67a78179/" target="_blank" rel="noreferrer"><span><Icon name="linkedin"/></span><div><small>LinkedIn</small><b>Connect professionally</b></div><Icon name="external"/></a><a href="https://github.com/vikas-11" target="_blank" rel="noreferrer"><span><Icon name="github"/></span><div><small>GitHub</small><b>Explore my code</b></div><Icon name="external"/></a><div className="location-row"><span><Icon name="location"/></span><div><small>Location</small><b>India</b></div></div></aside></div></section></Layout>}

const page=document.body.dataset.page || 'home'
const map={home:Home,about:About,skills:Skills,experience:Experience,projects:Projects,certifications:Certifications,contact:Contact}
const Component=map[page]||Home
createRoot(document.getElementById('root')).render(<Component/>)
