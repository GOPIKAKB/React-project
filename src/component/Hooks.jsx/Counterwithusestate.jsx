import React, { useState } from 'react'

function Counterwithusestate() {
    let [count, setCount] = useState(0)
    const increment = () => {
        setCount(count + 1)
    }
    const decrement = () => {
        setCount(count - 1)
        if (count < 0) {
            alert('no')
        }
    }
    //     const[color,setColor]=useState(true)
    //   const changeClolr=()=>{
    // setColor(!color)
    // console.log(color);
    //   }
    const [color, setColor] = useState('green')
    const changeColors = () => {
        // if(color==='green'){
        //     setColor('red')
        // } else{
        //     setColor('green')
        // }
        setColor((previous) => {
            console.log(previous);
            if (previous === 'green') {
                return 'red'
            } else {
                return 'green'
            }
        }
        )
    }

    const [car, setCar] = useState('nano')
    const changeCar = () => {
        setCar((prev) => {
            if (prev === 'nano') {
                return 'santro'
            } else {
                return 'nano'
            }
        })
    }

    const [veg,setVeg]=useState('tomatto')
    const changeVeg=()=>{
        setVeg((prev)=>{
            if(prev==='tomatto'){
                return 'potatto'
            }else{
                return 'tomatto'
            }
        })
    }
    return (
        <div>
            <h1>Counter {count >= 0 ? count : 0}</h1>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            {/* <h1>{color?'green':'red'}</h1> */}
            {/* <button onClick={changeClolr}>chnage color</button> */}
            <h1>{color}</h1>
            <button onClick={changeColors}>click me</button>

            <h1>{car}</h1>
            <button onClick={changeCar}>click me</button>

            <h1>{veg}</h1>
            <button onClick={changeVeg}>chnage</button>
        </div>
    )
}

export default Counterwithusestate
