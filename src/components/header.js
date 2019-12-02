import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import SpaceTrev from "../images/SpaceTrevLogo.svg"

const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: transparent;
  min-width: 100vw;
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
`
const HeaderDiv = styled.div`
  flex: 50%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`
const LinkDiv = styled.ul`
  flex: 50%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  list-style: none;
`
const SpaceTrevLogo = styled(SpaceTrev)`
  height: 70px;
  width: 140px;
`
const LI = styled.li``
const Header = ({ siteTitle }) => (
  <>
    <NavBar>
      <HeaderDiv>
        <HeaderLink to="/">
          <SpaceTrevLogo />
        </HeaderLink>
      </HeaderDiv>

      <LinkDiv>
        <LI>
          <NavbarLink to="/projects">Projects</NavbarLink>
        </LI>
        <LI>
          <NavbarLink to="/blog">Blog</NavbarLink>
        </LI>
        <LI>
          <NavbarLink to="/photo">Photo</NavbarLink>
        </LI>
        <LI>
          <NavbarLink to="/contact">Contact</NavbarLink>
        </LI>
      </LinkDiv>
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
