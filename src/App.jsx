import React from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import AppartmentGrid from "./components/AppartmentGrid"
import Main from "./components/Main.jsx"
import Footer from "./components/Footer.jsx"
import "./App.css"

function App() {
  return (
    <div>
        <Navbar />
        <Main>
          <Banner />
          <AppartmentGrid />
        </Main>
        <Footer />
    </div>
  )
}

export default App
