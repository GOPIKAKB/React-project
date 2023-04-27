import React, { useState } from 'react'

function ChangeTheme() {
  const [theme, setTheme] = useState('light')
  const hangeTheme = () => {
    setTheme((pre) => {
      return (pre === 'light' ? 'dark' : 'light')
    })
  }
  return (
    <div style={{ backgroundColor: theme === 'light' ? '#0a0a68' : '#4d4ded', width: '50%', height: '300px', textAlign: 'center' }}>
      <h1 style={{paddingTop:'60px',color:'white'}}>Hello World</h1>
      <div style={{paddingTop:'50px'}}>
        <button onClick={hangeTheme}>{theme}</button>
      </div>
    </div>
  )
}

export default ChangeTheme
