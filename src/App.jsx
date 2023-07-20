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

function calculateResultSimple(array,operators){
  
  let operator_quantities = [0,0,0,0];
  
  array.forEach((item)=>{
    if(operators.includes(item)){
      operator_quantities[operators.indexOf(item)]+=1;
    }
  })
  //find the order of operations
  console.log(operator_quantities,"hello people");

  if(operator_quantities[0] || operator_quantities[1]){
    console.log("hello wolrdo",array);
  }
  let temporary_result;
  //first for the "x" and "/"'s
  for(var i=0; i<(operator_quantities[0]+operator_quantities[1]);i++){
    array.forEach((item,index)=>{
      if(item=="x" || item=="/"){
      //if operator is not the last item, nor the first
      //if side items arent other operators
      //if side items are "-" 
      
      if(array.at(-1)==item){
        console.log("you dumb idiot, you can't do that",item);
        array.splice(array.length-1,1);
      }else{
        if(item=="x"){
          temporary_result = parseFloat(array[index-1])*parseFloat(array[index+1])
          
        }else{
          temporary_result = (parseFloat(array[index-1])/parseFloat(array[index+1])).toFixed(2)
        }
        console.log("part1",array);
        console.log("tempa sda", temporary_result)
        array[index]=temporary_result;
        array.splice(index-1,1);
        array.splice(index,1);
        
        console.log("part2",array);
        
      }
      console.log("hello asdlfajs",array);
    }
    })
  }
    
  
  //find if the operator is in the middle

  //calculate result with 2d array

  
  return array[0];
}

function solver(string){
  
  let arrayed_expression = string.split("");
  const operators = ["/","x","-","+"];
  let has_operators = false;
  arrayed_expression.forEach((item)=>{
    if(operators.includes(item)){
      console.log("found one!",item);
      has_operators=true;
    }
    
  })
  if(has_operators){
    return calculateResultSimple(arrayed_expression,operators);
  }else{
    return Math.floor(Math.random()*100)
  }
  
}
export default App
