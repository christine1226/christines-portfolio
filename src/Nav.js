import React from 'react'
import { withRouter } from 'react-router-dom'
import './css/nav.css'

class Nav extends React.Component{

  render(){
    return(
      <div>
        <div className="ui secondary pointing menu">
          <a className="item" href='/'>
            Home
          </a>
          <a className="item" href='/bio'>
            About
          </a>
          <a className="item" href='/projects'>
            Projects
          </a>
          <a className="item" href="mailto:christine.gomez1226@gmail.com" target="_top">
            Contact
          </a>
          </div>
      </div>
    )
  }
}
export default withRouter(Nav)
