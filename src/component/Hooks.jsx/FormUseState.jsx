import React, { useState } from 'react'

function FormUseState() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [clicked, setClicked] = useState(false)
    const displayItems = () => {
        setClicked((pre) => {
            if (pre === false) {
                return (true)
            }
            else {
                return (false)
            }
        })
    }
    const updateName=(event)=>{
        setName(event.target.value)
    }
    return (
       
        <div>
            <label>name</label><input type='text' onChange={updateName}></input>
            <label>email</label><input type='email' onChange={(event)=>{setEmail(event.target.value)}}></input>
            <button onClick={displayItems}>submit</button>
           {clicked? <div>
            <p>name:{name}</p>
            <p>email:{email}</p>
            </div>:<div></div>}
        </div>
    )
}

export default FormUseState
