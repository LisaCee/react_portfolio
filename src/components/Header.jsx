import React from 'react';
import '../styles/header.css';
import Logo from '../images/Logo_Blue_sm.jpg';
import { Navbar, Nav, Row, Col } from 'react-bootstrap';

const Header = () => {
  return (
    <div id='header'>
      <Navbar expand='md'>
        <Navbar.Brand href='#home' className='d-inline align-top'>
          <Row>
            <Col>
              <img src={Logo} alt='logo' />
            </Col>
            <Col>
              <h3>LISA CANINI</h3>
              <p>Full Stack Web Developer</p>
            </Col>
          </Row>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls='responsive-navbar-nav' id='nav-button' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='ml-auto'>
            <Col>
              <Nav.Link href='#about'>About</Nav.Link>
            </Col>
            <Col>
              <Nav.Link href='#contact'>Contact</Nav.Link>
            </Col>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
