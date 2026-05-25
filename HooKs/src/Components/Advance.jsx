import React, { useState } from 'react'

export const Advance = () => {

    const [num, setNum] = useState({user:"Aman" ,age:20})

    const btnClicked=()=>{
    

        const newNum = {...num};

        newNum.user= "Radha"
        newNum.age = 30

        setNum(newNum)

    

    }

    

  return (
    <div>

        <h1>{num.user} : {num.age}</h1>

        <button onClick={btnClicked}>click</button>


    </div>
  )
}
