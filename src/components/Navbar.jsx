import React from 'react'
import "../styles/Navbar.css"
import logo from "../assets/logo.png"

function Navbar() {
  return (
    <nav className='navbar'>
        <div className='navbar__logo'>
            <img src={logo} alt="Logo de Kasa" />
        </div>
        <div>
            Accueil
        </div>
        <div>
            A propos
        </div>
    </nav>
  )
}

export default Navbar