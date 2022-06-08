import React from 'react'
import LandingPageHeader from './LandingPageHeader'
import LandingSearchBar from './LandingSearchBar'
import { useState } from 'react'
import Cards from './DrugCard/Cards'
import Footer from '../footer/Footer'
import {Navhook} from '../../Contexts/NavContex'

const LandingPage = () => {
  
  const active =Navhook()
  
  return (
    <>
    <LandingPageHeader />
    <section className={active ? "unactive" : null}>
    <LandingSearchBar/>
    <Cards/>
    <Footer/>
    </section>
    </>
  )
}

export default LandingPage