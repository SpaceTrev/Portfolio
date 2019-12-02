import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeaderCard from "../components/HeaderCard"
import AppDiv from "../reusable/AppDiv"

const Home = () => (
  <Layout>
    <SEO title="Projects Page" />
    <AppDiv>
      <HeaderCard
        to="/projects"
        name="Home"
        greeting="Welcome To my Home Page"
        status="Page Under Construction"
      />
    </AppDiv>
  </Layout>
)

export default Home
