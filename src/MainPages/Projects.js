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
          </div>
          <div className="proj1">
            <div className="sea"></div>
          </div>
          <div className="proj1">
            <div className="lit"></div>
          </div>
          <div className="proj1">
            <div className="boozer"></div>
          </div>
        </div>
      </div>
    )
  }
}
export default Projects
