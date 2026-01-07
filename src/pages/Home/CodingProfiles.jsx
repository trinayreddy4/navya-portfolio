import React from 'react'
import SectionTitle from '../../components/SectionTitle/SectionTitle'

const projects = [
  {
    title: 'Soundsid',
    description:
      'Soundsid is a Leading Audio Streaming and Distribution Platform which has nearly 1000+ Clients. Developed using Spring Boot, Lives in AWS',
    tech: ['Next.js', 'TypeScript', 'Spring Boot', 'MySQL','AWS'],
    link: 'https://www.soundsid.com',
  },
  {
    title: 'KL Samyak',
    description:'KL Samyak is a National Level Techno Fest which is Organized by KL University. Developed Using Node.js Techstack. Dockerized',
    tech: ['Node.js', 'React', 'Tailwind CSS', 'REST APIs','Express.js'],
    link: 'https://github.com/trinayreddy4',
  },
  {
    title: 'AlgoPlayground',
    description:
      'Interactive visualiser that demystifies complex data structures & algorithms, incorporating live problem walkthroughs and editor integrations for CodeChef, LeetCode and Codeforces.',
    tech: ['TypeScript', 'Redux Toolkit', 'Express'],
    link: 'https://github.com/trinayreddy4',
  },
]

const profiles = [
  {
    platform: 'Codeforces',
    stats: 'Specialist profile with regular participation in Division contests.',
    link: 'https://codeforces.com/profile/trinayreddy4',
    icon: 'ri-code-box-line',
  },
  {
    platform: 'CodeChef',
    stats: '3★ rating with 1500+ problems solved across multiple difficulty levels.',
    link: 'https://www.codechef.com/users/trinayreddy4',
    icon: 'ri-trophy-line',
  },
  {
    platform: 'LeetCode',
    stats: '1566 rating with consistent streaks across algorithm, SQL and system design tracks.',
    link: 'https://leetcode.com/trinayreddy4',
    icon: 'ri-braces-line',
  },
  {
    platform: 'GitHub',
    stats: 'Open-source contributions, hackathon prototypes and reusable starter kits.',
    link: 'https://github.com/trinayreddy4',
    icon: 'ri-github-line',
  },
  {
    platform: 'LinkedIn',
    stats: 'Let’s connect for collaborations, internships and speaking opportunities.',
    link: 'https://www.linkedin.com/in/trinay-reddy-malireddy-170555246',
    icon: 'ri-linkedin-line',
  },
]

const CodingProfiles = () => {
  return (
    <section id="projects" className="py-24">
      <SectionTitle
        eyebrow="Work & Community"
        title="Featured builds and active coding footprints"
        description="A quick tour through the products I loved building and the communities that keep me sharp."
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
        <h3 className="text-sm uppercase tracking-[0.4rem] text-secondary">Coding playgrounds</h3>
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
