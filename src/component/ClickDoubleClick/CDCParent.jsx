import React, { useState } from 'react'
import CDCChiled from './CDCChiled'

function CDCParent() {
    const data1 = { place: 'KozhickodeBeach', img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/2f/ee/ad/beypore-beach.jpg?w=1200&h=1200&s=1', desc: 'Kozhikode Beach or Calicut Beach is a beach on the western side of Kozhikode, situated on the Malabar Coast of India. ' }

    const data2 = { place: 'Kappad Beach', img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/d5/18/2b/psx-20170319-125048-largejpg.jpg?w=1200&h=1200&s=1', desc: 'Kappad, or Kappakadavu locally, is a beach and village near Koyilandy, in the district Kozhikode, Kerala, India' }

    let prnt = {
        backgroundColor: '#0df0d6',
        width: '500px',
        textAlign: 'center',
        fontStyle: 'italic'
    }
    let chld = {
        backgroundColor: 'rgb(13 240 89)',
        width: '500px',
        textAlign: 'center',
        fontStyle: 'normal'
    }
    const [data, setData] = useState(data1)
    const [click, setClick] = useState('single')

    const singleClickHander = () => {
        setClick('double')
        setData(data2)
    }
    const doubleClickHandler = () => {
        setClick('single')
        setData(data1)
    }

    return (
        <div>
            <CDCChiled data={data} style={click === 'single' ? prnt : chld} onClick={singleClickHander} onDoubleClick={doubleClickHandler} />
        </div>
    )
}

export default CDCParent
