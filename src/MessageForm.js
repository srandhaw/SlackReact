import React from 'react'
import { StyleSheet, css } from 'aphrodite'

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
this.setState({content: ev.target.value})
}

render(){
    return(
        <form className={`MessageForm ${css(styles.messageForm)}`} onSubmit = {this.handleSubmit}>
         <div className={css(styles.icon)}>
          <i className="fas fa-comment-alt"></i>
        </div>
        <input 
        autoFocus
        required
        type = "text"
        name = "body"
        placeholder="Type a message..."
        value = {this.state.content}
        onChange = {this.handleChange}
        className={css(styles.input)}
        />
        <button type = "submit" className={css(styles.button)}>
        <i className="far fa-paper-plane" title="Send"></i>
            </button>
        </form>
    )
}
}

export default MessageForm

const styles = StyleSheet.create({
    messageForm: {
        backgroundColor: 'white',
        height: '3rem',
        display: 'flex',
        alignItems: 'stretch',
        border: '2px solid #999',
        borderRadius: '0.5rem',
        margin: '0.25rem',
        padding: 0,
    },

    input: {
        flex: 1,
        fontSize: '1.2rem',
        border: 0,
         ':focus': {
          outline: 0,
        },
      },
      button: {
        fontSize: '1.5rem',
        backgroundColor: '#1A8FE3',
        color: 'white',
        paddingLeft: '1rem',
        paddingRight: '1rem',
        borderTopRightRadius: '0.5rem',
        borderBottomRightRadius: '0.5rem',
        border: '1px solid white',
      },
      icon: {
       marginTop: '1rem',
        borderRadius: '0.5rem',
        alignItems: 'center',
        backgroundColor: 'white',
        color: '#ccc',
        padding: '0 0.5rem',
        fontSize: '1.2rem',
      },
})