import React, { useState } from 'react'

function IsCheckedUS() {
    const[isChecked,setIsChecked]=useState(false)
  return (
    <div>
      <label>click me</label><input type='checkbox' onClick={()=>setIsChecked(!isChecked)}></input>
      {isChecked?<p>visible</p>:<></>}
    </div>
  )
}

export default IsCheckedUS
