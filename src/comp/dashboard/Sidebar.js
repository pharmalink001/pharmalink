import React from 'react'
import Logo from '../landing page/img/logo.png'
import Logo2 from '../landing page/img/logo.svg'
import drug from '../landing page/img/drug.svg'
import sales from '../landing page/img/sales.svg'
import store from  '../landing page/img/store.svg'
import {StoreDash, DruglistDashset, DashboardDashset, SalesDashset, StoreDashset } from '../../Contexts/Dashboard'

 
 
const Sidebar = () => {
  const Stores = StoreDash()
  const Drugset = DruglistDashset()
  const Dashset = DashboardDashset()
  const Salessetcon = SalesDashset()
  const Storesset = StoreDashset()
  return (
    <div  className="Dashboard-sidebar">
       <div className='dashboard-sidebar-container'>
       <div title='logo' className='dashboard-sidebar-logo'>
          <img src={Logo} alt="img"/>
        </div>
       <div className='dashboard-sidebar-item-container'>
       <div className='dashboard-sidebar-items' onClick={()=>{
          Dashset((d)=> d = true)
          Drugset((d)=> d = false)
          Salessetcon((d)=> d = false)
          Storesset((d)=> d = false)
}}>
            <img src={Logo2} alt="img"/>
            <span>Dashboard</span>
          </div>
          <div className='dashboard-sidebar-items'  onClick={()=>{
          Dashset((d)=> d = false)
          Drugset((d)=> d = true)
          Salessetcon((d)=> d = false)
          Storesset((d)=> d = false)
}}>
            <img src={drug} alt="img"/>
            <span>Drug List</span>
          </div>
          <div className='dashboard-sidebar-items'  onClick={()=>{
          Dashset((d)=> d = false)
          Drugset((d)=> d = false)
          Salessetcon((d)=> d = true)
          Storesset((d)=> d = false)
}}>
            <img src={sales} alt="img"/>
            <span>Sales</span>
          </div>
          <div className='dashboard-sidebar-items' onClick={()=>{
          Dashset((d)=> d = false)
          Drugset((d)=> d = false)
          Salessetcon((d)=> d = false)
          Storesset((d)=> d = true)
}}>
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
       {
      console.log(Stores )
      // console.log(Drug)
      //  console.log(Sales)
      //   console.log(Stores)
    
    }
    </div>

  )
}

export default Sidebar