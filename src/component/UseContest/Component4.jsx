import React, {  useContext } from 'react'
import MainComp, { newContext } from './MainComp'


function Component4() {
  const {stng}=useContext(newContext)
  
  return (
    <div>
      <h1>district:{stng}</h1>
      
    </div>
  )
}

export default Component4
