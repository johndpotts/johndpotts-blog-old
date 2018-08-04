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

    if (location.pathname === rootPath) {
      header = <div />
    } else {
      header = (
        <h3
          style={{
            fontFamily: 'Montserrat, sans-serif',
            marginTop: rhythm(3),
            marginBottom: rhythm(-1),
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
            }}
            to={'/'}
          >
            John D Potts
          </Link>
        </h3>
      )
    }
    return (
      <div>
        <Navigation />
        <div
          style={{
            marginLeft: 'auto',
            marginRight: 'auto',
            maxWidth: rhythm(24),
            padding: `${rhythm(3)} ${rhythm(3 / 4)}`,
          }}
        >
          {header}
          {children()}
        </div>
      </div>
    )
  }
}

export default Template
