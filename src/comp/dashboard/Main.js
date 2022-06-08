import React from 'react'
import { DashboardDash, DruglistDash, SaleDash, StoreDash } from '../../Contexts/Dashboard'
import Dashboardpage from './pages/Dashboard'
import Druglistpage from './pages/Druglist'
import Salespage from './pages/Sales'
import Storepage  from './pages/Store'

const Main = () => {
  
  const Drug = DruglistDash()
  const Dash =DashboardDash()
  const Sales = SaleDash()
  const Stores = StoreDash()
 
  return (
    <div className="Dashboard-main">
      <div className='Dashboard-main-hearder-nav-header'>Dashboard</div>
      <div className='Dashboard-main-hearder-nav'>
        <span className='Dashboard-main-hearder-nav-home'>Home</span>
        <span className='Dashboard-main-hearder-nav-location'>
    {
      Drug === true && "Druglist"
    }
     {
      Sales === true && "Sales"
    }
     {
      Dash === true && "Dashboard"
    }
     {
      Stores === true && "Store"
    }
        </span>
      </div>
    {
      Drug === true && <Druglistpage/>
    }
     {
      Sales === true && <Salespage/>
    }
     {
      Dash === true && <Dashboardpage/>
    }
     {
      Stores === true && <Storepage />
    }
    </div>
  )
}

export default Main