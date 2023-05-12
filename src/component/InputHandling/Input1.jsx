import React, { useState } from 'react'

function Input1() {
    const [inputs ,setInput]=useState('')
    const [place,setPlace]=useState('')
    const changeValue=(event)=>{
      setInput(event.target.value)
console.log(event)
    }
   
    const submit=()=>{
        // alert(`name is ${inputs}`)
         document.getElementById('data').innerHTML=`name is ${inputs}`
         document.getElementById('place').innerHTML=`pace is ${place}`
    }
  return (
    <div>
      {/* <label>name</label>
      <input type='text'></input> */}
      <form onSubmit={(e)=>e.preventDefault()}>
        <label>name:
        <input type='text' value={inputs} onChange={changeValue} ></input>
        </label>
        <label>place:
        <input type='text' value={place} onChange={(e)=>setPlace(e.target.value)}></input>

        </label>
        <button onClick={submit}>submit</button>
      </form>
      <div id='data'></div>
      <div id='place'></div>
    </div>
  )
}

export default Input1
