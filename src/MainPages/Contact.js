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
          </div>
        </div>
      </div>
    )
  }
}
