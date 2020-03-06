import React from "react"
import { graphql, StaticQuery } from "gatsby";
import Layout from "../components/Layout"
import BusinessCard from "../components/BusinessCard"
import PostListing from "../components/Posts/";
import Footer from "../components/Footer"

const BlogPosts = data => {
  return (
    <Layout>
    <BusinessCard />
    <div>
      <h1>Recent Articles</h1>
      <hr />
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <PostListing key={node.id} post={node} />
      ))}
    </div>
    <Footer />
  </Layout>
  )
};

export default () => (
  <StaticQuery
    query={graphql`
      query blogPostsQuery {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          filter: { frontmatter: { type: { eq: "blog" } } }
        ) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                category
                date
                desc
                title
              }
              html
              excerpt(pruneLength: 280)
            }
          }
        }
      }
    `}
    render={BlogPosts}
  />
)