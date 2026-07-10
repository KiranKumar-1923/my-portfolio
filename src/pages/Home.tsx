import React from 'react'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Skills from '@/components/sections/Skills'
import Experience from '@/components/sections/Experience'
import Projects from '@/components/sections/Projects'
import Certifications from '@/components/sections/Certifications'
import CodingProfiles from '@/components/sections/CodingProfiles'
import Achievements from '@/components/sections/Achievements'
import BlogPreview from '@/components/sections/BlogPreview'
import FAQ from '@/components/sections/FAQ'
import Contact from '@/components/sections/Contact'

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Certifications />
      <CodingProfiles />
      <Achievements />
      <BlogPreview />
      <FAQ />
      <Contact />
    </>
  )
}

export default Home
