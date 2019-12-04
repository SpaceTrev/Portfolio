import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import SpaceTrev from "../../images/SpaceTrevLogo.svg"

const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: transparent;
  min-width: 100vw;
  @media screen and (max-width: 740px) {
    display: none;
  }
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
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`

const LinkDiv = styled.ul`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  list-style: none;
`

const LI = styled.li``

const SpaceTrevLogo = styled(SpaceTrev)`
  margin-left: 47px;
  height: 70px;
  width: 140px;
`

const MobileNavBar = styled.div`
  display: none;
  @media screen and (max-width: 740px) {
    display: block !important;
  }
`
const MobileNavbarLink = styled(Link)`
  width: 50%;
  color: white;
  padding: 10px 10px;
  border-radius: 4px;
  text-decoration: none;
  text-align: center;
  &:hover {
    background: #ffffff20;
    color: #ffffffa5;
  }
`
const MobileHeaderDiv = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`
const MobileLinkDiv = styled.ul`
  width: 100%;
  flex-direction: row;
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  padding: 0px;
`
const MobileHeaderLink = styled(Link)`
  color: white;
  text-decoration: none;
  border-radius: 4px;
  &:hover {
    background: #ffffff20;
  }
`
const MobileSpaceTrevLogo = styled(SpaceTrev)`
  height: 70px;
  width: 140px;
`
// const MobileDropDown = styled.div``

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
          <MobileNavbarLink to="/home">Home</MobileNavbarLink>
        </LI>
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
    <MobileNavBar>
      <MobileHeaderDiv>
        <MobileHeaderLink to="/">
          <MobileSpaceTrevLogo />
        </MobileHeaderLink>
      </MobileHeaderDiv>
      <MobileLinkDiv>
        <LI>
          <MobileNavbarLink to="/home">Home</MobileNavbarLink>
        </LI>
        <LI>
          <MobileNavbarLink to="/projects">Projects</MobileNavbarLink>
        </LI>
        <LI>
          <MobileNavbarLink to="/blog">Blog</MobileNavbarLink>
        </LI>
        <LI>
          <MobileNavbarLink to="/photo">Photo</MobileNavbarLink>
        </LI>
        <LI>
          <MobileNavbarLink to="/contact">Contact</MobileNavbarLink>
        </LI>
      </MobileLinkDiv>
    </MobileNavBar>
  </>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
