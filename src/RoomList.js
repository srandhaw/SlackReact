import React from 'react'
import { StyleSheet, css } from 'aphrodite'
import Room from './Room'

const RoomList = (props) =>{

    return(
        <nav
        className='RoomList
        ${css(styles.roomList)}'
      >
        <h2 className = '${css(styles.h2)}'>Rooms</h2>

        <ul className={css(styles.list)}>

        {
          Object.keys(props.rooms).map(
            roomName => (
              <Room
                key={roomName}
                roomName={roomName}
                setCurrentRoom = {props.setCurrentRoom}
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
      }
})