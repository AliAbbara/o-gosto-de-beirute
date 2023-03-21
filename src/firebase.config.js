// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDPsa5IClT3hkzK2bJcqbR1Cc08svCLrCo',
  authDomain: 'o-gosto-de-beirute.firebaseapp.com',
  projectId: 'o-gosto-de-beirute',
  storageBucket: 'o-gosto-de-beirute.appspot.com',
  messagingSenderId: '17877856459',
  appId: '1:17877856459:web:7f74840bae121520f5ab4e',
  measurementId: 'G-XK3T1G70GE',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
export const db = getFirestore()
