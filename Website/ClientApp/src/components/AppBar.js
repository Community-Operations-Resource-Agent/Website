import React from "react";

import { NavLink } from "react-router-dom";

import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import NavDropdown from "react-bootstrap/NavDropdown";

import logo from "../assets/Logo.svg";
import styles from "./AppBar.module.css";

export const AppBar = () => {
  return (
    <Navbar
      variant="light"
      bg="light"
      sticky="top"
      className="AppBar justify-content-between"
      as="header"
      collapseOnSelect
      expand="lg"
    >
      <Navbar.Brand as={NavLink} to="/home" className="ml-3">
        <Image src={logo} className={styles.logo} alt="CORAbot logo" />
      </Navbar.Brand>
      <Navbar.Toggle></Navbar.Toggle>
      <Navbar.Collapse className={styles.nav}>
        <Nav>
          <NavDropdown title="About" className={styles.navLink}>
            <NavDropdown.Item as={NavLink} to="/about" activeClassName="active">
              Our Team
            </NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/technology" activeClassName="active">
              Technology
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link as={NavLink} className={styles.navLink} to="/map" activeClassName="active">
            Map
          </Nav.Link>
          <Nav.Link as={NavLink} className={styles.navLink} to="/studies" activeClassName="active">
            Case Studies
          </Nav.Link>
          <Button as={NavLink} className={styles.navLink} to="/contact" variant="primary">
            Contact
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
