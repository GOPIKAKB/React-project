import React from 'react'

function SPBiginig() {
// SPREAD OPERATOR IN AN OBJECT

  // const obj1 = {name:'ram',age:'18',place:'clt',school:'abc'}
  // const obj2=obj1
  // console.log(obj2);
  // console.log(obj1===obj2);

  // const obj3 = {name:'ram',age:'18',place:'clt',school:'abc'}
  // const obj4={...obj3}
  // console.log(obj4);
  // console.log(obj3===obj4);

//SPREAD OPERATOR IN AN ARRAY

  // const arr1=[1,2,3,4,'gopu','gayu']
  //  console.log(...arr1)
  // const arr2=arr1
  // console.log(arr2===arr1)

  // const arr3=[1,2,3,4,'gopu','gayu']
  // const arr4=[...arr3]
  // console.log(arr3===arr4);

//ADDING TWO ARRAY USING SO

  const arr1 = [1, 2, 3, 4, 'gopu', 'ramu']
  const arr2 = [9, 8, 7, 6, 'raju', 'ramu']
  const arr3 = [...arr1, ...arr2]
  console.log(arr3); //[1, 2, 3, 4, 'gopu', 'ramu', 9, 8, 7, 6, 'raju', 'ramu']

//ADDING TWO OBJECT USING SO

  const obj1 = { name: 'ram', place: 'clt', age: 35, job: 'teacher' }
  const obj2 = { name1: 'seetha', place1: 'tvm', age1: 25, job1: 'doctor' }
  const obj3 = { ...obj1, ...obj2 }
  console.log(obj3); //{name: 'ram', place: 'clt', age: 35, job: 'teacher', name1: 'seetha',place: "clt",place1: "tvm"}

//ADDING ITEMS TO THE ARRAY

  const num1 = [200, 300, 400, 500]
  const num2 = [250, 350, 450, 550]
  const num = [100, ...num1, 150, ...num2]
  console.log(num); //[100, 200, 300, 400, 500, 150, 250, 350, 450, 550]

  return (
    <div>

    </div>
  )
}

export default SPBiginig
