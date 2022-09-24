import React from 'react'

import logo from '../assets/logo.svg'
import hamburger from '../assets/icon-hamburger.svg'

function Navbar() {
  return (
    <nav className='nav'>
      <img className='nav-logo' src={logo} alt="" />

      <img className='nav-ham' src={hamburger} alt="" />

      <div className='nav-links'>
        <p className='nav-links-item'>About</p>
        <p className='nav-links-item'>Discover</p>
        <p className='nav-links-item'>Get Started</p>
      </div>
    </nav>
  )
}

export default Navbar