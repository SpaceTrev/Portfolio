import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeaderCard from "../components/HeaderCard"
import AppDiv from "../reusable/AppDiv"

const Projects = () => (
  <Layout>
    <SEO title="Projects Page" />
    <AppDiv>
      <HeaderCard
        to="photo"
        name="Project"
        greeting="Welcome To My Project Page"
        status="Page Under Construction"
      />
    </AppDiv>
  </Layout>
)

export default Projects
