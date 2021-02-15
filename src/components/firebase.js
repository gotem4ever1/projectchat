import firebase from "firebase"


const firebaseConfig = {
  apiKey: "AIzaSyBQxDGrx3aAINPYP1NUt7Dpuy86qyiFfoQ",
  authDomain: "coolchat-6e722.firebaseapp.com",
  databaseURL: "https://coolchat-6e722-default-rtdb.firebaseio.com/",
  projectId: "coolchat-6e722",
    storageBucket: "coolchat-6e722.appspot.com",
    messagingSenderId: "93304662350",
    appId: "1:93304662350:web:6d250cd4c4dd82c02d961f",
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db
