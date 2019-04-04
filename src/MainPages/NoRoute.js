import React from 'react'
import Nav from '../Nav'

export default class NoRoute extends React.Component{
  render(){
    return(
      <div className='about-page'>
        <Nav />
        <h1>Theres nothing here try <a href='/'>THIS</a></h1>
      </div>
    )
  }
}
