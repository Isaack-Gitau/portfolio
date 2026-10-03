import { useState } from 'react'
import ProjectShowcase from './components/ProjectShowcase'

const navigation = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Stack', href: '#stack' },
  { label: 'Contact', href: '#contact' },
]

const stackGroups = [
  {
    number: '01',
    title: 'Frontend',
    description:
      'Interfaces built with component-driven architecture, responsive layouts, and accessible interaction.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'HTML', 'CSS'],
  },
  {
    number: '02',
    title: 'Backend',
    description:
      'API-driven systems with authentication, authorization, validation, business logic, and structured services.',
    technologies: ['Python', 'FastAPI', 'REST APIs', 'JWT', 'Pydantic'],
  },
  {
    number: '03',
    title: 'Data',
    description:
      'Relational data models designed around consistency, relationships, migrations, and reliable persistence.',
    technologies: ['PostgreSQL', 'SQLAlchemy', 'Alembic'],
  },
  {
    number: '04',
    title: 'Engineering',
    description:
      'The tools and practices I use to build, test, maintain, and evolve software.',
    technologies: ['Git', 'GitHub', 'Pytest', 'Testing', 'API Design'],
  },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#f4f1eb] text-[#151515]">
      <header className="sticky top-0 z-50 border-b border-[#151515]/10 bg-[#f4f1eb]/95 backdrop-blur-sm">
        <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
          <a
            href="#top"
            className="group flex items-center gap-3"
            aria-label="Isaack Gitau home"
          >
            <span className="flex h-9 w-9 items-center justify-center bg-[#151515] text-sm font-bold text-[#f4f1eb]">
              IG
            </span>

            <span className="hidden text-sm font-semibold tracking-[-0.01em] sm:block">
              Isaack Gitau
            </span>
          </a>

          <nav className="hidden md:block" aria-label="Main navigation">
            <ul className="flex items-center gap-9">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-xs font-semibold uppercase tracking-[0.16em] text-[#151515]/60 transition-colors hover:text-[#151515] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1683f7]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <a
            href="#contact"
            className="hidden items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] md:flex"
          >
            Start a conversation
            <span aria-hidden="true" className="text-base">
              ↗
            </span>
          </a>

          <button
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-10 w-10 items-center justify-center border border-[#151515]/15 md:hidden"
          >
            <span className="sr-only">
              {menuOpen ? 'Close menu' : 'Open menu'}
            </span>

            <span className="flex w-4 flex-col gap-1.5" aria-hidden="true">
              <span
                className={`block h-px w-full bg-[#151515] transition-transform ${
                  menuOpen ? 'translate-y-[4px] rotate-45' : ''
                }`}
              />
              <span
                className={`block h-px w-full bg-[#151515] transition-opacity ${
                  menuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block h-px w-full bg-[#151515] transition-transform ${
                  menuOpen ? '-translate-y-[4px] -rotate-45' : ''
                }`}
              />
            </span>
          </button>
        </div>

        <div
          id="mobile-navigation"
          className={`border-t border-[#151515]/10 md:hidden ${
            menuOpen ? 'block' : 'hidden'
          }`}
        >
          <nav
            className="mx-auto max-w-[1440px] px-5 py-5 sm:px-8"
            aria-label="Mobile navigation"
          >
            <ul className="divide-y divide-[#151515]/10">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center justify-between py-4 text-sm font-semibold uppercase tracking-[0.14em]"
                  >
                    {item.label}
                    <span aria-hidden="true">↗</span>
                  </a>
                </li>
              ))}

              <li>
                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-between py-4 text-sm font-semibold uppercase tracking-[0.14em]"
                >
                  Start a conversation
                  <span aria-hidden="true">↗</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="border-b border-[#151515]/10">
          <div className="mx-auto grid min-h-[calc(100vh-80px)] max-w-[1440px] grid-cols-1 lg:grid-cols-[minmax(180px,0.28fr)_minmax(0,1fr)]">
            <aside className="hidden border-r border-[#151515]/10 lg:flex lg:flex-col lg:justify-between lg:p-12">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#151515]/50">
                  Portfolio / 2026
                </p>
              </div>

              <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#151515]/50">
                <span className="h-px w-8 bg-[#151515]/30" />
                Scroll to explore
              </div>
            </aside>

            <div className="flex flex-col justify-center px-5 py-24 sm:px-8 lg:px-16 lg:py-32">
              <div className="max-w-5xl">
                <p className="mb-7 text-xs font-semibold uppercase tracking-[0.2em] text-[#1683f7]">
                  Full Stack Web Developer
                </p>

                <h1 className="max-w-5xl text-[clamp(3.5rem,9vw,8.75rem)] font-bold leading-[0.88] tracking-[-0.065em]">
                  Isaack
                  <br />
                  Gitau<span className="text-[#1683f7]">.</span>
                </h1>

                <div className="mt-12 grid gap-8 border-t border-[#151515]/15 pt-7 sm:grid-cols-[1fr_auto] sm:items-end">
                  <p className="max-w-xl text-lg leading-8 text-[#151515]/65 sm:text-xl">
                    I build practical digital products and full-stack web
                    applications with a focus on useful experiences, solid
                    engineering, and continuous improvement.
                  </p>

                  <a
                    href="#work"
                    className="group inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em]"
                  >
                    Explore my work
                    <span
                      aria-hidden="true"
                      className="transition-transform group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="work" className="border-b border-[#151515]/10">
          <div className="mx-auto max-w-[1440px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1683f7]">
              01 / Selected Work
            </p>

            <div className="mt-5 flex flex-col justify-between gap-6 border-b border-[#151515]/15 pb-8 sm:flex-row sm:items-end">
              <h2 className="text-4xl font-bold tracking-[-0.04em] sm:text-6xl">
                Projects<span className="text-[#1683f7]">.</span>
              </h2>

              <p className="max-w-sm text-sm leading-6 text-[#151515]/55">
                Real software, real problems, and the engineering decisions
                behind the work.
              </p>
            </div>

            <ProjectShowcase />
          </div>
        </section>

        <section id="stack" className="border-b border-[#151515]/10">
          <div className="mx-auto max-w-[1440px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
            <div className="grid gap-12 lg:grid-cols-[0.38fr_1fr] lg:gap-20">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1683f7]">
                  02 / Stack
                </p>

                <h2 className="mt-5 text-4xl font-bold tracking-[-0.05em] sm:text-5xl">
                  How I build.
                </h2>

                <p className="mt-6 max-w-sm text-sm leading-7 text-[#151515]/55">
                  A practical stack built around modern interfaces, reliable
                  APIs, structured data, and maintainable engineering.
                </p>
              </div>

              <div className="border-t border-[#151515]/15">
                {stackGroups.map((group) => (
                  <div
                    key={group.number}
                    className="grid gap-6 border-b border-[#151515]/10 py-8 sm:grid-cols-[80px_0.8fr_1fr] sm:gap-8"
                  >
                    <span className="text-xs font-bold tracking-[0.16em] text-[#1683f7]">
                      {group.number}
                    </span>

                    <div>
                      <h3 className="text-2xl font-bold tracking-[-0.035em]">
                        {group.title}
                      </h3>
                    </div>

                    <div>
                      <p className="text-sm leading-6 text-[#151515]/55">
                        {group.description}
                      </p>

                      <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
                        {group.technologies.map((technology) => (
                          <span
                            key={technology}
                            className="text-xs font-semibold uppercase tracking-[0.08em]"
                          >
                            {technology}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="border-b border-[#151515]/10">
          <div className="mx-auto max-w-[1440px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
            <div className="grid gap-16 lg:grid-cols-[0.38fr_1fr] lg:gap-20">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1683f7]">
                  03 / About
                </p>

                <p className="mt-5 text-sm leading-7 text-[#151515]/55">
                  The work behind the work — how I approach software, what I
                  have been building, and where I am heading.
                </p>
              </div>

              <div>
                <h2 className="max-w-4xl text-4xl font-bold leading-[1.02] tracking-[-0.05em] sm:text-6xl">
                  I&apos;m interested in software that solves an actual
                  problem, not software that simply looks impressive.
                </h2>

                <div className="mt-12 max-w-3xl border-t border-[#151515]/15">
                  <div className="grid gap-5 border-b border-[#151515]/10 py-8 sm:grid-cols-[110px_1fr] sm:gap-10">
                    <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#1683f7]">
                      Foundation
                    </span>

                    <p className="text-base leading-7 text-[#151515]/65">
                      My development work started with the fundamentals of
                      web development — building interfaces, working with
                      databases, and learning how the different parts of a web
                      application fit together.
                    </p>
                  </div>

                  <div className="grid gap-5 border-b border-[#151515]/10 py-8 sm:grid-cols-[110px_1fr] sm:gap-10">
                    <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#1683f7]">
                      Full stack
                    </span>

                    <p className="text-base leading-7 text-[#151515]/65">
                      That foundation grew into full-stack development, where
                      frontend experiences, backend APIs, authentication,
                      databases, and application logic have to work together
                      as one system.
                    </p>
                  </div>

                  <div className="grid gap-5 border-b border-[#151515]/10 py-8 sm:grid-cols-[110px_1fr] sm:gap-10">
                    <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#1683f7]">
                      TrackIt
                    </span>

                    <p className="text-base leading-7 text-[#151515]/65">
                      TrackIt represents the direction I am taking that work:
                      a larger full-stack system where product experience,
                      backend architecture, moderation, authentication, data,
                      and reliability all matter together.
                    </p>
                  </div>

                  <div className="grid gap-5 py-8 sm:grid-cols-[110px_1fr] sm:gap-10">
                    <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#1683f7]">
                      Next
                    </span>

                    <p className="text-base leading-7 text-[#151515]/65">
                      I am continuing to deepen the engineering side of
                      development while building practical projects and
                      improving how I design, test, and maintain software.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact">
          <div className="mx-auto max-w-[1440px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
            <div className="grid gap-16 lg:grid-cols-[0.38fr_1fr] lg:gap-20">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1683f7]">
                  04 / Contact
                </p>

                <p className="mt-5 max-w-xs text-sm leading-7 text-[#151515]/55">
                  If you have a project, collaboration, or idea worth
                  discussing, get in touch.
                </p>
              </div>

              <div>
                <h2 className="max-w-5xl text-[clamp(3.25rem,8vw,7.5rem)] font-bold leading-[0.88] tracking-[-0.065em]">
                  Have something
                  <br />
                  worth building<span className="text-[#1683f7]">?</span>
                </h2>

                <a
                  href="mailto:isaackgofficial@gmail.com"
                  className="group mt-12 inline-flex items-center gap-4 border-b-2 border-[#151515] pb-3 text-sm font-bold uppercase tracking-[0.16em] transition-colors hover:border-[#1683f7] hover:text-[#1683f7] sm:text-base"
                >
                  isaackgofficial@gmail.com
                  <span
                    aria-hidden="true"
                    className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  >
                    ↗
                  </span>
                </a>

                <div className="mt-16 grid border-t border-[#151515]/15 sm:grid-cols-3">
                  <a
                    href="https://github.com/isaackgofficial-byte"
                    target="_blank"
                    rel="noreferrer"
                    className="group border-b border-[#151515]/10 py-6 text-xs font-bold uppercase tracking-[0.15em] transition-colors hover:text-[#1683f7] sm:border-b-0 sm:border-r sm:pr-6"
                  >
                    GitHub
                    <span className="ml-2 transition-transform group-hover:translate-x-1">
                      ↗
                    </span>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/isaack-gitau-21a0443a1"
                    target="_blank"
                    rel="noreferrer"
                    className="group border-b border-[#151515]/10 py-6 text-xs font-bold uppercase tracking-[0.15em] transition-colors hover:text-[#1683f7] sm:border-b-0 sm:px-6 sm:border-r"
                  >
                    LinkedIn
                    <span className="ml-2 transition-transform group-hover:translate-x-1">
                      ↗
                    </span>
                  </a>

                  <a
                    href="https://wa.me/254743570561"
                    target="_blank"
                    rel="noreferrer"
                    className="group py-6 text-xs font-bold uppercase tracking-[0.15em] transition-colors hover:text-[#1683f7] sm:pl-6"
                  >
                    WhatsApp
                    <span className="ml-2 transition-transform group-hover:translate-x-1">
                      ↗
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#151515]/10">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-4 px-5 py-7 text-xs font-semibold uppercase tracking-[0.14em] text-[#151515]/45 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
          <p>© {new Date().getFullYear()} Isaack Gitau</p>
          <p>Built with React + TypeScript + Tailwind CSS</p>
        </div>
      </footer>
    </div>
  )
}

export default App
