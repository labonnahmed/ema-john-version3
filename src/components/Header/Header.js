import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';
import logo from '../../images/logo.png'


function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container fluid>
          <Navbar.Brand href="/shop">
            <img src={logo} alt="" />
          </Navbar.Brand>
          <Nav className="ms-auto d-block">
            <NavLink to="/shop" className='menu'>Shop</NavLink>
            <NavLink to="/review" className='menu'>Order Review</NavLink>
            <NavLink to="/inventory" className='menu'>Manage Inventory</NavLink>
            <NavLink to='/login' className='menu'>Sign Out</NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;