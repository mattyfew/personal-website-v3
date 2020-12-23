import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

const Music = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Music - Matt Fewer`

  console.log(location)

  return <Layout location={location} title={siteTitle}><h1>Music Page</h1></Layout>
}

export default Music

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
