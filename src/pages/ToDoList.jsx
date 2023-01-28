import React from 'react';
import { Container, Table } from 'react-bootstrap';

const ToDoList = () => (
  <Container className="py-3">
    <h1>To-Do List</h1>
    <p>
      This page is for monitoring and prioritizing tasks for our SCADA system. Please use dates, either when the task should be finished, or when the task was started. Please try and keep this up-to-date as much as possible.
    </p>
    <Table striped>
      <thead style={{ fontSize: '18px' }}>
        <tr>
          <th>SCADA System Task</th>
          <th>Description</th>
          <th>Date of Completion</th>
        </tr>
      </thead>
      <tbody style={{ fontSize: '14px' }}>
        <tr>
          <th>Integrate SEL Components</th>
          <td>Install 3505,451,311B to switch</td>
          <td>3/24/2022</td>
        </tr>
        <tr>
          <th>Modify Network to SDN</th>
          <td>Choose an SDN network to use for the System</td>
          <td>-</td>
        </tr>
        <tr>
          <th>Connect All Devices</th>
          <td>Incorporate DL205 Security Device, and PI DNS Server</td>
          <td>2/15/2022</td>
        </tr>
        <tr>
          <th>Install Antenna</th>
          <td>Gain Holmes Roof Access and install Gateway and AP antenna</td>
          <td>-</td>
        </tr>
        <tr>
          <th>Move SCADA to side</th>
          <td>SCADA System will be relocated and accessed wirelessly</td>
          <td>-</td>
        </tr>
        <tr>
          <th>Put room-light sensor on the remote side of the network</th>
          <td>-</td>
          <td>10/04/2022</td>
        </tr>
        <tr>
          <th>Make room-light sensor web-facing, Restful API</th>
          <td>-</td>
          <td>10/04/2022</td>
        </tr>
        <tr>
          <th>Stand up a knife-switch in the datacenter with a Restful API</th>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <th>Get sFlow going on the remote switch</th>
          <td>-</td>
          <td>-</td>
        </tr>
      </tbody>
    </Table>
    <Table striped>
      <thead style={{ fontSize: '18px' }}>
        <tr>
          <th>Network Admin Task</th>
          <th>Description</th>
          <th>Date of Completion</th>
        </tr>
      </thead>
      <tbody style={{ fontSize: '14px' }}>
        <tr>
          <th>Switch Swap</th>
          <td>Upgrade 2520G-8-PoE switch to a rate-limiting capable switch.</td>
          <td>Fall 2022</td>
        </tr>
        <tr>
          <th>Task</th>
          <td>-</td>
          <td>-</td>
        </tr>
      </tbody>
    </Table>
    <Table striped>
      <thead style={{ fontSize: '18px' }}>
        <tr>
          <th scope="col">Linux System Admin Task</th>
          <th scope="col">Description</th>
          <th scope="col">Date of Completion</th>
        </tr>
      </thead>
      <tbody style={{ fontSize: '14px' }}>
        <tr>
          <th scope="row">Setup DNS Server</th>
          <td>Get Bind9 and configure it to be the authoritative DNS server for the domain SCADA lab</td>
          <td>3/7/2022</td>
        </tr>
        <tr>
          <th scope="row">Setup DHCP reservation system</th>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <th scope="row">Wiki Update</th>
          <td>Log the changes made in order to set up the DNS server</td>
          <td>3/17/2022</td>
        </tr>
        <tr>
          <th scope="row">Syslog Server</th>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <th scope="row">Audit System</th>
          <td>Figure out where we left off and bring pi&apos;s up to date</td>
          <td>10/42022</td>
        </tr>
        <tr>
          <th scope="row">Master OS</th>
          <td>Create a master copy of the OS that has our configuration and updates</td>
          <td>-</td>
        </tr>
        <tr>
          <th scope="row">Task</th>
          <td>-</td>
          <td>-</td>
        </tr>
      </tbody>
    </Table>
    <Table striped>
      <thead style={{ fontSize: '18px' }}>
        <tr>
          <th scope="col">Webmaster Task</th>
          <th scope="col">Description</th>
          <th scope="col">Date of Completion</th>
        </tr>
      </thead>
      <tbody style={{ fontSize: '14px' }}>
        <tr>
          <th scope="row">Reorganize Wiki</th>
          <td>Reorganize main page for easier access</td>
          <td>4/19/2022</td>
        </tr>
        <tr>
          <th scope="row">Clean up pages</th>
          <td>Go through each page and make pages look cleaner</td>
          <td>5/3/2022</td>
        </tr>
        <tr>
          <th scope="row">Transfer Wiki Data</th>
          <td>Transfer data from old wiki to new wiki</td>
          <td>10/10/2022</td>
        </tr>
        <tr>
          <th scope="row">Create skeleton web page for wiki</th>
          <td>Create an actual web page for SCADA Lab</td>
          <td>11/15/2022</td>
        </tr>
        <tr>
          <th scope="row">Clone personal repo to SCADA account</th>
          <td>Transfer site to SCADA github account</td>
          <td>-</td>
        </tr>
        <tr>
          <th scope="row">Finish SEL link pages</th>
          <td>-</td>
          <td>11/17/2022</td>
        </tr>
        <tr>
          <th scope="row">Create pages for each equipment</th>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <th scope="row">Create pages for each configuration</th>
          <td>-</td>
          <td>-</td>
        </tr>
      </tbody>
    </Table>
    <Table striped>
      <thead style={{ fontSize: '18px' }}>
        <th scope="col">RF Task</th>
        <th scope="col">Description</th>
        <th scope="col">Date of Completion</th>
      </thead>
      <tbody style={{ fontSize: '14px' }}>
        <tr>
          <th scope="row">Task</th>
          <td>-</td>
          <td>-</td>
        </tr>
      </tbody>
    </Table>
    <Table striped>
      <thead style={{ fontSize: '18px' }}>
        <th scope="col">SEL Task</th>
        <th scope="col">Description</th>
        <th scope="col">Date of Completion</th>
      </thead>
      <tbody style={{ fontSize: '14px' }}>
        <tr>
          <th scope="row">Task</th>
          <td>-</td>
          <td>-</td>
        </tr>
      </tbody>
    </Table>
    <Table striped>
      <thead style={{ fontSize: '18px' }}>
        <tr>
          <th scope="col">sFlow Task</th>
          <th scope="col">Description</th>
          <th scope="col">Date of Completion</th>
        </tr>
      </thead>
      <tbody style={{ fontSize: '14px' }}>
        <tr>
          <th scope="row">Task</th>
          <td>-</td>
          <td>-</td>
        </tr>
      </tbody>
    </Table>
    <Table striped>
      <thead style={{ fontSize: '18px' }}>
        <tr>
          <th scope="col">SDN Task</th>
          <th scope="col">Description</th>
          <th scope="col">Date of Completion</th>
        </tr>
      </thead>
      <tbody style={{ fontSize: '14px' }}>
        <tr>
          <th scope="row">RESTful API</th>
          <td>Need a way to connect the data from the photocell sensor to the SDN controller Ryu</td>
          <td>10/04/2022</td>
        </tr>
        <tr>
          <th scope="row">Control Panel</th>
          <td>Create a physical control panel to allow a human to access the live controller</td>
          <td>-</td>
        </tr>
        <tr>
          <th scope="row">Tagged Traffic</th>
          <td>Tagged traffic is not handled (well) by the current program, need to find a better solution</td>
          <td>-</td>
        </tr>
        <tr>
          <th scope="row">Remove Flows</th>
          <td>Create a solution to remove flows stored in the switch</td>
          <td>9/20/2022</td>
        </tr>
        <tr>
          <th scope="row">Parsing Packets</th>
          <td>Parse more information from each flow request (packet) the controller encounters</td>
          <td>-</td>
        </tr>
        <tr>
          <th scope="row">Control Local Switch</th>
          <td>Configure Ryu to control both remote and local switches</td>
          <td>-</td>
        </tr>
      </tbody>
    </Table>
    <Table striped>
      <thead style={{ fontSize: '18px' }}>
        <tr>
          <th scope="col">ML/NN Task</th>
          <th scope="col">Description</th>
          <th scope="col">Date of Completion</th>
        </tr>
      </thead>
      <tbody style={{ fontSize: '14px' }}>
        <tr>
          <th scope="row">Task</th>
          <td>-</td>
          <td>-</td>
        </tr>
      </tbody>
    </Table>
    <Table striped>
      <thead style={{ fontSize: '18px' }}>
        <tr>
          <th scope="col">SCADA Cam Task</th>
          <th scope="col">Description</th>
          <th scope="col">Date of Completion</th>
        </tr>
      </thead>
      <tbody style={{ fontSize: '14px' }}>
        <tr>
          <th scope="row">Get Camera Working</th>
          <td>Research and figure out how to set up camera</td>
          <td>4/5/2022</td>
        </tr>
        <tr>
          <th scope="row">EntraNet</th>
          <td>Verify that it can send video over the EntraNet wireless link</td>
          <td>-</td>
        </tr>
        <tr>
          <th scope="row">Lab Computers</th>
          <td>Download AMCREST View Software to SCADA Lab Computers</td>
          <td>-</td>
        </tr>
      </tbody>
    </Table>
  </Container>
);

export default ToDoList;
