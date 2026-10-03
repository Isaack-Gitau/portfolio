import { projects } from '../data/projects'

function ProjectShowcase() {
  return (
    <div className="mt-16">
      {projects.map((project, index) => (
        <article
          key={project.number}
          className="border-t border-[#151515]/15 py-16 first:border-t-0 first:pt-0 lg:py-24"
        >
          <div className="grid gap-10 lg:grid-cols-[0.16fr_minmax(0,1fr)] lg:gap-8">
            <div>
              <span className="text-xs font-bold tracking-[0.18em] text-[#1683f7]">
                {project.number}
              </span>

              <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#151515]/40">
                {project.category}
              </p>
            </div>

            <div>
              <div className="grid gap-10 xl:grid-cols-[minmax(0,1.35fr)_minmax(260px,0.65fr)]">
                <div>
                  <div className="border border-[#151515]/10 bg-[#e9e5dd]">
                    <div className="p-4 sm:p-6 lg:p-8">
                      <div className="border border-[#151515]/15 bg-[#f4f1eb]">
                        <div className="flex items-center justify-between border-b border-[#151515]/10 px-4 py-4 sm:px-6">
                          <div className="flex items-center gap-3">
                            <span className="text-xs font-black tracking-[-0.04em]">
                              TRACKIT
                            </span>

                            <span className="h-1.5 w-1.5 rounded-full bg-[#1683f7]" />
                          </div>

                          <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#151515]/35">
                            Full-stack platform
                          </span>
                        </div>

                        <div className="p-5 sm:p-8 lg:p-10">
                          <div className="max-w-2xl">
                            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#1683f7]">
                              Lost + Found
                            </p>

                            <h4 className="mt-3 max-w-xl text-3xl font-bold leading-[0.98] tracking-[-0.05em] sm:text-5xl">
                              From discovering an item to recovering it.
                            </h4>
                          </div>

                          <div className="mt-8 grid grid-cols-2 gap-px border border-[#151515]/10 bg-[#151515]/10 sm:grid-cols-3">
                            {[
                              ['01', 'Discover'],
                              ['02', 'Claims'],
                              ['03', 'Matches'],
                              ['04', 'Reports'],
                              ['05', 'Moderation'],
                              ['06', 'Notifications'],
                            ].map(([number, label]) => (
                              <div
                                key={number}
                                className="bg-[#f4f1eb] p-4 sm:p-5"
                              >
                                <span className="text-[9px] font-bold tracking-[0.14em] text-[#1683f7]">
                                  {number}
                                </span>

                                <p className="mt-4 text-sm font-bold">
                                  {label}
                                </p>
                              </div>
                            ))}
                          </div>

                          <div className="mt-8 border-t border-[#151515]/10 pt-6">
                            <div className="grid gap-4 sm:grid-cols-3">
                              {[
                                ['01', 'Post & discover'],
                                ['02', 'Verify & match'],
                                ['03', 'Claim & recover'],
                              ].map(([number, label]) => (
                                <div
                                  key={number}
                                  className="flex items-center gap-3"
                                >
                                  <span className="text-[9px] font-bold text-[#1683f7]">
                                    {number}
                                  </span>

                                  <span className="text-xs font-semibold text-[#151515]/65">
                                    {label}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="grid border-t border-[#151515]/10 sm:grid-cols-3">
                          <div className="border-b border-[#151515]/10 px-4 py-4 sm:border-b-0 sm:border-r sm:px-6">
                            <p className="text-[8px] font-bold uppercase tracking-[0.14em] text-[#151515]/35">
                              Frontend
                            </p>

                            <p className="mt-1.5 text-[10px] font-semibold">
                              React + TypeScript
                            </p>
                          </div>

                          <div className="border-b border-[#151515]/10 px-4 py-4 sm:border-b-0 sm:border-r sm:px-6">
                            <p className="text-[8px] font-bold uppercase tracking-[0.14em] text-[#151515]/35">
                              Backend
                            </p>

                            <p className="mt-1.5 text-[10px] font-semibold">
                              FastAPI + Python
                            </p>
                          </div>

                          <div className="px-4 py-4 sm:px-6">
                            <p className="text-[8px] font-bold uppercase tracking-[0.14em] text-[#151515]/35">
                              Database
                            </p>

                            <p className="mt-1.5 text-[10px] font-semibold">
                              PostgreSQL
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-4xl font-bold tracking-[-0.05em] sm:text-5xl">
                      {project.title}
                      <span className="text-[#1683f7]">.</span>
                    </h3>

                    <p className="mt-6 text-base leading-7 text-[#151515]/65">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-10">
                    <div className="border-t border-[#151515]/10 pt-5">
                      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#151515]/40">
                        Role
                      </p>

                      <p className="mt-2 text-sm font-semibold">
                        {project.role}
                      </p>
                    </div>

                    <div className="mt-6 border-t border-[#151515]/10 pt-5">
                      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#151515]/40">
                        Technologies
                      </p>

                      <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
                        {project.technologies.map((technology) => (
                          <span
                            key={technology}
                            className="text-xs font-medium text-[#151515]/65"
                          >
                            {technology}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-8 flex flex-wrap gap-5">
                      {project.links.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noreferrer"
                          className="group inline-flex items-center gap-2 border-b border-[#151515]/30 pb-1 text-xs font-bold uppercase tracking-[0.14em] transition-colors hover:border-[#1683f7] hover:text-[#1683f7]"
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
            </div>
          </div>

          {index < projects.length - 1 && (
            <div className="mt-16 border-b border-dashed border-[#151515]/10 lg:mt-24" />
          )}
        </article>
      ))}
    </div>
  )
}

export default ProjectShowcase
