import React from 'react'

function CourceChiled({cource}) {
  return (
   <div>
    {
      cource.map((item)=>{
        return(
          <div style={{textAlign:'center',marginBottom:'20px'}}>
          <div>Cource Name: {item.name}</div>
          <div> Cource duration: {item.drtn}</div>
          <div>Cource Feese: {item.feese}</div>
          </div>
        )
      })
    }
   </div>
  )
}

export default CourceChiled
