import React from 'react'
import Nav from '../Nav'

export default class Contact extends React.Component{
  render(){
    return(
      <div>
        <Nav />
        <div className="about-me">
          <div className="form">
            <h2>Contact Me</h2>
            <label>E-mail:</label>
            <input></input>
            <textarea></textarea>
            <br />
            <button>Submit</button>
            <div className="links">
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
      </div>
    )
  }
}
