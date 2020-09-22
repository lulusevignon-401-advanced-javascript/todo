import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

function Header(){
  return(
    <header>
      <Navbar bg="primary" variant="dark">
    
      <Nav className="mr-auto">
        <Nav.Link>Home</Nav.Link>
      </Nav>
      
      </Navbar>

    </header>
  )

}

export default Header;