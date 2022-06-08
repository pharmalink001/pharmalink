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