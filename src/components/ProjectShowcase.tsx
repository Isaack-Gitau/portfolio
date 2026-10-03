import { projects } from '../data/projects'

function ProjectShowcase() {
  return (
    <div className="mt-16">
      {projects.map((project) => (
        <article key={project.number}>
          <div className="grid gap-8 border-t border-[#151515]/15 pt-8 lg:grid-cols-[0.16fr_minmax(0,1fr)] lg:gap-8">
            <div>
              <span className="text-xs font-bold tracking-[0.18em] text-[#1683f7]">
                {project.number}
              </span>

              <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.16em] text-[#151515]/40">
                Selected work
              </p>
            </div>

            <div>
              <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_280px] xl:items-end xl:gap-16">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#1683f7]">
                    {project.category}
                  </p>

                  <h3 className="mt-4 max-w-4xl text-5xl font-bold leading-[0.9] tracking-[-0.065em] sm:text-7xl lg:text-8xl">
                    {project.title}
                    <span className="text-[#1683f7]">.</span>
                  </h3>
                </div>

                <div className="border-l border-[#151515]/15 pl-6">
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#151515]/40">
                    Role
                  </p>

                  <p className="mt-3 text-sm font-semibold leading-6">
                    {project.role}
                  </p>
                </div>
              </div>

              <div className="mt-12 overflow-hidden border-y border-[#151515]/15 bg-[#e9e5dd]">
                <div className="grid min-h-[420px] lg:grid-cols-[1.4fr_0.6fr]">
                  <div className="flex flex-col justify-between border-b border-[#151515]/15 p-6 sm:p-10 lg:border-b-0 lg:border-r lg:p-12">
                    <div>
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-black tracking-[-0.04em]">
                          TRACKIT
                        </span>

                        <span className="h-1.5 w-1.5 bg-[#1683f7]" />

                        <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#151515]/40">
                          Full-stack platform
                        </span>
                      </div>

                      <h4 className="mt-16 max-w-2xl text-4xl font-bold leading-[0.95] tracking-[-0.055em] sm:text-6xl">
                        From discovering an item to recovering it.
                      </h4>

                      <p className="mt-6 max-w-xl text-sm leading-7 text-[#151515]/65 sm:text-base">
                        {project.description}
                      </p>
                    </div>

                    <div className="mt-14 border-t border-[#151515]/15 pt-6">
                      <div className="flex flex-wrap gap-x-8 gap-y-3">
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
                            className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#151515]/55"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="relative flex min-h-[320px] flex-col justify-between bg-[#123b66] p-6 text-[#f4f1eb] sm:p-10 lg:min-h-0 lg:p-12">
                    <div className="flex items-start justify-between">
                      <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-white/45">
                        System overview
                      </span>

                      <span className="text-xs font-bold text-[#1683f7]">
                        01
                      </span>
                    </div>

                    <div className="space-y-0">
                      {[
                        ['Frontend', 'React + TypeScript'],
                        ['API', 'FastAPI + Python'],
                        ['Data', 'PostgreSQL'],
                      ].map(([label, value], index) => (
                        <div
                          key={label}
                          className="relative border-t border-white/15 py-5"
                        >
                          {index < 2 && (
                            <span
                              aria-hidden="true"
                              className="absolute -bottom-2 left-1/2 z-10 flex h-4 w-4 -translate-x-1/2 items-center justify-center bg-[#123b66] text-[10px] text-[#1683f7]"
                            >
                              ↓
                            </span>
                          )}

                          <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-white/40">
                            {label}
                          </p>

                          <p className="mt-2 text-sm font-semibold">
                            {value}
                          </p>
                        </div>
                      ))}
                    </div>

                    <p className="pt-8 text-[9px] font-bold uppercase tracking-[0.14em] text-white/40">
                      Structured around real application workflows
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-16 grid gap-12 lg:grid-cols-[0.42fr_0.58fr] lg:gap-20">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#1683f7]">
                    The challenge
                  </p>

                  <h4 className="mt-5 text-3xl font-bold leading-[0.98] tracking-[-0.05em] sm:text-4xl">
                    Turning a simple idea into a trustworthy workflow.
                  </h4>
                </div>

                <div>
                  <p className="text-base leading-8 text-[#151515]/70">
                    {project.problem}
                  </p>

                  <p className="mt-7 text-base leading-8 text-[#151515]/70">
                    {project.solution}
                  </p>
                </div>
              </div>

              <div className="mt-20 border-y border-[#151515]/15 py-12 sm:py-16">
                <div className="grid gap-10 lg:grid-cols-[0.3fr_0.7fr] lg:gap-16">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#1683f7]">
                      How it works
                    </p>

                    <p className="mt-4 max-w-xs text-sm leading-7 text-[#151515]/60">
                      The platform connects the main stages of the lost and
                      found process into one application.
                    </p>
                  </div>

                  <div className="grid gap-0 sm:grid-cols-2">
                    {project.features.map((feature, index) => (
                      <div
                        key={feature}
                        className="border-t border-[#151515]/10 py-5 sm:pr-8"
                      >
                        <div className="flex items-start gap-4">
                          <span className="text-[9px] font-bold tracking-[0.12em] text-[#1683f7]">
                            {String(index + 1).padStart(2, '0')}
                          </span>

                          <p className="text-sm font-semibold leading-6">
                            {feature}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-20 grid gap-12 lg:grid-cols-[0.34fr_0.66fr] lg:gap-16">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#1683f7]">
                    Technical decisions
                  </p>

                  <h4 className="mt-5 text-3xl font-bold leading-[0.98] tracking-[-0.05em] sm:text-4xl">
                    Built around separation of concerns.
                  </h4>
                </div>

                <div className="space-y-10">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#151515]/40">
                      Architecture
                    </p>

                    <p className="mt-3 max-w-2xl text-sm leading-7 text-[#151515]/70">
                      {project.architecture}
                    </p>
                  </div>

                  <div className="border-t border-[#151515]/10 pt-8">
                    <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#151515]/40">
                      Technology
                    </p>

                    <div className="mt-5 flex max-w-2xl flex-wrap gap-x-7 gap-y-3">
                      {project.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="text-xs font-semibold text-[#151515]/65"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-20 flex flex-col gap-6 border-t border-[#151515]/15 pt-7 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#151515]/40">
                    Source code
                  </p>

                  <p className="mt-2 text-sm font-semibold">
                    Explore the frontend and backend repositories.
                  </p>
                </div>

                <div className="flex flex-wrap gap-6">
                  {project.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] transition-colors hover:text-[#1683f7]"
                    >
                      {link.label}
                      <span
                        aria-hidden="true"
                        className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      >
                        ↗
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  )
}

export default ProjectShowcase
