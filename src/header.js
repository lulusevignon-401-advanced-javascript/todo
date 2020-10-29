import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Auth from './components/todo/auth.js';
import Nav from 'react-bootstrap/Nav'

function Header(){
  return(
    <header>
      <Navbar bg="primary" variant="dark">
    
      <Nav className="mr-auto">
        <Nav.Link>Home</Nav.Link>
        <Auth><Nav.Link>Log In
        {/* <Login /> */}
        </Nav.Link></Auth>
      </Nav>

      </Navbar>

    </header>
  )

}

export default Header;