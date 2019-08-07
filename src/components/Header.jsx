import React from "react";
import "../styles/header.css";
import { Navbar, Nav } from "react-bootstrap";

const Header = () => {
  return (
    <div id="header">
      <Navbar expand="lg">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;

// {/* <div id="header">
//       {/* <Logo /> */}
//       <img
//         className="logo"
//         src={require("../images/LisaCee.png")}
//         alt="placeholder logo"
//       />
//       <h1>Lisa Canini</h1>
//       <p>
//         Full stack developer passionate about making easy-to-use, accessible and
//         responsive user interfaces
//       </p>
//     </div> */}
