import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"

const TextBox = styled.div`
  width: 500px;
`
const BlogBox = styled.div`
  width: 500px;
  height: 1000px;
  text-align: center;
`
const FlexBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
const BlogPostTemplate = ({ data, pathContext }) => {
  const title = data.markdownRemark.frontmatter.title
  const date = data.markdownRemark.frontmatter.date
  const html = data.markdownRemark.html
  const { next, prev } = pathContext

  return (
    <FlexBox>
      <BlogBox>
        <h1>{title}</h1>
        <div>
          <em>{date}</em>
        </div>
        <br />
        <TextBox
          className="blogpost"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <p>
          {prev && (
            <Link to={prev.frontmatter.path}>
              {prev.frontmatter.title}{" "}
              <span role="img" aria-label="point-left">
                👈{" "}
              </span>
              Previous
            </Link>
          )}
        </p>
        <p>
          {next && (
            <Link to={next.frontmatter.path}>
              Next{" "}
              <span role="img" aria-label="point-right">
                👉
              </span>
              {next.frontmatter.title}
            </Link>
          )}
        </p>
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
