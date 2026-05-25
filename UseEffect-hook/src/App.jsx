 import React, { useEffect, useState } from 'react'
 
 const App = () => {

  const [num, setNum] = useState(0)

  const [num2, setNum2] = useState(100)

  useEffect(function(){
    console.log("hello guys")
  },[num2])

   return (
     <div>
   
     <h1>{num}</h1>
     <h1>{num2}</h1>
     <button onMouseLeave={()=>{
      setNum(num+1)
     }}


     onMouseEnter={()=>{
      setNum2(num2+10)
     }}
     
     
     
     >click</button>

     
    

     </div>
   )
 }
 
 export default App



 