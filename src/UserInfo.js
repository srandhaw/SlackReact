import React from 'react'
import Avatar from './Avatar'

const UserInfo = (props) => {
    return(
<div className = "UserInfo" style = {styles.userInfo}>
            <Avatar user = {props.user}/>
                <div className = "user" style = {styles.user}>
                {props.user.displayName}
                </div>
                <a href="#">
          <i className="fas fa-sign-out-alt"></i>
               </a>
         </div>
    )
}

export default UserInfo

const styles = {
    userInfo: {
        padding: '0 1rem',
         marginBottom: '1rem',
         display: 'flex',
         alignItems: 'center',
      },

      user: {
         flex: 1,
      }
}