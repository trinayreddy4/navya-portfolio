import React from 'react'

const links = [
  { href: 'https://www.linkedin.com/in/trinay-reddy-malireddy-170555246', icon: 'ri-linkedin-fill', label: 'LinkedIn' },
  { href: 'mailto:trinayreddy4@gmail.com', icon: 'ri-mail-line', label: 'Email' },
  { href: 'https://github.com/trinayreddy4', icon: 'ri-github-fill', label: 'GitHub' },
  { href: 'https://leetcode.com/trinayreddy4', icon: 'ri-code-s-slash-line', label: 'LeetCode' },
]

const LeftSider = () => {
  return (
    <aside className="fixed bottom-12 left-12 flex flex-col items-center gap-6 sm:hidden">
      <div className="flex flex-col items-center gap-4 rounded-full border border-secondary/20 bg-primary/60 px-4 py-6 shadow-lg">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="group relative flex items-center justify-center"
          >
            <span className="absolute right-full mr-3 hidden rounded-full bg-secondary/10 px-3 py-1 text-xs uppercase tracking-[0.3rem] text-secondary group-hover:inline-flex">
              {link.label}
            </span>
            <i className={`${link.icon} text-2xl text-secondary transition group-hover:text-white`} />
          </a>
        ))}
      </div>
      <span className="h-24 w-px bg-gradient-to-b from-secondary to-transparent" />
    </aside>
  )
}

export default LeftSider
