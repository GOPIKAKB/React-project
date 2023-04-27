import React from 'react'

function CDCChiled(props) {
  return (
    <div style={props.style}>
      <h1>{props.data.place}</h1>
      <img src={props.data.img} width={'50%'}></img>
      <p>{props.data.desc}</p>
      <button onClick={props.onClick} onDoubleClick={props.onDoubleClick}>click me</button>
    </div>
  )
}

export default CDCChiled
