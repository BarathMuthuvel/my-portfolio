import React from 'react'
import Header from '../../components/Header'
import MainBanner from '../../components/MainBanner'
import Skills from '../../components/Skills'
import Experience from '../../components/Experience'
import About from '../../components/About'
import Projects from '../../components/Projects'
import MyTestimonial from '../../components/MyTestimonial'
import Contact from '../../components/Contact'
import Footer from '../../components/Footer'

const page = () => {
  return (
    <div>
      <Header />
      <MainBanner />
      <Skills />
      <Experience />
      <About />
      <Projects />
      <MyTestimonial />
      <Contact />
      <Footer />
    </div>
  )
}

export default page
