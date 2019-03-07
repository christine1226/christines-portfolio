import React from 'react'
import Nav from '../Nav'
import {withRouter} from 'react-router'

  class Projects extends React.Component{
    projectClicked = (e) => {
      if(e.target.className === "blink"){
        this.props.history.push(
          {pathname: '/project',
          id: 1,
          title: 'Bink',
          vid: '',
          info: "This is what blink is about",
          github: 'https://github.com/christine1226/mod3_project'})
      }
      else if(e.target.className === "sea"){
        this.props.history.push(
          {pathname: '/project',
          id: 2,
          title: 'Sea Learner',
          vid: 'https://www.youtube.com/embed/y-aZkFSJ6pU',
          info: "This is what sea learners is about",
          github: 'https://github.com/christine1226/SeaCards'})
      }
      else if(e.target.className === "lit"){
        this.props.history.push(
          {pathname: '/project',
          id: 3,
          title: 'NYC Event Manager (Lituation)',
          vid: 'https://www.youtube.com/embed/C_GogFbJeCc',
          info: "This is what Lituation is about",
          github: 'https://github.com/christine1226/lituation'})
      }
      else if(e.target.className === "boozer"){
        this.props.history.push(
          {pathname: '/project',
          id: 4,
          title: 'Boozer',
          vid: '',
          info: "This is what Boozer is about",
          github: 'https://github.com/christine1226/boozer-react'})
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
