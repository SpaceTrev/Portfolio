import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Header from "./header"

const Content = styled.div`
  min-height: calc(100vh - 75px);
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const Body = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  color: #fff;
  background: #43c6ac; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to top,
    #191654,
    #43c6ac
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to top,
    #191654,
    #43c6ac
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  margin: 0;
  font-family: Andale Mono, monospace;
  min-width: 100vw;
  min-height: 100vh;
  overflow-x: hidden;
  box-sizing: border-box;
`
const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Body>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Content>
        <main>{children}</main>
      </Content>
    </Body>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
