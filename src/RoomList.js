import React from 'react'
import { Link } from 'react-router-dom'
import { StyleSheet, css } from 'aphrodite'
import Room from './Room'

const RoomList = (props) =>{

    return(
        <nav
        className='RoomList
        ${css(styles.roomList)}'
      >
        <div className={css(styles.heading)}>
        <h2 className={css(styles.h2)}>
          Rooms
        </h2>
        <Link
          to="/chat/new-room"
          className={css(styles.button)}
          onClick={props.showRoomForm}
        >
          <i className="fas fa-plus-circle" title="Add a room"></i>
          </Link>
      </div>

        <ul className={css(styles.list)}>

        {
          Object.keys(props.rooms).map(
            roomName => (
              <Room
                key={roomName}
                roomName={roomName}
                
              />
            )
          )
        }

        </ul>
      </nav>
    )
}

export default RoomList

const styles = StyleSheet.create({
    roomList: {
        padding: '0 1rem',
      },

      h2: {
          fontSize: '1rem'
      },

      list: {
        listStyle: 'none',
        paddingLeft: 0,
      },

      item: {
        marginBottom: '0.5rem',
      },

      link:{
        display: 'block',
        color: 'whitesmoke',
        textDecoration: 'none',

        '::before': {
            content: '"# "',
          },

          ':hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
          },
      },

      heading: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      },

      button: {
        border: 0,
        backgroundColor: 'transparent',
        outline: 0,
        padding: 0,
        color: 'rgba(255,255,255,0.4)',
        fontSize: '1rem',
        cursor: 'pointer',
        transition: 'color 0.25s ease-out',
         ':hover': {
          color: 'white',
        },
      },
    
})