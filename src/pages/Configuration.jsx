import React from 'react';
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
      <li><a href="/">entraNET Access Point</a></li>
      <li><a href="/">MeanWell PS</a></li>
      <li><a href="/">Raspberry PIs</a></li>
    </ul>
    <ul>
      <h3>Remote (ITC Datacenter)</h3>
      <li><a href="/">entraNET Serial Remote</a></li>
      <li><a href="/">NovaTech OrionLXm</a></li>
      <li><a href="/">SEL 3505</a></li>
      <li><a href="/">SEL 311</a></li>
      <li><a href="/">SEL 451</a></li>
      <li><a href="/">Direct Logic 205 Koyo</a></li>
      <ul>
        <li><a href="/">H2-DM1E</a></li>
        <li><a href="/">D2-16ND3-2</a></li>
        <li><a href="/">F2-16TD2p</a></li>
      </ul>
      <li><a href="/">Mean Well PS</a></li>
      <li><a href="/">SCADA Cam</a></li>
    </ul>
  </Container>
);

export default Configuration;
