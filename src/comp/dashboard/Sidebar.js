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
          <img src={Logo} alt="img"/>
        </div>
       <div className='dashboard-sidebar-item-container'>
       <div className='dashboard-sidebar-items'>
            <img src={Logo2} alt="img"/>
            <span>Dashboard</span>
          </div>
          <div className='dashboard-sidebar-items'>
            <img src={drug} alt="img"/>
            <span>Drug List</span>
          </div>
          <div className='dashboard-sidebar-items'>
            <img src={sales} alt="img"/>
            <span>Sales</span>
          </div>
          <div className='dashboard-sidebar-items'>
            <img src={store} alt="img"/>
            <span>Store</span>
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