import React, { Component } from 'react'

 class SignIn extends Component {
     state = {
         email: ""
     }

     handleSubmit = (ev) =>{
ev.preventDefault()
const user = {
    uid: `${this.state.email}-sdkfjhwr987`,
    email: this.state.email,
    displayName: this.state.email,
}
this.props.handleAuth(user)
this.setState({email: ""})
     }

     handleChange = (ev) =>{
ev.preventDefault()
this.setState({email: ev.target.value})
     }


  render() {
    return (
      <div className="SignIn">
        <form  onSubmit = {this.handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            required
            autoFocus
            type="email"
            name="email"
            value = {this.state.email}
            onChange = {this.handleChange}
          />
          <button
            type="submit"
          >
            Sign In
          </button>
        </form>
      </div>
    )
  }
}

 export default SignIn