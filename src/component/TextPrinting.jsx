import React from 'react'

function TextPrinting() {
    let Name= 'ram'
    let place= 'clt'
    let degree ='B-Tech'
    let clg='amrita univercity'
  return (
    <div>
        <p>My name is {Name}.<br></br> I am comming from {place} </p>
        {/* template literals */}
        <p>i am a {`${degree}`} graduage from {`${clg}`}</p>
      
    </div>
  )
}

export default TextPrinting
