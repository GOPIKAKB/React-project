import React, { useContext } from 'react'
import {  newContext } from './MainComp'

function Component3() {
    const {stng,stng1,obj1,arr,obj}=useContext(newContext)
  return (
    <div>
      <p>district is : {stng}</p>
      <p>{stng1}</p>
      <p>{obj1.name},{obj1.age}</p>
      <p>{arr}</p>
      {
        // we can also write the syntax of map as below
        obj.map(i=>
          
            <p>{i.name},{i.place}</p>
        )
      }
    </div>
  )
}

export default Component3
