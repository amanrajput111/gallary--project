import { useCallback, useEffect, useState,useRef } from "react"

 

function App() {

  const [length, setLength] = useState(8)
  const [number , setNumber] = useState(false)
  const [char , setChar ] = useState( true)

  const [password, setPassword] = useState("")

  const passwordRef = useRef("null")

  const passwordGn= useCallback(()=>{

    let pass = ""

    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (number) str+="0123456789"
    if(char) str+= "!@#$%&*_"


    for(let i = 1; i <=length; i++  ){

      let char = Math.floor(Math.random()*str.length+1)

      pass +=str.charAt(char)
    }

    setPassword(pass)

  }, [length,number,char,setPassword])


 
  const copyPassword = useCallback(()=>{
      passwordRef.current?.select()

    window.navigator.clipboard.writeText(password)

  },[password])


useEffect(()=>{

  passwordGn()

},[length, number ,char,passwordGn ])
  
  
return(
  <>
  
  <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-2 my-8 bg-gray-900">

    <h1 className="text-center text-amber-50 mb-3">Password Genrator</h1>
<div  className=" flex shadow rounded-lg overflow-hidden mb-4">
<input

type="text"

value={password}

className="outline-none w-full py-1 px-3 bg-amber-100"

placeholder="password"
readOnly
ref={passwordRef}



/>
<button onClick={copyPassword}  className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 " 
>Copy</button>
</div>
<div className="flex text-sm gap-x-2">

  <div  className="flex item-center gap-x-1">
    <input
     type="range" 
     min={8}
     max={100}
     value={length}
     className="cursor-pointer"
  onChange={(e)=> {setLength(e.target.value)}}
    />
<label className="text-amber-50 font-bold">Length :{length}</label>





  </div>
  <div className=" flex items-center gapx-1">
<input 
type="checkbox"
defaultChecked={Number}
id="numberInput"
onChange={()=>{
  setNumber((prev)=>!prev);
}}

/>

<label htmlFor="numberInput" className="text-amber-50 font-bold">Numbers</label>
  </div>
   <div className=" flex items-center gapx-1">
<input 
type="checkbox"
defaultChecked={char}
id="CharecterInput"
onChange={()=>{
  setNumber((prev)=>!prev);
}}

/>

<label htmlFor="CharecterInput" className="text-amber-50 font-bold">Charecter</label>
  </div>

</div>


  </div>

  </>
)
  
}

export default App
