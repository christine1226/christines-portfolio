import React from 'react'
import Img from '../image/landing-page.jpg'
import Nav from '../Nav.js'

export default class LandingPage extends React.Component{
  render(){
    return(
      <div >
      <Nav />
        <div className="landing-page">
          <h1>LandingPage</h1>
        </div>
      </div>
    )
  }
}
