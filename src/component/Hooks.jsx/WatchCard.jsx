import React, { useState } from 'react'
import { Card } from 'react-bootstrap'

function WatchCard() {
    const [count, setCount] = useState(1)
    const increment = () => {
        if(count<5){
        setCount(count + 1)
        }else{
            alert('cannot add more than 5 items')
        }
    }
    const decrement = () => {
        if (count!=0){
        setCount(count - 1)
        } else{
            alert('item can not be less than 0')
        }
    }
    return (
        <div>
            <Card style={{ width: '18rem', textAlign: 'center' }}>
                <Card.Img variant="top" style={{ height: '200px' }} src='https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg' />
                <Card.Body>
                    <Card.Title>TIMEWEAR Analog Day Date Functioning Stainless Steel Chain Watch for Men</Card.Title>
                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                        <button onClick={increment}>+</button>
                        <h6 style={{ paddingTop: '5px' }}>Qty {count}</h6>
                        <button onClick={decrement}>-</button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default WatchCard
