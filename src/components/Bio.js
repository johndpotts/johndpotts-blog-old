import React from 'react'
import '../styles/css/font-awesome.css'
import profilePic from './profile-pic.jpg'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection:'column',
          justifyContent:'center',
          alignItems:'center',
          marginBottom: rhythm(2.5),
        }}
      >

        <div >
            <img
            src={profilePic}
            alt={`John D Potts`}
            style={{
              marginRight: rhythm(1 / 2),
              marginBottom: 0,
              width: rhythm(4),
              height: rhythm(4),
              borderRadius: '50%'
            }}
            />
      <div
        style = {{
        display:'inline-block',
        width:'200px',
        verticalAlign:'top'
      }}>
        <h3
        style = {{
          marginTop:0
        }}
        >John D Potts</h3>
        <span style={{verticalAlign:'top'}}>
          Web developer and speaker in Charlotte, NC.{' '}
      </span>
      </div>
      </div>


      </div>
    )
  }
}

export default Bio
