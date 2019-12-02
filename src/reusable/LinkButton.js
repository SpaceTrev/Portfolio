import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const LinkStyle = styled(Link)`
  text-decoration: none !important;
  color: #ffffff;
  line-height: 30px;
  padding: 5px 15px;
  border-radius: 6px;
  text-align: center;
  background: #2e183b;
  &:hover {
    background: #2e183ba5;
    color: #ffffffa5;
  }
`

const LinkButton = props => <LinkStyle to={props.goTo}>{props.text}</LinkStyle>

export default LinkButton
