import React, { useState } from 'react'

function EvenOdd() {
//     const [num,setNum]=useState('')
//     //const[clicked,setClicked]=useState()
//     const oddOrEven=(event)=>{
// event.target.value>0?setNum('positive'):setNum('negative')
//     }
let num=0
let age=19
let member=true
  return (
    <div>
      {/* {num>0?<p>positive</p>:<p>negative</p>} */}
    {num>0?<p>positive</p>: (num===0)?<p>zero</p>:<p>negative</p>}
    {age>=18?<p>voter</p>:<p>nonvoter</p>}
    {member?<p>wecome</p>:<p>please create an account befor trying to login</p>}
    </div>
  )
}

export default EvenOdd
