import React from 'react'
import { Button, Card } from 'react-bootstrap'

function CardChiled(props) {
    let center={ display:'block',
marginLeft:'auto',
marginRight:'auto',
width:'8%',
marginTop:'30px',
backgroundColor:'blue'}
  return (
    <div> 
        <h1 style={{marginLeft:'30px'}}>{props.clicked?'Fruits':'Vegitables'}</h1>
        <div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-around',marginTop:'30px'}}>
            
            {
                props.data.map((data)=>{
                    return(
                        <Card style={{ width: '18rem',textAlign:'center' }}>
                        <Card.Img variant="top" style={{ height: '200px' }} src={data.img} />
                        <Card.Body>
                            <Card.Title>{data.name}</Card.Title>
                            <Card.Text style={{ height: '125px' }}>
                                {data.descreption}
                            </Card.Text>
                            <Button variant="primary">Proceed to Buy</Button>
                        </Card.Body>
                    </Card>
                    )
                })
            }
        </div>
      <button style={center} onClick={props.onClick}>Click me</button>
    </div>
  )
}

export default CardChiled
