import React from 'react'

class MessageForm extends React.Component{
render(){
    return(
        <form className = "MessageForm">
        <input 
        autoFocus
        required
        type = "text"
        name = "body"
        placeholder="Type a message..."
        />
        <button type = "submit">
        send
            </button>
        </form>
    )
}
}

export default MessageForm