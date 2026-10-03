const contacts = [
  {
    label: 'Email',
    value: 'isaackgofficial@gmail.com',
    href: 'mailto:isaackgofficial@gmail.com',
  },
  {
    label: 'GitHub',
    value: 'github.com/Isaack-Gitau',
    href: 'https://github.com/Isaack-Gitau',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/isaack-gitau-21a0443a1',
    href: 'https://www.linkedin.com/in/isaack-gitau-21a0443a1',
  },
  {
    label: 'WhatsApp',
    value: 'Start a conversation',
    href: 'https://wa.me/254743570561',
  },
]

function ContactPanel() {
  return (
    <div className="mt-14 border-y border-[#151515]/10">
      <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
        <div className="border-b border-[#151515]/10 p-6 sm:p-10 lg:border-b-0 lg:border-r lg:p-14">
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#1683f7]">
            Open to opportunities
          </p>

          <h3 className="mt-6 max-w-2xl text-4xl font-bold leading-[0.95] tracking-[-0.055em] sm:text-5xl lg:text-6xl">
            Have a project, problem, or opportunity in mind?
          </h3>

          <p className="mt-6 max-w-xl text-sm leading-7 text-[#151515]/70 sm:text-base">
            I am interested in building useful software, solving technical
            problems, and continuing to grow across software development and
            IT.
          </p>

          <a
            href="mailto:isaackgofficial@gmail.com"
            className="group mt-8 inline-flex items-center gap-3  text-xs font-bold uppercase tracking-[0.18em] transition-colors  hover:text-[#1683f7]"
          >
            Send me an email
            <span
              aria-hidden="true"
              className="transition-transform group-hover:translate-x-1"
            >
              →
            </span>
          </a>
        </div>

        <div className="divide-y divide-[#151515]/10">
          {contacts.map((contact, index) => (
            <a
              key={contact.label}
              href={contact.href}
              target={contact.href.startsWith('mailto:') ? undefined : '_blank'}
              rel={contact.href.startsWith('mailto:') ? undefined : 'noreferrer'}
              className="group flex items-center justify-between gap-6 p-6 transition-colors hover:bg-[#e9e5dd] sm:p-8"
            >
              <div className="flex items-center gap-5">
                <span className="text-[9px] font-bold tracking-[0.16em] text-[#1683f7]">
                  0{index + 1}
                </span>

                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#151515]/40">
                    {contact.label}
                  </p>

                  <p className="mt-2 break-all text-xs font-semibold text-[#151515]/75">
                    {contact.value}
                  </p>
                </div>
              </div>

              <span
                aria-hidden="true"
                className="shrink-0 text-lg transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              >
                ↗
              </span>
            </a>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-5 border-t border-[#151515]/10 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
        <div>
          <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#151515]/40">
            Curriculum vitae
          </p>

          <p className="mt-2 text-xs font-semibold">
            Download my current CV
          </p>
        </div>

        <a
          href="/Isaack-Gitau-CV.docx"
          download
          className="group inline-flex w-fit items-center gap-3  text-xs font-bold uppercase tracking-[0.18em] transition-colors  hover:text-[#1683f7]"
        >
          Download CV
          <span
            aria-hidden="true"
            className="transition-transform group-hover:translate-y-0.5"
          >
            ↓
          </span>
        </a>
      </div>
    </div>
  )
}

export default ContactPanel
