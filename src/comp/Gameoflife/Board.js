import React from 'react'
import Grid from './Grid'
import { useState } from 'react';

const Board = () => {
    //setting states
    
    const [row, setrow] = useState(50);
    const [col, setcol] = useState(50)
  return (
    <div>
        <div>
            <button onClick={()=>{
                setrow(50)
                setcol(50)
            }}>50X50</button>
            <button onClick={()=>{
                setrow(40)
                setcol(40)
            }}>40X40</button>
            <button  onClick={()=>{
                setrow(30)
                setcol(30)
            }}>30X30</button>
            <button  onClick={()=>{
                setrow(20)
                setcol(20)
            }}>20X20</button>
            
        </div>
        <div style={{display:'center',justifyContent:'center',alignItems:'center'}}>
        <Grid row={row} col={col}/>
        </div>
        
    </div>
  )
}

export default Board