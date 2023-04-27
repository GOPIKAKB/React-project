import React from 'react'

function ListItemChiled(props) {
  return (
    <div style={{display:'flex',justifyContent:'center'}}>
      <ul>fruits
        {
            props.fruits.map((item)=>{
                return(
                    <li>item</li>
                )
            })
        }
      </ul>
    </div>
  )
}

export default ListItemChiled