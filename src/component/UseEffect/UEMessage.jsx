import React, { useEffect, useState } from 'react'

function UEMessage() {
    const [msg,setMsg]=useState(0)
    const changeMsg=()=>{
        setMsg(msg+1)
    }
    useEffect(()=>{
        document.title=`You have ${msg} message`
    },[msg])
  return (
    <div style={{textAlign:'center'}}>
      <h1>Number of message {msg}</h1>
      <button onClick={changeMsg}>click me</button>
    </div>
  )
}

export default UEMessage
