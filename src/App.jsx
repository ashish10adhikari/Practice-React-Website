import React from 'react'
import Header from './components/Header'
import About from './components/about'
import Projects from './components/Projects'
import Testimonials from './components/testimonials'
import Contact from './components/Contact'

const App = () => {
  return (
    <div className='overflow-hidden w-full'>
      <Header/>
      <About/>
      <Projects/>
      <Testimonials/>
      <Contact/>
    </div>
  )
}

export default App