import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const WritingPage = () => (
  <Layout>
    <SEO title="Contact Page" />
    <h1>Hi from the Contact</h1>
    <p>Welcome to Contact</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default WritingPage
