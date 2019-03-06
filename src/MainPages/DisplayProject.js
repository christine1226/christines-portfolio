import React from 'react'
import Nav from '../Nav'

export default class DisplayProject extends React.Component{
  render(){
    return(
      <div>
        <Nav />
        <div className='proj-container'>
        <h1>{this.props.location.title}</h1>
        <div className='vid'>
          <iframe src={this.props.location.vid} height="500" width="700" />
        </div>
        <p>{this.props.location.info}</p>
        <a href={this.props.location.github}>Github Link</a>
        </div>
      </div>
    )
  }
}
