import React from 'react'

import Sidebar from './Sidebar'
import Chat from './Chat'
import base from './base'
import RoomForm from './RoomForm'

class Main extends React.Component {

  state = {
    room: {
      name: 's3afternoon',
      description: 'Ask questions and share code',
    },

    rooms: {
    
    },

    showRoomForm: false,
  }

  showRoomForm = () => {
    this.setState({ showRoomForm: true })
  }
   hideRoomForm = () => {
    this.setState({ showRoomForm: false })
  }

  addRoom = (room) =>{
const rooms = {...this.state.rooms}

rooms[room.name] = room
this.setState({rooms})
  }

  componentDidMount(){
    this.roomsRef = base.syncState(
      'rooms',
      {
          context: this,
          state: 'rooms',
          defaultValue: {
            general: {
              name: 'general',
              description: 'Chat about whatever',
            },
          }
        

    })
  }

  componentWillUnmount(){
    base.removeBinding(this.roomsRef)
  }

  setCurrentRoom = (roomName) =>{
const room = this.state.rooms[roomName]
this.setState({room})
  }

  render() {

    if (this.state.showRoomForm) {
      return <RoomForm addRoom={this.addRoom} hideRoomForm={this.hideRoomForm}/>
    }

    return (
      <div className="Main" style = {styles}>
      
        <Sidebar user = {this.props.user}  signOut={this.props.signOut} rooms={this.state.rooms} setCurrentRoom={this.setCurrentRoom} showRoomForm={this.showRoomForm}/>
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