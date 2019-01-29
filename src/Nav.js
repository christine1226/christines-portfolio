import React from 'react'

export default class Nav extends React.Component{


  render(){
    return(
      <div>
        <div className="ui secondary pointing menu">
          <div>
            <div className="ui simple dropdown item">
              Menu
              <div className="menu">
                <div className="item">Bio</div>
                <div className="item">Projects</div>
                <div className="item">Contact</div>
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
