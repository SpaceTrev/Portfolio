import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"

const Tags = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
  align-items: center;
  flex-wrap: wrap;
`

const TagsLink = styled(Link)`
  margin-bottom: 2rem;
  list-style: none;
  background: linear-gradient(to right, #9d50bb, #6e48aa);
  border: 1px solid #ffff;
  border: 1px solid #ffff;
  margin: 1rem;
  padding: 1rem 3rem;
  text-decoration: none;
  font-size: 1.1rem;
  color: #d3d3d3;
`
const FlexDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
function TagsPage(props) {
  const data = props.data.allMarkdownRemark.group

  return (
    <Layout>
      <FlexDiv>
        <h1>All tags</h1>
      </FlexDiv>
      <Tags>
        {data.map(tag => (
          <TagsLink to={`/${tag.fieldValue}`}>
            {tag.fieldValue} {`(${tag.totalCount})`}
          </TagsLink>
        ))}
      </Tags>
    </Layout>
  )
}

export default TagsPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
