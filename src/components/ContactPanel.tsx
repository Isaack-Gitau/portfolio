
import { Mail, MessageCircle } from 'lucide-react'

type ContactIconName = 'email' | 'github' | 'linkedin' | 'whatsapp'

type Contact = {
  label: string
  href: string
  icon: ContactIconName
}

const contacts: Contact[] = [
  {
    label: 'Email',
    href: 'mailto:isaackgofficial@gmail.com',
    icon: 'email',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/Isaack-Gitau',
    icon: 'github',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/isaack-gitau-21a0443a1',
    icon: 'linkedin',
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/254743570561',
    icon: 'whatsapp',
  },
]

function ContactIcon({ icon }: { icon: ContactIconName }) {
  switch (icon) {
    case 'email':
      return <Mail size={19} strokeWidth={1.7} aria-hidden="true" />

    case 'whatsapp':
      return <MessageCircle size={19} strokeWidth={1.7} aria-hidden="true" />

    case 'github':
      return (
        <svg
          viewBox="0 0 24 24"
          width="19"
          height="19"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.54v-2.1c-3.1.67-3.75-1.32-3.75-1.32-.5-1.28-1.24-1.62-1.24-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.7 1.15 1.7 1.15.99 1.69 2.6 1.2 3.23.92.1-.72.39-1.2.7-1.48-2.47-.28-5.07-1.24-5.07-5.5 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.12-1.44 3.05-1.14 3.05-1.14.61 1.54.23 2.68.11 2.96.72.78 1.15 1.78 1.15 3.01 0 4.27-2.6 5.21-5.08 5.49.4.35.75 1.02.75 2.06v3.07c0 .3.2.65.76.54A11.1 11.1 0 0 0 12 .9Z" />
        </svg>
      )

    case 'linkedin':
      return (
        <svg
          viewBox="0 0 24 24"
          width="19"
          height="19"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z" />
        </svg>
      )
  }
}

function ContactPanel() {
  return (
    <div className="mt-16 grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
      <div>
        <p className="terminal-label text-[var(--color-accent)]">
          Open to opportunities
        </p>

        <h3 className="mt-6 max-w-2xl text-4xl font-bold leading-[0.98] tracking-[-0.055em] text-[var(--color-text)] sm:text-5xl lg:text-6xl">
          Have a project, problem, or opportunity in mind?
        </h3>

        <p className="mt-6 max-w-xl text-sm leading-7 text-[var(--color-text-secondary)] sm:text-base sm:leading-8">
          I am interested in building useful software, solving technical
          problems, and continuing to grow across software development and IT.
        </p>

        <a
          href="mailto:isaackgofficial@gmail.com"
          className="mt-9 inline-flex min-h-12 items-center gap-3 rounded-full bg-[var(--color-accent)] px-6 py-3 text-sm font-bold text-[var(--color-accent-contrast)] transition-colors hover:bg-[var(--color-accent-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]"
        >
          <Mail size={18} aria-hidden="true" />
          Send me an email
        </a>
      </div>

      <div className="min-w-0">
        <p className="terminal-label mb-6">Find me online</p>

        <div className="flex flex-col gap-3">
          {contacts.map((contact) => (
            <a
              key={contact.label}
              href={contact.href}
              target={
                contact.href.startsWith('mailto:') ? undefined : '_blank'
              }
              rel={
                contact.href.startsWith('mailto:')
                  ? undefined
                  : 'noopener noreferrer'
              }
              aria-label={`Open ${contact.label}`}
              className="group flex w-fit items-center gap-4 rounded-full py-2 pr-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-[var(--color-text-secondary)] transition-colors group-hover:text-[var(--color-accent)]">
                <ContactIcon icon={contact.icon} />
              </span>

              <span className="text-sm font-semibold text-[var(--color-text)] transition-colors group-hover:text-[var(--color-accent)]">
                {contact.label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ContactPanel
