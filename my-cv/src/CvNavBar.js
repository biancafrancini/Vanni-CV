import React from 'react';
import { Navbar,Nav,Container,Image } from 'react-bootstrap';
import vanniLogo from "./vanniLogo.JPG";
import { Link } from 'react-router-dom';

import './CvNavBar.css';

export default function CvNavBar() {
return (
    <div className="Navbar-section">
    <Navbar bg="light" expand="xl">
  <Link to="/" > <Image src={vanniLogo} className="vanni-logo" alt="img" /> </Link>
  <Container>
    <Navbar.Brand id="title-vanni-page" href="/"> Vanni </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link id="title-page" href="/aboutMe">About Me</Nav.Link>
        <Nav.Link id="title-page" href="/myskills"> My Skills </Nav.Link>
        <Nav.Link id="title-page" target="blank_" href="https://www.flipsnack.com/vanni88/vanni_francini_portfolio.html"> My Portfolio </Nav.Link>
        <Nav.Link id="title-page" href="#contact-Vanni"> Contact me </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
</div>
);
}