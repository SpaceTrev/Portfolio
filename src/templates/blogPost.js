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
const BackToWritingBtn = styled(Link)`
  height: 50px;
  width: 150px;
  border-radius: 4px;
  padding: 10px 20px;
  margin: 0px 10px 10px 10px;
  background: #14ccad33;
  text-decoration: none;
  color: #f1f1f1;
  &:hover {
    background: #14ccad;
  }
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
        {prev && (
          <BackToWritingBtn to={prev.frontmatter.path}>
            {prev.frontmatter.title}{" "}
            <span role="img" aria-label="point-left">
              👈{" "}
            </span>
            Previous
          </BackToWritingBtn>
        )}
        {next && (
          <BackToWritingBtn to={next.frontmatter.path}>
            Next{" "}
            <span role="img" aria-label="point-right">
              👉
            </span>
            {next.frontmatter.title}
          </BackToWritingBtn>
        )}
        <BackToWritingBtn to="/writing">Back To Writing</BackToWritingBtn>
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
