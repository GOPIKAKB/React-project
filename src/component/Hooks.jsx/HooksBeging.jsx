import React, { useState } from 'react'

function HooksBeging() {

    //console useState() function
    let data = useState()
    console.log(data)// wewill get an array of two elements " [undefined, ƒ]". first one is a value and second is a function
    let data1 = useState("green")
    console.log(data1); // ['green', ƒ]
    console.log(data1[0]) // green
    console.log(data1[1]); // function will be displayed

    // when we try to change color as in normal js the color will change but dose not change in the html element. because rendering is not happening.
    // let color = "green"
    // const changeColor = () => {
    //     color = "red"
    //     console.log(color);
    // }

const [color,setColor]=useState("green")// here color is the stste name, and setColor is the name of the function that is used to chnage the function .the function name can be anything, normally we use this format, and need to be camalcase. "green" is the initial value of state.
const changeColorOnClick=()=>{
    setColor("red") // to change the value of state, we pass the new value to setColor function.
}

const[place,setPlace] =useState('clt')
const chnageplaceOnClick=()=>{
    setPlace('tvm')
}

const [car,setCar]=useState('nano')
const ChnageCarOnClick=()=>{
    setCar('santro')
}

    return (
        <div>
            {/* <h1 onClick={changeColor}> color {color}</h1> */}
            <h1 >My favourite color is {color}</h1>
            <button onClick={changeColorOnClick}>chnage color</button>

            <h1>My favourite place is {place}</h1>
            <button onClick={chnageplaceOnClick}>change place</button>

            <h1>My favourite car is {car}</h1>
            <button onClick={ChnageCarOnClick}>Change Car</button>
        </div>
    )
}

export default HooksBeging
