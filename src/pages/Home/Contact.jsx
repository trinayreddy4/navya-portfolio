import React from 'react'
import SectionTitle from '../../components/SectionTitle/SectionTitle'

const contactChannels = [
  {
    label: 'Email',
    value: 'trinayreddy4@gmail.com',
    href: 'mailto:trinayreddy4@gmail.com',
    icon: 'ri-mail-line',
  },
  {
    label: 'Phone',
    value: '+91 77993 82323',
    href: 'tel:+917799382323',
    icon: 'ri-smartphone-line',
  },
  {
    label: 'Location',
    value: 'Vijayawada, India',
    href: 'https://maps.google.com/?q=Vijayawada,+India',
    icon: 'ri-map-pin-line',
  },
]

const Contact = () => {
  return (
    <section id="contact" className="py-24">
      <SectionTitle
        eyebrow="Collaborate"
        title="Let’s build something exceptional together"
        description="Whether it’s a product idea, internship opportunity or a hackathon, I’m always up for meaningful collaborations."
      />
      <div className="flex gap-12 sm:flex-col">
        <div className="w-1/2 rounded-3xl border border-white/10 bg-gradient-to-br from-[#0c1215] to-[#11252d] p-10 sm:w-full sm:p-6">
          <h3 className="text-2xl font-semibold text-white">Drop me a message</h3>
          <p className="mt-4 text-sm text-tertiary">
            Share your challenge, your vision or simply say hello. I’ll get back within 24 hours with next steps.
          </p>
          <form className="mt-8 flex flex-col gap-6">
            <input
              type="text"
              placeholder="Name"
              className="rounded-xl border border-white/10 bg-transparent px-4 py-3 text-sm text-white outline-none focus:border-secondary"
            />
            <input
              type="email"
              placeholder="Email"
              className="rounded-xl border border-white/10 bg-transparent px-4 py-3 text-sm text-white outline-none focus:border-secondary"
            />
            <textarea
              rows="4"
              placeholder="Project details, questions, timelines…"
              className="rounded-xl border border-white/10 bg-transparent px-4 py-3 text-sm text-white outline-none focus:border-secondary"
            />
            <button
              type="button"
              className="rounded-full bg-secondary px-6 py-3 text-sm font-semibold uppercase tracking-[0.3rem] text-primary transition hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(102,252,241,0.25)]"
            >
              Send message
            </button>
          </form>
        </div>
        <div className="flex w-1/2 flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-10 sm:w-full sm:p-6">
          <div className="flex flex-col gap-6">
            {contactChannels.map((channel) => (
              <a
                key={channel.label}
                href={channel.href}
                target={channel.label === 'Location' ? '_blank' : undefined}
                rel={channel.label === 'Location' ? 'noreferrer' : undefined}
                className="flex items-center gap-4 rounded-2xl border border-transparent bg-primary/30 p-4 transition hover:border-secondary/60 hover:bg-primary/50"
              >
                <i className={`${channel.icon} text-2xl text-secondary`} />
                <div>
                  <p className="text-xs uppercase tracking-[0.3rem] text-secondary/80">{channel.label}</p>
                  <p className="text-base font-semibold text-white">{channel.value}</p>
                </div>
              </a>
            ))}
          </div>
          <div className="mt-10 rounded-2xl border border-white/10 bg-primary/40 p-6">
            <p className="text-sm text-tertiary">
              Prefer socials? Reach out on <a className="text-secondary" href="https://www.linkedin.com/in/trinay-reddy-malireddy-170555246" target="_blank" rel="noreferrer">LinkedIn</a>{' '}
              or drop a DM on <a className="text-secondary" href="https://www.instagram.com/trinayreddymalireddy" target="_blank" rel="noreferrer">Instagram</a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
