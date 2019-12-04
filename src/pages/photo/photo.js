import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import HeaderCard from "../../reusable/HeaderCard"
import AppDiv from "../../reusable/AppDiv"

const Photo = () => (
  <Layout>
    <SEO title="Photos Page" />
    <AppDiv>
      <HeaderCard
        to="/home"
        name="Photo"
        greeting="Welcome To My Photo Page"
        status="Page Under Construction"
      />
    </AppDiv>
  </Layout>
)

export default Photo
