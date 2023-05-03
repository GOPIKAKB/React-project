import React, { useState } from 'react'
import axios from 'axios'

function APIBegining() {
    const [data, setData] = useState([])
    const clickData = async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        console.log(response)
        setData(response.data)
    }
    return (

        <div>
            {console.log(data)}
            <button onClick={clickData}>click me</button>
            {data.length != 0 ?
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
                </table> : <></>}
        </div>
    )
}

export default APIBegining
