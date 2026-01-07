import React from 'react'

const stats = [
  { label: 'CGPA', value: '9.00' },
  { label: 'Academic projects', value: '2' },
  { label: 'Cloud certifications', value: '2' },
]

const Intro = () => {
  return (
    <section
      id="top"
      className="relative flex min-h-[90vh] flex-col justify-center overflow-hidden rounded-3xl bg-gradient-to-br from-[#0b1a1f] via-[#0b0c10] to-[#11232e] px-10 py-32 text-left shadow-2xl sm:px-6 sm:py-24"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(102,252,241,0.15),_transparent_50%)]" />
      <p className="text-sm uppercase tracking-[0.6rem] text-secondary">Portfolio 2025</p>
      <h1 className="mt-6 text-6xl font-semibold text-white sm:text-3xl">
        Hi, I&apos;m <span className="text-secondary">Navya Devi Sushma Sri Katamsetti</span>
      </h1>
      <h2 className="mt-4 max-w-2xl text-3xl font-medium text-tertiary sm:text-xl">
        Full-stack engineer focused on resilient backend systems, clean APIs, and delightful user experiences.
      </h2>
      <p className="mt-6 max-w-2xl text-lg text-tertiary sm:text-base">
        I&apos;m a B.Tech Computer Science & Engineering student at KL University with hands-on experience in Java, Spring Boot, React, and
        AWS. I enjoy building scalable academic platforms, optimizing data workflows, and delivering reliable, testable APIs for real
        users.
      </p>
      <div className="mt-10 flex items-center gap-6 sm:flex-col sm:items-start">
        <a
          href="mailto:2200030943cseh@gmail.com"
          className="rounded-full bg-secondary px-10 py-3 text-sm font-semibold uppercase tracking-[0.3rem] text-primary transition hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(102,252,241,0.25)]"
        >
          Let&apos;s collaborate
        </a>
        <a
          href="https://github.com/navya1727"
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-secondary px-10 py-3 text-sm font-semibold uppercase tracking-[0.3rem] text-secondary transition hover:bg-secondary/10"
        >
          View GitHub
        </a>
      </div>
      <div className="mt-14 grid grid-cols-3 gap-6 sm:grid-cols-1">
        {stats.map((item) => (
          <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <p className="text-3xl font-semibold text-secondary">{item.value}</p>
            <p className="mt-2 text-sm uppercase tracking-[0.3rem] text-tertiary">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Intro
