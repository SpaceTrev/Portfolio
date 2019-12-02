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
  width: 50%;
  color: white;
  padding: 27.5px 20px;
  border-radius: 4px;
  text-decoration: none;
  text-align: center;
  &:hover {
    background: #ffffff20;
    color: #ffffffa5;
  }
`
const HeaderLink = styled(Link)`
  color: white;
  text-decoration: none;
  width: 250px;
  border-radius: 4px;
  &:hover {
    background: #ffffff20;
    margin-left: -5px;
  }
`
const HeaderDiv = styled.div`
  flex: 50%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`
const LinkDiv = styled.ul`
  /* flex: 50%; */
  display: flex;
  align-items: center;
  justify-content: flex-end;
  list-style: none;
  @media screen and (max-width: 611px) {
    display: none;
  }
`
// const MobileDropDown = styled.div``
const SpaceTrevLogo = styled(SpaceTrev)`
  margin-left: 47px;
  height: 70px;
  width: 140px;
`
const LI = styled.li``
const Header = ({ siteTitle }) => (
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
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
