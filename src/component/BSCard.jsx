import React from 'react'
import { Button, Card } from 'react-bootstrap'

function BSCard() {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://www.tecno-mobile.in/storage/images/20220829/6459a664e8b71d84cb6ef4be0b908258.jpg" />
                <Card.Body>
                    <Card.Title>TECNO Mobile</Card.Title>
                    <Card.Text>
                        Camera: 64MP Main Camera with EIS; 2MP Depth Lens and 2MP Macro Lens; Front (Selfie) Camera: 16MP Sony IMX471
                        Camera Features: AI scene enhancement, Dual-View Video, HDR, Night Portrait, Panorama Mode, Retouch Filters, 1080p video at 30 fps, SLO-MO: 720p video at 120 fps, TIME-LAPSE: 1080p video at 30 fps, Video editor, Face unlock, Screen flash, HDR, NIGHT, PORTRAIT, TIME-LAPSE, Retouch, Filters
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default BSCard

