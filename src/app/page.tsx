"use client";

import { ArrowUpRight, Link as LinkIcon, Mail, MapPin } from "lucide-react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { AmbientBackground } from "@/components/ambient-background";
import { ScrollProgress } from "@/components/scroll-progress";

const experience = [
  {
    company: "LinkAja",
    role: "Senior Android Engineer",
    period: "Payments",
    summary:
      "Worked on Android products that helped people pay, sell digital goods, and manage money through one of Indonesia’s homegrown e-wallets.",
    details:
      "My work covered Mitra LinkAja for agents and the consumer e-wallet. The challenge was making financial actions clear, reliable, and trustworthy — not simply shipping another screen.",
    stack: "Kotlin · Jetpack Compose · Coroutines · Modularization",
  },
  {
    company: "Cakap",
    role: "Android Engineer",
    period: "EdTech",
    summary:
      "Built Android features for a live language-learning platform connecting Indonesian learners with teachers.",
    details:
      "Worked across learning, booking, and learner-facing flows — software sitting between a learner’s intention and their decision to show up again tomorrow.",
    stack: "Kotlin · MVVM · Room · Realtime",
  },
  {
    company: "MyHomeCredit",
    role: "Android Engineer",
    period: "Fintech",
    summary:
      "Developed mobile experiences for financing, loan management, and customer payments.",
    details:
      "Financial products need more than technical correctness. They need clear communication, especially for users making important financial decisions for the first time.",
    stack: "Kotlin · Java · REST APIs · Firebase",
  },
];

const projects = [
  { name: "SuaraBisnis", type: "Voice-first business assistant", description: "Exploring how voice and AI can make business information easier to access for Indonesian UMKM owners.", stack: "Next.js · Firebase · AI workflows" },
  { name: "Inventory App", type: "Self-hosted retail system", description: "A practical inventory tool for a small grocery shop, designed to stay portable and run on infrastructure I control.", stack: "Web · Podman · Linux · Nginx" },
  { name: "Excel Wizard", type: "Retail data tool", description: "A lightweight workflow for turning retail spreadsheets into useful data without building another enterprise platform.", stack: "Streamlit · Python · Data workflows" },
  { name: "Textoaster", type: "Personal news radar", description: "An Android experiment in collecting, filtering, and reading news without another noisy feed.", stack: "Android · Kotlin · APIs" },
];

const skills = [
  ["Core Android", "Kotlin · Java · Jetpack Compose · Coroutines · Room · KMP"],
  ["Architecture", "Clean Architecture · MVVM · MVP · Modularization"],
  ["Product domains", "Payments · E-wallets · Fintech · Credit · EdTech"],
  ["Web & infrastructure", "Next.js · REST APIs · Firebase · Linux · Podman · Nginx"],
];

function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >{children}</motion.div>
  );
}

