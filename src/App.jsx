import { useState } from 'react'
import './App.css'

function App() {
  const [curr, setCurr] = useState(0)
  const [fromcur,setFrom] = useState("")
  const [tocurr,setTocurr] = useState("")
  const [display,setDisplay] = useState([])
  const [conv,setConv] = useState([])

  function add(){ 
    const newcurr = {
      curr:Number(curr),
      fromcur:fromcur,
      tocurr:tocurr
    }
    setDisplay([...display,newcurr])
    setCurr(0)
    setFrom("")
    setTocurr("")


  }
  function convert(e){
    if(e.tocurr==="USD"){
    const change = e.curr * 96
    setConv([...conv,{curr:Number(change),fromcur:e.fromcur,tocurr:e.tocurr}])
  }
  else{
    const change = e.curr * 56
    setConv([...conv,{curr:Number(change),fromcur:e.fromcur,tocurr:e.tocurr}])

  }
}
  

  return (
    <div>
      <title>Currency converter</title>
      <h1>Currency converter</h1>
      <h3>Currency details</h3>
      <div>
        <label>Currency:  </label>
        <input type="number" value={curr} onChange={(e)=>setCurr(e.target.value)}></input><br></br><br></br>
        <label>From:  </label>
        <input type="text" value={fromcur} onChange={(e)=>setFrom(e.target.value)}></input><br></br><br></br>
        <label>To:  </label>
        <input type="text" value={tocurr} onChange={(e)=>setTocurr(e.target.value)}></input><br></br><br></br>
        <button onClick={add}>Submit</button>
      {
        display.map((cur,index)=>(
          
          <div key={index}>
            <p>currecny:{cur.curr}</p>
            <p>from {cur.fromcur} to {cur.tocurr}</p>
            <button onClick={()=>convert(cur)}>convert</button>
          </div>
        )
        )
      }
      {
        conv.map((c,index)=>(
          
          <div key={index}>
            <p>After convertion from {c.fromcur} to {c.tocurr} - {c.curr}</p>
            
          </div>
        )
        )
      }</div>
    </div>
  )
}

export default App
