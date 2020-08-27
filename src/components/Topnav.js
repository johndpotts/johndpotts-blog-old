import React, { Component } from 'react'
import Link from 'gatsby-link'
import colors from '../utils/colors'
import styles from '../styles/global.scss'
import typography from '../utils/typography'

const rhythm = typography.rhythm;
const scale = typography.scale

class Topnav extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mobileActive: false,
    }
    this.toggleNav = this.toggleNav.bind(this)
  }

  toggleNav() {
    if (this.state.mobileActive) {
      this.setState({ mobileActive: false })
    } else {
      this.setState({ mobileActive: true })
    }
  }

  render() {
    return (
      <nav>
        <div className="full-nav">
          <ul>
            <li>
              <Link to="/">John D Potts</Link>
            </li>
            <div>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <a
                  className="no-underline"
                  href="https://twitter.com/johndpotts"
                >
                  <i className="fa fa-twitter " /> &nbsp;&nbsp;
                </a>
              </li>
              <li>
                <a
                  className="no-underline"
                  href="https://www.linkedin.com/in/jdpotts189/"
                >
                  <i className="fa fa-linkedin " /> &nbsp;&nbsp;
                </a>
              </li>
              <li>
                <a
                  className="no-underline"
                  href="https://github.com/johndpotts"
                >
                  <i className="fa fa-github " /> &nbsp;&nbsp;
                </a>
              </li>
            </div>
          </ul>
        </div>
        <div className="mobile-nav">
          <ul>
            <li>
              <Link style={{ color: '#FFF' }} to="/">
                John D Potts
              </Link>
            </li>
            <li>
              <button
                onClick={this.toggleNav}
                role="button"
                tabIndex="0"
                style={{
                  display: 'block',
                  color: '#FFF',
                  backgroundColor: '#666666',
                  borderWidth: '0',
                  cursor: 'pointer',
                }}
                onKeyPress={this.toggleNav}
              >
                MENU
              </button>
            </li>
          </ul>
        </div>
        {this.state.mobileActive && (
          <div className="mobileStyle">
            <ul>
              <li>
                <div
                  onClick={this.toggleNav}
                  role="button"
                  tabIndex="0"
                  style={{ color: '#FFF' }}
                  onKeyPress={this.toggleNav}
                >
                  <a style={{ color: '#FFF' }} href="#">
                    X
                  </a>
                </div>
              </li>
              <li>
                <div
                  onClick={this.toggleNav}
                  role="button"
                  tabIndex="0"
                  style={{ color: '#FFF' }}
                  onKeyPress={this.toggleNav}
                >
                  <Link style={{ color: '#FFF' }} to="/">
                    Home
                  </Link>
                </div>
              </li>
              <li>
                <div
                  onClick={this.toggleNav}
                  role="button"
                  style={{ color: '#FFF' }}
                  tabIndex="-1"
                  onKeyPress={this.toggleNav}
                >
                  <Link style={{ color: '#FFF' }} to="/about">
                    About
                  </Link>
                </div>
              </li>
              <li>
                <a
                  style={{ color: '#FFF' }}
                  className="no-underline"
                  href="https://twitter.com/johndpotts"
                >
                  <i className="fa fa-twitter " /> &nbsp;&nbsp;
                </a>
              </li>
              <li>
                <a
                  style={{ color: '#FFF' }}
                  className="no-underline"
                  href="https://www.linkedin.com/in/jdpotts189/"
                >
                  <i className="fa fa-linkedin " /> &nbsp;&nbsp;
                </a>
              </li>
              <li>
                <a
                  style={{ color: '#FFF' }}
                  className="no-underline"
                  href="https://github.com/johndpotts"
                >
                  <i className="fa fa-github " /> &nbsp;&nbsp;
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    )
  }
}

export default Topnav
