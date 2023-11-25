import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Navbar className="bg-dark">
        <Container>
          <Navbar.Brand>
            <Link to={'/'} style={{textDecoration:'none', color:'white', fontSize:'30px'}}>
            <i class="fa-solid fa-bounce fa-utensils me-4 text-warning"></i>{' '}
            The Tasty Palette  </Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
  )
}

export default Header
