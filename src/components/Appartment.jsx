import React from 'react'
import "../styles/Appartment.scss"
import {Link} from "react-router-dom"

function Appartment() {
  return (
    <div className='appartment'>
      <Link to ="/flat">
        <div className="appartment__subtitle">Titre de la location</div>
      </Link>
    </div>
  )
}

export default Appartment