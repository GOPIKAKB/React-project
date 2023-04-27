import React from 'react'

function StateChiled({ data }) {
    return (
        <div style={{ textAlign: "center", }}>
            {data.map((item) => {
                return (
                    <div style={{ marginBottom: '20px' }}>
                        <div>State Name : {item.name}</div>
                        <div>Language:{item.language}</div>
                        <div>No of District:{item.numOfDistr}</div>
                    </div>
                )
            })}
        </div>
    )
}

export default StateChiled
