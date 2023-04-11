import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../firebase.config'

export const checkAdmin = async (id) => {
  try {
    const usersRef = doc(db, 'users', id)
    const userSnap = await getDoc(usersRef)
    const user = userSnap.data()
    if (user.admin) {
      return true
    } else {
      return false
    }
  } catch (error) {
    console.log(error)
  }
}
