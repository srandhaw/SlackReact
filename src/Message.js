import React from 'react'
import Avatar from './Avatar';
import Metadata from './Metadata'

const Message = (props) =>{
   
        return(
            <div className = "Message" style={styles.message}>

 {/* {props.message.user.displayName}: {props.message.content}  */}
 <Avatar user = {props.message.user}/>
 <div className = "details" style={styles.details}>
 <Metadata message = {props.message}/>
 <div className = "body">
{props.message.content}
 </div>
 </div>
                </div>
        )
    
}

export default Message

const styles = {
        message: {
                display: 'flex',
    marginTop: '1rem',
    padding: '0 1rem',
        },
        details: {
                flex: 1,
                paddingLeft: '0.5rem',
              },
}