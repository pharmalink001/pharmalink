import React from 'react'
import Logo from '../landing page/img/logo.png'
import Logo2 from '../landing page/img/logo.svg'
import drug from '../landing page/img/drug.svg'
import sales from '../landing page/img/sales.svg'
import store from  '../landing page/img/store.svg'

const Sidebar = () => {
  return (
    <div  className="Dashboard-sidebar">
       <div className='dashboard-sidebar-container'>
       <div title='logo' className='dashboard-sidebar-logo'>
          <img src={Logo}/>
        </div>
       <div className='dashboard-sidebar-item-container'>
       <div className='dashboard-sidebar-items'>
            <img src={Logo2}/>
            <span>Dashboard</span>
          </div>
          <div className='dashboard-sidebar-items'>
            <img src={drug}/>
            <span>Drug List</span>
          </div>
          <div className='dashboard-sidebar-items'>
            <img src={sales}/>
            <span>Drug List</span>
          </div>
          <div className='dashboard-sidebar-items'>
            <img src={store}/>
            <span>Drug List</span>
          </div>
       </div>
       <div  className=' dashboard-sidebar-logout'>
       <span className="material-symbols-outlined">
          logout
        </span>
    <span>Logout</span>
       </div>
       </div>
    </div>
  )
}

export default Sidebar