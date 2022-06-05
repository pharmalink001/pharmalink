import React from 'react'
import DashHeader from './DashHeader'
import Main from './Main'
import Sidebar from './Sidebar'
import './dash.css'

const Dashboard = () => {
  return (
    <div className='dashboard'>
        <DashHeader/>
        <section className='Dashboard-main-container'>
            <Sidebar/>
            <Main />
        </section>
    </div>
  )
}

export default Dashboard