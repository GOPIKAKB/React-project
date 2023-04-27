import React from 'react'

function ButtonClickChiled(props) {
  return (
    <div style={{textAlign:'center'}}>
      <button onClick={props.onClick}>{props.label}</button>
    </div>
  )
}

export default ButtonClickChiled
