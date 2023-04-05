import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Home from './pages/Home'
import Menu from './pages/Menu'
import Admins from './pages/admins/Admins'
import EditOrder from './pages/admins/EditOrder'
import Contact from './pages/Contact'
import AboutUs from './pages/AboutUs'
import NotFound from './pages/NotFound'
import SignIn from './pages/authen/SignIn'
import SignUp from './pages/authen/SignUp'
import ForgotPassword from './pages/authen/ForgotPassword'
import Profile from './pages/authen/Profile'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
//------------------------------------------------------------
// import { useState, useEffect } from 'react'
// import { onAuthStateChanged } from 'firebase/auth'
// import { auth, db } from './firebase.config'
// import { getDoc, doc } from 'firebase/firestore'

function App() {
  // const [loggedIn, setLoggedIn] = useState(false)
  // const [isAdmin, setIsAdmin] = useState(false)
  // const [loading, setLoading] = useState(false)

  // const checkAdmin = async (id) => {
  //   const usersRef = doc(db, 'users', id)
  //   const userSnap = await getDoc(usersRef)
  //   const user = userSnap.data()
  //   if (user.admin) {
  //     setIsAdmin(true)
  //     return true
  //   } else {
  //     setIsAdmin(false)
  //     return false
  //   }
  // }

  // useEffect(() => {
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       setLoggedIn(true)
  //       checkAdmin(user.uid)
  //     } else {
  //       setLoggedIn(false)
  //     }
  //     setLoading(false)
  //   })
  // }, [auth])

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/menu/:category' element={<Menu />} />
          <Route path='/admins/:section' element={<Admins />} />
          <Route path='/admins/edit-order/:orderId' element={<EditOrder />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/not-found' element={<NotFound />} />
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
        </Routes>
        <Footer />
      </Router>

      <ToastContainer />
    </>
  )
}

export default App
