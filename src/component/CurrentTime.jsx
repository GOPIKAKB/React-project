import React from 'react'

function CurrentTime() {
    const date = new Date();
    const showTime = date.getHours() 
        + ':' + date.getMinutes() 
        + ":" + date.getSeconds();
  return (
    <div>
        <div className="App">
            <h1 align="center">Current Time</h1>
            <h2 align="center"> {showTime}</h2>
        </div>
    </div>
  )
}

export default CurrentTime
