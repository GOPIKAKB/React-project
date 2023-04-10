import React from 'react'

function Destructuring() {

// OBJECT DESTRUCTIRING

  // const obj = {name:'gopika',age:25, place:'clt'}
  // // console.log(obj.name,obj.age,obj.place)
  // const{name,age,place}=obj
  // console.log(name,age,place)

//ARRAY DESTRUCTURING

  //     const arr = ['apple','tomato','var','cat']
  //    // console.log(arr[1])
  //     const [fruit,veg,vehicle,animal]=arr
  //     console.log(veg);

//SKIPING ONE ELEMENT

  const score=[30,50,27,87,72]
  // const [a,b,c,d,e]=score
  // console.log(a,b,c,d,e)
//SKIP 50
  // const [a,,c,d,e,]=score
  // console.log(a,c,d,e)
//SKIP 72
  // const [a,b,c,d,,]=score
  // console.log(a,b,c,d);

//OTHERS USING SPREAD OPERATORS

  const [a,b,...others]=score
  console.log(a,b,others);

  const obj2 = [{ name: 'gopu', age: '23', place: 'clt' }, { name: 'ram', age: '21', place: 'qld' }]
  const { name, age, place } = obj2
  console.log();

  return (
    <div>

    </div>
  )
}

export default Destructuring
