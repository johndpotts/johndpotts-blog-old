import React from 'react'



import profilePic from './profile-pic.png'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={profilePic}
          alt={`John D Potts`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
        <p>
          Web developer and speaker in Charlotte, NC.{' '}
          <br/>
          Connect with me:  &nbsp;
          <a href="https://twitter.com/johndpotts">
            TWITTER &nbsp;
          </a>
          <a href="https://www.linkedin.com/in/jdpotts189/">
            LINKEDIN &nbsp;
          </a>
          <a href="https://github.com/johndpotts">
            GITHUB
          </a>
        </p>
      </div>
    )
  }
}

export default Bio
