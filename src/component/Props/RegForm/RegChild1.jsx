import React from 'react'
//second way of accessing prop. destructuring the prop object and accessing in the file.
function RegChild1({name,num,type,obj}) {
  return (
    
    <div style={{textAlign:'center'}}>
      <label>{name} {type} Form{num}</label>
      <div>name:{obj.name}</div>
      <div>Email:{obj.email}</div>
    </div>
 
  )
}

export default RegChild1
