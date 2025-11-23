import React from 'react'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Contact from './components/Contact'

export default function App(){
  return (
    <div>
      <Hero />
      <div className="container">
        <Projects />
        <Skills />
        <Experience />
        <Contact />
        <footer>© 2025 Adhi Shankar — Built with React & Vite</footer>
      </div>
    </div>
  )
}