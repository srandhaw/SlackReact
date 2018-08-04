import React, { Component } from 'react'
import ChatHeader from './ChatHeader'
import MessageList from './MessageList'
import MessageForm from './MessageForm'

class Chat extends Component {

  constructor(){
    super()

    this.state = {
      messages: [
        {
            id: 1,
            user: {
                uid: '1234234',
                displayName: 'Sehaj',
                email: 'srandhaw@purdue.edu',
            },
            content: "hey this is sehaj",
        },
  
        {
            id: 2,
            user: {
                uid: '3452123',
                displayName: 'Shiv',
                email: 'shivap@purdue.edu',
            },
            content: "hi, Im shiv!",
        },
  
    ]
    }
    
  }

  addMessage = (content) => {
    const messages = [...this.state.messages]

    

    messages.push({
      id: Date.now(),
       user: this.props.user,
      content,
    })

    this.setState({ messages: messages })
  }

  render() {
    return (
      <div className="Chat" style={styles}>
        <ChatHeader />
        <MessageList messages = {this.state.messages}/>
        <MessageForm addMessage = {this.addMessage}/>
      </div>
    )
  }
}

export default Chat

const styles = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
}