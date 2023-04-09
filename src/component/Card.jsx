import React from "react";
import "../Style/Card.css"

function Card() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="par" >


                <h1>Phtotgraphy</h1>
                <img style={{ width: '50%' }}
                    src='https://media.istockphoto.com/id/618066222/photo/camera-capturing-a-forest.jpg?s=612x612&w=0&k=20&c=Mqr3fFI2QPY09_bu3GyRYJvcdwBO2qeHPT88GFsLTS4=' />
                <p>Photography is the art, application, and practice of creating durable images by recording light, either electronically by means of an image sensor, or chemically by means of a light-sensitive material such as photographic film. It is employed in many fields of science, manufacturing (e.g., photolithography), and business, as well as its more direct uses for art, film and video production, recreational purposes, hobby, and mass communication.</p>
                <button className="btn">Read More</button>
            </div>

        </div>
    )
}
export default Card