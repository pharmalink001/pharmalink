import React, { useEffect, createContext} from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Contact from './comp/Contact/Contact'
import Board from './comp/Gameoflife/Board'
import LandingPage from './comp/landing page/LandingPage'
import NotFound from './NotFound'
import { useState} from 'react'
import Login from './comp/Login/Login'
import CompleteYourRegistration from './comp/Login/CompleteYourRegistration'
import Dashboard from './comp/dashboard/Dashboard'
import Nav from './comp/landing page/Nav'
import { NavCont } from './Contexts/NavContex'
 const App = () => {
  //states
  const [active, setactive] = useState(false)  
  return (
   <>
    {/* setting up routes for the application */}
  <NavCont>
    <Routes>
      <Route path='/' element={<LandingPage/>}></Route>
      <Route path='/Contact' element={<Contact/>}></Route>
      <Route path='/Login' element={<Login/>}></Route>
      <Route path='/VerifyEmail' element={<CompleteYourRegistration/>}></Route>
      <Route path='/Dashboard' element={<Dashboard/>}></Route>
      <Route path='*' element={<NotFound/>}></Route>
    </Routes>
  </NavCont>
    </>
  )
}

export default App