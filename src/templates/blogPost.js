import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"
import FlexRow from "../reusable/FlexRow"

const TextBox = styled.div`
  margin: 0px 40px 10px 40px;
`
const BlogBox = styled.div`
  text-align: center;
  max-width: 800px;
`
const FlexBox = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
const BackToBlogBtn = styled(Link)`
  border-radius: 4px;
  padding: 10px 20px;
  line-height: 10px;
  margin: 0px 10px 10px 10px;
  background: #14ccad33;
  text-decoration: none;
  color: #f1f1f1;
  &:hover {
    background: #14ccad;
  }
`
const FlexButtonBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
const BlogPostTemplate = ({ data, pageContext }) => {
  const title = data.markdownRemark.frontmatter.title
  const date = data.markdownRemark.frontmatter.date
  const html = data.markdownRemark.html
  const { next, prev } = pageContext

  return (
    <FlexBox>
      <BlogBox>
        <h1>{title}</h1>
        <div>
          <em>{date}</em>
        </div>
        <br />
        <TextBox dangerouslySetInnerHTML={{ __html: html }} />
        <FlexButtonBox>
          <FlexRow>
            {prev && (
              <BackToBlogBtn to={prev.frontmatter.path}>
                <span role="img" aria-label="point-left">
                  👈{" "}
                </span>
                Previous
              </BackToBlogBtn>
            )}
            {next && (
              <BackToBlogBtn to={next.frontmatter.path}>
                Next{" "}
                <span role="img" aria-label="point-right">
                  👉
                </span>
              </BackToBlogBtn>
            )}
            <BackToBlogBtn to="/blog">Back To Blog</BackToBlogBtn>
          </FlexRow>
        </FlexButtonBox>
      </BlogBox>
    </FlexBox>
  )
}

export const postQuery = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM, DD, YYYY")
        path
        tags
        excerpt
      }
    }
  }
`

export default BlogPostTemplate
