import React, { useState } from 'react'

function Dropdown() {
    const[color,setColor]=useState('white')
    const changeColor=(event)=>{
        setColor(event.target.value)
    }
  return (
    <div style={{backgroundColor:color}}>
      <label htmlFor="colors">choose a color</label>
      <select name='colors' id='colors' onChange={changeColor} >
        <option value='white'>white</option>
        <option value='blue'>blue</option>
        <option value='red'>red</option>
        <option value='green'>green</option>
        <option value='yellow'>yellow</option>
      </select>
    </div>
  )
}

export default Dropdown
