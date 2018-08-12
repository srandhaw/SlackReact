import React, { Component } from 'react'
import ChatHeader from './ChatHeader'
import MessageList from './MessageList'
import MessageForm from './MessageForm'
import base from './base'

class Chat extends Component {

  constructor(){
    super()

    this.state = {
      messages: [],
    }
    
  }

  componentDidMount() {
    this.messagesRef = base.syncState(
      'messages/general',
      {
        context: this,
        state: 'messages',
        asArray: true,
      }
    )
  }

  
   componentWillUnmount() {
    base.removeBinding(this.messagesRef)
  }


  addMessage = (content) => {
    const messages = [...this.state.messages]

    const user  = {

    }

    messages.push({
      id: Date.now(),
       user: this.props.user,
      content,
    })

    console.log(messages)

    this.setState({ messages })
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