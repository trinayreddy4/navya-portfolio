import React from 'react'
import SectionTitle from '../../components/SectionTitle/SectionTitle'

const projects = [
  {
    title: 'Smart Grading Assistant System',
    description:
      'Built a distributed Spring Boot backend with OpenAI-powered grading, plagiarism detection, and role-based REST APIs.',
    tech: ['Java', 'Spring Boot', 'OpenAI API', 'PostgreSQL', 'AWS'],
    link: 'https://github.com/navya1727',
  },
  {
    title: 'Learning Management System (LMS)',
    description:
      'Developed a full-stack LMS with JWT-secured roles, scalable file storage, and optimized PostgreSQL schemas.',
    tech: ['Java', 'Spring Boot', 'React.js', 'PostgreSQL', 'AWS S3'],
    link: 'https://github.com/navya1727',
  },
]

const profiles = [
  {
    platform: 'LinkedIn',
    stats: 'Connect for internships, collaborations, and academic projects.',
    link: 'https://www.linkedin.com/in/navya-katamsetti',
    icon: 'ri-linkedin-line',
  },
  {
    platform: 'GitHub',
    stats: 'Source code for academic builds and backend prototypes.',
    link: 'https://github.com/navya1727',
    icon: 'ri-github-line',
  },
  {
    platform: 'Email',
    stats: 'Reach me directly for project discussions or opportunities.',
    link: 'mailto:2200030943cseh@gmail.com',
    icon: 'ri-mail-line',
  },
  {
    platform: 'Mobile',
    stats: '+91 87122 75828 for urgent queries or updates.',
    link: 'tel:+918712275828',
    icon: 'ri-phone-line',
  },
]

const CodingProfiles = () => {
  return (
    <section id="projects" className="py-24">
      <SectionTitle
        eyebrow="Projects"
        title="Academic builds that showcase my backend focus"
        description="Selected projects that highlight scalable architectures, secure APIs, and production-ready cloud deployments."
      />
      <div className="grid grid-cols-3 gap-8 sm:grid-cols-1">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group flex flex-col rounded-3xl border border-white/10 bg-gradient-to-br from-[#0b1519] via-[#0d1d23] to-[#122f3a] p-8 shadow-lg transition hover:-translate-y-2 hover:border-secondary/60"
          >
            <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
            <p className="mt-4 text-sm text-tertiary">{project.description}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tech.map((tag) => (
                <span key={tag} className="rounded-full border border-secondary/30 px-3 py-1 text-xs text-secondary">
                  {tag}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.3rem] text-secondary"
            >
              View case study <i className="ri-arrow-right-up-line" />
            </a>
          </article>
        ))}
      </div>
      <div className="mt-16 rounded-3xl border border-white/10 bg-white/5 p-8">
        <h3 className="text-sm uppercase tracking-[0.4rem] text-secondary">Connect & collaborate</h3>
        <div className="mt-6 grid grid-cols-5 gap-6 sm:grid-cols-1">
          {profiles.map((profile) => (
            <a
              key={profile.platform}
              href={profile.link}
              target="_blank"
              rel="noreferrer"
              className="flex flex-col gap-3 rounded-2xl border border-transparent bg-primary/30 p-6 transition hover:border-secondary/60 hover:bg-primary/50"
            >
              <i className={`${profile.icon} text-3xl text-secondary`} />
              <p className="text-lg font-semibold text-white">{profile.platform}</p>
              <p className="text-sm text-tertiary">{profile.stats}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CodingProfiles
