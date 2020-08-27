import React from 'react'
import typography from '../utils/typography'
import Topnav from './Topnav'
require('../styles/prism.css')
const rhythm = typography.rhythm;

class Layout extends React.Component {
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
        <Topnav />
        header()
        <div
          style={{
            marginLeft: 'auto',
            marginRight: 'auto',
            maxWidth: rhythm(24),
            padding: `${rhythm(2)} ${rhythm(3 / 4)}`,
          }}
        >

          {children}
        </div>
      </div>
    )
  }
}

export default Layout
