import React from 'react'

function MapFunction() {
    const data = [
        { name: 'ramu', age: '19', email: 'abc@gmail.com', place: 'clt', img: 'https://cdn.getyourguide.com/img/tour/5d61265520a91.jpeg/132.webp' },
        { name: 'raju', age: '32', email: 'xyz@gmail.com', place: 'tvm', img: 'https://cdn.getyourguide.com/img/tour/5d876ba925fc7.jpeg/132.webp' },
        { name: 'ravi', age: '25', email: 'pqr@gmail.com', place: 'cnn', img: 'https://cdn.getyourguide.com/img/tour/5d61265520a91.jpeg/132.webp' },
        { name: 'raghu', age: '30', email: 'lmn@gmail.com', place: 'enr', img: 'https://cdn.getyourguide.com/img/tour/5d876ba925fc7.jpeg/132.webp' },
    ]
    return (
        <div>        {data.map((value) => {
            return (
                <div>
                    <p>{value.name}</p>
                    <p>{value.age}</p>
                    <p>{value.email}</p>
                    <p>{value.place}</p>
                    <img src={value.img} style={{width:'10%'}}></img>
                </div>
            )
        })
        }
        </div>
    )
}

export default MapFunction
