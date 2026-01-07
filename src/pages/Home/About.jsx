import React from 'react'
import SectionTitle from '../../components/SectionTitle/SectionTitle'

const focusAreas = [
  {
    title: 'Backend-focused development',
    description:
      'Designing modular Spring Boot services and REST APIs with clear contracts, role-based access, and measurable performance.',
  },
  {
    title: 'Cloud & DevOps foundations',
    description:
      'Comfortable deploying on AWS (EC2, S3, RDS) with Docker, Git, and Linux workflows that keep releases predictable.',
  },
  {
    title: 'Applied data modeling',
    description:
      'Building reliable PostgreSQL and MySQL schemas with indexing strategies to support high-volume academic workflows.',
  },
]

const journey = [
  {
    period: 'July 2022 — June 2026',
    title: 'B.Tech Computer Science & Engineering, KL University',
    description:
      'CGPA 9.00 with a focus on distributed systems, software engineering, and applied cloud computing.',
  },
  {
    period: 'May 2023 — July 2023',
    title: 'AWS Cloud Virtual Internship, AICTE-Eduskills (Remote)',
    description:
      'Built foundational knowledge of AWS services, security best practices, and cost management for scalable cloud solutions.',
  },
  {
    period: 'May 2020 — May 2022',
    title: 'MPC, Sri Chaitanya Jr College',
    description: 'Completed intermediate education in Mathematics, Physics, and Chemistry.',
  },
  {
    period: 'July 2019 — Mar 2020',
    title: 'SSC, Sri Chaithanya Techno School',
    description: 'Completed secondary education with a strong focus on STEM fundamentals.',
  },
]

const About = () => {
  return (
    <section id="about" className="py-24">
      <SectionTitle
        eyebrow="About"
        title="Building reliable systems with a learner’s mindset"
        description="I love crafting well-architected services and pragmatic interfaces that make academic workflows effortless."
      />
      <div className="flex items-start gap-12 sm:flex-col">
        <div className="w-1/2 sm:w-full">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-10 text-left shadow-xl sm:p-6">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(102,252,241,0.08),_transparent_60%)]" />
            <img
              className="mx-auto h-48 w-48 rounded-full border-4 border-secondary/40 object-cover"
              src="https://api.dicebear.com/7.x/initials/svg?seed=Navya%20Katamsetti"
              alt="Portrait of Navya Devi Sushma Sri Katamsetti"
            />
            <p className="mt-10 text-lg text-tertiary">
              I enjoy turning requirements into thoughtfully designed systems, collaborating with mentors and peers, and shipping
              features that are measurable, secure, and easy to maintain. My focus is on building reliable academic tools that
              simplify grading, content delivery, and collaboration.
            </p>
          </div>
        </div>
        <div className="flex w-1/2 flex-col gap-10 sm:w-full">
          <div className="grid grid-cols-1 gap-6">
            {focusAreas.map((item) => (
              <div key={item.title} className="rounded-2xl border border-white/10 bg-primary/40 p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-base text-tertiary">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-sm uppercase tracking-[0.4rem] text-secondary">Journey</h3>
            <div className="mt-6 flex flex-col gap-6">
              {journey.map((milestone) => (
                <div key={milestone.title} className="border-l border-secondary/40 pl-6">
                  <p className="text-xs uppercase tracking-[0.3rem] text-secondary/80">{milestone.period}</p>
                  <h4 className="mt-2 text-lg font-semibold text-white">{milestone.title}</h4>
                  <p className="mt-2 text-sm text-tertiary">{milestone.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
