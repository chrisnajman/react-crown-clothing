import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyBK1TC7c7d9ZwizXbKgkxc5NXA5QbZFlgk",
    authDomain: "crwn-db-f025c.firebaseapp.com",
    databaseURL: "https://crwn-db-f025c.firebaseio.com",
    projectId: "crwn-db-f025c",
    storageBucket: "",
    messagingSenderId: "590656382763",
    appId: "1:590656382763:web:1c69b2d01d47988677876e"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
export const signInWithGoogle = () => auth.signInWithPopup(provider).catch()

export default firebase