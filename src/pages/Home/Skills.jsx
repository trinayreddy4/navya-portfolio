import React from 'react'
import SectionTitle from '../../components/SectionTitle/SectionTitle'

const skillGroups = [
  {
    title: 'Programming languages',
    items: ['Java', 'JavaScript', 'SQL', 'Bash'],
  },
  {
    title: 'Backend',
    items: ['Spring Boot', 'REST APIs', 'Microservices', 'JWT Authentication'],
  },
  {
    title: 'Frontend',
    items: ['React.js', 'HTML', 'CSS'],
  },
  {
    title: 'Databases',
    items: ['PostgreSQL', 'MySQL'],
  },
  {
    title: 'DevOps & Cloud',
    items: ['AWS (EC2, S3, Route 53, Load Balancer)', 'Docker', 'Git', 'Linux'],
  },
  {
    title: 'Testing & tools',
    items: ['Postman', 'VS Code', 'IntelliJ IDEA'],
  },
]

const Skills = () => {
  return (
    <section id="skills" className="py-24">
      <SectionTitle
        eyebrow="Toolbox"
        title="Skills that support full-stack delivery"
        description="A focused toolkit that helps me build secure APIs, reliable databases, and responsive interfaces."
      />
      <div className="grid grid-cols-3 gap-8 sm:grid-cols-1">
        {skillGroups.map((group) => (
          <div key={group.title} className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-lg font-semibold text-white">{group.title}</h3>
            <ul className="mt-4 flex flex-wrap gap-3">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-secondary/30 px-4 py-2 text-xs uppercase tracking-[0.2rem] text-secondary"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
