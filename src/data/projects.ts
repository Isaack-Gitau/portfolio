export type Project = {
  number: string
  title: string
  category: string
  description: string
  technologies: string[]
  role: string
  links: {
    label: string
    href: string
  }[]
}

export const projects: Project[] = [
  {
    number: '01',
    title: 'TrackIt',
    category: 'Lost & Found Platform',
    description:
      'A full-stack lost-and-found platform designed around item discovery, claims, moderation, reporting, comments, notifications, and account management.',
    technologies: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'FastAPI',
      'Python',
      'PostgreSQL',
    ],
    role: 'Full-stack development',
    links: [
      {
        label: 'Frontend',
        href: 'https://github.com/isaackgofficial-byte/trackit-frontend',
      },
      {
        label: 'Backend',
        href: 'https://github.com/isaackgofficial-byte/trackit-backend',
      },
    ],
  },
]
