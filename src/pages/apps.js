import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AppsPage = () => (
  <Layout>
    <SEO title="Apps Page" />
    <h1>Hi from the Apps</h1>
    <p>Welcome to Apps</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default AppsPage
