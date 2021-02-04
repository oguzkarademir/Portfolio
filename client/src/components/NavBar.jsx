import React from "react";
import { Row, Navbar, NavbarBrand, Nav } from "react-bootstrap";
import { FaBars } from 'react-icons/fa';

export const NavBar = () => {
  return (
    <Navbar expand="lg" className="bg-transparent">
      <NavbarBrand href="/" className="myname ml-3">
        Oguz
        <br />
        Karademir
      </NavbarBrand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav">
        <span className="hamburger">
          <FaBars />
        </span>
      </Navbar.Toggle>
      <Navbar.Collapse
        id="responsive-navbar-nav"
        style={{ justifyContent: "flex-end" }}
      >
        <Nav>
          <Nav.Link href="/about" to="/about" className="menu mr-5">About Me</Nav.Link>
          <Nav.Link href="/projects" to="/projects" className="menu mr-5">Projects</Nav.Link>
          <Nav.Link href="/blogs" to="/blogs" className="menu mr-5">Blog</Nav.Link>
          <Nav.Link href="/cv" to="/cv" className="menu mr-3">CV</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
