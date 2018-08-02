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

    const user = {
      uid: 'sdfs34843560',
      displayName: 'Stefany',
      email: 'stefany@singing.org',
    }

    messages.push({
      id: Date.now(),
       user,
      content,
    })

    this.setState({ messages: messages })
  }

  render() {
    return (
      <div className="Chat">
        <ChatHeader />
        <MessageList messages = {this.state.messages}/>
        <MessageForm addMessage = {this.addMessage}/>
      </div>
    )
  }
}

export default Chat