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

/* Store authenticated user in database */
export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get()

    if(!snapShot.exists) {
        const { displayName, email} = userAuth
        const createdAt = new Date()
    

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch(error) {
            console.log('error creating user', error.message)
        }
    }

    return userRef
}


firebase.initializeApp(config)

export const auth = firebase.auth()

export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()

export const signInWithGoogle = () => auth.signInWithPopup(provider).catch(()=>{})
/*
    .catch(()=>{})
    This is appended to stop console error message when user clicks
    'Sign in with Google' then immediately closes the Google popup
    without signing in to a Google account.

*/
export default firebase