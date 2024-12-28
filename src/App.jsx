import React from 'react'
import Header from './components/Header'
import About from './components/about'

const App = () => {
  return (
    <div className='overflow-hidden w-full'>
      <Header/>
      <About/>
    </div>
  )
}

export default App