import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

const iframeStyle = {
  fontSize: "10px",
  color: "#cccccc",
  lineBreak: "anywhere",
  wordBreak: "normal",
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
  fontFamily:
    "Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif",
  fontWeight: 100
}

const linkStyle = { color: "#cccccc", textDecoration: "none" }


const Music = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Music - Matt Fewer`

  console.log(location)

  return (<Layout location={location} title={siteTitle}>
    <h1>Music Page</h1>
    <iframe width="100%" height="166" scrolling="no" frameBorder="no" allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/799539913&color=%23b04100&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
    <div
      style={iframeStyle}>
      <a href="https://soundcloud.com/matt-fewer" title="Matt Fewer" target="_blank"
         style={linkStyle}>Matt Fewer</a> · <a
      href="https://soundcloud.com/matt-fewer/easter-quarantine" title="Easter Quarantine" target="_blank"
      style={linkStyle}>Easter Quarantine</a></div>
  </Layout>)
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
