import React from 'react'

const SectionTitle = ({ title, eyebrow, description }) => {
  return (
    <div className="mb-12 flex flex-col gap-3">
      {eyebrow && <p className="text-xs uppercase tracking-[0.5rem] text-secondary">{eyebrow}</p>}
      <h2 className="text-4xl font-semibold text-white sm:text-3xl">{title}</h2>
      {description && <p className="max-w-2xl text-base text-tertiary">{description}</p>}
      <div className="mt-4 h-[1px] w-24 bg-gradient-to-r from-secondary to-transparent" />
    </div>
  )
}

export default SectionTitle