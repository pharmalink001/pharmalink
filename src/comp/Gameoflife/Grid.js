import React from 'react'
import { useState } from 'react'

const Grid = ({row,col}) => {
 
    let arr =[]
    for(let i =0;i<row;i++){
        arr[i]=[]
        for(let j= 0;j<col;j++){
            arr[i][j]=0;
        }
       
    }
    //setting the value gotten from the arr into a sate
    const [grid, setgrid] = useState(arr)
    const [color, setcolor] = useState(`#FFF`)
    //styles for grid
    const gridTemplate ={
        display:'grid',
        height:'500px',
        gridTemplateColumns:'repeat(50, 1fr)',
        gridtemplaterows:' repeat(50, 1fr)'
    }
    //styles for box
    const box ={
        width:'20px',
        height:'20px',
        border:'1px solid #000',
        
    }
  return (
    <>
       
        <div style={gridTemplate}>
           {
               grid.map((col)=>{
                   return col.map((row)=>{
                     return  <div onClick={
                         ()=>{
                         
                         }
                     } style={box}></div>
                   })
               })
           }
        </div>

    </>
  )
}

export default Grid