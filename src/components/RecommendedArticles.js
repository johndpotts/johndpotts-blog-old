import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import ArticleCard from './ArticleCard'
import "../styles/recommended-articles.scss"

const getPostsFromQuery =  (posts) => {
    if (posts) {
      return posts.edges
        .map(edge => edge.node)
        .map(node => Object.assign({}, node.frontmatter, node.fields, { excerpt: node.excerpt }))
    }
  
    return []
  }

const RecommendedArticlesComponent = ({ articles }) => (
  <section className="recommended-articles">
      <ul>
    {articles.map((article, i) => (
      <ArticleCard {...article} key={i}/>
    ))}
    </ul>
  </section>
)

// (1.) Query for articles
export default (props) => (
  <StaticQuery
    query={graphql`
      query SimilarArticles {    
        posts: allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: {
            frontmatter: {
              recommended: { eq: "true" }
            }
          }
          limit: 1000
        ) {
          edges {
            node {
                excerpt
              fields {
                slug
              }
              frontmatter {
                title
                date
                recommended
                featuredImage {
                    childImageSharp{
                        fluid(maxWidth: 100) {
                            src
                        }
                    }
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const { category, tags, currentArticleSlug } = props;

      // (2.) Marshall the response into articles
      const articles = getPostsFromQuery(data.posts);

      // (3.) just randomizing the recommended articles
      const recommendedArticles = articles
      .map((a) => ({sort: Math.random(), value: a}))
      .sort((a, b) => a.sort - b.sort)
      .map((a) => a.value)
      .slice(0,4)
      .filter(a => a.slug !== currentArticleSlug);

      // (4.) Render it
      return (
        <RecommendedArticlesComponent
          articles={recommendedArticles}
        />
      )
    }}
  />
)
