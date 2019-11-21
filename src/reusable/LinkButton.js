import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const LinkStyle = styled(Link)`
  text-decoration: none !important;
  color: #ffffff;
  height: 200px;
  width: 250px;
  padding: 10px 20px;
  border: 0.5px solid #000;
  border-radius: 8%;
  background: #11f4f4 !important;
  margin-top: 100px;
`

const LinkButton = () => <LinkStyle to="/apps/">Click me</LinkStyle>

export default LinkButton
