import { useEffect, useState } from 'react'
import './App.css'
//I will try to make a rock paper scissors game
// In react!!! good luck for me!!
function App(){
  const [expression, setExpression] = useState("");
  const [ended, setEnded] = useState(false);
  function pressedNumber(value){
    if(ended){
      setExpression(`${value}`);
      setEnded(false);
      
    }else{
      let new_var= `${expression}${value}`
      setExpression(new_var)
    }
    
    
  }

  function pressedOperator(value){
    const options = ["/","x","-","+"]
    console.log(value)
    //seeing if the button pressed was the "="
    if(!options.includes(value)){
      
      setExpression(solver(expression))
      setEnded(true);
      
    }else{
      setExpression(`${expression}${value}`);
    }
  }
  useEffect(()=>{
    
  },[expression])
  return(
    <div className='buttons'>
      <Display toDisplay={expression}/>
      <button>Ac</button>
      <button>+/-</button>
      <button>%</button>
      <Operator handleClick={()=>{pressedOperator("/")}} operator={"/"}/>
      <Number handleClick={()=>{pressedNumber(7)}} number={7}/>
      <Number handleClick={()=>{pressedNumber(8)}} number={8}/>
      <Number handleClick={()=>{pressedNumber(9)}} number={9}/>
      <Operator handleClick={()=>{pressedOperator("x")}} operator={"x"}/>
      <Number handleClick={()=>{pressedNumber(4)}} number={4}/>
      <Number handleClick={()=>{pressedNumber(5)}} number={5}/>
      <Number handleClick={()=>{pressedNumber(6)}} number={6}/>
      <Operator handleClick={()=>{pressedOperator("-")}} operator={"-"}/>
      <Number handleClick={()=>{pressedNumber(1)}} number={1}/>
      <Number handleClick={()=>{pressedNumber(2)}} number={2}/>
      <Number handleClick={()=>{pressedNumber(3)}} number={3}/>
      <Operator handleClick={()=>{pressedOperator("+")}} operator={"+"}/>
      <Number handleClick={()=>{pressedNumber(0)}} number={0}/>
      <button></button>
      <button>,</button>
      <Operator handleClick={()=>{pressedOperator("=")}} operator={"="}/>
      
    </div>
  )

}
export function Display({toDisplay}){
  return(
    <div>{toDisplay}</div>
  )
}

export function Operator({operator,handleClick}){
  return(
    <button className='operator' onClick={handleClick}>{operator}</button>
  )
}

export function Number({number,handleClick}){
  return(
    <button onClick={handleClick}>{number}</button>
  )
}

function solver(string){
  console.log(string)
  return Math.floor(Math.random()*100)
}
export default App
