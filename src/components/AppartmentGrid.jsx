import React from 'react'
import '../styles/AppartmentGrid.css'
import Appartment from "./Appartment.jsx"

function AppartmentGrid() {
  return (
    <div className="grid">
        <Appartment />
        <Appartment />
        <Appartment />
        <Appartment />
    </div>
  )
}

export default AppartmentGrid