import React from 'react'
import Nav from '../Nav'

export default class DisplayProject extends React.Component{
  nextPage = (e) => {
    let n = this.props.location.id
    if(n === 1){
      this.props.history.push(
        {pathname: '/project',
        id: 2,
        title: 'Sea Learner',
        vid: 'https://www.youtube.com/embed/y-aZkFSJ6pU',
        info: "This is what sea learners is about",
        technologies: ['Redux', 'React', 'CSS', 'Semantic UI', 'Speech Recognition Webkit', 'Speech Synthesis Webkit', 'Backend: Ruby on Rails'],
        github: 'https://github.com/christine1226/SeaCards'})
    }
    else if(n === 2){
      this.props.history.push(
        {pathname: '/project',
        id: 3,
        title: 'NYC Event Manager (Lituation)',
        vid: 'https://www.youtube.com/embed/C_GogFbJeCc',
        info: "This is what Lituation is about",
        technologies: ['Ruby', 'CSS', 'Backend: Ruby on Rails'],
        github: 'https://github.com/christine1226/lituation'})
    }
    else if(n === 3){
      this.props.history.push(
        {pathname: '/project',
        id: 4,
        title: 'Boozer',
        vid: '../image/boozer.png',
        info: "This is what Boozer is about",
        technologies: ['React', 'CSS', 'Semantic UI', 'Backend: Ruby on Rails'],
        github: 'https://github.com/christine1226/boozer-react'})
    }
  }

  prevPage = (e) => {
    let n = this.props.location.id
    if(n === 2){
      this.props.history.push(
        {pathname: '/project',
        id: 1,
        title: 'Bink',
        vid: '../image/blink.png',
        info: "This is what blink is about",
        technologies: ['Vanilla JS', 'CSS', 'Backend: Ruby on Rails'],
        github: 'https://github.com/christine1226/mod3_project'})
    }
    else if(n === 3){
      this.props.history.push(
        {pathname: '/project',
        id: 2,
        title: 'Sea Learner',
        vid: 'https://www.youtube.com/embed/y-aZkFSJ6pU',
        info: "This is what sea learners is about",
        technologies: ['Redux', 'React', 'CSS', 'Semantic UI', 'Speech Recognition Webkit', 'Speech Synthesis Webkit', 'Backend: Ruby on Rails'],
        github: 'https://github.com/christine1226/SeaCards'})
    }
    else if(n === 4){
      this.props.history.push(
        {pathname: '/project',
        id: 3,
        title: 'NYC Event Manager (Lituation)',
        vid: 'https://www.youtube.com/embed/C_GogFbJeCc',
        info: "This is what Lituation is about",
        technologies: ['Ruby', 'CSS', 'Backend: Ruby on Rails'],
        github: 'https://github.com/christine1226/lituation'})
    }
  }
  render(){
    console.log(this.props.location.id)
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
