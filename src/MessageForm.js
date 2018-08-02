import React from 'react'

class MessageForm extends React.Component{

handleSubmit = (ev) =>{
    ev.preventDefault()
this.props.addMessage()
}


render(){
    return(
        <form className = "MessageForm" onSubmit = {this.handleSubmit}>
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