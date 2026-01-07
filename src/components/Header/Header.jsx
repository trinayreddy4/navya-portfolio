import React, { useState } from 'react'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Credentials', href: '#credentials' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

const Header = () => {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-primary/80 border-b border-white/5">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-8 py-5 sm:px-5">
        <a href="#top" className="text-2xl font-semibold tracking-[0.5rem] text-secondary">
          TR
        </a>
        <nav className="flex items-center gap-10 sm:hidden">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium uppercase tracking-[0.2rem] text-tertiary transition hover:text-secondary"
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://drive.google.com/file/d/1H2kfPAIqfzirmbtMLH4vLOM0ZkfXAurw/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-secondary px-5 py-2 text-sm font-semibold text-secondary transition hover:bg-secondary hover:text-primary"
          >
            Resume
          </a>
        </nav>
        <button
          className="hidden text-3xl text-secondary sm:inline-flex"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          <i className="ri-menu-3-line" />
        </button>
      </div>
      {open && (
        <div className="mx-auto mt-[-4px] flex max-w-6xl flex-col gap-5 px-8 pb-6 sm:px-5">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="border-b border-white/10 pb-2 text-sm font-semibold uppercase tracking-[0.2rem] text-tertiary"
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://drive.google.com/file/d/1H2kfPAIqfzirmbtMLH4vLOM0ZkfXAurw/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-secondary px-5 py-2 text-center text-sm font-semibold text-secondary"
          >
            Resume
          </a>
        </div>
      )}
    </header>
  )
}

export default Header