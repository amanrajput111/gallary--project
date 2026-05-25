  import React ,{useState} from 'react'
import { Counter } from './Components/Counter'
import { Advance } from './Components/Advance'
  
  
  export const App = () => {
   
    const [num, setnum] = useState(30)

     function Change(){
        setnum(40)
     }

    return (
      <div>
        <h1>this value is {num}</h1>
  <button  onClick={Change}>
    click
  </button>


  <Counter/>


  <Advance/>

      </div>
    )
  }
  export default App
  