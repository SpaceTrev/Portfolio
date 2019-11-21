import React from "react"
import { Router } from "@reach/router"
import {
  Landing,
  Contact,
  Projects,
  Photo,
  Writing,
  NotFoundPage,
} from "./exports"

const App = () => {
  return (
    <Router>
      <Landing path="/" />
      <Contact path="/contact" />
      <Projects path="/projects" />
      <Photo path="/photo" />
      <Writing path="/writing" />
      <NotFoundPage path="/404" />
    </Router>
  )
}

export default App
