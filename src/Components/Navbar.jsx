import React from 'react'
import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom';



const NavBar = () => {
const cartProducts =useSelector(state=> state.cart);

  return (

       <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Redux Toolkit</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link to='/' as={Link}>Products</Nav.Link>
           </Nav>
           <Navbar.Toggle/>
           <Navbar.Collapse className='justify-content-end'>
            <Navbar.Text>
                <Nav.Link to="/cart" as={Link} >My Bag {cartProducts.length}</Nav.Link>
            </Navbar.Text>
           </Navbar.Collapse>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  )
}

export default NavBar
