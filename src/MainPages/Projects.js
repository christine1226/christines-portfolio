import React from 'react'
import Nav from '../Nav'

class Projects extends React.Component{
  render(){
    return(
      <div>
        <Nav />
        <div className="about-me">
          <h1>Projects</h1>
          <div className="proj1">
            <div className="blink"></div>
            <p>JavaScript & Ruby on Rails</p>
          </div>
          <div className="proj1">
            <div className="sea"></div>
            <p>React/Redux & Ruby on Rails</p>
          </div>
          <div className="proj1">
            <div className="lit"></div>
            <p>Ruby & Ruby on Rails</p>
          </div>
          <div className="proj1">
            <div className="boozer"></div>
            <p>Ruby on Rails & React</p>
          </div>
        </div>
      </div>
    )
  }
}
export default Projects
