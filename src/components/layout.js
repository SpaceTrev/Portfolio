import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Header from "./header"
import "./layout.css"
const PageFooter = styled.footer`
  position: fixed;
  bottom: 10px;
  display: flex;
  justify-content: center !important;
  align-items: center;
`
const Content = styled.div`
  display: flex;
  flex-direction: row;
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
