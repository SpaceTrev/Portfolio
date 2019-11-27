import React from "react"
import { Router } from "@reach/router"
import Box from "./box"
import Landing from "./landing"
import Contact from "./contact"
import Projects from "./projects"
import Photo from "./photo"
import Writing from "./writing"
import NotFoundPage from "./404"

const App = () => {
  return (
    <Router>
      <Landing path="/" />
      <Box path="/box" />
      <Contact path="/contact" />
      <Projects path="/projects" />
      <Photo path="/photo" />
      <Writing path="/writing" />
      <NotFoundPage path="/404" />
    </Router>
  )
}

export default App
