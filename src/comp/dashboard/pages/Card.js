import React from 'react'

const Card = ({header,number,color,text}) => {

  return (
      
    <div style={
      {
        width: '100%',
        height: '130px',
        borderRadius: '10px',
        background:`${color}`,
        display:'flex',
        flexDirection: 'column',
        alignitems: 'center',
        gap: '20px'
      }
    }>
        <div style={{
          fontSize: '15px',
          color:`${text}`,
          fontWeight:'600',
          padding:'10px'
      
        }}  >{header}</div>
        <div  style={{
          fontSize: '20px',
          color:`${text}`,
          fontWeight:'600',
          padding:'10px'
      
        }} >{number}</div>
    </div>
  )
}

export default Card