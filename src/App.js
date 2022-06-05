import React, { useEffect } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Contact from './comp/Contact/Contact'
import Board from './comp/Gameoflife/Board'
import LandingPage from './comp/landing page/LandingPage'
import NotFound from './NotFound'
import { useState} from 'react'
import Login from './comp/Login/Login'
import CompleteYourRegistration from './comp/Login/CompleteYourRegistration'
import Dashboard from './comp/dashboard/Dashboard'
const App = () => {
  const [active, setactive] = useState(false)
  const [first, setfirst] = useState(1)
  
  
  return (
   <>
  



    {/* setting up routes for the application */}
    
    <Routes>
      <Route path='/' element={<LandingPage active={active} setactive={setactive}/>}></Route>
      <Route path='/Contact' element={<Contact active={active} setactive={setactive}/>}></Route>
      <Route path='/Login' element={<Login active={active} setactive={setactive}/>}></Route>
      <Route path='/VerifyEmail' element={<CompleteYourRegistration active={active} setactive={setactive}/>}></Route>
      <Route path='/Dashboard' element={<Dashboard active={active} setactive={setactive}/>}></Route>
      <Route path='*' element={<NotFound/>}></Route>
    </Routes>
   
    </>
  )
}

export default App