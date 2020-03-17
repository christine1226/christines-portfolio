import React from 'react'
import Nav from '../Nav'
import '../css/about.css'

class AboutMe extends React.Component{

  render(){
    return(
      <div>
      <Nav />
      <div className="about-page">
      <h1>About Me....</h1>
      <div className="about">
          <div className="columns1">
            <h2>Christine</h2>
            <img src={ require("../image/selfie.png")} height="280vh" width="240vw" alt="" />
          </div>
          <div className="columns2">
            <br/>
            <br/>
            <br/>
            <br/>
            <p>Full Stack Developer passionate about debugging code.
             With a background in customer service. Very comfortable when
             working with other people to complete a greater task. Now in the
             web development industry, very excited to push limits and create
             bigger projects in a dev team.</p>
          </div>
        </div>
        </div>
      </div>
    )
  }
}
export default AboutMe
