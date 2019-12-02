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
  border: 1px solid #7fdbff;
  border-radius: 4px;
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
function Tags(props) {
  const posts = props.data.allMarkdownRemark.edges
  const { tag } = props.pageContext
  return (
    <Layout>
      <FlexDiv>
        <h1>{`Available posts  in ${tag}`}</h1>
      </FlexDiv>
      <TagsDiv>
        {posts.map(({ node }, i) => (
          <TagsLink to={node.fields.slug} key={i}>
            {node.frontmatter.title}
          </TagsLink>
        ))}
      </TagsDiv>
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
