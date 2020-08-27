import React from 'react'
import '../styles/css/font-awesome.css'
import profilePic from './profile-pic.png'
import typography from '../utils/typography'

const rhythm = typography.rhythm;
const scale = typography.scale

class Bio extends React.Component {
  render() {
    return (
      <div className="bio-container">
        <div>
          <img src={profilePic} alt={`John D Potts`} className="bio-picture" />
        </div>
        <div className="bio-text">
          <h3
            style={{
              marginTop: 0,
            }}
          >
            John D Potts
          </h3>
          <span style={{ verticalAlign: 'top' }}>
            Web developer and speaker in Charlotte, NC.{' '}
          </span>
        </div>
      </div>
    )
  }
}

export default Bio
