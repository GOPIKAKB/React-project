import React, { useState } from 'react'
import './../../Style/ButtonClick.css'
function ButtonClick() {
    const[showHide,setShowHide]=useState(true)
    const[color,setColor]=useState(true)
    const showHidefn=()=>{
        setShowHide(!showHide)
    }
    const changeColor=()=>{
setColor(!color)
    }
  return (
    <div>
      {showHide?<p>text is visible now</p>:<></>}
      <button onClick={showHidefn}>{showHide?'hide':'show'}</button>
      <p className={`${!color?'actv':''}`}>change My color</p>
      <button  onClick={changeColor}>change style</button>
    </div>
  )
}

export default ButtonClick
