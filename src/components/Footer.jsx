import React from 'react'
import logo from "../assets/logo_black.png"
import "../styles/Footer.css"

function Footer() {
  return (
    <div className='footer'>
        <div className='footer__logo'>
            <img src={logo} alt="logo de Kasa" />
        </div>
        <div className='footer__text'>
        © 2020 Kasa. All rights reserved
        </div>
    </div>
  )
}

export default Footer