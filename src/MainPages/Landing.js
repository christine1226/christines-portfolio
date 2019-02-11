import React from 'react'
import Nav from '../Nav.js'

export default class LandingPage extends React.Component{
  render(){
    return(
      <div>
      <Nav />
        <div className="landing-page">
          <h1>Landing</h1>
        </div>
      </div>
    )
  }
}
