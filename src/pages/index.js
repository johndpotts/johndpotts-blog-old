import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'
import Bio from '../components/Bio'
import typography from '../utils/typography'
import Layout from '../components/Layout'
const rhythm = typography.rhythm;
const scale = typography.scale

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')
    const siteDescription = get(this, 'props.data.site.siteMetadata.description')

    return (

    <Layout location={this.props.location}>
      <div>

        <Helmet>
        <title>{`${siteTitle} Developer and Speaker`}</title>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta property="og:title" content={`${siteTitle} Developer and Speaker`}/>
        <meta property="og:description" content={`${siteDescription}`}/>
        <meta property="og:image" content={`https://www.johndpotts.com/profile-pic.png`}/>
        <meta property="og:url" content={`https://www.johndpotts.com`}/>
        <meta name="twitter:card" content="summary"/>
        <meta property="og:type" content="article"/>
        <meta property="og:locale" content="en_US"/>
        <link rel="shortcut icon" href="/favicon.png"/>
         <link rel="canonical" href={`https://www.johndpotts.com`}/>
        </Helmet>
        <Bio/>

        {posts.map(({ node }) => {
          const title = get(node, 'frontmatter.title') || node.fields.slug
          return (
            <div style={{textAlign:'center', marginBottom: rhythm(3)}} key={node.fields.slug}>

               <h3
                 style={{
                   marginBottom: rhythm(1 / 4),
                 }}
               >
                 <Link style={{ boxShadow: 'none' }} to={node.fields.slug}>
                   {title}
                 </Link>
               </h3>
               <Link style={{ boxShadow: 'none' }} to={node.fields.slug}>
                <Img style ={{margin:'auto',maxWidth:'400px'}} fluid={node.frontmatter.featuredImage.childImageSharp.sizes} />
                 </Link>
              <small>{node.frontmatter.date}</small>
              <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            </div>
          )
        })}
      </div>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title,
        description
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
            featuredImage {
              childImageSharp{
                  sizes(maxWidth: 630) {
                      ...GatsbyImageSharpSizes
                  }
              }
          }
          }
        }
      }
    }
  }
`
