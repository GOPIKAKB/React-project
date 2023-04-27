import React, { useState } from 'react'
import CardChiled from './CardChiled'

function CardParent() {
    const fruits = [{ name: 'Watermelon', prize: '50rs', descreption: 'Watermelon is a sweet and refreshing low calorie summer snack. It provides hydration and also essential nutrients, including vitamins, minerals, and antioxidants.', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiEg1fbs91oYxLDJw__j72Em1-iPu6z9rTqw&usqp=CAU' },
    { name: 'Mango', prize: '70rs', descreption: 'A mango is an edible stone fruit produced by the tropical tree Mangifera indica. It is believed to have originated between northwestern Myanmar', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGxbQJMWVBbVT7xAj0JdDcTTrC-136O6qaOw&usqp=CAU' },
    { name: 'Apple', prize: '80rs', descreption: 'An apple is an edible fruit produced by an apple tree . Apple trees are cultivated worldwide and are the most widely grown species in the genus Malus.', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtkzZMTh_n9DE3CznuCnA8wVdQI7IQT9sDng&usqp=CAU' },
    { name: 'Plum', prize: '120rs', descreption: 'A plum is a fruit of some species in Prunus subg. Prunus. Dried plums are most often called prunes, though after the year 2000 in the United States they may be just labeled as dried plums', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkhk6Go7K2UVKIB0vFUdyU9law2lcMG9-f5g&usqp=CAU' },

    ]
    const veg = [{ name: 'carrot', prize: '50rs', descreption: 'The carrot is a root vegetable, typically orange in color, though purple, black, red, white, and yellow cultivars exist, all of which are domesticated forms of the wild carrot', img: 'https://cdn.shopify.com/s/files/1/0451/1101/7626/products/carrotseeds.jpg?v=1604032858' },
    { name: 'onion', prize: '70rs', descreption: '.onion is a special-use top level domain name designating an anonymous onion service, which was formerly known as a "hidden service",[1] reachable via the Tor network.', img: 'https://www.shutterstock.com/image-photo/red-whole-sliced-onion-isolated-260nw-1684863088.jpg' },
    { name: 'tomatto', prize: '80rs', descreption: 'The tomato is the edible berry of the plant Solanum lycopersicum, commonly known as the tomato plant. The species originated in western South America, Mexico, and Central America.', img: 'https://thumbs.dreamstime.com/b/tomatoes-half-tomato-isolated-white-png-file-transparent-background-tomatoes-half-tomato-isolated-white-136961939.jpg' },
    { name: 'potatto', prize: '120rs', descreption: 'According to the United States Department of Agriculture, a typical raw potato is 79% water, 17% carbohydrates , 2% protein, and contains negligible fat.', img: 'https://www.jiomart.com/images/product/600x600/590000090/potato-1-kg-product-images-o590000090-p590000090-0-202207291750.jpg' },
    ]
    const [item, setItem] = useState(fruits)
    const [clicked, setCicked] = useState(true)
    const handleClick = () => {
        setCicked(!clicked)
        if (clicked) {
            setItem(veg)
        } else {
            setItem(fruits)
        }
        console.log(item)
    }
    return (
        <div>
            <CardChiled onClick={handleClick} data={item} clicked={clicked} />
        </div>
    )
}

export default CardParent
