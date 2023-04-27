import React from 'react'

function ImageChiled({width,alt,src}) {
  return (
    <div  style={{textAlign:'center'}}>
      <img src={src} width={width} alt={alt}></img>
    </div>
  )
}

export default ImageChiled
