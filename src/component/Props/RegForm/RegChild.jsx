import React from 'react'
//this is the first way of acccessing prop. we can acess props as an object.
function RegChild(props) {
  return (
    <div style={{textAlign:'center'}}>
      <label>{props.name} {props.type} Form{props.num}</label>
      <div>Name:{props.obj.name}</div>
      <div>Email:{props.obj.email}</div>
    </div>
  )
}

export default RegChild
