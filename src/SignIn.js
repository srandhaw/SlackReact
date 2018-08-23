import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite'
import { Link } from 'react-router-dom'
import { auth, googleProvider, githubProvider } from './base'

 class SignIn extends Component {
     state = {
      user: {
        email: '',
        password: '',
      },
      errorMessage: null,
     }

     authenticate = (provider) => {
      auth
        .signInWithPopup(provider)
        
    }
    
     handleSubmit = (ev) =>{
ev.preventDefault()
auth.signInWithEmailAndPassword(
  this.state.user.email,
  this.state.user.password
).catch(error => this.setState({ errorMessage: error.message }))

     }

     handleChange = (ev) =>{
       const user = {...this.state.user}
       user[ev.target.name] = ev.target.value
this.setState({user})
     }


     render() {
        return (
          <div className={`SignIn ${css(styles.signIn)}`}>
            <header className={css(styles.header)}>
              <span className={css(styles.title)}>
                <i className="fas fa-hashtag"></i>
                Slack
              </span>
            </header>
            <main className={css(styles.main)}>
              <form
                className={css(styles.form)}
                onSubmit={this.handleSubmit}
              >
                  <h2>Sign In</h2>                     
                <label
                  htmlFor="email"
                  className={css(styles.label)}
                >
                  Email
                </label>
                <input
                  autoFocus
                  type="email"
                  name="email"
                  required
                  className={css(styles.input)}
                  value={this.state.user.email}
                  onChange={this.handleChange}
                />

                <label
              htmlFor="password"
              className={css(styles.label)}
            >
             Password
            </label>
            <input
              required
              type="password"
              name="password"
              className={css(styles.input)}
              value={this.state.user.password}
              onChange={this.handleChange}
            />

                <button
                  type="submit"
                  className={css(styles.button)}
                >
                  Sign In
                </button>

                 <p className={css(styles.error)}>
              {this.state.errorMessage}
            </p>

             <p>
              Not a member yet? <Link to="/sign-up">Sign up</Link>!
            </p>
            
             OR

                <button
              type="button"
              className={css(styles.button)}
              onClick={() => this.authenticate(googleProvider)}
            >
             <i className={`fab fa-google ${css(styles.brandIcon)}`}></i>
              Sign in with Google
            </button>

             <button
              type="button"
              className={css(styles.button, styles.github)}
              onClick={() => this.authenticate(githubProvider)}
            >
              <i className={`fab fa-github ${css(styles.brandIcon)}`}></i>
              Sign in with GitHub
            </button>
              </form>
    
              <div className="blurb">
                <h2 className={css(styles.h2)}>
                  You're in good company.
                </h2>
                <p>Ones of people are already using Slack.</p>
              </div>
            </main>
          </div>
        )
      }
}

 export default SignIn

 const styles = StyleSheet.create({
     signIn:{
         display: 'flex',
         flexDirection: 'column',
         height: '100vh',
         backgroundColor: '#f6f6f6',

     },

     header:{
        backgroundColor: '#fff',
        height: '4rem',
    padding: '0 2rem',
    margin: 0,
    display: 'flex',
    alignItems: 'center',
    boxShadow: '0 1px 1px rgba(0,0,0,.1)',
     },

     title:{
        color: '#ff3344',
        fontWeight: 400,
        textTransform: 'uppercase',
        fontSize: '2rem',
        lineHeight: '80px',
     },

     main: {
      flex: 1,
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      margin: '0 auto',
      paddingBottom: '3rem',
    },
    form: {
      width: '40rem',
      backgroundColor: 'white',
      boxShadow: '0 1px 1px rgba(0,0,0,.1)',
      marginBottom: '2rem',
      paddingBottom: '2rem',
    },
    label: {
      display: 'block',
      textTransform: 'uppercase',
      color: '#999',
    },
    input: {
      width: '20rem',
      fontSize: '1.5rem',
      border: 0,
      borderBottom: '1px solid black',
      marginTop: '1rem',
      marginBottom: '1rem',
      textAlign: 'center',
      padding: '0.5rem',
      ':focus': {
        outline: 0,
      },
    },
    h2: {
      fontWeight: 'normal',
    },
    button: {
      display: 'block',
      margin: '0 auto 1rem',
      padding: '1rem 2rem',
      fontSize: '1.2rem',
      borderRadius: '1rem',
      backgroundColor: '#ff3333',
      color: 'white',
      width: '20rem',
    },
    github: {
      marginBottom: 0,
      backgroundColor: '#6e5494',
    },
    brandIcon: {
      marginRight: '1rem',
    },
    buttonGroup: {
      marginTop: '1rem',
    },
     error: {
      color: '#ff3344',
      height: '1.2rem',
    }

 })