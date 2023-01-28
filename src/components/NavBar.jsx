import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

const NavBar = () => (
  <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="/">
        <img height="60px" src="/images/SCADA.png" alt="SCADA" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
        <Nav>
          <NavDropdown align="end" title="Getting Started">
            <NavDropdown.Item href="https://discord.gg/ptPvf9etBh" target="_blank">SCADA Discord</NavDropdown.Item>
            <NavDropdown.Item href="/pdfs/Inventory_Sheet.pdf" target="_blank" rel="noreferrer">Inventory Sheet</NavDropdown.Item>
            <NavDropdown.Item href="/toDoList">To-Do List</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/team">Team</Nav.Link>
          <NavDropdown align="end" title="Equipment">
            <NavDropdown.Item href="/equipmentList">Equipment List</NavDropdown.Item>
            <NavDropdown.Item href="/configuration">Configuration</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown align="end" title="Departments">
            <NavDropdown.Item href="/network">Network</NavDropdown.Item>
            <NavDropdown.Item href="/systemAdmin">System Admin</NavDropdown.Item>
            <NavDropdown.Item href="/knowledgeManagement">Knowledge Management</NavDropdown.Item>
            <NavDropdown.Item href="/snmp-noc">SNMP/NOC</NavDropdown.Item>
            <NavDropdown.Item href="/sFlow-SDN">sFlow/SDN</NavDropdown.Item>
            <NavDropdown.Item href="/mlCurriculum">ML Curriculum</NavDropdown.Item>
            <NavDropdown.Item href="/hci">HCI</NavDropdown.Item>
            <NavDropdown.Item href="/database">Database</NavDropdown.Item>
            <NavDropdown.Item href="/redTeam-SEL">Red Team/SEL</NavDropdown.Item>
            <NavDropdown.Item href="/logStash">Log Stash</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/departments">All Departments</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/legacy">Legacy</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default NavBar;
