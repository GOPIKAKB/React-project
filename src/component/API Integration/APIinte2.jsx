import axios from 'axios'
import React, { useEffect, useState } from 'react'

function APIinte2() {
    const [data, setdata] = useState([])
    const getData = async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        setdata(response.data)
    }
    useEffect(() => {
        getData()
    }, [])
    return (
        <div>
            <table>
                <tr>
                    <th>id</th>
                    <th>title</th>
                    <th>body</th>
                </tr>
                {data.map((item) => {
                    return (
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td>{item.body}</td>
                    </tr>
                    )
                })}
            </table>
        </div>
    )
}

export default APIinte2
