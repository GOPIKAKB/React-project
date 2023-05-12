import React, { createContext } from 'react'
import Component3 from './Component3'
import Component4 from './Component4'
import Component2 from './Component2'

export const newContext = createContext()
function MainComp() {
    const stng = 'calicut'
    const stng1='pookad'

    const obj1={name:'gopu',age:'24'}
    const arr=[1,2,3,4]
const obj =[{name:'ram',place:'clt'},{name:'radha',place:'tvm'}]
    return (
        <div>
            <h1></h1>
            <newContext.Provider value={{ stng,stng1,obj1,arr,obj }}>
                <Component3 />
                <Component4 />
                <Component2 />
            </newContext.Provider>

        </div>
    )
}

export default MainComp
