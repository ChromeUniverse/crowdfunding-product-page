import React from 'react'
import MobileMenu from './MobileMenu'

import logo from '../assets/logo.svg'
import hamburger from '../assets/icon-hamburger.svg'
import close from '../assets/icon-close-menu.svg'

function Navbar({showMobileMenu, openMobileMenu, closeMobileMenu}) {
  return (
    <nav className="nav">
      {showMobileMenu && <div className="nav-mobile-bg-gradient"></div>}

      <img className="nav-logo" src={logo} alt="" />

      {showMobileMenu ? (
        <img width={18} className="nav-ham" src={close} alt="" onClick={closeMobileMenu}/>
      ) : (
        <img className="nav-ham" src={hamburger} alt="" onClick={openMobileMenu}/>
      )}

      {showMobileMenu && <MobileMenu />}

      <div className="nav-links">
        <p className="nav-links-item">About</p>
        <p className="nav-links-item">Discover</p>
        <p className="nav-links-item">Get Started</p>
      </div>
    </nav>
  );
}

export default Navbar