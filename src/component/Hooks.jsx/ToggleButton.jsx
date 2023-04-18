import React from 'react'
import { useState } from 'react';


function ToggleButton() {


    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(true)
    }

    const handleReset = () => {
        setClicked(false)
    }

    return (
        <button onClick={clicked ? handleReset : handleClick} style={{ backgroundColor: clicked ? 'red' : 'blue' }}>
            {clicked ? 'Reset' : 'Submit'}
        </button>
    );


}

export default ToggleButton


