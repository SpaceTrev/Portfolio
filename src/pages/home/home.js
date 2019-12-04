import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import AppDiv from "../../reusable/AppDiv"
import AboutMeCard from "../../components/about"
const Home = () => (
  <Layout>
    <SEO title="Home Page" />
    <AppDiv>
      <AboutMeCard />
    </AppDiv>
  </Layout>
)

export default Home
