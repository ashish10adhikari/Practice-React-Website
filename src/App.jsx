import React from 'react'
import Header from './components/Header'
import About from './components/about'
import Projects from './components/Projects'
import Testimonials from './components/testimonials'

const App = () => {
  return (
    <div className='overflow-hidden w-full'>
      <Header/>
      <About/>
      <Projects/>
      <Testimonials/>
    </div>
  )
}

export default App