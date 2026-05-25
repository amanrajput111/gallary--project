  import React from 'react'
  
  const App = () => {
   
    function input(val){
      console.log(val)
    }
  
    return (
      <div>
       <input  onChange={function( ele){
        input(ele.target.value)
       }}  type="text" />

         
        

      </div>
    )
  }
  
  export default App