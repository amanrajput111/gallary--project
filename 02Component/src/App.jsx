 import React from 'react'
import Card from './Components/Card'
 
 const App = () => {
   return (
     <div className='parent'>

      <Card user="Aman Rajput" age= {18} img = 'https://images.unsplash.com/photo-1773332585815-f106a5d6ed6c?w=1000&auto=format&fit=
      crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D'/>
      <Card user="Radha" age={16} img ="https://images.unsplash.com/photo-1774895688682-8560cf4d75fa?q=80&w=764&auto=format&fit=crop&ixlib
      =rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
      <Card user="Radha" age={16} img ="https://images.unsplash.com/photo-1774895688682-8560cf4d75fa?q=80&w=764&auto=format&fit=crop&ixlib
      =rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>

      
     </div>
   )
 }
 
 export default App