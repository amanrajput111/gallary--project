 import axios from 'axios'
 
import { useState } from 'react'
 
 const App = () => {

  const [data, setData] = useState([])



 const getData = async () => {
  
  
   const res = await axios.get('https://picsum.photos/v2/list')

  //  console.log(res.data)
   setData(res.data)

   


 
 }
   return (
     <div>

<button onClick={getData}> GET</button>

<div>
 

 {data.map(function(elem ,idx){


return

<h1>hello{idx}, {elem.author}</h1>
 })}

   
</div>
     </div>
   )
 }
 
 export default App