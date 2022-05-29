import React from 'react'
import Grid from './Grid'
import { useState,useCallback,useRef } from 'react';
import produce from 'immer'
import Nav from '../landing page/Nav'
const Board = ({active,setactive}) => {
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
    
    const operation =[
        [0, -1],
        [0, 1],
        [1, 0],
        [-1, 0],
        [-1, 1],
        [1, -1],
        [1, 1],
        [-1, -1]
    ]
    
    const runningRef = useRef(isRunning)
    runningRef.current = isRunning
    
     const runSimulation = useCallback(
       () => {
        if(!runningRef.current){
            return;
        }
        //simulate
                setgrid((g)=>{
                    return produce(g, gridCopy =>{
                        for(let i=0; i<row; i++){
                            for(let j=0; j<col; j++){
                                    let neighbors = 0;
                                        operation.map(([x,y])=>{
                                            const newi = i+x;
                                            const newj = j+y;
                                            if(newi >=0 && newi < row && newj>=0 && newj<col){
                                                    neighbors += g[newi][newj]
                                                    
                                                   
                                            }
                                            if(neighbors < 2 ){
                                                gridCopy[i][j]= 0
                                              
                                            }else if(neighbors === 3 || neighbors ===2){
                                              
                                                gridCopy[i][j]= 1
                                            }else if(neighbors > 3){
                                                gridCopy[i][j]= 0
                                              
                                            }
                                            else if(g[i][j] === 0 && neighbors === 3){
                                                gridCopy[i][j] = 1
                                              
                                            }
                                            let genration = gen
                                                    genration +=1
                                                    setgen(genration)
                                        })
                                }
                            }
                    })
                })
        setTimeout(runSimulation,1000)
       },
       [],
     )
     const [gen, setgen] = useState(1)
    //setting the grid into a state
    const [grid, setgrid] = useState(()=> createGrid())
  return (
    <div>
      <div style={{background:'#333'}}>  <Nav active={active} setactive={setactive} /></div>
        <div>
        <button onClick={()=>{
                setisRunning(!isRunning)
              if(!isRunning){
                  runningRef.current = true
                return  runSimulation()
              }
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
           {gen}
        </div>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
        <Grid isRunning={isRunning} row={row} col={col} grid={grid}setgrid={setgrid}/>
        </div>
        
    </div>
  )
}

export default Board