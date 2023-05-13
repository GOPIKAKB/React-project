import React from 'react'
import { Card } from 'react-bootstrap'
import '../../Style/KeralaTourismCards.css'

function KeralaTourismCards() {
    const activity = ['Entry tickets', 'guided tour', 'day trips', 'water activities', 'multi day trip', 'transfer', 'adventures']
    return (
        <div style={{ paddingTop: '40px', }}>
            <h2 style={{ paddingLeft: '20px' }}>Top Activities</h2>
            <div className='w-100 mt-5' style={{ display: 'flex', justifyContent: 'space-around', padding: '0px 40px' }}>
                {activity.map((item) => {
                    return (
                        <div className='activity'>
                            <a>{item}</a>
                        </div>

                    )
                })}
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                <Card style={{ width: '18rem', marginTop: '40px' }}>
                    <Card.Img variant="top" src="https://cdn.getyourguide.com/img/tour/5d61265520a91.jpeg/132.webp" />
                    <Card.Body>
                        <Card.Title>Day Trip</Card.Title>
                        <Card.Text>
                            Cochin: Half-Day Backwater Village Eco Boat Cruise W/ Lunch
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem', marginTop: '40px' }}>
                    <Card.Img variant="top" src="https://cdn.getyourguide.com/img/tour/5d876ba925fc7.jpeg/132.webp" />
                    <Card.Body>
                        <Card.Title>MULTI-DAY TRIP </Card.Title>
                        <Card.Text>
                            From Kochi: 2-Day Alappuzha Backwaters Houseboat Cruise
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem', marginTop: '40px' }}>
                    <Card.Img variant="top" src="https://cdn.getyourguide.com/img/tour/5d61265520a91.jpeg/132.webp" />
                    <Card.Body>
                        <Card.Title>Day Trip</Card.Title>
                        <Card.Text>
                            Cochin: Half-Day Backwater Village Eco Boat Cruise W/ Lunch
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem', marginTop: '40px' }}>
                    <Card.Img variant="top" src="	z" />
                    <Card.Body>
                        <Card.Title>Multi-Day Trip</Card.Title>
                        <Card.Text>
                            From Kochi: 2-Day Alappuzha Backwaters Houseboat Cruise
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem', marginTop: '40px' }}>
                    <Card.Img variant="top" src="https://cdn.getyourguide.com/img/tour/5d61265520a91.jpeg/132.webp" />
                    <Card.Body>
                        <Card.Title>Day Trip</Card.Title>
                        <Card.Text>
                            Cochin: Half-Day Backwater Village Eco Boat Cruise W/ Lunch
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem', marginTop: '40px' }}>
                    <Card.Img variant="top" src="	https://cdn.getyourguide.com/img/tour/5976f106db741.jpeg/132.webp" />
                    <Card.Body>
                        <Card.Title>Day Trip</Card.Title>
                        <Card.Text>
                            Munnar Private Day Trip
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem', marginTop: '40px' }}>
                    <Card.Img variant="top" src="https://cdn.getyourguide.com/img/tour/5d61265520a91.jpeg/132.webp" />
                    <Card.Body>
                        <Card.Title>Day Trip</Card.Title>
                        <Card.Text>
                            Cochin: Half-Day Backwater Village Eco Boat Cruise W/ Lunch
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem', marginTop: '40px' }}>
                    <Card.Img variant="top" src="https://cdn.getyourguide.com/img/tour/50cb571df411a.jpeg/132.webp" />
                    <Card.Body>
                        <Card.Title>WATER ACTIVITY </Card.Title>
                        <Card.Text>
                            Alleppey / Alappuzha Backwater Canoe (Shikara) Cruise
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem', marginTop: '40px' }}>
                    <Card.Img variant="top" src="https://cdn.getyourguide.com/img/tour/5d61265520a91.jpeg/132.webp" />
                    <Card.Body>
                        <Card.Title>Day Trip</Card.Title>
                        <Card.Text>
                            Cochin: Half-Day Backwater Village Eco Boat Cruise W/ Lunch
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem', marginTop: '40px' }}>
                    <Card.Img variant="top" src="https://cdn.getyourguide.com/img/tour/5f61ed406dae1.jpeg/132.webp" />
                    <Card.Body>
                        <Card.Title>GUIDED TOUR </Card.Title>
                        <Card.Text>
                            Kochi: Private Tuk-Tuk City Tour with Hotel Pickup
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem', marginTop: '40px' }}>
                    <Card.Img variant="top" src="https://cdn.getyourguide.com/img/tour/4ef85fcfb9f14.png/132.webp" />
                    <Card.Body>
                        <Card.Title>ENTRY TICKET</Card.Title>
                        <Card.Text>
                            Fort Cochin Entrance & Kathakali Dance Performance
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem', marginTop: '40px' }}>
                    <Card.Img variant="top" src="	https://cdn.getyourguide.com/img/tour/540c598d5ae12.jpeg/132.webp" />
                    <Card.Body>
                        <Card.Title>GUIDED TOUR </Card.Title>
                        <Card.Text>
                            Fort Kochi & Mattanchery 3-Hour Walking Tour
                        </Card.Text>
                    </Card.Body>
                </Card>

            </div>
            <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '40px' }}>
                <button style={{ backgroundColor: 'blue', color: 'white', borderRadius: '15px' }} >Explore All</button></div>
        </div>
    )
}

export default KeralaTourismCards
