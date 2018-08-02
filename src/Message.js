import React from 'react'

const Message = (props) =>{
   
        return(
            <div className = "Message">
 {props.message.user.displayName}: {props.message.content} 
                </div>
        )
    
}

export default Message