import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../../firebase.config'

export const checkLoggedIn = () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      return true
    } else {
      return false
    }
  })
}
