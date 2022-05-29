import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Contact from './comp/Contact/Contact'
import Board from './comp/Gameoflife/Board'
import LandingPage from './comp/landing page/LandingPage'
import NotFound from './NotFound'
import { useState } from 'react'
const App = () => {
  const [active, setactive] = useState(false)
  return (
   <>
  



    {/* setting up routes for the application */}
    
    <Routes>
      <Route path='/' element={<LandingPage active={active} setactive={setactive}/>}></Route>
      <Route path='/Contact' element={<Contact active={active} setactive={setactive}/>}></Route>
      <Route path='/Game' element={<Board active={active} setactive={setactive}/>}></Route>
      <Route path='*' element={<NotFound/>}></Route>
    </Routes>
   
    </>
  )
}

export default App