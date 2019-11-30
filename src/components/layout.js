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
  margin-bottom: 10px;
  margin-top: -60px;
  @media screen and (max-width: 700px) {
    margin-top: 0px;
  }
`
const Content = styled.div`
  min-height: calc(100vh - 210px);
  width: 100vw;
  display: flex;
  flex-direction: column;
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
    <div>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Content>
        <main>{children}</main>
      </Content>
      <FooterDiv>
        <PageFooter>
          Built in {new Date().getFullYear()} by Space Trev
        </PageFooter>
      </FooterDiv>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
