import React from 'react'
import Navbar from './navbar'

const Header = () => {
  return (
    <div className='min-h-screen flex items-center overflow-hidden bg-center mb-4 bg-cover' style={{backgroundImage: "url('/header_img.png')"}} id='Header'>
        <Navbar/>
    </div>
  )
}

export default Header