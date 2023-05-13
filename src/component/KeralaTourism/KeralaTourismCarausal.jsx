import React from 'react'
import { Carousel } from 'react-bootstrap'

function KeralaTourismCarausal() {
    return (
        <div style={{marginTop:'40px'}} >
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://cdn.getyourguide.com/img/tour/4ec4e1d8c0a16.png/98.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>DAY TRIP </h3>
                        <p>Kerala Full-Day Tour from Kochi with Lunch</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://cdn.getyourguide.com/img/tour/5900916b215a6.jpeg/98.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>DAY TRIP </h3>
                        <p>Kochi: Private Backwater Houseboat Day Cruise with Transfers</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://cdn.getyourguide.com/img/tour/5900866749a00.jpeg/98.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>ENTRY TICKET </h3>
                        <p>
                            Kochi: Kathakali Evening Dance Show w/ Dinner & Transfer
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default KeralaTourismCarausal
