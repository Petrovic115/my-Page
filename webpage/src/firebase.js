// Import the functions you need from the SDKs you need
import firebase from  'firebase/compat/app'
import { getFirestore } from 'firebase/firestore'
import 'firebase/compat/auth'
// Your web app's Firebase configuration
const app = firebase.initializeApp({
  apiKey: "AIzaSyCl7oBqTZYj1t31ERGSZnwUY1LQDKQISUI",
  authDomain: "inhouse-project-app.firebaseapp.com",
  projectId: "inhouse-project-app",
  storageBucket: "inhouse-project-app.appspot.com",
  messagingSenderId: "601933686722",
  appId: "1:601933686722:web:a9ea799ec15e676f78185b"
});

// Initialize Firebase
export const auth = app.auth()
export const db = getFirestore()
export default app
