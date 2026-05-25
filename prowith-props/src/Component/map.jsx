import React from 'react'

export const Map = () => {

    const arr = ["Aman ","Raman" , "Shivam" ]
  return (
    <div  className='parent'>
       
      {arr.map(function(ele){
          

          return <h1>{ele}</h1>
      })} 
        

    </div>
  )
}
