import React from 'react'
import ButtonClickChiled from './ButtonClickChiled'

function ButtonClickParent() {
    const handleClick=()=>{
        alert('button is clicked')
    }
  return (
    <div>
      <ButtonClickChiled onClick={handleClick} label='click me'/>
    </div>
  )
}

export default ButtonClickParent
