import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

const BoxyBoi = styled.div`
  width: 200px;
  height: 200px;
  background-color: blue;
  display: inline-block;
  transition: transform 300ms ease-in-out;
`
const TriggaBoi = styled.div`
  width: 200px;
  height: 200px;
  border: 20px solid #4fe;
  background: #ddd;
  &:hover {
    transform: translate(200px, 150px) rotate(20deg);
  }
`
const Writing = () => (
  <Layout>
    <SEO title="Writings Page" />
  </Layout>
)

export default Writing
