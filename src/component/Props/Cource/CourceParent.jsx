import React from 'react'
import CourceChiled from './CourceChiled'

function CourceParent() {
    const cource=[{name:'react',drtn:'3months',feese:'20000'},{name:'mern',drtn:'4months',feese:'30000'},{name:'java',drtn:'5months',feese:'40000'},{name:'angular',drtn:'3months',feese:'20000'}]

  return (
    <div>
      <CourceChiled cource={cource}/>
     
    </div>
  )
}

export default CourceParent
