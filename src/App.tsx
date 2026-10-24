
import { useEffect, useState } from "react";
import { Download, Mail, Moon, Sun } from "lucide-react";
import { siGithub } from "simple-icons";

import BrandIcon from "./components/BrandIcon";
import CapabilityGrid from "./components/CapabilityGrid";
import ContactPanel from "./components/ContactPanel";
import EngineeringDetails from "./components/EngineeringDetails";
import ExperienceTimeline from "./components/ExperienceTimeline";
import ProjectShowcase from "./components/ProjectShowcase";
import SectionHeading from "./components/SectionHeading";

const navigation = [
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#capabilities" },
  { label: "Engineering", href: "#engineering" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const buildProcess = [
  {
    number: "01",
    title: "Discover",
    description:
      "Understand the problem, the people using the product, and the outcome it needs to achieve.",
  },
  {
    number: "02",
    title: "Structure",
    description:
      "Organize interfaces, data, application logic, and the responsibilities between systems.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Develop maintainable components, APIs, validation, and useful feedback flows.",
  },
  {
    number: "04",
    title: "Test",
    description:
      "Check expected behavior, edge cases, permissions, and the ways real users might get stuck.",
  },
  {
    number: "05",
    title: "Refine",
    description:
      "Improve usability, simplify complicated flows, and make the implementation more reliable.",
  },
];

const technicalFocus = [
  {
    label: "Frontend",
    items: ["React", "TypeScript", "Vite", "Tailwind CSS", "React Router"],
  },
  {
    label: "Backend",
    items: ["Python", "FastAPI", "REST APIs", "Pydantic", "JWT"],
  },
  {
    label: "Data",
    items: ["PostgreSQL", "SQLAlchemy", "Alembic", "MySQL", "SQL"],
  },
  {
    label: "Tools",
    items: ["Git", "GitHub", "Linux", "Docker", "VS Code"],
  },
];

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [theme, setTheme] = useState<"light" | "dark">(() => {
    try {
      const savedTheme = localStorage.getItem("trackit-portfolio-theme");
      return savedTheme === "dark" ? "dark" : "light";
    } catch {
      return "light";
    }
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;

    try {
      localStorage.setItem("trackit-portfolio-theme", theme);
    } catch {
      // The selected theme still works while this page is open.
    }
  }, [theme]);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const toggleTheme = () => {
    setTheme((current) => (current === "light" ? "dark" : "light"));
  };

  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)] transition-colors duration-200">
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-[var(--color-bg)]/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
          <a
            href="#top"
            onClick={closeMobileMenu}
            aria-label="Isaack Gitau — back to top"
            className="rounded-sm text-xl font-black tracking-[-0.08em] transition-colors hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
          >
            IG<span className="text-[var(--color-accent)]">.</span>
          </a>

          <nav
            className="hidden items-center gap-7 md:flex"
            aria-label="Primary navigation"
          >
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-sm text-[10px] font-bold uppercase tracking-[0.15em] text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3 sm:gap-5">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
              title={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-[var(--color-surface-raised)] hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
            >
              {theme === "light" ? (
                <Moon size={18} aria-hidden="true" />
              ) : (
                <Sun size={18} aria-hidden="true" />
              )}
            </button>

            <a
              href="https://github.com/Isaack-Gitau"
              target="_blank"
              rel="noreferrer"
              className="hidden items-center gap-2 text-xs font-semibold transition-colors hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] sm:inline-flex"
            >
              <BrandIcon icon={siGithub} size={16} />
              GitHub
            </a>

            <a
              href="/Isaack-Gitau-CV.pdf"
              download
              className="hidden items-center gap-2 rounded-full bg-[var(--color-accent)] px-4 py-2.5 text-xs font-semibold text-[var(--color-accent-contrast)] transition-colors hover:opacity-85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] sm:inline-flex"
            >
              CV
              <Download size={14} aria-hidden="true" />
            </a>

            <button
              type="button"
              aria-label={
                mobileMenuOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMobileMenuOpen((open) => !open)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-[var(--color-surface-raised)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] md:hidden"
            >
              <span className="flex h-4 w-5 flex-col justify-between">
                <span
                  className={`h-px w-full bg-current transition-transform duration-200 ${
                    mobileMenuOpen ? "translate-y-[7px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`h-px w-full bg-current transition-opacity duration-200 ${
                    mobileMenuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`h-px w-full bg-current transition-transform duration-200 ${
                    mobileMenuOpen ? "-translate-y-[7px] -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </div>

        <div
          id="mobile-navigation"
          className={`bg-[var(--color-bg)] md:hidden ${
            mobileMenuOpen ? "block" : "hidden"
          }`}
        >
          <nav
            className="mx-auto flex max-w-[1440px] flex-col px-5 pb-5 sm:px-8"
            aria-label="Mobile navigation"
          >
            {navigation.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMobileMenu}
                className="flex items-center gap-4 py-4 text-sm font-semibold transition-colors hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
              >
                <span className="text-[10px] text-[var(--color-accent)]">
                  0{index + 1}
                </span>
                {item.label}
              </a>
            ))}

            <div className="mt-3 flex flex-wrap gap-5 pt-3">
              <a
                href="https://github.com/Isaack-Gitau"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-text-secondary)] hover:text-[var(--color-accent)]"
              >
                <BrandIcon icon={siGithub} size={16} />
                GitHub
              </a>

              <a
                href="/Isaack-Gitau-CV.pdf"
                download
                className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-text-secondary)] hover:text-[var(--color-accent)]"
              >
                Download CV
                <Download size={15} aria-hidden="true" />
              </a>
            </div>
          </nav>
        </div>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="mx-auto max-w-[1440px] px-5 pb-24 pt-12 sm:px-8 sm:pb-28 sm:pt-16 lg:px-12 lg:pb-36 lg:pt-24">
          <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
            <div>
              <p className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.15em] text-[var(--color-text-secondary)]">
                <span className="h-2 w-2 rounded-full bg-[var(--color-accent)]" />
                Information Technology · Kenya
              </p>

              <h1 className="mt-8 text-6xl font-bold leading-[0.91] tracking-[-0.075em] sm:text-7xl lg:text-[clamp(5rem,8vw,8.5rem)]">
                Isaack
                <br />
                Gitau<span className="text-[var(--color-accent)]">.</span>
              </h1>

              <h2 className="mt-8 max-w-2xl text-2xl font-semibold leading-snug tracking-[-0.04em] sm:text-3xl">
                Learning, building, and turning ideas into useful software.
              </h2>

              <p className="mt-6 max-w-xl text-base leading-8 text-[var(--color-text-secondary)] sm:text-lg">
                I am an IT student awaiting graduation, developing my skills in
                full-stack web development and building practical applications
                that connect user experiences, backend logic, and data.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a
                  href="#work"
                  className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#6B352A] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#4A231C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] dark:bg-[var(--color-accent)] dark:text-[var(--color-accent-contrast)]"
                >
                  Explore my work
                </a>

                <a
                  href="https://github.com/Isaack-Gitau"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-12 items-center gap-2 rounded-full px-4 py-3 text-sm font-semibold transition-colors hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
                >
                  <BrandIcon icon={siGithub} size={17} />
                  Visit GitHub
                </a>
              </div>

              <div className="mt-12 flex flex-wrap gap-3">
                {[
                  "Frontend development",
                  "Backend APIs",
                  "Relational databases",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface-raised)] px-4 py-2 text-xs font-medium text-[var(--color-text-secondary)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Personal portrait */}
            <div className="relative mx-auto w-full max-w-[420px] lg:ml-auto">
              <div
                aria-hidden="true"
                className="absolute -right-3 -top-3 h-full w-full rounded-[1.75rem] bg-[var(--color-accent)] sm:-right-4 sm:-top-4"
              />
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-[var(--color-surface-raised)]">
                <img
                  src="/isaackGitau.png"
                  alt="Portrait of Isaack Gitau"
                  className="h-full w-full object-cover object-center"
                  loading="eager"
                  fetchPriority="high"
                />
              </div>
            </div>
          </div>

          <div className="mt-20 grid gap-8 sm:mt-24 sm:grid-cols-3 sm:gap-10">
            <div>
              <p className="text-xs text-[var(--color-text-secondary)]">
                Featured project
              </p>
              <p className="mt-2 text-lg font-semibold tracking-[-0.03em]">
                TRACKIT
              </p>
              <p className="mt-1 text-sm text-[var(--color-text-secondary)]">
                Lost and Found System
              </p>
            </div>

            <div>
              <p className="text-xs text-[var(--color-text-secondary)]">
                Development focus
              </p>
              <p className="mt-2 text-lg font-semibold tracking-[-0.03em]">
                Full-stack web development
              </p>
              <p className="mt-1 text-sm text-[var(--color-text-secondary)]">
                Frontend, APIs, and data
              </p>
            </div>

            <div>
              <p className="text-xs text-[var(--color-text-secondary)]">
                Background
              </p>
              <p className="mt-2 text-lg font-semibold tracking-[-0.03em]">
                Information Technology
              </p>
              <p className="mt-1 text-sm text-[var(--color-text-secondary)]">
                Software and technical support
              </p>
            </div>
          </div>
        </section>

        {/* Selected work */}
        <section
          id="work"
          className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
        >
          <SectionHeading
            number="01"
            eyebrow="Selected work"
            title="One project, built from the problem outward."
            description="TrackIt is my main project showcase, demonstrating how I approach a software system, from user workflows and interfaces to APIs, data, permissions, and testing."
          />

          <ProjectShowcase />
        </section>

        {/* Capabilities */}
        <section id="capabilities" className="bg-[var(--color-surface-raised)]">
          <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
            <SectionHeading
              number="02"
              eyebrow="Capabilities"
              title="Working across the product, not just the screen."
              description="My learning and project work span interface development, backend systems, structured data, and practical technical support."
            />

            <CapabilityGrid />
          </div>
        </section>

        {/* Process */}
        <section className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <SectionHeading
            number="03"
            eyebrow="How I build"
            title="A practical process, from idea to working software."
            description="I approach projects by understanding the problem, structuring the solution, and improving it through testing and refinement."
          />

          <div className="mt-16 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-5 lg:gap-x-6">
            {buildProcess.map((step) => (
              <article key={step.number} className="min-w-0">
                <div>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-bg)] text-[10px] font-bold tracking-wide text-[var(--color-accent)]">
                    {step.number}
                  </span>
                </div>

                <h3 className="mt-6 text-2xl font-bold tracking-[-0.045em]">
                  {step.title}
                  <span className="text-[var(--color-accent)]">.</span>
                </h3>

                <p className="mt-3 text-sm leading-7 text-[var(--color-text-secondary)]">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* Technical focus */}
        <section className="bg-[var(--color-surface-raised)]">
          <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
            <SectionHeading
              number="04"
              eyebrow="Technical focus"
              title="Tools I use to turn ideas into systems."
              description="My current learning and project stack includes modern JavaScript and Python development, relational databases, Linux, and software development tools."
            />

            <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {technicalFocus.map((group) => (
                <article key={group.label} className="min-w-0">
                  <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-accent)]">
                    {group.label}
                  </h3>

                  <ul className="mt-5 space-y-3">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="text-sm font-medium text-[var(--color-text-secondary)]"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Engineering */}
        <section
          id="engineering"
          className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
        >
          <SectionHeading
            number="05"
            eyebrow="Engineering"
            title="The details behind the interface."
            description="I pay attention to what happens underneath the interface too: application structure, permissions, data integrity, moderation workflows, matching logic, and tests."
          />

          <EngineeringDetails />
        </section>

        {/* About and experience */}
        <section id="about" className="bg-[var(--color-surface-raised)]">
          <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
            <SectionHeading
              number="06"
              eyebrow="Experience"
              title="Software development grounded in IT."
              description="My background combines software development with hands-on IT experience, connecting the applications people use with the technology that supports them."
            />

            <ExperienceTimeline />

            <div className="mt-20 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-accent)]">
                  A little more about me
                </p>

                <h3 className="mt-5 max-w-lg text-3xl font-bold leading-tight tracking-[-0.055em] sm:text-4xl">
                  Building my way from IT into deeper software engineering.
                </h3>
              </div>

              <div className="max-w-2xl space-y-5 text-sm leading-7 text-[var(--color-text-secondary)] sm:text-base">
                <p>
                  I am an Information Technology graduate awaiting graduation
                  and a developer interested in creating software that solves
                  practical problems rather than existing only as a technical
                  exercise.
                </p>

                <p>
                  My development work has led me toward React, TypeScript,
                  Python, FastAPI, PostgreSQL, and modern application
                  architecture. My IT background also keeps me focused on
                  reliability, troubleshooting, and the people using the
                  technology.
                </p>

                <p>
                  TrackIt represents that direction: a project where interface
                  design, backend engineering, data modeling, authentication,
                  moderation, and testing need to work together.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
        >
          <SectionHeading
            number="07"
            eyebrow="Contact"
            title="Let's build something useful."
            description="For software projects, development opportunities, technical work, or a conversation about what I am building next."
          />

          <ContactPanel />
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[var(--color-surface-raised)]">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-6 px-5 py-8 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
          <p className="text-xs text-[var(--color-text-secondary)]">
            © 2026 Isaack Gitau
          </p>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
            <a
              href="https://github.com/Isaack-Gitau"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-accent)]"
            >
              <BrandIcon icon={siGithub} size={15} />
              GitHub
            </a>

            <a
              href="mailto:isaackgofficial@gmail.com"
              className="inline-flex items-center gap-2 text-xs font-semibold text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-accent)]"
            >
              <Mail size={15} aria-hidden="true" />
              Email
            </a>

            <a
              href="/Isaack-Gitau-CV.pdf"
              download
              className="inline-flex items-center gap-2 text-xs font-semibold text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-accent)]"
            >
              <Download size={15} aria-hidden="true" />
              Download CV
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;