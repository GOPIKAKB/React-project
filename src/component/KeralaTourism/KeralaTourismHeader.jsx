import React from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'

function KeralaTourismHeader() {
  return (
    <div className='w-100'>
      <Navbar bg="light" variant="light" className='justify-content-between' >
        <img src='https://cdn.getyourguide.com/tf/assets/static/logos/gyg-logo.svg' style={{paddingLeft:'50px'}}/>
          
          <Nav  style={{paddingRight:'50px'}}>
            <Nav.Link href="#home" style={{paddingRight:'20px'}}>English</Nav.Link>
            <Nav.Link href="#features" style={{paddingRight:'20px'}}>INR</Nav.Link>
            <Nav.Link href="#pricing" style={{paddingRight:'20px'}}>Wishlist</Nav.Link>
            <Nav.Link href="#home" style={{paddingRight:'20px'}}>kart</Nav.Link>
            <Nav.Link href="#features" style={{paddingRight:'20px'}}>Help</Nav.Link>
            <Nav.Link href="#pricing" style={{paddingRight:'20px'}}>Login</Nav.Link>
            <Nav.Link href="#pricing"><Button style={{borderRadius:'25px', backgroundColor:'#0d6efd'}} variant="primary">Sign Up</Button></Nav.Link>
          </Nav>
      </Navbar>
     
    </div>
  )
}

export default KeralaTourismHeader
