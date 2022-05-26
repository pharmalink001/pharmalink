import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Contact from './comp/Contact/Contact'
import Board from './comp/Gameoflife/Board'
import LandingPage from './comp/landing page/LandingPage'
import NotFound from './NotFound'

const App = () => {
  return (
   <>
  



    {/* setting up routes for the application */}
    
    <Routes>
      <Route path='/' element={<LandingPage/>}></Route>
      <Route path='/Contact' element={<Contact/>}></Route>
      <Route path='/Game' element={<Board/>}></Route>
      <Route path='*' element={<NotFound/>}></Route>
    </Routes>
   
    </>
  )
}

export default App