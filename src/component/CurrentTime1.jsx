import React, { useEffect, useState } from 'react'

function CurrentTime1() {
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  },[currentTime]);

  return (
    <div>
        <div>
      <h1>Current Time: {currentTime}</h1>
    </div>
    </div>
  )
}

export default CurrentTime1

