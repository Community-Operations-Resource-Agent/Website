import React from "react";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/SimplifiedLogo.svg";
import styles from "./AppBar.module.css";

export const AppBar = () => {

  // console.log(this.props);

  return (
    <Navbar
      variant='light'
      bg='light'
      sticky='top'
      className='AppBar justify-content-between'
      as='header'
      collapseOnSelect
      expand='lg'
    >
      <Navbar.Brand as={NavLink} to='/home' className='ml-3'>
        <Logo className={styles.logo} title='CORAbot logo' alt='CORAbot logo' />
      </Navbar.Brand>
      <a href={`${window.location.pathname}#main`} id={styles.skipNav}>Skip to main content</a>
      <Navbar.Toggle></Navbar.Toggle>
      <Navbar.Collapse className={styles.nav}>
        <Nav>
          <NavDropdown title='About' className={styles.navLink}>
            <NavDropdown.Item as={NavLink} to='/about' activeClassName='active'>
              Our Team
            </NavDropdown.Item>
            <NavDropdown.Item
              as={NavLink}
              to='/technology'
              activeClassName='active'>
              Technology
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link
            as={NavLink}
            className={styles.navLink}
            to='/map'
            activeClassName='active'>
            Map
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            className={styles.navLink}
            to='/studies'
            activeClassName='active'>
            Case Studies
          </Nav.Link>
          <Button
            as={NavLink}
            className={styles.navLink}
            to='/contact'
            variant='primary'>
            Contact
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
