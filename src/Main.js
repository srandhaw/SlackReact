import React from 'react'

import Sidebar from './Sidebar'
import Chat from './Chat'

class Main extends React.Component {

  state = {
    room: {
      name: 's3afternoon',
      description: 'Ask questions and share code',
    },

    rooms: {
      s3afternoon: {
        name: 's3afternoon',
        description: 'Ask questions and share code',
      },

      general: {
        name: 'general',
        description: 'Chat about whatever',
      },

      random: {
        name: 'random',
        description: 'Cat GIFs, etc.',
      },
    },
  }

  render() {
    return (
      <div className="Main" style = {styles}>
        <Sidebar user = {this.props.user}  signOut={this.props.signOut} rooms={this.state.rooms}/>
        <Chat user = {this.props.user} room={this.state.room}/>
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