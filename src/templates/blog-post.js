import React from "react"
import Layout from "../components/layout"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import PrevNext from "../components/prevnext"
import MetaTags from "../components/Metatags"
import Share from "../components/share"
import styled from "styled-components"

const BlogPostContent = styled.div`
  min-height: calc(100vh - 75px) !important;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`
const PostDiv = styled.div`
  display: flex;
  width: 70%;
  flex-direction: column;
  justify-content: center;
  padding: 40px 55px;
  border: 1px solid #7fdbff;
  border-radius: 4px;
  margin: 15px 0px 25px 0px;
  color: #fffffffa;
`
const TagDiv = styled.div`
  /* display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center; */
`
const H1 = styled.h1`
  font-weight: bolder;
  color: #ffffffc5;
  margin: 10px 0px;
  padding: 10px 47px;
  border: 2px solid #7fdbff;
  border-radius: 4px;
`
const TagA = styled.a`
  padding: 5px 6px;
  margin: 5px 3px;
  text-decoration: none;
  color: #fff;
  background: #4169e2;
  &:hover {
    background: #4169e2a5;
  }
`
const Span = styled.span``
function BlogPost(props) {
  const url = props.data.site.siteMetadata.siteUrl
  const thumbnail =
    props.data.markdownRemark.frontmatter.image &&
    props.data.markdownRemark.frontmatter.image.childImageSharp.resize.src
  const { title, image, tags } = props.data.markdownRemark.frontmatter
  const { prev, next } = props.pageContext
  return (
    <Layout>
      <MetaTags
        title={title}
        description={props.data.markdownRemark.excerpt}
        thumbnail={thumbnail && url + thumbnail}
        url={url}
        pathname={props.location.pathname}
      />
      <BlogPostContent>
        <H1>{title}</H1>
        {image && <Img fluid={image.childImageSharp.fluid} />}
        <PostDiv
          dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
        />
        <TagDiv>
          <Span>Tagged in </Span>
          {tags.map((tag, i) => (
            <TagA href={`/${tag}`} key={i}>
              {tag}
            </TagA>
          ))}
        </TagDiv>
        <Share title={title} url={url} pathname={props.location.pathname} />
        <PrevNext prev={prev && prev.node} next={next && next.node} />
      </BlogPostContent>
    </Layout>
  )
}

export default BlogPost

export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        title
        tags
        date
        image {
          childImageSharp {
            resize(width: 1000, height: 420) {
              src
            }
            fluid(maxWidth: 786) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`
