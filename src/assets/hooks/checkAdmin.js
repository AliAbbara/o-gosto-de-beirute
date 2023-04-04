import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../firebase.config'

export const checkAdmin = async (id) => {
  const usersRef = doc(db, 'users', id)
  const userSnap = await getDoc(usersRef)
  const user = userSnap.data()
  if (user.admin) {
    return true
  } else {
    return false
  }
}
