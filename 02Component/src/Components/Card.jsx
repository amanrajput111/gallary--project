import React from 'react'

const Card = (props) => {
  return (
    <div className='card'>
   <img src= {props.img}/>
     <h1>{props.user}</h1>
     <h2>{props.age}</h2>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

    </div>
  )
}

export default Card