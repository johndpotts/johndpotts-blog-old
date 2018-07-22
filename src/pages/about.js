import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'


import Bio from '../components/Bio'
import { rhythm } from '../utils/typography'

class BlogAbout extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (


      <div>

        <Helmet title={siteTitle} />
        <Bio/>

      <div>
      <p>
      Hi, I'm John. I love building things. I love to laugh. I love solving problems, working with a team, and learning new things every day.
I grew up in Seattle, lived in Florida, then discovered that Charlotte makes a great middle ground.


</p>
      <p>
      Why do I love coding?
      <ol>
      <li>It's where the practical and the creative collide.</li>
      <li>It offers a new challenge every day. </li>
      <li>You get to make cool stuff with nothing but your brain, a bunch of 1's and 0's, and regular conversations with google and stack overflow.</li>
      </ol>
      </p>
      </div>
      </div>
    )
  }
}

export default BlogAbout
