import React from 'react'

import Sidebar from './Sidebar'
import Chat from './Chat'

class Main extends React.Component {
  render() {
    return (
      <div className="Main" style = {styles}>
        <Sidebar user = {this.props.user}  signOut={this.props.signOut}/>
        <Chat user = {this.props.user}/>
      </div>
    )
  }
}

export default Main

const styles = {
    display: 'flex',
    alignItems: 'stretch',
     height: '100vh',
}