import React from 'react'
import SectionTitle from '../../components/SectionTitle/SectionTitle'

const skillGroups = [
  {
    title: 'Core languages',
    items: ['JavaScript (ES2023)', 'TypeScript', 'Python', 'Java'],
  },
  {
    title: 'Frameworks & libraries',
    items: ['Spring Boot','React', 'Next.js', 'Langchain','Redux Toolkit', 'Express.js'],
  },
  {
    title: 'Databases',
    items: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis'],
  },
  {
    title: 'Cloud & DevOps',
    items: ['AWS', 'Azure', 'GCP', 'Docker', 'GitHub Actions'],
  },
  {
    title: 'Design & productivity',
    items: ['N8N Agentic AI','Figma', 'Framer', 'Notion', 'Jira'],
  },
]

const Skills = () => {
  return (
    <section id="skills" className="py-24">
      <SectionTitle
        eyebrow="Toolbox"
        title="Technologies I rely on to ship quality at speed"
        description="A well-curated stack lets me focus on solving the right problems, not fighting the tools."
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
