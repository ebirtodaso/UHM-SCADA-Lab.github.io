import React from 'react';
import { Container, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ToDoList = () => (
  <Container className="py-3">
    <h1>To-Do List (archive)</h1>
    <p><strong>This page is not currently maintained. View the <Link to="https://uhm-scada-lab.github.io/#/tasking">Tasking</Link> page to view the most up-to-date tasks for each department.</strong></p>
    <p>
      This page is for monitoring and prioritizing tasks for our SCADA system. Please use dates, either when the task should be finished, or when the task was started. Please try and keep this up-to-date as much as possible.
    </p>
    <Table striped bordered>
      <thead>
        <tr>
          <th width="25%">SCADA System Task</th>
          <th width="55%">Description</th>
          <th width="20%">Date of Completion</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Integrate SEL Components</td>
          <td>Install 3505,451,311B to switch</td>
          <td>3/24/2022</td>
        </tr>
        <tr>
          <td>Modify Network to SDN</td>
          <td>Choose an SDN network to use for the System</td>
          <td>-</td>
        </tr>
        <tr>
          <td>Connect All Devices</td>
          <td>Incorporate DL205 Security Device, and PI DNS Server</td>
          <td>2/15/2022</td>
        </tr>
        <tr>
          <td>Install Antenna</td>
          <td>Gain Holmes Roof Access and install Gateway and AP antenna</td>
          <td>-</td>
        </tr>
        <tr>
          <td>Move SCADA to side</td>
          <td>SCADA System will be relocated and accessed wirelessly</td>
          <td>-</td>
        </tr>
        <tr>
          <td>Put room-light sensor on the remote side of the network</td>
          <td>-</td>
          <td>10/04/2022</td>
        </tr>
        <tr>
          <td>Make room-light sensor web-facing, Restful API</td>
          <td>-</td>
          <td>10/04/2022</td>
        </tr>
        <tr>
          <td>Stand up a knife-switch in the datacenter with a Restful API</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td>Get sFlow going on the remote switch</td>
          <td>-</td>
          <td>-</td>
        </tr>
      </tbody>
    </Table>
    <Table striped bordered>
      <thead>
        <tr>
          <th width="25%">Network Admin Task</th>
          <th width="55%">Description</th>
          <th width="20%">Date of Completion</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Switch Swap</td>
          <td>Upgrade 2520G-8-PoE switch to a rate-limiting capable switch.</td>
          <td>Fall 2022</td>
        </tr>
        <tr>
          <td>Task</td>
          <td>-</td>
          <td>-</td>
        </tr>
      </tbody>
    </Table>
    <Table striped bordered>
      <thead>
        <tr>
          <th width="25%">Linux System Admin Task</th>
          <th width="55%">Description</th>
          <th width="20%">Date of Completion</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Setup DNS Server</td>
          <td>Get Bind9 and configure it to be the authoritative DNS server for the domain SCADA lab</td>
          <td>3/7/2022</td>
        </tr>
        <tr>
          <td>Setup DHCP reservation system</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td>Wiki Update</td>
          <td>Log the changes made in order to set up the DNS server</td>
          <td>3/17/2022</td>
        </tr>
        <tr>
          <td>Syslog Server</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td>Audit System</td>
          <td>Figure out where we left off and bring pi&apos;s up to date</td>
          <td>10/42022</td>
        </tr>
        <tr>
          <td>Master OS</td>
          <td>Create a master copy of the OS that has our configuration and updates</td>
          <td>-</td>
        </tr>
        <tr>
          <td>Task</td>
          <td>-</td>
          <td>-</td>
        </tr>
      </tbody>
    </Table>
    <Table striped bordered>
      <thead>
        <tr>
          <th width="25%">Webmaster Task</th>
          <th width="55%">Description</th>
          <th width="20%">Date of Completion</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Reorganize Wiki</td>
          <td>Reorganize main page for easier access</td>
          <td>4/19/2022</td>
        </tr>
        <tr>
          <td>Clean up pages</td>
          <td>Go through each page and make pages look cleaner</td>
          <td>5/3/2022</td>
        </tr>
        <tr>
          <td>Transfer Wiki Data</td>
          <td>Transfer data from old wiki to new wiki</td>
          <td>10/10/2022</td>
        </tr>
        <tr>
          <td>Create skeleton web page for wiki</td>
          <td>Create an actual web page for SCADA Lab</td>
          <td>11/15/2022</td>
        </tr>
        <tr>
          <td>Clone personal repo to SCADA account</td>
          <td>Transfer site to SCADA github account</td>
          <td>-</td>
        </tr>
        <tr>
          <td>Finish SEL link pages</td>
          <td>-</td>
          <td>11/17/2022</td>
        </tr>
        <tr>
          <td>Create pages for each equipment</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td>Create pages for each configuration</td>
          <td>-</td>
          <td>-</td>
        </tr>
      </tbody>
    </Table>
    <Table striped bordered>
      <thead>
        <tr>
          <th width="25%">RF Task</th>
          <th width="55%">Description</th>
          <th width="20%">Date of Completion</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Task</td>
          <td>-</td>
          <td>-</td>
        </tr>
      </tbody>
    </Table>
    <Table striped bordered>
      <thead>
        <tr>
          <th width="25%">SEL Task</th>
          <th width="55%">Description</th>
          <th width="20%">Date of Completion</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Task</td>
          <td>-</td>
          <td>-</td>
        </tr>
      </tbody>
    </Table>
    <Table striped bordered>
      <thead>
        <tr>
          <th width="25%">sFlow Task</th>
          <th width="55%">Description</th>
          <th width="20%">Date of Completion</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Task</td>
          <td>-</td>
          <td>-</td>
        </tr>
      </tbody>
    </Table>
    <Table striped bordered>
      <thead>
        <tr>
          <th width="25%">SDN Task</th>
          <th width="55%">Description</th>
          <th width="20%">Date of Completion</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>RESTful API</td>
          <td>Need a way to connect the data from the photocell sensor to the SDN controller Ryu</td>
          <td>10/04/2022</td>
        </tr>
        <tr>
          <td>Control Panel</td>
          <td>Create a physical control panel to allow a human to access the live controller</td>
          <td>-</td>
        </tr>
        <tr>
          <td>Tagged Traffic</td>
          <td>Tagged traffic is not handled (well) by the current program, need to find a better solution</td>
          <td>-</td>
        </tr>
        <tr>
          <td>Remove Flows</td>
          <td>Create a solution to remove flows stored in the switch</td>
          <td>9/20/2022</td>
        </tr>
        <tr>
          <td>Parsing Packets</td>
          <td>Parse more information from each flow request (packet) the controller encounters</td>
          <td>-</td>
        </tr>
        <tr>
          <td>Control Local Switch</td>
          <td>Configure Ryu to control both remote and local switches</td>
          <td>-</td>
        </tr>
      </tbody>
    </Table>
    <Table striped bordered>
      <thead>
        <tr>
          <th width="25%">ML/NN Task</th>
          <th width="55%">Description</th>
          <th width="20%">Date of Completion</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Task</td>
          <td>-</td>
          <td>-</td>
        </tr>
      </tbody>
    </Table>
    <Table striped bordered>
      <thead>
        <tr>
          <th width="25%">SCADA Cam Task</th>
          <th width="55%">Description</th>
          <th width="20%">Date of Completion</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Get Camera Working</td>
          <td>Research and figure out how to set up camera</td>
          <td>4/5/2022</td>
        </tr>
        <tr>
          <td>EntraNet</td>
          <td>Verify that it can send video over the EntraNet wireless link</td>
          <td>-</td>
        </tr>
        <tr>
          <td>Lab Computers</td>
          <td>Download AMCREST View Software to SCADA Lab Computers</td>
          <td>-</td>
        </tr>
      </tbody>
    </Table>
  </Container>
);

export default ToDoList;
