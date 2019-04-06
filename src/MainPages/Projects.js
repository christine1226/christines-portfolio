import React from 'react'
import Nav from '../Nav'
import {withRouter} from 'react-router'

  class Projects extends React.Component{

    projectClicked = (e) => {
      if(e.target.className === "blink"){
        this.props.history.push('/project/1')
      }
      else if(e.target.className === "sea"){
        this.props.history.push('/project/2')
      }
      else if(e.target.className === "lit"){
        this.props.history.push('/project/3')
      }
      else if(e.target.className === "boozer"){
        this.props.history.push('/project/4')
      }
    }
  render(){
    return(
      <div>
        <Nav />
        <div className="projects">
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
