import React from 'react'
import Nav from '../Nav'
import {withRouter} from 'react-router'
import '../css/project.css'
import AllProjects from '../proj-data'


  class Projects extends React.Component{

    state={
      proj: AllProjects
    }

    clicked = (e) =>{
      this.state.proj.map((projObj) => {
        if(projObj.title.includes(e.target.className)){
          this.props.history.push(`/project/${projObj.id}`)
        }
      })
    }


  render(){
    return(
      <div>
        <Nav />
        <div className="projects">
          <h1>Projects</h1>
          <div className="proj1">
            <div onClick={this.clicked} className="Blink"></div>
            <p>JavaScript & Ruby on Rails</p>
          </div>
          <div className="proj1">
            <div onClick={this.clicked} className="Sea"></div>
            <p>React/Redux & Ruby on Rails</p>
          </div>
          <div className="proj1">
            <div onClick={this.clicked} className="Lit"></div>
            <p>Ruby & Ruby on Rails</p>
          </div>
          <div className="proj1">
            <div onClick={this.clicked} name='Boozer' className="Boozer"></div>
            <p>Ruby on Rails & React</p>
          </div>
        </div>
      </div>
    )
  }
}
export default withRouter(Projects)
