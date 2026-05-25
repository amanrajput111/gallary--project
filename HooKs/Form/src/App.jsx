 import React, { useState } from 'react'
 
 export const App = () => {

  const [name, setName] = useState("")

  const SubmitHandler = (e)=>{
    e.preventDefault()
  console.log(name)

  setName("")
  }

   return (
     <div>
       <form onSubmit={(e)=>{
        SubmitHandler(e)
       }}>
        <input 
        type="text" placeholder='enetr your number'

        value={name}
        onChange={(e)=>{
          setName(e.target.value)
        }}
        />
        <button>submit</button>
       </form>
     </div>
   )
 }
 export default App
 