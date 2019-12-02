import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"
const TagsDiv = styled.div`
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
  background: #4169e2;
  list-style: none;
  margin: 1rem;
  padding: 1rem 3rem;
  text-decoration: none;
  font-size: 1.1rem;
  color: #d3d3d3;
  &:hover {
    background: #4169e2a5;
  }
`
const FlexDiv = styled.div`
  display: flex;
  display: row;
  justify-content: center;
  align-items: center;
`
const FlexColumn = styled.div`
  min-height: calc(100vh - 75px) !important;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`
const H1 = styled.h1`
  padding: 5px 5px;
  @media screen and (max-width: 800px) {
    font-size: 20px !important;
  }
  @media screen and (max-width: 566px) {
    font-size: 16px !important;
  }
  @media screen and (max-width: 375px) {
    font-size: 14px !important;
  }
  @media screen and (max-width: 320px) {
    font-size: 12px !important;
  }
`
function Tags(props) {
  const posts = props.data.allMarkdownRemark.edges
  const { tag } = props.pageContext
  return (
    <Layout>
      <FlexColumn>
        <FlexDiv>
          <H1>{`Available posts with the tag: ${tag}`}</H1>
        </FlexDiv>
        <TagsDiv>
          {posts.map(({ node }, i) => (
            <TagsLink to={node.fields.slug} key={i}>
              {node.frontmatter.title}
            </TagsLink>
          ))}
        </TagsDiv>
      </FlexColumn>
    </Layout>
  )
}

export default Tags

export const query = graphql`
  query TagsQuery($tag: String!) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { eq: $tag } } }
    ) {
      edges {
        node {
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
