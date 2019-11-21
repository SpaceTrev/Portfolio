import React from "react"

import Layout from "../components/layout"
import { LinkButton } from "../reusable"
import SEO from "../components/seo"
import styled from "styled-components"
const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
`
const Side = styled.div`
  flex: 0%;
  background-color: #f1f1f1;
  padding: 20px;
`
const FakeImg = styled.div`
  background-color: #aaa;
  width: 100%;
  padding: 20px;
`
const Main = styled.div`
  flex: 60%;
  background-color: white;
  padding: 20px;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Row>
      <Side>
        <h2>About Me</h2>
        <h5>Photo of me:</h5>
        <FakeImg style={{ height: 200 }}>Image</FakeImg>
        <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
        <h3>More Text</h3>
        <p>Lorem ipsum dolor sit ame.</p>
        <FakeImg style={{ height: 60 }}>Image</FakeImg>
        <br />
        <FakeImg style={{ height: 60 }}>Image</FakeImg>
        <br />
        <FakeImg style={{ height: 60 }}>Image</FakeImg>
      </Side>
      <Main>
        <h2>TITLE HEADING</h2>
        <h5>Title description, Dec 7, 2017</h5>
        <FakeImg style={{ height: 200 }}>Image</FakeImg>
        <p>Some text..</p>
        <p>
          Sunt in culpa qui officia deserunt mollit anim id est laborum
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco.
        </p>
        <br />
        <h2>TITLE HEADING</h2>
        <h5>Title description, Sep 2, 2017</h5>
        <FakeImg style={{ height: 200 }}>Image</FakeImg>
        <p>Some text..</p>
        <p>
          Sunt in culpa qui officia deserunt mollit anim id est laborum
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco.
        </p>
      </Main>
    </Row>
  </Layout>
)

export default IndexPage
