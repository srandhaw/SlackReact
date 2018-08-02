import React from 'react'

class MessageForm extends React.Component{

    state = {
        content: ""
    }

handleSubmit = (ev) =>{
    ev.preventDefault()
this.props.addMessage(this.state.content)
this.setState({content: ""})
}

handleChange = (ev) =>{
    ev.preventDefault()
this.setState({content: ev.target.value})
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
        value = {this.state.content}
        onChange = {this.handleChange}
        />
        <button type = "submit">
        send
            </button>
        </form>
    )
}
}

export default MessageForm