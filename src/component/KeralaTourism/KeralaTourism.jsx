import React from 'react'
import KeralaTourismHeader from './KeralaTourismHeader'
import KeralaTourismBanner from './KeralaTourismBanner'
import KeralaTourismCards from './KeralaTourismCards'
import KeralaTourismCarausal from './KeralaTourismCarausal'

function KeralaTourism() {
  return (
    <div>
      <KeralaTourismHeader/>
      <KeralaTourismBanner/>
      
      <KeralaTourismCards/>
      <KeralaTourismCarausal/>
    </div>
  )
}

export default KeralaTourism
