import React from 'react'
import Message from './Message'

const MessageList = () => {

    const messages = [
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

    return(
        <div className = "MessageList">
    {
       messages.map(msg => (
           <Message message = {msg} key = {msg.id} />
       ))
    }
</div>
    )
}

export default MessageList