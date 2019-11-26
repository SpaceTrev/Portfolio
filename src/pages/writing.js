import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"
import FlexRow from "../reusable/FlexRow"
import Layout from "../components/layout"
const BlogCard = styled.div`
  width: 250px;
  height: 250px;
  background: #5bb1cd;
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  margin: 20px 20px;
  border: outset 1px #98f22f;
  border-radius: 4px;
`

const BlogBox = styled.div`
  display: flex;
  /* flex-wrap: wrap; */
  list-style: none;
  justify-content: flex-start;
  align-items: center;
  margin: 0;
  padding: 0;
`
const BlogCardContent = styled.div``
const BlogCardImage = styled.div``
const BlogCardText = styled.p``
const BlogCardBtn = styled(Link)`
  height: 20px;
  width: 150px;
  background: #0c9d00;
  border-radius: 4px;
  color: #fff;
  text-decoration: none;
  text-align: center;
  &:hover {
    background: #0c9d0033;
  }
`

const Writing = ({ data }) => {
  const { edges } = data.allMarkdownRemark

  return (
    <Layout>
      <BlogBox>
        {edges.map(edge => {
          const { frontmatter } = edge.node
          return (
            <BlogCard key={frontmatter.path}>
              <FlexRow>
                <p>{frontmatter.excerpt}</p>
              </FlexRow>
              <FlexRow>
                <small>
                  {" "}
                  <em>published on</em> {frontmatter.date}
                </small>
              </FlexRow>
              <FlexRow>
                <BlogCardBtn to={frontmatter.path}>
                  {frontmatter.title}
                </BlogCardBtn>
                &nbsp;
              </FlexRow>
              <br />
            </BlogCard>
          )
        })}
      </BlogBox>
    </Layout>
  )
}

export const query = graphql`
  query HomePageQuery {
    allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
            tags
            excerpt
          }
        }
      }
    }
  }
`

export default Writing
