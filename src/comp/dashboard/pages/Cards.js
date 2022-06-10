import React from 'react'
import Card from './Card'

const Cards = () => {
  return (
    <div className='dashboard-card-container'>
        <Card color="#0FEB81" header="Sales" number="2" text="#ffffff"/>
        <Card color="#FFFFFF"  header="Drug List" number="3" text="#464749"/>
        <Card color="#ED0505"  header="Expired drugs" number="0" text="#ffffff"/>
        <Card color="#D1BE16"  header="Total transaction Today" number="2" text="#ffffff"/>
    </div>
  )
}

export default Cards