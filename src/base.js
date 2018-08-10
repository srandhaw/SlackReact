import firebase from 'firebase/app'
import Rebase from 're-base'
import 'firebase/database'
import 'firebase/auth'


const config = {
    apiKey: "AIzaSyD339JKEhv4PRBdpGpMKoCmM_SvjWdvIKk",
    authDomain: "slack2-b8d3e.firebaseapp.com",
    databaseURL: "https://slack2-b8d3e.firebaseio.com",
    projectId: "slack2-b8d3e",
    storageBucket: "",
    messagingSenderId: "165128951974"
  }

  const app = firebase.initializeApp(config)

//authorization
export const googleProvider = new firebase.auth.GoogleAuthProvider()
export const githubProvider = new firebase.auth.GithubAuthProvider()
export const auth = firebase.auth()

//realtime database
  const db = firebase.database(app)
const base = Rebase.createClass(db)
export default base