import axios from 'axios'
import React, { useEffect, useState } from 'react'

function APIint3() {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
            console.log(response.data);
            setData(response.data)
        })
    },[])
    return (
        <div>
            <table>
                <tr>
                    <th>id</th>
                    <th>title</th>
                    <th>body</th>
                </tr>
                {
                    data.map((item) => {
                        return (
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td>{item.body}</td>
                            </tr>
                        )
                    })
                }

            </table>
        </div>
    )
}

export default APIint3
