import React from 'react'
import './LandingPageSearch.css'

const LandingSearchBar = () => {
  return (
    <div className='landing-pagesearch-container'>
     <div className='LandingPage-header'>Recent Items</div>
        <div className="landing-search-box">
        <input type="search" placeholder="Input Drug Name" />
        <a href="#">
            <button type='submit' className="icon">
            <span className="material-symbols-outlined"> search</span>
            </button>
        </a>
</div>

    </div>
  )
}

export default LandingSearchBar