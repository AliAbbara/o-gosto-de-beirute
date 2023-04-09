import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// For Firebase JS SDK v7.20.0 and later

const firebaseConfig = {
  apiKey: 'AIzaSyDPsa5IClT3hkzK2bJcqbR1Cc08svCLrCo',
  authDomain: 'o-gosto-de-beirute.firebaseapp.com',
  projectId: 'o-gosto-de-beirute',
  storageBucket: 'o-gosto-de-beirute.appspot.com',
  messagingSenderId: '17877856459',
  appId: '1:17877856459:web:7f74840bae121520f5ab4e',
  measurementId: 'G-XK3T1G70GE',
}

const app = initializeApp(firebaseConfig)
// eslint-disable-next-line
const analytics = getAnalytics(app)
export const auth = getAuth(app)
export const db = getFirestore()
