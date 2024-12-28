import React from 'react'
import Header from './components/Header'
import About from './components/about'
import Projects from './components/Projects'

const App = () => {
  return (
    <div className='overflow-hidden w-full'>
      <Header/>
      <About/>
      <Projects/>
    </div>
  )
}

export default App