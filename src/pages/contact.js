import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeaderCard from "../components/HeaderCard"
import AppDiv from "../reusable/AppDiv"
const Contact = () => (
  <Layout>
    <SEO title="contact" />
    <AppDiv>
      <HeaderCard
        to="projects"
        name="Contact"
        greeting="Welcome To My Contact Page"
        status="It is currently under construction"
      />
    </AppDiv>
  </Layout>
)

export default Contact
