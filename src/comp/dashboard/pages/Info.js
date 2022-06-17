import React from 'react'


const Info = ({info,details,overveiw}) => {
  return (
    <div style={{
      width: '375px',
    height: '250px',
    background: '#FFFFFF',
    borderRadius: '10px',
    marginTop:'90px',
    padding:'12px 33px',
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-between'
    }}>
      <div>
      <div style={{
        fontWeight: '600',
        fontSize: '20px',
        lineHeight: '36px',
        color: '#464749',
    
      }}>{info}</div>
      <div style={{
        fontWeight: '200',
        fontSize: '20px',
        lineHeight: '36px',
        color: '#464749',
    
      }}
      >{overveiw}</div>
      </div>
    
      <div 
      tyle={{
        fontWeight: '500',
        fontSize: '15px',
        lineHeight: '36px',
        color: '#464749',
    
      }}>{details}</div>
        
    </div>
  )
}

export default Info