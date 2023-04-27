import React, { useEffect, useState } from 'react'

function UEColor() {
    const [color, setColr]=useState('red')
const [place,setPlace]=useState('clt')
const [vehicle, setVehicle]=useState('bus')
const changeColor=()=>{
    setColr((pre)=>{
       return pre==='red'?'green':'red'
    })
}
const changePlace=()=>{
setPlace((pre)=>{
    return pre==='clt'?'tvm':'clt'
})
}
const changeVehicle =()=>{
    setVehicle((pre)=>{
return pre==='bus'?'car':'bus'
    })
}
useEffect(()=>{
    console.log('test');
},[color,place])
  return (
    <div>
      <label>My Favourite color is {color} </label><button onClick={changeColor}>change</button><br></br>
      <label>My Favourite place is {place} </label><button onClick={changePlace}>change</button><br></br>
      <label>My Favourite color is {vehicle} </label><button onClick={changeVehicle}>change</button>
      {/* {
        console.log('test')
      } */}
    </div>
  )
}

export default UEColor
