import { useState } from 'react'

import './App.css'

function App(){
  const [squares, setSquare] = useState(Array(9).fill(null));


  function handleClick(){
    console.log("hello prettey")
  }
  return(
    <div>
      <Heading/>
      <div>
        <Square value={squares[0]} onSquareClick={handleClick}/>
        <Square value={squares[1]} onSquareClick={handleClick} />
        <Square value={squares[2]} onSquareClick={handleClick} />
      </div>
      <div>
        <Square value={squares[3]} onSquareClick={handleClick}/>
        <Square value={squares[4]} onSquareClick={handleClick}/>
        <Square value={squares[5]} onSquareClick={handleClick}/>
      </div>

      <div>
        <Square value={squares[6]} onSquareClick={handleClick}/>
        <Square value={squares[7]} onSquareClick={handleClick}/>
        <Square value={squares[8]} onSquareClick={handleClick}/>
      </div>
      
    </div>
  )
}
export function Square({value, onSquareClick}){
  
  return(
    <button className='square' onClick={onSquareClick}> {value} </button>
  )
}

export function Heading(){
  return(
    <>
      <h1>Making a tic tac toe</h1>

    </>
  )
}

export default App
