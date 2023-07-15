import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App(){
  
  return(
    <div
    className='app'
    >
      <h1>Odin-recipes</h1>
      <Menu/>
    </div>
  )
}

export function Menu(){
  const items=[
    "Gluten-Free Carbonara",
    "Banana-split(Homemade)",
    "Steamed Eggs"
  ]
  const listItems = items.map(item=>
    <li><MeunItem name={item}/></li>
  )
  return(
    <ul
    className='menu'
    >
      {listItems}
    </ul>
  )
}

export function MeunItem(props){
  function loadRecipe(){
    alert(props.name)
    
  }
  return(
    <button onClick={loadRecipe}>{props.name}</button>
  )
}
export default App
