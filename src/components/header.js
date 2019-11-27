import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import SpaceTrev from "../images/SpaceTrevLogo.svg"
const SpaceHeader = styled.header`
  background: linear-gradient(125deg, #07bdea, #aad4d1, #b10af9);
  color: #ffffff;
  width: 100vw;
  display: flex;
  text-align: center;
  padding: 20px;
`
const NavBar = styled.div`
  display: flex;
  background: #333;
  text-align: center;
  justify-content: center;
`
const HeaderDiv = styled.div`
  margin: 0 auto;
`
const HeaderTitle = styled.h1`
  margin: 0;
`
const NavbarLink = styled(Link)`
  color: white;
  padding: 14px 20px;
  text-decoration: none;
  text-align: center;
  &:hover {
    background-color: #ddd;
    color: black;
  }
`
const HeaderLink = styled(Link)`
  color: white;
  text-decoration: none;
  display: flex;
  justify-content: center;
`
const Header = ({ siteTitle }) => (
  <>
    <SpaceHeader>
      <HeaderDiv>
        <HeaderTitle>
          <HeaderLink to="/">
            <SpaceTrev />
          </HeaderLink>
        </HeaderTitle>
      </HeaderDiv>
    </SpaceHeader>
    <NavBar>
      <NavbarLink to="/projects">Projects</NavbarLink>
      <NavbarLink to="/blog">Blog</NavbarLink>
      <NavbarLink to="/photo">Photo</NavbarLink>
      <NavbarLink to="/contact">Contact</NavbarLink>
    </NavBar>
  </>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
