import React from "react"
import { Router, Location } from "@reach/router"
import Box from "./box"
import Landing from "./landing"
import Home from "./home"
import Contact from "./contact"
import Projects from "./projects"
import Photo from "./photo"
import Blog from "./blog"
import TagsPage from "./tags"
import NotFoundPage from "./404"
import { TransitionGroup, CSSTransition } from "react-transition-group"

const App = () => {
  return (
    <Location>
      {({ location }) => (
        <TransitionGroup className="transition-group">
          <CSSTransition key={location.key} classNames="fade" timeout={5000}>
            <Router location={location}>
              <Landing path="/" />
              <Box path="/box" />
              <Home path="/home" />
              <Contact path="/contact" />
              <Projects path="/projects" />
              <Photo path="/photo" />
              <Blog path="/blog/" />
              <TagsPage path="tags" />
              <NotFoundPage path="/404" />
            </Router>
          </CSSTransition>
        </TransitionGroup>
      )}
    </Location>
  )
}

export default App
