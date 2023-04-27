import React, { useState } from 'react'

function Counter() {
    let [count, setCount] = useState(0)
//preincrement post increment
    const increment = () => {
        console.log(count)
        if (count <5) {
            setCount(count + 1)
        }
        else {
            alert('5 is the maximun limit')

        }
    }

    const decrement = () => {
        setCount(count - 1)
    }
    return (
        <div style={{ textAlign: 'center' }}>
            <label>Count = {count}</label>
            <div>
                <button style={{ width: '30px' }} onClick={()=>setCount(count - 1)}>-</button>
                <button style={{ width: '30px' }} onClick={increment}>+</button>
            </div>
        </div>
    )
}

export default Counter
