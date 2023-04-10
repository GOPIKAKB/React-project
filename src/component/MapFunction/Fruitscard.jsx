import React from 'react'

function Fruitscard() {
    const fruits = [{ name: 'Watermelon', prize: '50rs', descreption: 'Watermelon is a sweet and refreshing low calorie summer snack. It provides hydration and also essential nutrients, including vitamins, minerals, and antioxidants.', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiEg1fbs91oYxLDJw__j72Em1-iPu6z9rTqw&usqp=CAU' },
    { name: 'Mango', prize: '70rs', descreption: 'A mango is an edible stone fruit produced by the tropical tree Mangifera indica. It is believed to have originated between northwestern Myanmar', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGxbQJMWVBbVT7xAj0JdDcTTrC-136O6qaOw&usqp=CAU' },
    { name: 'Apple', prize: '80rs', descreption: 'An apple is an edible fruit produced by an apple tree . Apple trees are cultivated worldwide and are the most widely grown species in the genus Malus.', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtkzZMTh_n9DE3CznuCnA8wVdQI7IQT9sDng&usqp=CAU' },
    { name: 'Plum', prize: '120rs', descreption: 'A plum is a fruit of some species in Prunus subg. Prunus. Dried plums are most often called prunes, though after the year 2000 in the United States they may be just labeled as dried plums', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkhk6Go7K2UVKIB0vFUdyU9law2lcMG9-f5g&usqp=CAU' },

    ]
    return (
        <div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-around',paddingTop:'30px'}}>
{
    fruits.map((data)=>{
        return(
            <div style={{border:'black solid 2px',width:'300px',textAlign:'center',height:'500px'}}>
                <img src={data.img} style={{height:'200px'}}></img>
                <h1>{data.name}</h1>
                <p style={{height:'125px'}}>{data.descreption}</p>
                <p style={{fontWeight:'bold',fontStyle:'oblique'}}>{data.prize}</p>
                <button style={{marginBottom:'10px',backgroundColor:'blue',color:'white',borderRadius:'10px'}}>Click Me</button>
            </div>
        )
    })
}
        </div>
    )
}

export default Fruitscard
