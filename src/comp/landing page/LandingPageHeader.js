import React from 'react'
import './header.css'
import logo from './img/logo.png'
import Side from './img/sidepic.png'
import { Link } from 'react-router-dom'

const LandingPageHeader = ({active,setactive}) => {

  return (
    <>
        <header className='header'>
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
                        <li><Link className='header-link' to="/">Home</Link></li>
                        <li><Link className='header-link' to="/">Drug Verification</Link></li>
                        <li><Link className='header-link' to="/">About Us</Link></li>
                        <li><Link className='header-link' to="/">Contact Us</Link></li>
                    </ul>
                </div>
                <div className={active ? 'header-login-container' : 'header-login-container unactive'}>
                   <span className='header-login'>Login</span>
                </div>
            </nav>
            <div className={active ? "header-content-container unactive" : "header-content-container"}>
                <div className='header-first-content'>
                    <div className='header-first-content-header'>
                    Connecting the
                    Pharmaceutical World
                    </div>
                    <div className='header-first-content-p'>
                    Take advantaage of 21st century technology
                    to provide legit drugs to the society
                    </div>
                    <div className='header-first-content-btn-container'>
                    <Link className='header-link-btn-Active' to='/'>Register</Link>
                    <Link className='header-link-btn' to='/'>Explore</Link>
                    </div>
                </div>
                <div className='header-second-content'>
                   <img className='header-sideimg' src={Side}></img>
                </div>
            </div>
        </header>
    </>
  )
}

export default LandingPageHeader