export default function Home() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const parallax = useSpring(useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -60]), {
    stiffness: 60,
    damping: 20,
  });

  return (
    <main>
      <ScrollProgress />
      <AmbientBackground />
      <nav className="site-nav" aria-label="Main navigation">
        <a className="brand" href="#top">AL<span>.</span></a>
        <div className="nav-links">
          <a href="#experience">Experience</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <div className="page-shell" id="top">
        <section className="hero">
          <motion.div style={reduce ? undefined : { y: parallax }}>
          <Reveal>
            <p className="eyebrow">Senior Android Engineer <span>/</span> Indonesia</p>
            <h1>Building mobile products <em>people depend on.</em></h1>
            <p className="hero-copy">I’m Abraham Lay — an Android engineer with 7+ years across payments, fintech, and EdTech. I also build small tools I can run myself.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">View selected work <ArrowUpRight size={16} /></a>
              <a className="text-link" href="mailto:abrahamlay94@gmail.com">Get in touch <ArrowUpRight size={16} /></a>
            </div>
          </Reveal>
          <Reveal delay={0.15} className="hero-aside">
            <div className="availability"><span className="status-dot" /> Open to meaningful engineering opportunities</div>
            <p className="hero-note">Currently based in Jakarta<br />Open to remote & international teams</p>
          </Reveal>
          </motion.div>
        </section>

        <section className="intro section-rule">
          <Reveal><p className="section-label">00 — Perspective</p></Reveal>
          <Reveal delay={0.08} className="intro-content">
            <h2>I work at the intersection of <span>product, engineering, and trust.</span></h2>
            <p>A payment flow has to feel safe. A credit app has to be clear. A learning product has to make people want to return.</p>
            <p>That’s the kind of software I enjoy building: useful products with real users, real constraints, and consequences beyond the screen.</p>
          </Reveal>
        </section>

        <section className="section-rule" id="experience">
          <Reveal><div className="section-heading"><p className="section-label">01 — Experience</p><p className="section-kicker">A career shaped by real users and real constraints.</p></div></Reveal>
          <div className="experience-list">
            {experience.map((item, index) => (
              <Reveal key={item.company} delay={index * 0.08} className="experience-item">
                <div className="experience-top"><span className="experience-period">{item.period}</span><span className="experience-index">0{index + 1}</span></div>
                <h3>{item.company}</h3><p className="role">{item.role}</p>
                <p className="summary">{item.summary}</p><p className="details">{item.details}</p>
                <p className="stack">{item.stack}</p>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="section-rule" id="work">
          <Reveal><div className="section-heading"><p className="section-label">02 — Selected work</p><p className="section-kicker">Some projects served many users. Some removed one small daily friction.</p></div></Reveal>
          <div className="project-list">
            {projects.map((project, index) => (
              <Reveal key={project.name} delay={index * 0.06} className="project-item">
                <div><p className="project-number">0{index + 1}</p><h3>{project.name}</h3><p className="project-type">{project.type}</p></div>
                <div className="project-body"><p>{project.description}</p><p className="stack">{project.stack}</p></div><ArrowUpRight className="project-arrow" size={20} />
              </Reveal>
            ))}
          </div>
        </section>

        <section className="section-rule skills-section">
          <Reveal><div className="section-heading"><p className="section-label">03 — Toolkit</p><p className="section-kicker">Tools are useful. Judgment is the actual craft.</p></div></Reveal>
          <div className="skills-grid">{skills.map(([name, list], index) => <Reveal key={name} delay={index * 0.05} className="skill-row"><span>{name}</span><p>{list}</p></Reveal>)}</div>
        </section>

        <section className="personal section-rule">
          <Reveal><p className="section-label">04 — Beyond the code</p><h2>My long-term product roadmap is a <em>small farm.</em></h2><p>A few chickens, a vegetable patch, maybe a tiny warung for the neighbors. Until then, I build useful things, learn how systems work, and try to leave every project easier to understand than I found it.</p></Reveal>
        </section>

        <section className="contact section-rule" id="contact">
          <Reveal><p className="section-label">05 — Let’s talk</p><h2>Have a product that needs thoughtful <em>mobile engineering?</em></h2><p>If you’re building something useful and need an engineer who cares about both the product and the system behind it, I’d like to hear about it.</p><div className="contact-actions"><a className="button button-primary" href="mailto:abrahamlay94@gmail.com"><Mail size={16} /> Email Abraham</a><a className="button button-secondary" href="https://www.linkedin.com/in/abraham-lay-11a01583/" target="_blank" rel="noreferrer"><LinkIcon size={16} /> LinkedIn</a></div></Reveal>
        </section>

        <footer><p>Abraham Lay · bamboy.my.id</p><div><a href="https://github.com/abrahamlay" target="_blank" rel="noreferrer" aria-label="GitHub"><LinkIcon size={17} /></a><a href="mailto:abrahamlay94@gmail.com" aria-label="Email"><Mail size={17} /></a><span><MapPin size={14} /> Jakarta, Indonesia</span></div></footer>
      </div>
    </main>
  );
}

