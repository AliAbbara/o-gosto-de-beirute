import { useNavigate } from 'react-router-dom'
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { doc, setDoc, getDoc, serverTimestamp } from 'firebase/firestore'
import { db, auth } from '../../firebase.config'
import { toast } from 'react-toastify'
import { FcGoogle } from 'react-icons/fc'

function OAuth() {
  const navigate = useNavigate()

  const onGoogleClick = async () => {
    try {
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
      toast.success('Conectado com sucesso!')
    } catch (error) {
      console.log(error)
      toast.error(
        'Algo deu errado, por favor verifique se o e-mail está correto!'
      )
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
