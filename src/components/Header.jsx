import React from 'react';
import '../styles/header.css';
import Logo from '../images/LisaCee.png';
import { Navbar, Nav, Row, Col } from 'react-bootstrap';

const Header = () => {
  return (
    <div id='header'>
      <Navbar expand='md'>
        <Navbar.Brand href='#home' className='d-inline align-top'>
          <Row>
            <Col xs={3}>
              <img src={Logo} alt='logo' />
            </Col>
            <Col>
              <h3>Lisa Canini</h3>
              <br />
              <p>
                Full stack developer{' '}
                <span id='headerDesc'>
                  passionate about making easy-to-use, accessible and responsive
                  user interfaces
                </span>
              </p>
            </Col>
          </Row>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls='responsive-navbar-nav' id='nav-button' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='ml-auto'>
            <Nav.Link href='#bio'>About</Nav.Link>
            <Nav.Link href='#contact'>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
