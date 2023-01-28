import React from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';

const Home = () => (
  <Container className="py-3">
    <h1 className="text-center">WELCOME TO SCADA LAB</h1>
    <p>
      We are going to stand up a small, remote SCADA system. Students will familiarize themselves with the equipment, design & build the lab, then analyze and identify critical cyber terrain. Based on this analysis, students will deploy sensors on the remote network to flow data to a signature-based IDS (Intrusion Detection System). As a class, we will then use AI/ML techniques to automatically create both permissive and restrictive signatures on the remote SCADA network. A second goal of this lab is to explore tools, techniques and procedures for administering legacy SCADA equipment using Zero-Trust processes.
    </p>
    <h1 className="text-center">About the SCADA Lab</h1>
    <p className="text-center">Lorem ipsum dolor loco.
    </p>
    <Row className="justify-content-center">
      <Col lg={8} className="text-center">
        <h1>Department Roles</h1>
        <Table striped bordered>
          <thead>
            <tr>
              <th>Department</th>
              <th>Role Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th><a href="/">Linux System Admin</a></th>
              <td>Program and maintain Raspberry PIs</td>
            </tr>
            <tr>
              <th><a href="/">Network Admin</a></th>
              <td>Configuring the network, maintaining network equipment</td>
            </tr>
            <tr>
              <th><a href="/">Radio Frequency</a></th>
              <td>Establish and maintain RF communication between buildings</td>
            </tr>
            <tr>
              <th><a href="/">Webmaster</a></th>
              <td>Maintain and update the Wiki</td>
            </tr>
            <tr>
              <th><a href="/">SEL Team</a></th>
              <td>Research and operate SEL switching devices. Connect and exchange communication within SEL devices</td>
            </tr>
            <tr>
              <th><a href="/">sFlow Team</a></th>
              <td>-</td>
            </tr>
            <tr>
              <th><a href="/">SDN Team</a></th>
              <td>-</td>
            </tr>
            <tr>
              <th><a href="/">ML/NN Team</a></th>
              <td>-</td>
            </tr>
            <tr>
              <th><a href="/">Panic Button Team</a></th>
              <td>-</td>
            </tr>
          </tbody>
        </Table>
      </Col>
    </Row>
  </Container>
);

export default Home;
