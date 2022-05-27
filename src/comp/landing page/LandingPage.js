import React from 'react'
import LandingPageHeader from './LandingPageHeader'
import LandingSearchBar from './LandingSearchBar'
import { useState } from 'react'
import Cards from './DrugCard/Cards'
import Footer from '../footer/Footer'
const LandingPage = ({setactive,active}) => {
  
  return (
    <>
    <LandingPageHeader active={active} setactive={setactive}/>
    <section className={active ? "unactive" : null}>
    <LandingSearchBar/>
    <Cards/>
    <Footer/>
    </section>
    </>
  )
}

export default LandingPage