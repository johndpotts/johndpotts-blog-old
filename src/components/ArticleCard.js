import React, { Component } from 'react'
import Link from 'gatsby-link'
import '../styles/article-card.scss'

const ArticleCard = (props) => {
    const {
      title,
      featuredImage,
      slug,
      date,
      updated,
      description,
    } = props;
    return (
      <div>
        <Link to={slug} className="article-card">
          <img src={featuredImage.childImageSharp.fluid.src}/>
        <div className="article-card__text-container">
          <span className="article-card__title">{title}</span>
          <span className="article-card__date">{date}</span>
        </div>
        </Link>
      </div>
    )
  }
  
  export default ArticleCard;