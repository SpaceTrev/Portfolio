import React from "react"
import { Router } from "@reach/router"
import Box from "./box"
import Landing from "./landing"
import Home from "./home"
import Contact from "./contact"
import Projects from "./projects"
import Photo from "./photo"
import Blog from "./blog"
import TagsPage from "./tags"
import NotFoundPage from "./404"

const App = () => {
  return (
    <Router>
      <Landing path="/" />
      <Box path="/box" />
      <Home path="/home">
        <Contact path="/contact" />
        <Projects path="/projects" />
        <Photo path="/photo" />
        <Blog path="/blog" />
        <TagsPage path="tags" />
        <NotFoundPage path="/404" />
      </Home>
    </Router>
  )
}

export default App
