import React from 'react';
import { Col, Row, Table } from 'react-bootstrap';
import Troubleshooting from './Troubleshooting';

const Overview = () => (
  <span>
    <p>This page will provide a detailed layout of how to configure each SEL device, how they will be synchronously operated, as well as a specification table of the wiring configuration for the DL 205</p>
    <h5>Check connections/ports using nmap (also alt to ssh using port 414: https)</h5>
    <ul>
      <li><Troubleshooting /></li>
      <li><a href="https://nmap.org/download.html" target="_blank" rel="noreferrer">NMAP Website</a></li>
    </ul>
    <h5>If port 22 displays use putty for windows or use terminal on mac to SSH (ssh 10.1.1.31)</h5>
    <ul>
      <li><a href="https://www.putty.org/" target="_blank" rel="noreferrer">PuTTY Website</a></li>
    </ul>
    <h3>SEL 3505 Configuration</h3>
    <p>Once the 3505 is connected and firmware is installed, navigate to 10.1.1.31 This will direct you to the login page from SEL Inc.</p>
    <Row className="justify-content-center">
      <Col lg={6}>
        <Table striped bordered>
          <thead>
            <tr>
              <th width="50%">Username</th>
              <th width="50%">Password</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>UHmanoa</td>
              <td>Sel3505*</td>
            </tr>
          </tbody>
        </Table>
      </Col>
    </Row>
    <p>Serial Communication (Command Line)</p>
    <Row className="justify-content-center">
      <Col lg={6}>
        <Table striped bordered>
          <thead>
            <tr>
              <th colSpan={2}>Settings</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td width="50%">Baud Rate</td>
              <td width="50%">9600</td>
            </tr>
            <tr>
              <td>Data Bits</td>
              <td>8</td>
            </tr>
            <tr>
              <td>Stop Bits</td>
              <td>1</td>
            </tr>
            <tr>
              <td>Parity</td>
              <td>None</td>
            </tr>
          </tbody>
        </Table>
        <Table striped bordered>
          <thead>
            <tr>
              <th colSpan={2}>Default Passwords</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td width="50%">Access Level 1</td>
              <td width="50%">OTTER</td>
            </tr>
            <tr>
              <td>Access Level B</td>
              <td>EDITH</td>
            </tr>
            <tr>
              <td>Access Level 2</td>
              <td>TAIL</td>
            </tr>
          </tbody>
        </Table>
      </Col>
    </Row>
  </span>
);

export default Overview;
