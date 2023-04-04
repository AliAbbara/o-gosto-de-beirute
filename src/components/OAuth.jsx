import { useNavigate } from 'react-router-dom'
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { doc, setDoc, getDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '../firebase.config'
import { toast } from 'react-toastify'
import { FcGoogle } from 'react-icons/fc'

function OAuth() {
  const navigate = useNavigate()

  const onGoogleClick = async () => {
    try {
      const auth = getAuth()
      const provider = new GoogleAuthProvider()
      const result = await signInWithPopup(auth, provider)
      const user = result.user

      const docRef = doc(db, 'users', user.uid)
      const docSnap = await getDoc(docRef)

      if (!docSnap.exists()) {
        await setDoc(doc(db, 'users', user.uid), {
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp(),
        })
      }
      navigate('/')
      toast.success('Signed in successfully!')
    } catch (error) {
      toast.error('Something went wrong, please check for a correct email!')
    }
  }
  return (
    <div>
      <FcGoogle
        onClick={onGoogleClick}
        className='p-1 bg-white rounded-lg w-8 h-8 hover:cursor-pointer hover:bg-slate-200 duration-100'
      />
    </div>
  )
}

export default OAuth
