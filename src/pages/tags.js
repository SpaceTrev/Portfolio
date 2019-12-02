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
  border: 1px solid #7fdbff;
  border-radius: 4px;
  list-style: none;
  margin: 1rem;
  padding: 1rem 3rem;
  text-decoration: none;
  font-size: 1.1rem;
  color: #d3d3d3;
  &:hover {
    background: #ffffff20;
  }
`
const FlexDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const AllTagsDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-height: calc(100vh - 75px);
`
function TagsPage(props) {
  const data = props.data.allMarkdownRemark.group

  return (
    <Layout>
      <AllTagsDiv>
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
      </AllTagsDiv>
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
