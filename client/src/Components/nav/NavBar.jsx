import React from 'react'
import NavLogo from './NavLogo'
import NavLinks from './NavLinks'
import NavIcons from './NavIcons'

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLogo />
      <NavLinks />
      <NavIcons />
    </div>
  )
}

export default NavBar
