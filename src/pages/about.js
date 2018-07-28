import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import profilePic from '../assets/profile-pic.jpg'


import Bio from '../components/Bio'
import { rhythm } from '../utils/typography'

class BlogAbout extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (


      <div>

        <Helmet title={siteTitle} />
      <h1 className="callout-txt"
      style = {{textAlign:'center'}}
      >About Me</h1>

      <div>
      <img
      src={profilePic}
      alt={`John D Potts`}
      style={{
display:'block',
marginRight: 'auto',
        marginLeft:'auto',
        marginBottom:  rhythm(2),
        width: rhythm(10),
        height: rhythm(10),
      }}
      />
      <h2>Hi, I'm John.</h2>
        <p>
      I started out in development in June of 2017. A self-taught developer, I began my first full-time development role in November 2017 and am currently a Front End Developer at Ally Financial.
      I work primarily on the front end, but have experience in python and C#/.net as well. Outside of my career as a developer I enjoy contributing to open source and teaching / giving tech talks.

          </p>
          <p>
          I am a dad of 4, husband of 1, and a lifelong learner. I'm also a musician and love the outdoors, and my favorite comic strip is Calvin & Hobbes!
</p><p>
          Please feel free to hit me up on Github or Linkedin, or drop me an email at <a href="mailto:jdpotts189@gmail.com?Subject=Hi%20John" target="_top">jdpotts189@gmail.com</a>. Thanks for stopping by!
          </p>
      </div>
      </div>
    )
  }
}

export default BlogAbout
