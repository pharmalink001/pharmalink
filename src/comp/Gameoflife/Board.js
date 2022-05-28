import React from 'react'
import Grid from './Grid'
import { useState } from 'react';
import produce from 'immer'

const Board = () => {
    //setting states
    
    const [row, setrow] = useState(50);
    const [col, setcol] = useState(50)
    const [isRunning, setisRunning] = useState(false)
    const createGrid =()=>{
        const arr = new Array()
        for(let i=0;i<=row;i++){
           arr.push(Array.from(Array(col), ()=> 0))
        }
        return arr
    }
    

    //setting the value gotten from the arr into a sate
    const [grid, setgrid] = useState(()=> createGrid())
  return (
    <div>
        <div>
        <button onClick={()=>{
                setisRunning(!isRunning)
            }}>{!isRunning ? "start" : "stop"}</button>
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
        <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
        <Grid isRunning={isRunning} row={row} col={col} grid={grid}setgrid={setgrid}/>
        </div>
        
    </div>
  )
}

export default Board