import { useState } from 'react'
import './App.css'
//I will try to make a rock paper scissors game
// In react!!! good luck for me!!
function App(){
  let   [points,setPoints] = useState(0);
  let [pc_points,setPcPoints] = useState(0);
  let [color, setColor] = useState("white");
  let [pc_hand, setPcHand] = useState("");
  const options = [0,1,2];
  const emoji_options = ["✋","✌️","✊"];
  const cases = [
    [0,1,-1],
    [-1,0,1],
    [1,-1,0]
  ]
  function CompareComputer(name){
    let computerGuess= options[Math.floor(Math.random()*options.length)];
    if(!(cases[computerGuess][name]==-1)){
      setPoints(points+ cases[computerGuess][name])
      setPcHand(emoji_options[computerGuess])      
      if(cases[computerGuess][name]==0){
        setColor("white");
      }else{
        setColor("green")
      }
    }else{
      setColor("red")
      setPcPoints(pc_points+1)
    }
  }
  function resetPoints(){
    setPoints(0);
    setPcPoints(0);
    setColor("white");
  }
  return(
    <div style={{
      backgroundColor:color,
      width:"40em",
      height:"40em",
      display:"flex",
      flexDirection:"column",
      alignItems:"center",
      justifyContent:"center"
    }}>
    <Points point={points} pcp={pc_points}/>
    <PcHand choice={pc_hand}/>
    <div >
      <Options name={"✋"} handleClick={()=> CompareComputer(0)}/>
      <Options name={"✌️"} handleClick={()=>CompareComputer(1)}/>
      <Options name={"✊"} handleClick={()=>CompareComputer(2)}/>
    </div>
    <Reset handleClick={resetPoints}/>
    </div>
  )
}
export function Options({name,handleClick}){

  return(
    <
      button
      style={{
        fontSize:"1.3em",
        marginInline:"0.3em",
        backgroundColor:"RGBA(0,0,0,0.5)"
      }}
      onClick={handleClick}
    >
    {name}
    </button>
  )
}
export function Points({point, pcp}){
  return(
    <div
    style={{
      color:"black",
      display:"flex",
      fontSize:"0.5em",
      gap:"30em",
      alignItems:"center"
    }}>
      <h1>Points: {point}</h1>
      <h1 style={{alignSelf:"flex-end"}}>Computer's points: {pcp}</h1>
    </div>
  )
}
export function PcHand({choice}){
  return(
    <p style={{fontSize:"3em"}}>{choice}</p>
  )
}
export function Reset({handleClick}){
  return(
    <button onClick={handleClick}>↻</button>
  )
}
export default App
