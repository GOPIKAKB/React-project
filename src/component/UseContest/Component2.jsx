import React, { useContext } from 'react'
import { newContext } from './MainComp'

function Component2() {
  const {stng}=useContext(newContext)
  return (
    <div>
      <h1>{stng}</h1>
    </div>
  )
}

export default Component2
