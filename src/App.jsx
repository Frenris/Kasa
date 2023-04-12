import React from 'react'
import Navbar from './components/Navbar'
import Banner from './layout/Banner'
import AppartmentGrid from "./components/AppartmentGrid"
import Main from "./layout/Main.jsx"
import Footer from "./layout/Footer.jsx"
import "./App.scss"

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
