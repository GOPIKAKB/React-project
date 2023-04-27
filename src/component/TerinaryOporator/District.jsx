import React, { useState } from 'react'

function District() {
  const [set, setSet] = useState(true)
  // const [get,setget]=useState(true)

  const reset = () => {
    setSet(false)
  }
  const getall = () => {
    setSet(true)
  }

  return (
    <div style={{ textAlign: 'center',border:'1px solid brown', width:'400px',height:'300px',backgroundColor:'cyan'}}>
      <h1>Number of district : 6</h1>
      {
        
        set ?
          <div>
            
            <h5>1:Kasargod</h5>
            <h5>2:Kannur</h5>
            <h5>3:Wayanad</h5>
            <h5>4:Calicut</h5>
            <h5>5:Malapuram</h5>
            <h5>6:Palakkad</h5>
          </div> : <></>}
      <div style={{display:'flex',justifyContent:'space-around'}}>
        <button style={{backgroundColor:'brown'}} onClick={reset}>Reset</button>
        <button style={{backgroundColor:'brown'}} onClick={getall}>get all</button>
      </div>
    </div>
  )
}

export default District
