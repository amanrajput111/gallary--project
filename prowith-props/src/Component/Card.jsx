import React from 'react'

export const Card = () => {
  return (
     <div className="card">
        <div className="top">
          <img src="https://media.wired.com/photos/5a99ba72927dc94e67685b9b/191:100/w_1280,c_limit/amazon-a-logo.jpg" alt="" />
          <button>Save</button>
        </div>
        <div className="center">
          <h3>Amazon <span>5 days ago</span></h3>
          <h2>Senior UI/Ux Desiner</h2>
          <div id='inner'>
            <h4>Part Time</h4>
            <h4>Senior level</h4>
          </div>
        </div>
    
      <div className="bottom">
        <div>
          
           <h3>$120/hr</h3> 
           <p>Mumbai India </p>
        
          
        </div>
        <button>Apply Now </button>
        </div>
        
      </div>
  )
}
