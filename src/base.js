import firebase from 'firebase/app'
import Rebase from 're-base'
import 'firebase/database'


const config = {
    apiKey: "AIzaSyD339JKEhv4PRBdpGpMKoCmM_SvjWdvIKk",
    authDomain: "slack2-b8d3e.firebaseapp.com",
    databaseURL: "https://slack2-b8d3e.firebaseio.com",
    projectId: "slack2-b8d3e",
    storageBucket: "",
    messagingSenderId: "165128951974"
  }

  const app = firebase.initializeApp(config)

  const db = firebase.database(app)
const base = Rebase.createClass(db)
export default base