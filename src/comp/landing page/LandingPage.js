import React from 'react'
import LandingPageHeader from './LandingPageHeader'
import LandingSearchBar from './LandingSearchBar'
import { useState } from 'react'
const LandingPage = () => {
  const [active, setactive] = useState(false)
  return (
    <>
    <LandingPageHeader active={active} setactive={setactive}/>
    <section className={active ? "unactive" : null}>
    <LandingSearchBar/>
    </section>
    </>
  )
}

export default LandingPage