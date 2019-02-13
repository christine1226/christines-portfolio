import React from 'react'
import { withRouter } from 'react-router-dom'

class Nav extends React.Component{

  render(){
    return(
      <div>
        <div className="ui secondary pointing menu">
          <div>
            <div className="ui simple dropdown item">
              Menu
              <div className="menu">
                <a className="item" href="/">Homepage</a>
                <a className="item" href="/about">Bio</a>
                <a className="item" href="/projects">Projects</a>
                <a className="item" href="/contact">Contact</a>
              </div>
            </div>
          </div>
        <div className="right menu">
          <a href="https://www.linkedin.com/in/christine-gomez/" className="ui item">
            <i className="linkedin icon"></i>
          </a>
          <a href="https://github.com/christine1226" className="ui item">
            <i className="github icon"></i>
          </a>
          <a href="https://www.instagram.com/christineeee_g/?hl=en" className="ui item">
            <i className="instagram icon"></i>
          </a>
          <a href="https://medium.com/@christine.gomez1226" className="ui item">
            <i className="medium icon"></i>
          </a>
        </div>
        </div>
      </div>
    )
  }
}
export default withRouter(Nav)
