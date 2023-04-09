import React from 'react'
import { Alert } from 'react-bootstrap'

function Events() {
    let value = 0
    const onClickFunction = () => {
        console.log('hii')
    }
    const onDoubleClickFunction = () => {
        alert('doubeclick')
    }
    const changeFunction = () => {
        alert('changed')
    }
    const mouseOverFunction = () => {
        alert('mouseover')
    }
    const addingFunction = () => {
       
        value++
        alert(value);
    }

    return (
        <div>
            {/* ONCLICK */}
            {/* <button onClick={onClickfunction=>console.log('hello')}>click me</button> */}
            {/* function writrn as inline */}
            {/* <button onClick={()=>console.log('hello')}>Click Me</button> */}
            {/* Internal function */}
            <button onClick={onClickFunction}>click</button>

            {/* ONBOUBLE CLICK */}
            <button onDoubleClick={onDoubleClickFunction}>double click</button>
            <h1 onDoubleClick={onDoubleClickFunction}>header</h1>

            {/* ONCHANGE */}
            {/* Internal */}
            <input onChange={changeFunction} type='text' style={{ border: '1px solid' }} />
            {/* Inline */}
            <input onChange={() => alert('changed')} type='text' style={{ border: '1px solid' }} />

            {/* ONOVER */}
            <h1 onMouseOver={mouseOverFunction}>MouseOver</h1>

            <button onClick={addingFunction}>+</button>
        </div>
    )
}

export default Events
