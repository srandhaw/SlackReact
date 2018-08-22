import React from 'react'
import { StyleSheet, css } from 'aphrodite'
import { NavLink } from 'react-router-dom'

const Room = (props) => {

    

    return (
      <li className={css(styles.item)} key={props.roomName} >
        <NavLink
        to={`/chat/rooms/${props.roomName}`}
        className={css(styles.link)}>
          {props.roomName}
        </NavLink>
      </li>
    )
  }


const styles = StyleSheet.create({
    item: {
      marginBottom: '0.5rem',
    },
     link: {
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
  })
   export default Room