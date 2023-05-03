import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap'

function APIint5() {
    const [data,setData]=useState([])
    useEffect(()=>{
axios.get('https://dummyjson.com/products/search?q=Laptop').then((response)=>{
    console.log(response.data.products);
    setData(response.data.products)
})
    },[])
  return (
    <div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-around',marginTop:'30px'}}>
      {
        data.map((item)=>{
          return(
            <div>
               <Card style={{ width: '18rem',textAlign:'center' }}>
                        <Card.Img variant="top" src={item.thumbnail}  style={{height:'200px'}}/>
                        <Card.Body>
                            <Card.Title>{item.title}</Card.Title>
                            <Card.Text style={{height:'100px'}}>{
                                item.description}
                            </Card.Text>
                            <h3>{item.price} </h3>
                            <Button variant="primary">order now</Button>
                        </Card.Body>
                    </Card>
              </div>
          )
        })
      }
    </div>
  )
}

export default APIint5
