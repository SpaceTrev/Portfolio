import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0;
  padding: 0;
  list-style: none;
`
const ListItem = styled.li`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  padding: 0.5em;
  max-height: 260px;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 30%;
  @media screen and (max-width: 1245px) {
    width: 40%;
  }
  @media screen and (max-width: 998px) {
    width: 60%;
  }
`
const ListContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5em 0em;
  width: 100%;
  border-radius: 4px;
  border: 1px solid #7fdbff;
  background: #ffffff00;
  &:hover {
    background: #ffffff20;
  }
`
const PostLink = styled(Link)`
  color: #ffffffa5;
  text-decoration: none;
`
const P = styled.div`
  max-height: 100%;
  padding: 10px 10px;
  margin: 10px 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  @media screen and (max-width: 665px) {
    font-size: 12px;
  }
  @media screen and (max-width: 325px) {
    white-space: nowrap;
  }
`

const Span = styled.span`
  text-align: center;
  font-weight: bold;
  padding: 5px 12px;
  border: 0.5px solid #7fdbff;
  border-radius: 2px;
  @media screen and (max-width: 665px) {
    font-size: 12px;
  }
  @media screen and (max-width: 325px) {
    font-size: 10px;
  }
  @media screen and (max-width: 300px) {
    padding: 5px 8px;
  }
`
const SpanContainer = styled.div`
  display: flex;
  justify-content: center;
`
const H2 = styled.h2`
  text-align: center;
  margin: 5px 0px;
  padding: 5px 5px;
  @media screen and (max-width: 665px) {
    font-size: 18px;
  }
  @media screen and (max-width: 400px) {
    font-size: 16px;
  }
  @media screen and (max-width: 325px) {
    font-size: 14px;
  }
`
const BlogDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-height: calc(100vh - 75px);
`
const Blog = props => {
  const postList = props.data.allMarkdownRemark
  return (
    <Layout>
      <BlogDiv>
        <H2>A collection of experiences...</H2>
        <List>
          {postList.edges.map(({ node }, i) => (
            <ListItem>
              <ListContent>
                <PostLink to={node.fields.slug} key={i}>
                  <H2>{node.frontmatter.title}</H2>
                  <SpanContainer>
                    <Span>{node.frontmatter.date}: </Span>
                  </SpanContainer>
                  <P>{node.excerpt}</P>
                </PostLink>
              </ListContent>
            </ListItem>
          ))}
        </List>
      </BlogDiv>
    </Layout>
  )
}

export default Blog

export const listQuery = graphql`
  query ListQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          fields {
            slug
          }
          excerpt(pruneLength: 200)
          frontmatter {
            date(formatString: "MMMM Do YYYY")
            title
          }
        }
      }
    }
  }
`
