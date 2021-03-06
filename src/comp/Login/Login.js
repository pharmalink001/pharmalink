import React from 'react'
import './Login.css'
import { Passwordsetcon,Passwordcon,Emailsetcon,Emailcon } from '../../Contexts/LoginContext'

import sidepic from '../landing page/img/sidepic3.png'
const Login = () => {
    const email = Emailcon()
    const setemail = Emailsetcon()
    const password = Passwordcon()
    const setpassword = Passwordsetcon()
  return (
    
    <div className='Login-page-container'>
        <div>
           <div className='login-page-header'>
                <div className='login-page-header-login'>Login</div>
                 <span>Welcome back please enter your name</span>
           </div>
           <form className='login-input-detials-contianer'>
            <input placeholder='Enter email' value={email} onChange={(e)=>{
              setemail(e.target.value)
            }} className='login-input-detials' type='email' id="email"/>
            <input placeholder='Enter password' value={password} onChange={(e)=>{
              setpassword(e.target.value)
            }} className='login-input-detials' type='password' id="password"/>
            <div className='login-input-rem-contianer'>
            <label htmlFor='rem'>Email
            <input className='login-input-checkbox
            ' type='checkbox' id="rem"/>
            </label>
            <span>forgot password</span>
            </div>
            <button type='submit'>Sign in</button>
            <button>Google sign in icon</button>
           </form>
        </div>
        <div className='login-side-pics'></div>
    </div>
  )
}

export default Login