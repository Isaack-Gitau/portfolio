const experience = [
  {
    period: 'APR - JUL 2026',
    role: 'ICT Attachment Professional',
    organization: "Zetech University, Mang'u Campus",
    location: 'Kiambu, Kenya',
    description:
      'Provided day-to-day technical support across campus, helping students, faculty, and administrative users resolve hardware, software, connectivity, and general ICT issues.',
    responsibilities: [
      'Supported users with Windows operating systems, software installation, and recovery tasks.',
      'Diagnosed and maintained desktop computers, peripherals, and printers.',
      'Assisted with LAN connectivity, IP configuration, DHCP, routers, and wireless access points.',
      'Troubleshot technical issues and helped restore users to working systems.',
    ],
  },
]

function ExperienceTimeline() {
  return (
    <div className="mt-14">
      {experience.map((item) => (
        <article
          key={`${item.role}-${item.organization}`}
          className="border-y border-[#151515]/10"
        >
          <div className="grid lg:grid-cols-[0.28fr_minmax(0,1fr)]">
            <div className="border-b border-[#151515]/10 p-6 lg:border-b-0 lg:border-r lg:p-8">
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#1683f7]">
                {item.period}
              </p>

              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.12em] text-[#151515]/50">
                {item.location}
              </p>
            </div>

            <div className="p-6 sm:p-8 lg:p-10">
              <div className="max-w-3xl">
                <h3 className="text-2xl font-bold tracking-[-0.04em] sm:text-3xl">
                  {item.role}
                </h3>

                <p className="mt-2 text-sm font-semibold text-[#151515]/65">
                  {item.organization}
                </p>

                <p className="mt-6 text-sm leading-7 text-[#151515]/75 sm:text-base">
                  {item.description}
                </p>
              </div>

              <div className="mt-8 grid gap-px border border-[#151515]/10 bg-[#151515]/10 sm:grid-cols-2">
                {item.responsibilities.map((responsibility, index) => (
                  <div
                    key={responsibility}
                    className="bg-[#f4f1eb] p-5 sm:p-6"
                  >
                    <span className="text-[9px] font-bold tracking-[0.16em] text-[#1683f7]">
                      0{index + 1}
                    </span>

                    <p className="mt-4 text-xs font-medium leading-6 text-[#151515]/70">
                      {responsibility}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  )
}

export default ExperienceTimeline
