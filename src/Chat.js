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
    this.syncMessages()
  }

  componentDidUpdate(prevProps, _prevState, _snapshot) {
    if (prevProps.room.name !== this.props.room.name) {
      this.syncMessages()
    }
  }

   componentWillUnmount() {
    base.removeBinding(this.messagesRef)
  }

  syncMessages = () =>{
    if (this.messagesRef) {
      base.removeBinding(this.messagesRef)
    }

    this.messagesRef = base.syncState(
      `messages/${this.props.room.name}`,
      {
        context: this,
        state: 'messages',
        asArray: true,
      }
    )
  }
  


  addMessage = (content) => {
    const messages = [...this.state.messages]

    const user  = {

    }

    messages.push({
      id: `${user.uid}-${Date.now()}`,
       user: this.props.user,
      content,
      createdAt: Date.now(),
    })

    console.log(messages)

    this.setState({ messages })
  }

  render() {
    return (
      <div className="Chat" style={styles}>
        <ChatHeader room = {this.props.room}/>
        <MessageList room = {this.props.room} messages = {this.state.messages}/>
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