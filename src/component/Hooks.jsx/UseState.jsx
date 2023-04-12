import React, { useState } from 'react'

function UseState() {
    const [person, setPerson] = useState({ name: 'gopika', age: '28' })
    const changeperson = () => {
        setPerson(
            { name: 'radha', age: '30' }
        )
    }
    const [fruit, setFruit] = useState({ name: 'mango', prize: '70' })

    const changeFruit = () => {
        setFruit({ name: 'apple', prize: '80' })
    }
    const [veg, setVeg] = useState(['tomatto', 'potato', 'cucumber'])
    const changeitem = () => {
        setVeg(['beetroot', 'ladiesfinger', 'cabagge'])
    }

    const [students, setStudents] = useState([{ name: 'ram', mark: '40' }, { name: 'seetha', mark: '47' }, { name: 'raju', mark: '42' }])
    const chnageStudents=()=>{
        setStudents([{name:'john',mark:'46'},{name:'jose',mark:'45'},{name:'rose',mark:'47'}])
    }
    return (
        <div>
            <h1>My name is {person.name}. i am {person.age} year old</h1>
            <button onClick={changeperson}>change person</button>
            <h1>{fruit.name} is {fruit.prize} worth</h1>
            <button onClick={changeFruit}>chagne Fruit</button>
            {
                veg.map((item) => {
                    return (
                        <h1>{item}</h1>
                    )
                })
            }
            <button onClick={changeitem}>change item</button>
            {
                students.map((item) => {
                    return (
                        <h1>name: {item.name}, mark:{item.mark}</h1>
                    )
                })
            }
            <button onClick={chnageStudents}>change</button>

        </div>
    )
}

export default UseState
