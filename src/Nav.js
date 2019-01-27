import React from 'react'

export default class Nav extends React.Component{
  render(){
    return(
      <div>
        <div className="ui secondary pointing menu">
          <a href="home" className="active item">
            Home
          </a>
          <a href="messages" className="item">
            Messages
          </a>
          <a href="friends" className="item">
            Friends
          </a>
          <div className="right menu">
            <a href="logout" className="ui item">
              Logout
            </a>
          </div>
        </div>
      </div>
    )
  }
}
