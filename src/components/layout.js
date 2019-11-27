import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Header from "./header"
import "./layout.css"
const PageFooter = styled.footer`
  display: flex;
`
const FooterDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: -50px;
`
const Content = styled.div`
  height: calc(100vh - 220px);
  width: 100vw;
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
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Content>
        <main>{children}</main>
      </Content>
      <FooterDiv>
        <PageFooter>
          Built in {new Date().getFullYear()} by Space Trev
        </PageFooter>
      </FooterDiv>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
