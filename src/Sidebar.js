import React, { Component } from 'react'
import { width } from 'window-size';
import UserInfo from './UserInfo'
import RoomList from './RoomList';

class Sidebar extends Component {
  render() {
    return (
      <div className="Sidebar" style = {styles.sidebar}>

       <UserInfo user = {this.props.user}  signOut={this.props.signOut}/>

         <h1 style={styles.h1}>XTBC 18</h1>

        <RoomList rooms={this.props.rooms}/>


      </div>



    )
  }
}

const styles = {
  sidebar: {
backgroundColor: '#333344',
color: 'rgba(255, 255, 255, 0.8)',
width: '12rem',
padding: '1rem 0',
display: 'flex',
flexDirection: 'column',
          },

  children: {
    padding: '0 1rem',
  },
  
  h1: {
  color: 'white',
  fontSize: '1.2em',
  marginTop: 0,
  }

}


export default Sidebar