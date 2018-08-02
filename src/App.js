import React, { Component } from 'react'
import Main from './Main'
import './App.css'


class App extends Component {
  constructor(){
    super()

    this.state = {
  user:  {
  uid: 'sdfs34843560',
  displayName: 'Stefany',
  email: 'stefany@singing.org',
      }
    }
  }
  
  render() {
    return (
      <div className="App">
       <Main user = {this.state.user}/>
      </div>
    )
  }
}

export default App
