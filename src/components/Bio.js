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
          Written by <strong>John D Potts</strong>, a developer based out of Charlotte, NC.{' '}
          <a href="https://twitter.com/johndpotts">
            Follow me on Twitter!
          </a>
        </p>
      </div>
    )
  }
}

export default Bio
