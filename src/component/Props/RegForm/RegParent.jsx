import React from 'react'
import RegChild from './RegChild'
import RegChild1 from './RegChild1'
import RegChiled2 from './RegChiled2'
// props are read only components, we can not change the value of prop
// we can access prop in two ways in a chiled component.it is shown in RegChiled and RegChiled1 files.
const obj1={name:'xyz',email:'xyz@gmail.com'}
const plc=['clt','cnn','tvm','ern']
function RegParent() {
  return (
    <div>
      <RegChild name="Admin" num="1" type="Registration" obj={{name:'abc',email:'abc@gmail.com'}}/>
      <RegChild name="User" num="2" type="Registration" obj={obj1}/>
      <RegChild1 name="Customer" num="3" type="Registration" obj={{name:'abc',email:'abc@gmail.com'}}/>
<RegChiled2 arr={['car','bus','scooter']} color='red'/>
<RegChiled2 arr={plc} color="blue"/>
    </div>
  )
}

export default RegParent
