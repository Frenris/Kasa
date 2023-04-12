import React from 'react'
import '../styles/Main.scss'

function Main(props) {
    const children = props.children;
  return (
    <div className = "main">{...children}</div>
  )
}

export default Main