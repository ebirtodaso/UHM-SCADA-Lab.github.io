import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row, Table } from 'react-bootstrap';
import DXE402 from '../equipment/DX-E402';
import WLWN530H4 from '../equipment/WL-WN530H4';
import HP292024G from '../equipment/HP-2920-24G';
import HP2520G8PoE from '../equipment/HP-2520G-8-PoE';

const Network = () => (
  <Container className="py-3">
    <h1>Network</h1>
    <Row className="justify-content-center">
      <Col lg={8}>
        <h3>Relevant Devices</h3>
        <Table striped bordered>
          <thead>
            <tr>
              <th>Device</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><DXE402 /></td>
              <td>Dynex router used as the UH Uplink.</td>
            </tr>
            <tr>
              <td><WLWN530H4 /></td>
              <td>Wavlink router used to wirelessly connect devices to the internet and SCADA network.</td>
            </tr>
            <tr>
              <td><HP292024G /></td>
              <td>A 24-port network switch.</td>
            </tr>
            <tr>
              <td><HP2520G8PoE /></td>
              <td>A 10-port network switch.</td>
            </tr>
          </tbody>
        </Table>
      </Col>
    </Row>
    <h3>Wifi Password</h3>
    <ul>
      <li>Password: Sc@d@21!</li>
      <li>Works with SCADA-2.4G and SCADA-5G</li>
    </ul>
    <h3>Important Links</h3>
    <p><em>Only accounts with UH Emails may access!</em></p>
    <ul>
      <li>
        <Link to="https://docs.google.com/drawings/d/19wWE4QDeSVR99fB084llob70Xo4fzYEeT_ArZQRVDYU/edit?usp=sharing">Network Map</Link>
      </li>
      <li>
        <Link to="https://docs.google.com/spreadsheets/d/1fkD1ihLW496p8tQhlRT4OwzG7a3ZOo4inUt4FP8itMg/edit#gid=0">Switch Ports/IPs/VLANs</Link>
      </li>
    </ul>
    <h3>Mininet</h3>
    <ul>
      <li>SCADA Lab topography for <Link to="https://github.com/wbader/SCADA-Lab/blob/main/topo-SCADA-Lab.py">mininet</Link> based on the Network Map as of 3/31/22</li>
    </ul>
  </Container>
);

export default Network;
