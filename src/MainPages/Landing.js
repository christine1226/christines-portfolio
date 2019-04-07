import React from 'react'
import Nav from '../Nav.js'
import '../css/landing.css'

export default class LandingPage extends React.Component{
  render(){
    return(
      <div>
      <Nav />
      <div className="landing-page">
      <div className="header-info">
      <h1> Christine Gomez</h1>
      <h3>FullStack Developer</h3>
      <div className="links">
      <a href="https://www.linkedin.com/in/christine-gomez/" target='_blank' rel="noopener noreferrer" className="link">
      <i className="linkedin icon"></i>
      </a>
      <a href="https://github.com/christine1226" target='_blank' rel="noopener noreferrer" className="link">
      <i className="github icon"></i>
      </a>
      <a href="https://www.instagram.com/christineeee_g/?hl=en" target='_blank' rel="noopener noreferrer" className="link">
      <i className="instagram icon"></i>
      </a>
      <a href="https://medium.com/@christine.gomez1226" target='_blank' rel="noopener noreferrer" className="link">
      <i className="medium icon"></i>
      </a>
      </div>
      </div>
      </div>
      </div>
    )
  }
}
