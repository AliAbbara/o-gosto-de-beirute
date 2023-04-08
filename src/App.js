import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Navbar from './components/main/Navbar'
import Footer from './components/main/Footer'
import MobileNav from './components/main/MobileNav'
import ScrollToTop from './components/other/ScrollToTop'
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
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <div className='mb-14 sm:mb-2'>
      <Router>
        <ScrollToTop />
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
        <MobileNav />
      </Router>

      <ToastContainer />
    </div>
  )
}

export default App
