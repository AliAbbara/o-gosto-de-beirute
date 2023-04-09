import { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Home from './pages/main/Home'
import Menu from './pages/main/Menu'
import Contact from './pages/main/Contact'
import AboutUs from './pages/main/AboutUs'
import Admins from './pages/admins/Admins'
import EditOrder from './pages/admins/EditOrder'
import SignIn from './pages/authen/SignIn'
import SignUp from './pages/authen/SignUp'
import ForgotPassword from './pages/authen/ForgotPassword'
import Profile from './pages/authen/Profile'
import NotFound from './pages/NotFound'
import Navbar from './components/main/Navbar'
import Footer from './components/main/Footer'
import MobileNav from './components/main/MobileNav'
import ScrollToTop from './components/other/ScrollToTop'
import 'react-toastify/dist/ReactToastify.css'
import Spinner from './components/other/Spinner'

function App() {
  const [loading, setLoading] = useState(true)
  const location = useLocation()

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000)
  }, [location])

  return (
    <div className='mb-14 sm:mb-2 px-1 sm:px-2'>
      {loading && <Spinner />}
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home setLoading={setLoading} />} />
        <Route
          path='/menu/:category'
          element={<Menu setLoading={setLoading} />}
        />
        <Route path='/about-us' element={<AboutUs setLoading={setLoading} />} />
        <Route path='/contact' element={<Contact setLoading={setLoading} />} />
        <Route path='/sign-in' element={<SignIn setLoading={setLoading} />} />
        <Route path='/sign-up' element={<SignUp setLoading={setLoading} />} />
        <Route path='/profile' element={<Profile setLoading={setLoading} />} />
        <Route
          path='/forgot-password'
          element={<ForgotPassword setLoading={setLoading} />}
        />
        <Route path='/admins/:section' element={<Admins />} />
        <Route path='/admins/edit-order/:orderId' element={<EditOrder />} />
        <Route path='/not-found' element={<NotFound />} />
      </Routes>
      <Footer />
      <MobileNav />

      <ToastContainer />
    </div>
  )
}

export default App
