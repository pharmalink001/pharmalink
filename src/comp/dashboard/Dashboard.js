import React from 'react'
import DashHeader from './DashHeader'
import Main from './Main'
import Sidebar from './Sidebar'
import './dash.css'
import { useState } from 'react'
import { DashContext } from '../../Contexts/Dashboard'

const Dashboard = () => {
  return (
    <>
    <DashContext>
    <div className='dashboard'>
        <DashHeader/>
        <section className='Dashboard-main-container'>
            <Sidebar/>
            <Main />
        </section>
    </div>
    </DashContext>
    </>
  )
}

export default Dashboard