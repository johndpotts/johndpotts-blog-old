import React from 'react'
import Link from 'gatsby-link'
import styles from '../styles/global.css'
import { rhythm, scale } from '../utils/typography'
import Navigation from '../components/Topnav'
require('../styles/prism.css')

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    if (location.pathname == rootPath) {
      header = <div 
      style={{
        paddingTop: rhythm(1)
      }}
      ></div>
    } else {
      header = (
       <div></div>
      )
    }
    return (
      <div>
        <Navigation />
        {header}
        <div
          style={{
            marginLeft: 'auto',
            marginRight: 'auto',
            maxWidth: rhythm(24),
            padding: `${rhythm(2)} ${rhythm(3 / 4)}`,
          }}
        >
         
          {children()}
        </div>
      </div>
    )
  }
}

export default Template
