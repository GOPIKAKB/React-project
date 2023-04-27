import React from 'react'
import ListItemChiled from './ListItemChiled'

function ListItemParent() {
    let fruits=['apple','mango','orenge','watermelon']
  return (
    <div>
      <ListItemChiled fruits={fruits}/>
    </div>
  )
}

export default ListItemParent
