import React from 'react'

const ChatHeader = () => {
  
    return (
      <header className="ChatHeader" style={styles.chatHeader}>
        <div className="roomInfo">
          <h2 style={styles.h2}>#general</h2>
          <p style={styles.p}>Announcements and general chat</p>
        </div>
      </header>
    )
  
}

export default ChatHeader

const styles = {
  chatHeader:{
    backgroundColor: '#f3f3f3',
    borderBottom: '1px solid #ccc',
    padding: '0.5rem 1rem',
    display: 'flex',
    alignItems: 'center',
  },

  h2: {
    fontSize: '1.1rem',
     margin: 0,
  },

  p: {
    color: '#999',
    margin: 0,
    fontSize: '0.8rem',
  },
}