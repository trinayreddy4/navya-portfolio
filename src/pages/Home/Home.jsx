import React from 'react'
import Header from '../../components/Header/Header'
import Intro from './Intro'
import About from './About'
import Certifications from './Certifications'
import CodingProfiles from './CodingProfiles'
import Skills from './Skills'
import Contact from './Contact'
import Footer from './Footer'
import LeftSider from './LeftSider'

const Home = () => {
  return (
    <div className="min-h-screen bg-primary text-white">
      <Header />
      <main className="mx-auto flex max-w-6xl flex-col gap-10 px-8 pt-40 pb-24 sm:px-5 sm:pt-36">
        <Intro />
        <About />
        <Certifications />
        <CodingProfiles />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <LeftSider />
    </div>
  )
}

export default Home
