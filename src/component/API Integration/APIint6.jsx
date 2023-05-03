import axios from 'axios'
import React, { useEffect, useState } from 'react'

function APIint6() {
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get('https://dummyjson.com/products/categories').then((response) => {
      console.log(response)
      setData(response.data)
    })
  })
  return (
    <div>
      <label>Select Products</label>
      <select name='select' id='select'>
        {data.map((item) => {
          return (
            <option value={item}>{item }</option>

          )
        })}
      </select>
    </div>
  )
}

export default APIint6
