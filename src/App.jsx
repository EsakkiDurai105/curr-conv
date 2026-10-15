import { useState } from 'react'
import './App.css'

function App() {
  const [curr, setCurr] = useState("")
  const [fromcur,setFrom] = useState("")
  const [tocurr,setTocurr] = useState("")
  const [conv,setConv] = useState([])
  // const [display,setDisplay] = useState([])

  function add(){ 
    const newcurr = [{
      curr:curr,
      fromcur:fromcur,
      tocurr:tocurr
    }]
    setConv([...conv,newcurr])
    setCurr("")
    setFrom("")
    setTocurr("")


  }
  // function convert(curr){
  //   if(curr.tocurr==="INR"){
  //     const set = 
  //   }
  // }

  return (
    <div>
      <title>Currency converter</title>
      <h1>Currency converter</h1>
        <label>Currency:</label>
        <input type="number" value={curr} onChange={(e)=>setCurr(e.target.value)}></input><br></br><br></br>
        <label>From:</label>
        <input type="text" value={fromcur} onChange={(e)=>setFrom(e.target.value)}></input>
        <label>To:</label>
        <input type="text" value={tocurr} onChange={(e)=>setTocurr(e.target.value)}></input>
        <button onClick={add}>Submit</button>
      {
        conv.map((cur,index)=>(
          
          <div key={index}>
            <p>currecny:{cur.curr}</p>
            <p>from {cur.fromcur}</p>
            <p> to {cur.tocurr}</p>
            {/* <button onClick={()=>convert(cur)}>convert</button> */}
          </div>
        )
        )
      }
    </div>
  )
}

export default App
