import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row, Table } from 'react-bootstrap';

const Configuration = () => (
  <Container className="py-3">
    <h1>Configurations</h1>
    <h3>Static IP Address List</h3>
    <Row>
      <Col lg={6}>
        <Table striped bordered>
          <thead>
            <tr>
              <th>Device Name</th>
              <th>IP Address</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>entraNET Access Point</td>
              <td>192.168.1.200</td>
            </tr>
            <tr>
              <td>SEL 451</td>
              <td>192.9.0.2/16 (must confirm)</td>
            </tr>
          </tbody>
        </Table>
      </Col>
    </Row>
    <h3>Equipment List</h3>
    <p>Please click the links below for the configuration of each device.</p>
    <ul>
      <h3>Local (Holmes 450)</h3>
      <li><Link to="/">entraNET Access Point</Link></li>
      <li><Link to="/">MeanWell PS</Link></li>
      <li><Link to="/">Raspberry PIs</Link></li>
    </ul>
    <ul>
      <h3>Remote (ITC Datacenter)</h3>
      <li><Link to="/">entraNET Serial Remote</Link></li>
      <li><Link to="/">NovaTech OrionLXm</Link></li>
      <li><Link to="/">SEL 3505</Link></li>
      <li><Link to="/">SEL 311</Link></li>
      <li><Link to="/">SEL 451</Link></li>
      <li><Link to="/">Direct Logic 205 Koyo</Link></li>
      <ul>
        <li><Link to="/">H2-DM1E</Link></li>
        <li><Link to="/">D2-16ND3-2</Link></li>
        <li><Link to="/">F2-16TD2p</Link></li>
      </ul>
      <li><Link to="/">Mean Well PS</Link></li>
      <li><Link to="/">SCADA Cam</Link></li>
    </ul>
  </Container>
);

export default Configuration;
