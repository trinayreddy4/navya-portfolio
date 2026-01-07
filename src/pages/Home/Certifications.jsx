import React, { useState } from 'react'
import SectionTitle from '../../components/SectionTitle/SectionTitle'

const certifications = [
  {
    certificationsName: 'AWS Certified Solutions Architect – Associate',
    imageLink:
      'https://i.ibb.co/ycqP236Q/AWS-Certified-Solutions-Architect-Associate-certificate.jpg',
    details:
      'Demonstrated ability to design resilient, cost-optimised architectures on AWS covering compute, networking, storage and security workloads.',
  },
  {
    certificationsName: 'Microsoft Azure AI Fundamentals (AI-900)',
    imageLink: 'https://i.ibb.co/2F2nVys/1717920085362.jpg',
    details:
      'Explored responsible AI principles, Azure cognitive services and orchestration of intelligent workloads at scale.',
  },
  {
    certificationsName: 'MongoDB Database Administrator',
    imageLink: 'https://i.ibb.co/pwf7rsp/1716806080305.jpg',
    details:
      'Mastered schema design, performance tuning and operational tooling for mission-critical document databases.',
  },
  {
    certificationsName: 'MongoDB Node.js Developer Associate',
    imageLink: 'https://i.ibb.co/drdB90d/Screenshot-from-2024-06-26-14-32-26.png',
    details:
      'Built resilient Node.js services with aggregation pipelines, Atlas functions and cloud-native deployment strategies.',
  },
  {
    certificationsName: 'Oracle Cloud Infrastructure Foundations',
    imageLink: 'https://i.ibb.co/7kTrXn2/1702448585286.jpg',
    details:
      'Covered OCI compute, networking, storage services and governance models for hybrid enterprise workloads.',
  },
]

const Certifications = () => {
  const [selectedItem, setSelectedItem] = useState(0)

  return (
    <section id="credentials" className="py-24">
      <SectionTitle
        eyebrow="Credentials"
        title="Certified across leading cloud and database ecosystems"
        description="Continuous learning keeps me current with modern tooling so I can bring reliable, future-ready solutions to every engagement."
      />
      <div className="flex gap-16 sm:flex-col">
        <div className="w-1/3 border-l border-white/10 sm:w-full sm:border-l-0 sm:border-t">
          <ul className="flex flex-col sm:flex-row sm:overflow-x-auto">
            {certifications.map((item, index) => (
              <li
                key={item.certificationsName}
                className={`cursor-pointer border-b border-white/5 px-6 py-4 text-left text-sm font-semibold uppercase tracking-[0.2rem] sm:border-b-0 sm:border-r ${
                  selectedItem === index ? 'bg-secondary/10 text-secondary' : 'text-tertiary'
                }`}
                onClick={() => setSelectedItem(index)}
              >
                {item.certificationsName}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex w-2/3 flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 p-8 sm:w-full sm:p-6">
          <img
            src={certifications[selectedItem].imageLink}
            alt={certifications[selectedItem].certificationsName}
            className="h-60 w-full rounded-2xl object-cover"
          />
          <h3 className="text-2xl font-semibold text-white">{certifications[selectedItem].certificationsName}</h3>
          <p className="text-base text-tertiary">{certifications[selectedItem].details}</p>
        </div>
      </div>
    </section>
  )
}

export default Certifications
