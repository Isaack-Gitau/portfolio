import { useState } from 'react'
import CapabilityGrid from './components/CapabilityGrid'
import ContactPanel from './components/ContactPanel'
import EngineeringDetails from './components/EngineeringDetails'
import ExperienceTimeline from './components/ExperienceTimeline'
import ProjectShowcase from './components/ProjectShowcase'
import SectionHeading from './components/SectionHeading'

const buildProcess = [
  {
    number: '01',
    title: 'Discover',
    description:
      'Understand the problem, users, constraints, and the outcome the product actually needs to achieve.',
  },
  {
    number: '02',
    title: 'Structure',
    description:
      'Break the problem into interfaces, data, application logic, and clear responsibilities between systems.',
  },
  {
    number: '03',
    title: 'Build',
    description:
      'Implement the product incrementally with maintainable components, APIs, validation, and useful feedback loops.',
  },
  {
    number: '04',
    title: 'Test',
    description:
      'Check expected behavior, edge cases, permissions, failures, and the points where real users could get stuck.',
  },
  {
    number: '05',
    title: 'Refine',
    description:
      'Improve the experience, simplify complicated flows, fix weak points, and make the implementation more reliable.',
  },
]

const technicalFocus = [
  {
    label: 'Frontend',
    items: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'React Router'],
  },
  {
    label: 'Backend',
    items: ['Python', 'FastAPI', 'REST APIs', 'Pydantic', 'JWT'],
  },
  {
    label: 'Data',
    items: ['PostgreSQL', 'SQLAlchemy', 'Alembic', 'MySQL', 'SQL'],
  },
  {
    label: 'Tools',
    items: ['Git', 'GitHub', 'Linux', 'Docker', 'VS Code'],
  },
]

