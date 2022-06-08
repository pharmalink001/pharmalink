import React from 'react'
import logo from './img/logo.png'
import { Link } from 'react-router-dom'
import {Navhook, Setnavhook} from '../../Contexts/NavContex'

const Nav = () => {
  const active = Navhook()
  const setactive = Setnavhook()
  return (
    <nav className= {active ? "Header-nav header-nav-active":'Header-nav' }>
    <div className='header-ham'>
        <div><img src={logo}/></div>
        <div>{
           active ?  <span onClick={()=> setactive(false)} className="material-symbols-outlined Header-nav-icon">close</span> : <span onClick={()=> setactive(true)} className="material-symbols-outlined Header-nav-icon">menu</span>
         
         
            
            }</div>
    </div> 
    <div></div>
    <div>
        <ul className={active?"header-ul" : "header-ul unactive"}>
            <li><Link onClick={()=>{setactive(false)}} className='header-link' to="/">Home</Link></li>
            <li><Link onClick={()=>{setactive(false)}} className='header-link' to="/">Drug Verification</Link></li>
            <li><Link onClick={()=>{setactive(false)}} className='header-link' to="/">About Us</Link></li>
            <li><Link onClick={()=>{setactive(false)}} className='header-link' to="/Contact">Contact Us</Link></li>
        </ul>
    </div>
    <div className={active ? 'header-login-container' : 'header-login-container unactive'}>
       <span style={{color:'#fff'}} className='header-login'><Link className='header-link' to="/Login" onClick={()=>{setactive(false)}}>Login</Link></span>
    </div>
</nav>
  )
}

export default Nav