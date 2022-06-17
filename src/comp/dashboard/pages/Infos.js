import React from 'react'
import Info from './Info'

const Infos = () => {
  return (
    <div className='dashboard-dash-item-info-container' style={{
        display:'flex',
        justifyContent: 'space-between'
    }}>
        <Info info="EXPIRED MEDICINE" overveiw="Over view of expired drug" details="No expired drug now" />
        <Info info="OUT OF STOCK" overveiw="Overview  of the medicine that is out of  stock" details="No medicine is out of stock"/>
    </div>
  )
}

export default Infos