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
    <div style={{color:"white"}}>{toDisplay}</div>
  )
}
export function Operator({operator,handleClick}){
  return(
    <button className='operator' onClick={handleClick}>{operator}</button>
  )
}
export function Number({number,handleClick}){
  return(
    <button style={{backgroundColor:"black"}} onClick={handleClick}>{number}</button>
  )
}
//gets an operation and solves it in the correct order with 2 or more numbers
function calculateResultSimple(array,operators){
  let operator_quantities = [0,0,0,0];
  array.forEach((item)=>{
    if(operators.includes(item)){
      operator_quantities[operators.indexOf(item)]+=1;
    }
  })
  let temporary_result;
  //first for the "x" and "/"'s
  for(var i=0; i<(operator_quantities[0]+operator_quantities[1]);i++){
    array.forEach((item,index)=>{
      if(item=="x" || item=="/"){
      if(array.at(-1)==item){
        array.splice(array.length-1,1);
      }else{
        if(item=="x"){
          temporary_result = parseFloat(array[index-1])*parseFloat(array[index+1])
        }else{
          temporary_result = (parseFloat(array[index-1])/parseFloat(array[index+1])).toFixed(2)
        }
        array[index]=temporary_result;
        array.splice(index-1,1);
        array.splice(index,1);
      }
    }
    })
  }
  for(var i=0;i<operator_quantities[2]+operator_quantities[3];i++){
    array.forEach((item,index)=>{
      if(item=="+" || item=="-"){
        if(array.at(-1)==item){  
          array.splice(array.length-1,1);
        }else{
          if(item=="+"){
            temporary_result = parseFloat(array[index-1])+parseFloat(array[index+1])   
          }else{
            temporary_result = (parseFloat(array[index-1])-parseFloat(array[index+1])).toFixed(2)
          }     
          array[index]=temporary_result;
          array.splice(index-1,1);
          array.splice(index,1);
        }
    }
    })
  }

  console.log(array)
  return array[0];
}
//to prepare the array for the next function 
function mergeNumbers(array,operators){
  let number= "";
  let operator = "";
  let operation = [];
  array.forEach((item,index)=>{
    if(operators.includes(item)){
      console.log("hello world");
      operation.push(number);
      operation.push(item);
      number="";
    }else{
      number+=item;
    }
  });
  if(number){
    operation.push(number);
  }
  //create something that can split by the operators
  ;
  console.log(operation);
  return operation
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
    //merge all the numbers pressed into one 
    return calculateResultSimple(mergeNumbers(arrayed_expression,operators),operators);
  }else{
    return Math.floor(Math.random()*100)
  }
}
export default App
