import React from 'react'
import Nav from '../Nav'
import {withRouter} from 'react-router'

class Projects extends React.Component{
  projectClicked = (e) => {
    if(e.target.className === "blink"){
      this.props.history.push('/project')
    }
  }
  render(){
    return(
      <div>
        <Nav />
        <div className="about-me">
          <h1>Projects</h1>
          <div className="proj1">
            <div onClick={this.projectClicked} className="blink"></div>
            <p>JavaScript & Ruby on Rails</p>
          </div>
          <div className="proj1">
            <div onClick={this.projectClicked} className="sea"></div>
            <p>React/Redux & Ruby on Rails</p>
          </div>
          <div className="proj1">
            <div onClick={this.projectClicked} className="lit"></div>
            <p>Ruby & Ruby on Rails</p>
          </div>
          <div className="proj1">
            <div onClick={this.projectClicked} className="boozer"></div>
            <p>Ruby on Rails & React</p>
          </div>
        </div>
      </div>
    )
  }
}
export default withRouter(Projects)
