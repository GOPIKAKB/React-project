import React, { useState } from 'react'

function Inputhandling2() {
    const [inputs,setinput]=useState({
        username:'',
        userage:'',
        useremail:'',
    })
    const changeinput=(e)=>{
     const name=e.target.name
     const value=e.target.value
     setinput({...inputs,[name]:value,})
     

    }
    const submit=()=>{
        console.log(inputs);
        document.getElementById('formdata').innerHTML=`name:${inputs.username}`+`<br></br>`+ `age:${inputs.userage}`+`<br></br>`+`email:${inputs.useremail}`
    }
  return (
    <div>
      <form onSubmit={(e)=>e.preventDefault()}>
        <label>name:
            <input type='text' value={inputs.username} name='username' onChange={changeinput}></input>
        </label>
        <label>age:
            <input type='number' value={inputs.userage} name='userage' onChange={changeinput}></input>
        </label>
        <label>email:
            <input type='email' value={inputs.useremail} name='useremail' onChange={changeinput}></input>
        </label>
        <button onClick={submit}>submit</button>
      </form>
      <div id='formdata'></div>
    </div>
  )
}

export default Inputhandling2

