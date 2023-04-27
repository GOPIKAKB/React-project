import React, { useEffect, useState } from 'react'

function UEBigining() {
    const [num, setNum] = useState(0)
    const [num1, setNum1] = useState(150)
    const changeNum = () => {
        setNum(num + 1)
    }
    const changeNum1 = () => {
        setNum1(num1 + 1)
    }

    // useeffect is react function to control the side effect of a component.it has two argument. 1 is a call back function that perform the side effect and second is a dependency array that tell when the side effect need to be run. array is an optional parameter.
    //side effect means any changes thet happen outside the scope of the component, such asmodifying the dom,making an api request etc

    // if we dont pass a dependency array the code will work while loading and updating
    // useEffect(()=>{
    //     console.log('test')
    // })  work rendering and rerendering

    // in this case the code will work only while loading. while updating the counter it wont work.
    // useEffect(()=>{
    //         console.log('test')
    //     },[])  work  ony while rendering

    //when we pass num state to the dependency arrray the code will work while loading and whenever the num state gets upated.it wont work when num1 state is updated.
    // useEffect(()=>{
    //     console.log('test')
    // },[num])  work while rendering and updating a perticular state

    // similarly when we pass num1 state to the dependency array, the code will work when num1 gets updated
    useEffect(() => {
        console.log('test')
    }, [num1])

    //if we want the code to be worked while updating more than one state, we can pass those state in the dependancy array by separating them using comma(,).
    return (
        <div>
            <label>{num}</label><button onClick={changeNum}>click me</button><br></br>
            <label>{num1}</label><button onClick={changeNum1}>click me</button>
            {/* here the console is a sideeffect. when we load the component the console will work. if we make any change in the component, ie; here when we update both counter the console will work. this will effect the perfomance of the component. Actually the console need to be worked only when the component is loaded. So controlling this we use useEffect  */}
            {/* {console.log('test')} */}
        </div>
    )
}

export default UEBigining
