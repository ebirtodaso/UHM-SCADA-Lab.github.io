import React from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import DXE402 from './DX-E402';
import WLWN530H4 from './WL-WN530H4';
import HP292024G from './HP-2920-24G';
import HP2520G8PoE from './HP-2520G-8-PoE';

const Network = () => (
  <Container className="py-3">
    <h1>Network</h1>
    <Row className="justify-content-center">
      <Col lg={8}>
        <h3>Relevant Devices</h3>
        <Table striped bordered>
          <thead style={{ fontSize: '18px' }}>
            <tr>
              <th>Device</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody style={{ fontSize: '14px' }}>
            <tr>
              <th><DXE402 /></th>
              <td>Dynex router used as the UH Uplink.</td>
            </tr>
            <tr>
              <th><WLWN530H4 /></th>
              <td>Wavlink router used to wirelessly connect devices to the internet and SCADA network.</td>
            </tr>
            <tr>
              <th><HP292024G /></th>
              <td>A 24-port network switch.</td>
            </tr>
            <tr>
              <th><HP2520G8PoE /></th>
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
    <ul>
      <li>Only accounts with UH Emails may access</li>
      <li>
        <a href="https://docs.google.com/drawings/d/1Jd3nHqqYbsNkVwAQvhZ5zCrwgf0yuxxAtxjIsT0l_fY/edit">Network Map</a>
      </li>
      <li>
        <a href="https://docs.google.com/spreadsheets/d/1fkD1ihLW496p8tQhlRT4OwzG7a3ZOo4inUt4FP8itMg/edit#gid=0">Switch Ports/IPs/VLANs</a>
      </li>
    </ul>
    <h3>Mininet</h3>
    <ul>
      <li>SCADA Lab topography for <a href="https://github.com/wbader/SCADA-Lab/blob/main/topo-SCADA-Lab.py">mininet</a> based on the Network Map as of 3/31/22</li>
    </ul>
  </Container>
);

export default Network;
