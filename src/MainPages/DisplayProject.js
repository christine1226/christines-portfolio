import React from 'react'
import Nav from '../Nav'
import '../css/display-proj.css'

export default class DisplayProject extends React.Component{
    nextPage = (e) => {
    let n = this.props.location.id
    if(n !== 4){
    this.props.history.push(`/project/${n+1}`)
    }
    else if(n === 4){
        this.props.history.push('/project/1')
      }
  }

  prevPage = (e) => {
    let n = this.props.location.id
    if(n !== 1){
    this.props.history.push(`/project/${n-1}`)
    }
    else if(n === 1){
        this.props.history.push('/project/4')
      }
  }
  render(){
      let technologies = this.props.location.technologies.map(tech => <li>{tech}</li>)
    return(
      <div>
        <Nav />
        <div className='proj-container'>
        <div className='proj-display'>
        <h1>{this.props.location.title}</h1>
        <a href={this.props.location.github}>Github Link</a>
        <div className='vid'>
          <iframe title='a' src={this.props.location.vid} height="400" width="600" />
        </div>
        <div className='info'>
        <p className='column'>{this.props.location.info}</p>
        <br/>
        <ul className='column'>
        {technologies}
        </ul>
        <img className='right' alt='' height='100' width='100' onClick={this.prevPage}
        src='https://media.giphy.com/media/9DctaP97smX4SyYjwR/giphy.gif' />
        <img className='left' alt='' height='100' width='100' onClick={this.nextPage}
        src='https://media.giphy.com/media/9DctaP97smX4SyYjwR/giphy.gif' />
        </div>
        </div>
        </div>
      </div>
    )
  }
}
