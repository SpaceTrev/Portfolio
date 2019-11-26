import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Header from "./header"
import "./layout.css"
const PageFooter = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
`
const Content = styled.div`
  min-height: calc(100vh - 240px);
  min-width: 100vw;
  display: flex;
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
        <PageFooter>
          © {new Date().getFullYear()}, Built by Space Trev
        </PageFooter>
      </Content>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
