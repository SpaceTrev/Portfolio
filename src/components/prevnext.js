import React from "react"
import styled from "styled-components"
const UL = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
`
const A = styled.a`
  text-decoration: none;
  color: #fff;
`
const LI = styled.li`
  margin: 5px;
  line-height: 20px;
`
const PrevNext = props => {
  const { prev, next } = props

  return (
    <UL>
      {prev && (
        <LI>
          <A href={prev.fields.slug}>👈 Prev: {prev.frontmatter.title}</A>
        </LI>
      )}
      {prev && next && <LI> {" | "}</LI>}
      {next && (
        <LI>
          <A href={next.fields.slug}> Next: {next.frontmatter.title} 👉</A>
        </LI>
      )}
    </UL>
  )
}

export default PrevNext
