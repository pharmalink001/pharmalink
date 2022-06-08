import React from 'react'
import './header.css'
import logo from './img/logo.png'
import Side from './img/sidepic.png'
import { Link } from 'react-router-dom'
import Nav from './Nav'
import {Navhook} from '../../Contexts/NavContex'

const LandingPageHeader = () => {
const active = Navhook()

  return (
    <>
        <header className='header'>
           <Nav/>
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