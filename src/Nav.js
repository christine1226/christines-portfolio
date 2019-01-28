import React from 'react'

export default class Nav extends React.Component{

  render(){
    return(
      <div>
        <div className="ui secondary pointing menu">
          <button className="item collapsible">
            Menu
          </button>
        <div className="right menu">
          <a href="https://www.linkedin.com/in/christine-gomez/" className="ui item">
            <i class="linkedin icon"></i>
          </a>
          <a href="https://github.com/christine1226" className="ui item">
            <i class="github icon"></i>
          </a>
          <a href="https://www.instagram.com/christineeee_g/?hl=en" className="ui item">
            <i class="instagram icon"></i>
          </a>
          <a href="https://medium.com/@christine.gomez1226" className="ui item">
            <i class="medium icon"></i>
          </a>
        </div>
        </div>
      </div>
    )
  }
}
