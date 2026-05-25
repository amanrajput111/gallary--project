import React, { useState } from 'react'

export const Counter = () => {

    const [num, setNum] = useState(0)

    function increase(){

        setNum(num+1)
        
    }

    function dicrease(){
        setNum(num-1)

    }

  return (
    <div>
        <h1>{num}</h1>
        <button onClick={increase} >+</button>
        <button  onClick={dicrease}>-</button>
    </div>
  )
}
