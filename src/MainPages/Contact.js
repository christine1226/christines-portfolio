import React from 'react'
import Nav from '../Nav'


export default class Contact extends React.Component{

  render(){
    return(
      <div>
        <Nav />
        <div className="projects">
          <form  className="form">
            <h2>Contact Me</h2>
            <label>E-mail:</label>
            <input name="email"></input>
            <textarea name="message"></textarea>
            <br />
            <button value='Send'>Submit</button>
            <div className="links">
            <a href="https://www.linkedin.com/in/christine-gomez/" className="link">
            <i className="linkedin icon"></i>
            </a>
            <a href="https://github.com/christine1226" className="link">
            <i className="github icon"></i>
            </a>
            <a href="https://www.instagram.com/christineeee_g/?hl=en" className="link">
            <i className="instagram icon"></i>
            </a>
            <a href="https://medium.com/@christine.gomez1226" className="link">
            <i className="medium icon"></i>
            </a>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
