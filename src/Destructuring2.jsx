import React from 'react'

function Destructuring2() {
    const arr=['carrot','aaple','dog','parrot','clt','car']
    const [veg,fruit,animal,bird,place,vehicle]=arr
    const val=vehicle
  return (
    <div>
      <p>{val}</p>
    </div>
  )
}

export default Destructuring2
