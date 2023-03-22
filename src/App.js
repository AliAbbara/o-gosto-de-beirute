import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Menu from './pages/Menu'
import Orders from './pages/Orders'
import Admins from './pages/Admins'
import Contact from './pages/Contact'
import AboutUs from './pages/AboutUs'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import ForgotPassword from './pages/ForgotPassword'

function App() {
  return (
    <div className='scroll-smooth'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/orders' element={<Orders />} />
          <Route path='/admins' element={<Admins />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
