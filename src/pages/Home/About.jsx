import React from 'react'
import SectionTitle from '../../components/SectionTitle/SectionTitle'

const focusAreas = [
  {
    title: 'Full-stack craftsmanship',
    description:
      'Designing modular, scalable architectures with the Spring Boot and MERN stack to ship fast without compromising quality.',
  },
  {
    title: 'Cloud-native mindset',
    description:
      'Certified exposure across AWS, Azure, MongoDB Atlas and Oracle Cloud enables resilient deployments and data-first decisions.',
  },
  {
    title: 'Competitive problem solving',
    description:
      '1500+ algorithmic problems solved with a 3★ CodeChef rating and 1566 LeetCode peak keep my analytical edge razor sharp.',
  },
]

const journey = [
  {
    period: '2022 — Present',
    title: 'B.Tech CSE (Hons.), KL University',
    description:
      'Specialising in computer science fundamentals with a focus on high-impact web engineering and emerging tech exploration.',
  },
  {
    period: '2023 — Present',
    title: 'Product builder & mentor',
    description:
      'Driving university and community initiatives from ideation to launch, mentoring peers on clean architecture and modern tooling.',
  },
  {
    period: '2023',
    title: 'Competitive programming journey',
    description: 'Cracked 1500+ DSA problems across CodeChef, Codeforces and LeetCode to nurture disciplined problem solving.',
  },
  {
    period: '2024',
    title: 'Multi-cloud certified',
    description: 'Recognised by AWS, Azure, MongoDB, Google Cloud and Oracle for cloud fundamentals, data engineering and infrastructure.',
  },
]

const About = () => {
  return (
    <section id="about" className="py-24">
      <SectionTitle
        eyebrow="About"
        title="Blending engineering discipline with design intuition"
        description="I obsess over building products that feel intentional—from resilient backend foundations to pixel-perfect user experiences."
      />
      <div className="flex items-start gap-12 sm:flex-col">
        <div className="w-1/2 sm:w-full">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-10 text-left shadow-xl sm:p-6">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(102,252,241,0.08),_transparent_60%)]" />
            <img
              className="mx-auto h-48 w-48 rounded-full border-4 border-secondary/40 object-cover"
              src="https://avatars.githubusercontent.com/u/109901688?v=4"
              alt="Portrait of Trinay Reddy Malireddy"
            />
            <p className="mt-10 text-lg text-tertiary">
              Beyond the stack, I am an articulate communicator and team collaborator who thrives in fast-paced, impact-driven
              environments. I love architecting delightful interfaces, streamlining developer workflows and ensuring every feature
              is backed by measurable value.
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
