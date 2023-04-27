import React from 'react'

function SlideInernal() {
    let container={
        width:'400px',
        height:'500px',
        backgroundColor:'#03ef8d',
        margin:'20px',
        border:'1px solid brown',
        padding:'10px'
    }
    let head1={
        color:'brown',
    }
    let para={
      backgroundColor:'white'
    }
    let img={
        width:'75%',
        border: '3px brown double ',
        marginBottom:'10px'
    }
  return (
    <div style={container}>
      <h1 style={head1}><u>Sunflower</u></h1>
      <p style={para}>The common sunflower  is a large annual forb of the genus Helianthus. It is commonly grown as a crop for its edible oily seeds. Apart from cooking oil production, it is also used as livestock forage, as bird food, in some industrial applications.</p>
      <h3 style={head1}>Sunflower Field</h3>
      <img style={img} src='https://cdn.britannica.com/82/7082-050-566913BA/Field-sunflowers-farm-valley-Assiniboine-River-Manitoba.jpg'></img>
    <a href='https://en.wikipedia.org/wiki/Common_sunflower'>https://en.wikipedia.org/</a>
    </div>
  )
}

export default SlideInernal
