import React from 'react'
import Message from './Message'

class MessageList extends React.Component {

    componentDidUpdate(prevProps) {
        if (prevProps.messages.length < this.props.messages.length) {
          this.scrollToBottom()
        }
      }

      scrollToBottom = () => {
        this.messagesEnd.scrollIntoView({ behavior: 'smooth' })
      }

    
render(){
    return(
        <div className = "MessageList" style={styles.messageList}>
       
      <div style={styles.roomAnnouncement}>
        <h3 style={styles.h3}>
          #{this.props.room.name}
        </h3>
        <p>This is the very beginning of the #{this.props.room.name} room.</p>
      </div>
    {
       this.props.messages.map(msg => (
           <Message message = {msg} key = {msg.id} />
       ))
    }
     <div ref={el => this.messagesEnd = el}></div>
</div>
    )
}
}

export default MessageList

const styles = {
    messageList:{
        backgroundColor: 'white',
        flex: 1,
        paddingBottom: '10rem',
        overflowY: 'scroll',
    },
    roomAnnouncement: {
        padding: '2rem 1rem',
      },

      h3: {
        fontSize: '1.5rem',
      },
}