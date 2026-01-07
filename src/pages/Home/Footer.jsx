import React from 'react'

const Footer = () => {
  return (
    <footer className="mt-24 border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 text-center">
        <p className="text-xs uppercase tracking-[0.4rem] text-secondary">Thank you for scrolling</p>
        <h4 className="text-lg font-semibold text-white">Designed & engineered by Navya Devi Sushma Sri Katamsetti</h4>
        <p className="text-sm text-tertiary">
          Crafted with React, Tailwind CSS and a relentless curiosity for delightful user experiences.
        </p>
        <div className="flex items-center gap-6">
          <a href="mailto:2200030943cseh@gmail.com" className="text-tertiary transition hover:text-secondary">
            <i className="ri-mail-line text-xl" />
          </a>
          <a href="https://github.com/navya1727" target="_blank" rel="noreferrer" className="text-tertiary transition hover:text-secondary">
            <i className="ri-github-line text-xl" />
          </a>
          <a href="https://www.linkedin.com/in/navya-katamsetti" target="_blank" rel="noreferrer" className="text-tertiary transition hover:text-secondary">
            <i className="ri-linkedin-line text-xl" />
          </a>
        </div>
        <p className="text-xs text-tertiary/70">
          © {new Date().getFullYear()} Navya Devi Sushma Sri Katamsetti. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
