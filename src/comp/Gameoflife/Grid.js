import { toBeChecked } from '@testing-library/jest-dom/dist/matchers'
import React from 'react'
import { useState } from 'react'

const Grid = ({row,col}) => {
 const [active, setactive] = useState(false)
 const [first, setfirst] = useState('')
 const [second, setsecond] = useState('')
    let arr =[]
    const call =(val)=>{
        // setfirst(val.i)
        // setsecond(val.j)
    }
    for(let i =0;i<row;i++){
        
        arr[i]=[]
        for(let j= 0;j<col;j++){
            arr[i][j]=0;
            // console.log(`${first} and${second}`)
          call({i,j})
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
        background:`${active?"black":"white"}`
    }
  return (
    <>
       
        <div style={gridTemplate}>
           {
               grid.map((col,x)=>{
                   return col.map((row,w)=>{
                     return  <div onClick={
                         ()=>{
                         
                         }
                     } style={box}>{first + second}</div>
                   })
               })
           }
        </div>

    </>
  )
}

export default Grid