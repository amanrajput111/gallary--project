import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

   let [counter,setcounter ] = useState(0)

  

  const Add = () =>{ 
    //  counter = counter +1
  setcounter(counter => counter+1)
  setcounter(counter => counter+1)
  setcounter(counter => counter+1)
  setcounter(counter => counter+1)
  }

  const Remove = ()=>{
    // counter = counter -1
  setcounter(counter => counter-1)
  setcounter(counter => counter-1)
  setcounter(counter => counter-1)
  setcounter(counter => counter-1)
  setcounter(counter => counter-1)
  
  }
  

  return (
    <>
  <h1>counter value: {counter}</h1>
  <button onClick={Add}>Add Number</button>
  <button  onClick={Remove}>Remove Number</button>
    </>
  )
}

export default App
