import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import logo from "../assets/logo.png";


const NavBar = () => {

  return (
      <Navbar>
    <Container>
    <Navbar.Brand href="#home">
      <img
        src={logo}
        width="60"
        height="60"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
    </Navbar.Brand>
      <Navbar.Collapse className="justify-content-end">
    
        <Navbar.Text>
          Netaji Subhash Engineering College
        </Navbar.Text>
    </Navbar.Collapse>
    </Container>
  </Navbar>

  );
}

export {NavBar};
