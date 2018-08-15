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
    const siteDescription = get(this, 'props.data.site.siteMetadata.description')
    

    return (
      <div>
         <Helmet>
        <title>{`${siteTitle} Developer and Speaker`}</title>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta property="og:title" content={`${siteTitle} Developer and Speaker`}/>
        <meta property="og:description" content={siteDescription}/>
        <meta property="og:image" content="http://www.johndpotts.com/profile-pic.png"/>
        <meta property="og:url" content={`http://www.johndpotts.com/about`}/>
        <meta name="twitter:card" content="summary"/>
        <meta property="og:type" content="article"/>
        <meta property="og:locale" content="en_US"/>
         <link rel="canonical" href={`http://www.johndpotts.com/about`}/>
        </Helmet>
        <h1 className="callout-txt" style={{ textAlign: 'center' }}>
          About Me
        </h1>

        <div>
          <img
            src={profilePic}
            alt={`John D Potts`}
            style={{
              display: 'block',
              marginRight: 'auto',
              marginLeft: 'auto',
              marginBottom: rhythm(2),
              width: rhythm(10),
              height: rhythm(10),
            }}
          />
          <h2>Hi, I'm John.</h2>
          <p>
            I started out in development in June of 2017. A self-taught coder, I
            began my first full-time development role in November 2017 and am
            currently a Front End Developer at Ally Financial. I work primarily
            on the front end, but have experience in server side languages
            (node, python and C#/.net) and databases as well. Outside of my
            career as a developer I enjoy giving back to the tech community
            through open source and teaching.
          </p>
          <p>
            I am a dad of 4, husband of 1, and a lifelong learner. I'm also a
            musician and love the outdoors, and my favorite comic strip is
            Calvin & Hobbes!
          </p>
          <p>
            Please feel free to hit me up on Github or Linkedin, or drop me an
            email at{' '}
            <a
              href="mailto:jdpotts189@gmail.com?Subject=Hi%20John"
              target="_top"
            >
              jdpotts189@gmail.com
            </a>. Thanks for stopping by!
          </p>
        </div>
      </div>
    )
  }
}

export default BlogAbout
