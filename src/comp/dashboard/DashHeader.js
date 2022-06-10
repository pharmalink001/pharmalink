import React from 'react'
import profile from '../../comp//landing page//img/Ellipse.svg'

const DashHeader = () => {
  return (
    <div className='Dashboard-Header'>
      <div className='Dashborard-header-forn-search-bar'>
        <form className='Dashborard-header-forn-search-bar-form'>
        <span className="material-symbols-outlined">
      search
    </span>
    <input className='Dashborard-header-forn-search-bar-input' type="text" placeholder="search"/>
        </form>
      </div>
      <div className='Dashborard-header-edit-profile'>
          <span className="material-symbols-outlined">
            notifications
          </span>
          <span className="material-symbols-outlined">
            edit
          </span>
         <img style={{width:'24px',height:'24px'}} src={profile}/>


      </div>
    </div>
  )
}

export default DashHeader