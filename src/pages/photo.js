import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Photo = () => (
  <Layout>
    <SEO title="Photos Page" />
    <h1>Hi from the Photos</h1>
    <p>Welcome to Photos</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Photo
