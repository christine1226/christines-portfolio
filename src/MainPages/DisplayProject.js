import React from 'react'
import Nav from '../Nav'

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
    return(
      <div>
        <Nav />
        <div className='proj-container'>
        <h1>{this.props.location.title}</h1>
        <div className='vid'>
          <iframe title='a' src={this.props.location.vid} height="500" width="700" />}
        </div>
        <p>{this.props.location.info}</p>
        <a href={this.props.location.github}>Github Link</a>
        <br/>
        <img alt='' height='100' width='100' onClick={this.prevPage}
        src='https://media.giphy.com/media/9DctaP97smX4SyYjwR/giphy.gif' />
        <img alt='' height='100' width='100' onClick={this.nextPage}
        src='https://media.giphy.com/media/9DctaP97smX4SyYjwR/giphy.gif' />
        </div>
      </div>
    )
  }
}
