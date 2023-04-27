import React, { useEffect, useState } from 'react'

function UEMultiplication() {
    const [count,setcount]=useState(1)
    const [mult,setMulti]=useState(2)
    const changecount=()=>{
        setcount(count+1)
    }
    useEffect(()=>{
       console.log('test');
       return setMulti(count*2)
    },[])
  return (
    <div style={{textAlign:'center'}}>
      <h1>Count {count}</h1><button onClick={changecount}>add</button>
      <h1>multiplication {mult}</h1>
    </div>
  )
}

export default UEMultiplication
