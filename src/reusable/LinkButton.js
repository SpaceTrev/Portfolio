import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const LinkStyle = styled(Link)`
  text-decoration: none !important;
  color: #ffffff;
  line-height: 30px;
  padding: 5px 15px;
  border: 0.5px solid #000;
  border-radius: 6px;
  text-align: center;
  background: #88f4f4 !important;
`

const LinkButton = () => <LinkStyle>Click me</LinkStyle>

export default LinkButton
