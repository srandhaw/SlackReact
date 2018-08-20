import React, { Component } from 'react'
import Main from './Main'
import './App.css'
import SignIn from './SignIn'
import { auth } from './base';
import { Route, Switch, Redirect } from 'react-router-dom'

class App extends Component {
  constructor(){
    super()

    const user = JSON.parse(localStorage.getItem('user'))

    this.state = {
  user: user ||  {},
    }
  }

  componentDidMount(){
    auth.onAuthStateChanged(
      user=>{
        if(user){
this.handleAuth({
  uid: user.uid,
  displayName: user.displayName,
  email: user.email,
  photoURL: user.photoURL
})
        }
        else{
          this.handleUnauth()
        }
      }
    )
  }

  handleAuth = (user) =>{
this.setState({user})
localStorage.setItem('user', JSON.stringify(user))
  }

  signedIn = () =>{
    return this.state.user.uid
  }

  signOut = () => {
    auth.signOut()
  }

  handleUnauth = () => {
    this.setState({ user: {} })
    localStorage.removeItem('user')
  }
  
  render() {
    return (
      <div className="App">
       <Switch>
          <Route
            path="/sign-in"
            render={() => (
              this.signedIn()
                ? <Redirect to="/chat" />
                : <SignIn />
            )}
          />
          <Route
            path="/chat"
            render={() => (
              this.signedIn()
                ? <Main
                    user={this.state.user}
                    signOut={this.signOut}
                  />
                : <Redirect to="/sign-in" />
            )}
          />
          <Route
            render={() => (
              this.signedIn()
                ? <Redirect to="/chat" />
                : <Redirect to="/sign-in" />
            )}
          />
        </Switch>
      </div>
    )
  }
}

export default App
