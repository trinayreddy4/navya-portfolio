import React, { useState } from 'react'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import fintechCouncilIndia from "../../assets/certifications/fintech-council-india.png";
import ociGenerativeAi from "../../assets/certifications/oci-2024-generative-ai.png";
import microsoftAzureAiFundamentals from "../../assets/certifications/microsoft-azure-ai-fundamentals.png";

const certifications = [
  {
    certificationsName: "Fintech Professional Certificate",
    imageLink: fintechCouncilIndia,
    details:
      "Awarded by the Fintech Council of India for completing advanced coursework in Blockchain, DeFi, and a professional fintech capstone (July 29, 2024).",
  },
  {
    certificationsName:
      "Oracle Cloud Infrastructure 2024 Generative AI Certified Professional",
    imageLink: ociGenerativeAi,
    details:
      "Validated LLM and OCI Generative AI Service knowledge, including RAG, vector search, and LangChain patterns (issued Aug 1, 2024; expires Aug 1, 2026).",
  },
  {
    certificationsName: "Microsoft Certified: Azure AI Fundamentals",
    imageLink: microsoftAzureAiFundamentals,
    details:
      "Confirmed foundational AI concepts and Azure AI services across ML, computer vision, and NLP workloads (earned Jun 24, 2024).",
  },
];

const Certifications = () => {
  const [selectedItem, setSelectedItem] = useState(0)

  return (
    <section id="credentials" className="py-24">
      <SectionTitle
        eyebrow="Credentials"
        title="Certifications that reinforce my cloud foundations"
        description="I value continuous learning to keep my cloud and AI fundamentals sharp for production-ready delivery."
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
