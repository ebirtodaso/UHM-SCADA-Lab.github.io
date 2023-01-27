import React from 'react';
import { Container, Nav, Navbar, NavDropdown, NavLink } from 'react-bootstrap';

const NavBar = () => (
  <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand as={NavLink} to="/">
        <img height="60px" src="./images/SCADA.png" alt="SCADA"/>
      </Navbar.Brand>
      <Navbar.Toggle/>
      <Navbar.Collapse className="justify-content-end">
        <Nav>
          <NavDropdown align="end" title="Getting Started">
            <NavDropdown.Item as={NavLink} to="/">SCADA Discord</NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/">Inventory Sheet</NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/">To-Do List</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link as={NavLink} to="/">Team</Nav.Link>
          <NavDropdown align="end" title="Equipment">
            <NavDropdown.Item as={NavLink} to="/">Equipment List</NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/">Configuration</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown align="end" title="Departments">
            <NavDropdown.Item as={NavLink} to="/">Network</NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/">System Admin</NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/">Knowledge Management</NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/">SNMP/NOC</NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/">sFlow & SDN</NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/">ML Curriculum</NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/">HCI</NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/">Database</NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/">Red Team/SEL</NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/">Log Stash</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link as={NavLink} to="/">Legacy</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);


export default NavBar;
