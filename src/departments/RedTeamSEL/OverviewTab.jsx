import React from 'react';
import { Table } from 'react-bootstrap';

const OverviewTab = () => (
  <span>
    <p>This page will provide a detailed layout of how to configure each SEL device, how they will be synchronously operated, as well as a specification table of the wiring configuration for the DL 205</p>
    <h3>Check connections/ports using nmap (also alt to ssh using port 414: https)</h3>
    <Table>
      <thead>
        <tr>
          <th colSpan="2">Connection Check via NMAP</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>RTAC SEL 3505 Connection Check(Troubleshooting via NMAP)</th>
          <td><a href="DepartmentPages/Sel/rtac-sel3505-connection.html">Link</a></td>
        </tr>
        <tr>
          <th>NMAP</th>
          <td><a href="https://nmap.org/download.html">www.nmap.org</a></td>
        </tr>
      </tbody>
    </Table>
  </span>
);

export default OverviewTab;
