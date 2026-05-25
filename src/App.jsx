 import React, { useEffect, useState } from 'react'
 import axios from 'axios'

 const App = () => {

  const [data , setdata ] = useState([])

  const [index, setIndex] = useState(1)

   const getdata =  async () =>{
    console.log("data recived")


    const res =   await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=30`)
    setdata(res.data)
   



  }


  useEffect(function(){
    getdata()
  },[index])


    let printData = <h3 className='text-gray-300 text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold'>loding....</h3>

    if(data.length>0){
      printData =
      data.map(function(elem , idx){
        return <div key={idx}>
          <a href={elem.url}>
            <div className='h-40 w-35 bg-amber-50  rounded-xl ' > 
          <img className='h-full w-full object-cover rounded-xl '  src={elem.download_url} alt="" />
        </div>
          </a>
          {idx}:-{elem.author}
        </div>
      })}




   return (

    
     <div className='bg-black h-100% p-6 text-white overflow-auto'>
       
    


      <div className='flex flex-wrap gap-10 border border-amber-950'>
     

     {printData}

      </div>


      <div className='flex justify-center items-center gap-3'>
        <button 
       className='bg-amber-400 pb-2 px-3 rounded mt-2 active:scale-95 '
        
       onClick={()=>{
          if(index>1){
            setIndex([])
        setIndex(index-1)}

         
        console.log("hello")
       }}
       
       >prev</button>

       <h4>Page {index}</h4>

        <button className='bg-amber-400 pb-2 px-3 rounded mt-2  active:scale-95' 
         onClick={()=>{

          setIndex([])

        
          setIndex(index+1)
           
         }}
        >Next</button>
      </div>


     </div>
   )
 }
 
 export default App