import React from 'react'
import StateChiled from './StateChiled'

function StateParent() {
    const statedata = [{ name: 'kerala', language: 'malayalam', numOfDistr: '14' },
    { name: 'Thamilnadu', language: 'thamil', numOfDistr: '24' }, { name: 'Karnataka', language: 'kannada', numOfDistr: '18' }, { name: 'Andrapadesh', language: 'thelugu', numOfDistr: '20' }]
    return (
        <div>
<StateChiled data={statedata}/>
        </div>
    )
}

export default StateParent
