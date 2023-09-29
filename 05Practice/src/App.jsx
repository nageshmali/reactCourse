import React from "react"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Footer from "./components/Footer"
function App() {

  return (
    <>
      <Navbar/>
      <Home/>
      <Skills/>
      <Projects title = "My Projects" width = '0' />
      <Projects width = '96'/>
      <Projects width = '0' />
      <Projects width = '96'/>
      <Footer/>
    </>
  )
}

export default App