const navigation = [
  { label: 'Work', href: '#work' },
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Engineering', href: '#engineering' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-[#f4f1eb] text-[#151515]">
      <header className="sticky top-0 z-50 border-b border-[#151515]/10 bg-[#f4f1eb]/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
          <a
            href="#top"
            onClick={closeMobileMenu}
            className="text-sm font-black tracking-[-0.06em] transition-colors hover:text-[#1683f7] focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1683f7] focus-visible:ring-offset-2"
            aria-label="Back to top"
          >
            IG<span className="text-[#1683f7]">.</span>
          </a>

          <nav
            className="hidden items-center gap-7 md:flex"
            aria-label="Primary navigation"
          >
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-sm text-[10px] font-bold uppercase tracking-[0.16em] text-[#151515]/65 transition-colors hover:text-[#1683f7] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1683f7] focus-visible:ring-offset-4"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Isaack-Gitau"
              target="_blank"
              rel="noreferrer"
              className="hidden rounded-sm text-[10px] font-bold uppercase tracking-[0.16em] transition-colors hover:text-[#1683f7] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1683f7] focus-visible:ring-offset-4 sm:inline"
            >
              GitHub ↗
            </a>

            <a
              href="/Isaack-Gitau-CV.docx"
              download
              className="hidden rounded-sm text-[10px] font-bold uppercase tracking-[0.16em] transition-colors hover:text-[#1683f7] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1683f7] focus-visible:ring-offset-4 sm:inline"
            >
              CV ↓
            </a>

            <button
              type="button"
              aria-label={
                mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'
              }
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMobileMenuOpen((open) => !open)}
              className="group inline-flex h-10 w-10 items-center justify-center border border-[#151515]/15 bg-[#f4f1eb] transition-colors hover:border-[#1683f7] hover:text-[#1683f7] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1683f7] focus-visible:ring-offset-2 md:hidden"
            >
              <span className="sr-only">
                {mobileMenuOpen
                  ? 'Close navigation menu'
                  : 'Open navigation menu'}
              </span>

              <span className="relative flex h-4 w-5 flex-col justify-between">
                <span
                  className={`block h-px w-full bg-current transition-transform duration-200 ${
                    mobileMenuOpen ? 'translate-y-[7px] rotate-45' : ''
                  }`}
                />

                <span
                  className={`block h-px w-full bg-current transition-opacity duration-200 ${
                    mobileMenuOpen ? 'opacity-0' : ''
                  }`}
                />

                <span
                  className={`block h-px w-full bg-current transition-transform duration-200 ${
                    mobileMenuOpen ? '-translate-y-[7px] -rotate-45' : ''
                  }`}
                />
              </span>
            </button>
          </div>
        </div>

        <div
          id="mobile-navigation"
          className={`border-t border-[#151515]/10 md:hidden ${
            mobileMenuOpen ? 'block' : 'hidden'
          }`}
        >
          <nav
            className="mx-auto max-w-[1440px] px-5 py-4 sm:px-8"
            aria-label="Mobile navigation"
          >
            <div className="divide-y divide-[#151515]/10 border-y border-[#151515]/10">
              {navigation.map((item, index) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className="flex items-center justify-between py-5 text-xs font-bold uppercase tracking-[0.16em] transition-colors hover:text-[#1683f7] focus-visible:bg-[#e9e5dd] focus-visible:outline-none"
                >
                  <span className="flex items-center gap-4">
                    <span className="text-[9px] font-bold text-[#1683f7]">
                      0{index + 1}
                    </span>

                    {item.label}
                  </span>

                  <span aria-hidden="true">↗</span>
                </a>
              ))}
            </div>

            <div className="flex items-center justify-between pt-5">
              <a
                href="https://github.com/Isaack-Gitau"
                target="_blank"
                rel="noreferrer"
                className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#151515]/60 transition-colors hover:text-[#1683f7] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1683f7] focus-visible:ring-offset-4"
              >
                GitHub ↗
              </a>

              <a
                href="/Isaack-Gitau-CV.docx"
                download
                className="text-[10px] font-bold uppercase tracking-[0.16em] transition-colors hover:text-[#1683f7] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1683f7] focus-visible:ring-offset-4"
              >
                Download CV ↓
              </a>
            </div>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="mx-auto max-w-[1440px] px-5 pb-24 pt-12 sm:px-8 sm:pt-16 lg:px-12 lg:pb-32 lg:pt-20">
          <div className="grid gap-12 lg:grid-cols-[0.16fr_minmax(0,1fr)] lg:gap-8">
            <aside className="hidden lg:flex lg:flex-col lg:justify-between">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#151515]/45">
                  Portfolio
                </p>

                <p className="mt-2 text-xs font-semibold">2026</p>
              </div>

              <div className="mt-32">
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#151515]/45">
                  Based in
                </p>

                <p className="mt-2 text-sm font-semibold">Kenya</p>
              </div>

              <div className="mt-auto pt-32">
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#151515]/45">
                  Available for
                </p>

                <p className="mt-2 max-w-[110px] text-xs font-semibold leading-5">
                  Development and technical opportunities
                </p>
              </div>
            </aside>

            <div>
              <div className="grid gap-10 xl:grid-cols-[minmax(0,1fr)_360px] xl:items-end xl:gap-16">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-[#1683f7]" />

                    <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#151515]/50">
                      Full Stack Web Developer
                    </span>
                  </div>

                  <h1 className="mt-7 max-w-5xl text-[clamp(4rem,10vw,9.5rem)] font-black leading-[0.78] tracking-[-0.085em]">
                    ISAACK
                    <br />
                    <span className="text-[#1683f7]">GITAU.</span>
                  </h1>

                  <div className="mt-10 max-w-3xl">
                    <p className="text-xl font-bold leading-[1.15] tracking-[-0.035em] sm:text-2xl lg:text-3xl">
                      I build practical software for real problems.
                    </p>

                    <p className="mt-5 max-w-2xl text-base leading-8 text-[#151515]/75 sm:text-lg">
                      My work combines frontend development, backend
                      engineering, relational data, authentication, testing,
                      and hands-on IT experience.
                    </p>
                  </div>

                  <div className="mt-9 flex flex-wrap items-center gap-4 sm:gap-6">
                    <a
                      href="#work"
                      className="group inline-flex min-h-12 items-center justify-center gap-4 border border-[#151515] bg-[#151515] px-6 py-3 text-[10px] font-bold uppercase tracking-[0.16em] text-white shadow-[3px_3px_0_0_#1683f7] transition-all duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-[#1683f7] hover:shadow-[5px_5px_0_0_#151515] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1683f7] focus-visible:ring-offset-4"
                    >
                      <span>View selected work</span>

                      <span
                        aria-hidden="true"
                        className="text-sm transition-transform duration-200 group-hover:translate-x-1"
                      >
                        →
                      </span>
                    </a>

                    <a
                      href="/Isaack-Gitau-CV.docx"
                      download
                      className="group inline-flex min-h-12 items-center gap-3 px-1 py-3 text-[10px] font-bold uppercase tracking-[0.16em] transition-colors hover:text-[#1683f7] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1683f7] focus-visible:ring-offset-4"
                    >
                      Download CV

                      <span
                        aria-hidden="true"
                        className="transition-transform duration-200 group-hover:translate-y-0.5"
                      >
                        ↓
                      </span>
                    </a>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute -right-3 -top-3 hidden h-20 w-20 border-r border-t border-[#1683f7] sm:block" />

                  <div className="border border-[#151515]/10 bg-[#e9e5dd] p-4 sm:p-5">
                    <div className="relative aspect-[4/5] overflow-hidden border border-[#151515]/10 bg-[#ded9cf]">
                      <img
                        src="/profile-placeholder.png"
                        alt="Temporary portrait placeholder for Isaack Gitau"
                        className="h-full w-full object-cover"
                      />

                      <div className="absolute inset-x-0 bottom-0 bg-[#151515]/90 p-5 text-[#f4f1eb] sm:p-7">
                        <div className="flex items-center justify-between border-b border-white/15 pb-4">
                          <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-white/60">
                            Developer profile
                          </span>

                          <span className="text-[9px] font-bold text-[#1683f7]">
                            01
                          </span>
                        </div>

                        <p className="mt-5 max-w-[260px] text-2xl font-bold leading-[0.95] tracking-[-0.05em] sm:text-3xl">
                          Developer,
                          <br />
                          builder,
                          <br />
                          problem solver.
                        </p>

                        <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
                          <span className="text-[8px] font-bold uppercase tracking-[0.15em] text-white/45">
                            React / Python / PostgreSQL
                          </span>

                          <span className="h-1.5 w-1.5 rounded-full bg-[#1683f7]" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center justify-between border-t border-[#151515]/10 pt-4">
                    <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#151515]/40">
                      Currently building
                    </span>

                    <span className="text-xs font-bold">
                      TrackIt
                      <span className="ml-2 text-[#1683f7]">↗</span>
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-16 grid border-y border-[#151515]/10 sm:grid-cols-3">
                <div className="border-b border-[#151515]/10 px-5 py-5 sm:border-b-0 sm:border-r">
                  <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#151515]/40">
                    Focus
                  </p>

                  <p className="mt-2 text-xs font-bold">
                    Full-stack development
                  </p>
                </div>

                <div className="border-b border-[#151515]/10 px-5 py-5 sm:border-b-0 sm:border-r">
                  <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#151515]/40">
                    Core stack
                  </p>

                  <p className="mt-2 text-xs font-bold">
                    React + FastAPI + PostgreSQL
                  </p>
                </div>

                <div className="px-5 py-5">
                  <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#151515]/40">
                    Direction
                  </p>

                  <p className="mt-2 text-xs font-bold">
                    Software + IT systems
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="capabilities"
          className="border-y border-[#151515]/10"
        >
          <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
            <SectionHeading
              number="01"
              eyebrow="Capabilities"
              title="I work across the product, not just the screen."
              description="My work sits between interface development, backend systems, structured data, and practical technical support."
            />

            <CapabilityGrid />
          </div>
        </section>

        <section
          id="work"
          className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
        >
          <SectionHeading
            number="02"
            eyebrow="Selected work"
            title="One project, built from the problem outward."
            description="TrackIt is the main project I use to demonstrate how I approach a complete software system, from user workflows and interfaces to APIs, data, permissions, and testing."
          />

          <ProjectShowcase />
        </section>

        <section className="border-y border-[#151515]/10 bg-[#e9e5dd]">
          <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
            <SectionHeading
              number="03"
              eyebrow="How I build"
              title="A practical process, from idea to working software."
            />

            <div className="mt-14 grid border-l border-t border-[#151515]/10 sm:grid-cols-2 lg:grid-cols-5">
              {buildProcess.map((step) => (
                <article
                  key={step.number}
                  className="border-b border-r border-[#151515]/10 bg-[#e9e5dd] p-6 sm:p-8"
                >
                  <span className="text-xs font-bold tracking-[0.18em] text-[#1683f7]">
                    {step.number}
                  </span>

                  <h3 className="mt-12 text-xl font-bold tracking-[-0.035em]">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-xs leading-6 text-[#151515]/70">
                    {step.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <SectionHeading
            number="04"
            eyebrow="Technical focus"
            title="Tools I use to turn ideas into systems."
            description="A practical stack built around modern JavaScript and Python development, relational databases, Linux, and the tooling needed to maintain the work."
          />

          <div className="mt-14 grid border-l border-t border-[#151515]/10 sm:grid-cols-2 lg:grid-cols-4">
            {technicalFocus.map((group) => (
              <article
                key={group.label}
                className="border-b border-r border-[#151515]/10 p-6 sm:p-8 lg:p-9"
              >
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#1683f7]">
                  {group.label}
                </p>

                <ul className="mt-8 space-y-3">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="border-b border-[#151515]/10 pb-3 text-sm font-semibold"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section
          id="engineering"
          className="border-y border-[#151515]/10 bg-[#151515] text-[#f4f1eb]"
        >
          <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
            <div className="grid gap-6 border-t border-white/15 pt-5 lg:grid-cols-[0.16fr_minmax(0,1fr)] lg:gap-8">
              <div className="flex items-start gap-3">
                <span className="text-xs font-bold tracking-[0.18em] text-[#1683f7]">
                  05
                </span>

                <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/45">
                  Engineering
                </span>
              </div>

              <div className="max-w-4xl">
                <h2 className="text-4xl font-bold leading-[0.95] tracking-[-0.055em] sm:text-5xl lg:text-6xl">
                  The details behind the interface
                  <span className="text-[#1683f7]">.</span>
                </h2>

                <p className="mt-5 max-w-2xl text-sm leading-7 text-white/65 sm:text-base">
                  I care about what happens underneath the interface too:
                  application structure, permissions, data integrity,
                  moderation workflows, matching logic, and tests.
                </p>
              </div>
            </div>

            <EngineeringDetails />
          </div>
        </section>

        <section
          id="about"
          className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
        >
          <SectionHeading
            number="06"
            eyebrow="Experience"
            title="Software development grounded in real technical support."
            description="My background combines software development with hands-on IT work, giving me experience with both the applications people use and the systems supporting them."
          />

          <ExperienceTimeline />

          <div className="mt-20 grid gap-12 border-t border-[#151515]/10 pt-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#1683f7]">
                About me
              </p>

              <h3 className="mt-5 text-3xl font-bold leading-none tracking-[-0.05em] sm:text-4xl">
                Building my way from IT into deeper software engineering.
              </h3>
            </div>

            <div className="max-w-2xl space-y-6 text-sm leading-7 text-[#151515]/75 sm:text-base">
              <p>
                I am an Information Technology specialist and full-stack
                developer interested in building software that solves practical
                problems rather than existing only as a technical exercise.
              </p>

              <p>
                My development work has led me toward React, TypeScript,
                Python, FastAPI, PostgreSQL, and modern application
                architecture, while my IT experience keeps me focused on
                reliability, troubleshooting, and the people using the
                technology.
              </p>

              <p>
                TrackIt represents that direction: a project where interface
                design, backend engineering, data modeling, authentication,
                moderation, and testing all have to work together.
              </p>
            </div>
          </div>
        </section>

        <section id="contact" className="border-t border-[#151515]/10">
          <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
            <SectionHeading
              number="07"
              eyebrow="Contact"
              title="Let's build something useful."
              description="For software projects, development opportunities, technical work, or a conversation about what I am building next."
            />

            <ContactPanel />
          </div>
        </section>
      </main>

      <footer className="border-t border-[#151515]/10">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-5 px-5 py-8 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
          <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#151515]/40">
            © 2026 Isaack Gitau
          </p>

          <div className="flex flex-wrap gap-5">
            <a
              href="https://github.com/Isaack-Gitau"
              target="_blank"
              rel="noreferrer"
              className="rounded-sm text-[10px] font-bold uppercase tracking-[0.14em] text-[#151515]/50 transition-colors hover:text-[#1683f7] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1683f7] focus-visible:ring-offset-4"
            >
              GitHub ↗
            </a>

            <a
              href="mailto:isaackgofficial@gmail.com"
              className="rounded-sm text-[10px] font-bold uppercase tracking-[0.14em] text-[#151515]/50 transition-colors hover:text-[#1683f7] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1683f7] focus-visible:ring-offset-4"
            >
              Email ↗
            </a>

            <a
              href="/Isaack-Gitau-CV.docx"
              download
              className="rounded-sm text-[10px] font-bold uppercase tracking-[0.14em] text-[#151515]/50 transition-colors hover:text-[#1683f7] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1683f7] focus-visible:ring-offset-4"
            >
              CV ↓
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
