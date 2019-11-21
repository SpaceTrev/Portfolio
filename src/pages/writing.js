import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Writing = () => (
  <Layout>
    <SEO title="Writings Page" />
    <h1>Hi from the Writing</h1>
    <p>Welcome to writing</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Writing
