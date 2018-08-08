import React from 'react'
import Avatar from './Avatar';
import Metadata from './Metadata'

const Message = (props) =>{
   
        return(
            <div className = "Message">

 {/* {props.message.user.displayName}: {props.message.content}  */}
 <Avatar user = {props.message.user}/>
 <div className = "details">
 <Metadata message = {props.message}/>
 <div className = "body">
{props.message.content}
 </div>
 </div>
                </div>
        )
    
}

export default Message