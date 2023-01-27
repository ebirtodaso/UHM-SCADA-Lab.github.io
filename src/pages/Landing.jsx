import React from 'react';
import { Container, Table } from 'react-bootstrap';

const Landing = () => (
  <Container className="py-3">
    <h1 className="text-center">WELCOME TO SCADA LAB</h1>
    <p>
      We are going to stand up a small, remote SCADA system.  Students will familiarize themselves with the equipment, design & build the lab, then analyze and identify critical cyber terrain.  Based on this analysis, students will deploy sensors on the remote network to flow data to a signature-based IDS (Intrusion Detection System).  As a class, we will then use AI/ML techniques to automatically create both permissive and restrictive signatures on the remote SCADA network. A second goal of this lab is to explore tools, techniques and procedures for administering legacy SCADA equipment using Zero-Trust processes.
    </p>

    <h1 className="text-center">About the SCADA Lab</h1>
    <p className="text-center">Lorem ipsum dolor loco.
    </p>

    <h1 className="text-center">Department Roles</h1>
    <Table striped bordered hover>
      <thead>
      <tr>
        <th scope="row">Department</th>
        <th scope="row">Role Description</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <th scope="row"><a href="/">Linux System Admin</a></th>
        <td>Program and maintain Raspberry PIs</td>
      </tr>
      <tr>
        <th scope="row"><a href="/" className="text-dark">Network Admin</a></th>
        <td>Configuring the network, maintaining network equipment</td>
      </tr>
      <tr>
        <th scope="row"><a href="/" className="text-dark">Radio Frequency</a></th>
        <td>Establish and maintain RF communication between buildings</td>
      </tr>
      <tr>
        <th scope="row"><a href="/" className="text-dark">Webmaster</a></th>
        <td>Maintain and update the Wiki</td>
      </tr>
      <tr>
        <th scope="row"><a href="/" className="text-dark">SEL Team</a></th>
        <td>Research and operate SEL switching devices. Connect and exchange communication within SEL devices</td>
      </tr>
      <tr>
        <th scope="row"><a href="/" className="text-dark">sFlow Team</a></th>
        <td>-</td>
      </tr>
      <tr>
        <th scope="row"><a href="/" className="text-dark">SDN Team</a></th>
        <td>-</td>
      </tr>
      <tr>
        <th scope="row"><a href="/" className="text-dark">ML/NN Team</a></th>
        <td>-</td>
      </tr>
      <tr>
        <th scope="row"><a href="/" className="text-dark">Panic Button Team</a></th>
        <td>-</td>
      </tr>
      </tbody>
    </Table>
  </Container>
);

export default Landing;
