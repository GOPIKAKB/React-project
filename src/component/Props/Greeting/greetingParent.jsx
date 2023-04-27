import React from 'react'
import GreetingChiled from './GreetingChiled'

function GreetingParent() {
  return (
    <div>
      
      <GreetingChiled name='Ram'/>
      <GreetingChiled name='Seetha'/>
      <GreetingChiled name='George'/>
    </div>
  )
}

export default GreetingParent
