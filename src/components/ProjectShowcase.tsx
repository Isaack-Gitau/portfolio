
import { ExternalLink } from 'lucide-react'
import { projects } from '../data/projects'

function ProjectShowcase() {
  return (
    <div className="mt-16 space-y-24 sm:mt-20 sm:space-y-32">
      {projects.map((project) => {
        const frontendLink = project.links.find(
          (link) => link.label.toLowerCase() === 'frontend',
        )

        return (
          <article key={project.number}>
            {/* Main project showcase */}
            <div className="relative mr-3 mb-3">
              <div
                aria-hidden="true"
                className="absolute inset-0 translate-x-3 translate-y-3 rounded-3xl bg-[var(--color-accent)]"
              />

              <div className="relative overflow-hidden rounded-3xl bg-[var(--color-surface-raised)]">
                <div className="grid lg:grid-cols-[1.35fr_0.65fr]">
                  {/* Project narrative */}
                  <div className="flex flex-col justify-between p-6 sm:p-10 lg:p-12">
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="text-xs font-black tracking-[-0.03em] text-[var(--color-text)]">
                          TRACKIT
                        </span>

                        <span
                          aria-hidden="true"
                          className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]"
                        />

                        <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[var(--color-text-secondary)]">
                          Full-stack platform
                        </span>
                      </div>

                      <h3 className="mt-12 max-w-2xl text-4xl font-bold leading-[0.98] tracking-[-0.055em] text-[var(--color-text)] sm:mt-16 sm:text-6xl lg:text-7xl">
                        From discovering an item to recovering it.
                      </h3>

                      <p className="mt-6 max-w-xl text-sm leading-7 text-[var(--color-text-secondary)] sm:text-base sm:leading-8">
                        {project.description}
                      </p>
                    </div>

                    {/* Feature tags */}
                    <div className="mt-10 flex flex-wrap gap-2">
                      {[
                        'Discover',
                        'Claims',
                        'Verification',
                        'Moderation',
                        'Matching',
                        'Notifications',
                      ].map((feature) => (
                        <span
                          key={feature}
                          className="rounded-full border border-[var(--color-border)] px-3 py-2 text-[9px] font-bold uppercase tracking-[0.1em] text-[var(--color-text-secondary)]"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* System overview */}
                  <div className="flex flex-col justify-between p-6 pt-0 sm:p-10 sm:pt-0 lg:border-l lg:border-[var(--color-border)] lg:p-10">
                    <div>
                      <div className="flex items-center justify-between gap-4 py-6 lg:py-2">
                        <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--color-text-secondary)]">
                          System overview
                        </p>

                        <span className="text-sm font-bold text-[var(--color-accent)]">
                          {project.number}
                        </span>
                      </div>

                      <div>
                        {[
                          ['Frontend', 'React + TypeScript'],
                          ['API', 'FastAPI + Python'],
                          ['Data', 'PostgreSQL'],
                        ].map(([label, value]) => (
                          <div
                            key={label}
                            className="border-t border-[var(--color-border)] py-5"
                          >
                            <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-[var(--color-text-secondary)]">
                              {label}
                            </p>

                            <p className="mt-2 text-sm font-semibold text-[var(--color-text)]">
                              {value}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {frontendLink && (
                      <a
                        href="https://trackit-frontend-ten.vercel.app/"
                        target="_blank"
                        rel="noreferrer"
                        className="mt-6 inline-flex min-h-12 w-fit items-center justify-center gap-3 rounded-full bg-[var(--color-accent)] px-5 py-3 text-xs font-bold text-[var(--color-accent-contrast)] transition-colors hover:opacity-85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-4"
                      >
                        Explore TRACKIT
                        <ExternalLink size={14} aria-hidden="true" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Challenge and solution */}
            <section className="mt-20 grid gap-8 sm:mt-24 lg:grid-cols-[0.42fr_0.58fr] lg:gap-16">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--color-accent)]">
                  The challenge
                </p>

                <h4 className="mt-5 max-w-md text-3xl font-bold leading-[1.02] tracking-[-0.045em] text-[var(--color-text)] sm:text-4xl">
                  Turning a simple idea into a trustworthy workflow.
                </h4>
              </div>

              <div className="space-y-6">
                <p className="text-sm leading-8 text-[var(--color-text-secondary)] sm:text-base">
                  {project.problem}
                </p>

                <p className="text-sm leading-8 text-[var(--color-text-secondary)] sm:text-base">
                  {project.solution}
                </p>
              </div>
            </section>

            {/* How it works */}
            <section className="mt-24 sm:mt-32">
              <div className="grid gap-6 lg:grid-cols-[0.42fr_0.58fr] lg:gap-16">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--color-accent)]">
                    How it works
                  </p>

                  <h4 className="mt-5 max-w-sm text-3xl font-bold leading-[1.02] tracking-[-0.045em] text-[var(--color-text)] sm:text-4xl">
                    Six parts of one connected system.
                  </h4>

                  <p className="mt-5 max-w-sm text-sm leading-7 text-[var(--color-text-secondary)]">
                    The platform brings the main stages of the lost-and-found
                    process into one application.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-x-8">
                  {project.features.map((feature, index) => (
                    <div
                      key={feature}
                      className="border-t border-[var(--color-border)] py-5"
                    >
                      <div className="flex items-start gap-4">
                        <span className="pt-1 text-[10px] font-bold tabular-nums text-[var(--color-accent)]">
                          {String(index + 1).padStart(2, '0')}
                        </span>

                        <p className="max-w-xs text-sm font-semibold leading-6 text-[var(--color-text)]">
                          {feature}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Technical decisions */}
            <section className="mt-24 grid gap-8 sm:mt-32 lg:grid-cols-[0.42fr_0.58fr] lg:gap-16">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--color-accent)]">
                  Technical decisions
                </p>

                <h4 className="mt-5 max-w-md text-3xl font-bold leading-[1.02] tracking-[-0.045em] text-[var(--color-text)] sm:text-4xl">
                  Clear boundaries. Connected systems.
                </h4>
              </div>

              <div>
                <p className="text-sm leading-8 text-[var(--color-text-secondary)] sm:text-base">
                  {project.architecture}
                </p>

                <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="text-xs font-semibold text-[var(--color-text-secondary)]"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </section>

            {/* Source code */}
            <footer className="mt-20 flex flex-col gap-6 border-t border-[var(--color-border)] pt-7 sm:mt-24 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--color-text-secondary)]">
                  Source code
                </p>

                <p className="mt-2 text-sm font-semibold text-[var(--color-text)]">
                  Explore the frontend and backend repositories.
                </p>
              </div>

              <div className="flex flex-wrap gap-x-6 gap-y-4">
                {project.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-[var(--color-text)] transition-colors hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-4"
                  >
                    {link.label}
                    <ExternalLink size={13} aria-hidden="true" />
                  </a>
                ))}
              </div>
            </footer>
          </article>
        )
      })}
    </div>
  )
}

export default ProjectShowcase
