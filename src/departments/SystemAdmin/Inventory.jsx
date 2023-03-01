import React from 'react';
import { Table } from 'react-bootstrap';

const Inventory = () => (
  <span>
    <Table striped bordered responsive="xl">
      <thead style={{ fontSize: '16px' }}>
        <tr>
          <th />
          <th>Name</th>
          <th>Host Name</th>
          <th>Username</th>
          <th>Password</th>
          <th>IP Address</th>
          <th>MAC Address</th>
          <th>OS Type</th>
          <th>Team</th>
          <th>Location</th>
          <th>Last Updated</th>
          <th>Other Notes</th>
          <th>Software Installed</th>
        </tr>
      </thead>
      <tbody style={{ fontSize: '12px' }}>
        <tr>
          <th>1</th>
          <td>PI-11</td>
          <td>Local Monitoring</td>
          <td>pi</td>
          <td>Sc@d@21!</td>
          <td>
            <ul>
              <li>VLAN 1:10.1.1.124</li>
            </ul>
          </td>
          <td>b8:27:eb:68:d0:5f</td>
          <td>GUI</td>
          <td>NET</td>
          <td>Local</td>
          <td>September 2022</td>
          <td>(Local) Monitoring Network Traffic (via Wireshark)</td>
          <td>dnsutils vlan vim net-tools nmap wireshark</td>
        </tr>
        <tr>
          <th>2</th>
          <td>PI-10</td>
          <td>Remote Monitoring</td>
          <td>pi</td>
          <td>Sc@d@21!</td>
          <td>
            <ul>
              <li>VLAN1:10.1.1.163</li>
            </ul>
          </td>
          <td>b8:27:eb:b5:37:bf</td>
          <td>GUI</td>
          <td>NET</td>
          <td>Remote</td>
          <td>November 2022</td>
          <td>(Remote) Monitoring Network Traffic (via Wireshark)</td>
          <td>dnsutils vlan vim net-tools nmap wireshark</td>
        </tr>
        <tr>
          <th>3</th>
          <td>PI-12</td>
          <td>SDN Test-Remote</td>
          <td>pi</td>
          <td>Sc@d@21!</td>
          <td>
            <ul>
              <li>VLAN 3: 10.1.44.4</li>
            </ul>
          </td>
          <td>b8:27:eb:3c:2d:60</td>
          <td>Console</td>
          <td>SDN</td>
          <td>Remote</td>
          <td>September 2022</td>
          <td>SDN Test for Remote</td>
          <td>dnsutils vlan vim net-tools nmap wireshark</td>
        </tr>
        <tr>
          <th>4</th>
          <td>PI-16</td>
          <td>SDN Test-Local</td>
          <td>pi</td>
          <td>Sc@d@21!</td>
          <td>
            <ul>
              <li>VLAN 3: 10.1.44.3</li>
            </ul>
          </td>
          <td>b8:27:eb:b1:14:18</td>
          <td>Console</td>
          <td>SDN</td>
          <td>Local</td>
          <td>November 2022</td>
          <td>SDN Test for Local</td>
          <td>dnsutils vlan vim net-tools nmap wireshark</td>
        </tr>
        <tr>
          <th>5</th>
          <td>PI-07</td>
          <td>Photo</td>
          <td>pi</td>
          <td>Sc@d@21!</td>
          <td>
            <ul>
              <li>VLAN 2: 10.1.88.5</li>
            </ul>
          </td>
          <td>b8:27:eb:c5:9d:ba</td>
          <td>Console</td>
          <td>SDN</td>
          <td>Remote</td>
          <td>September 2022</td>
          <td>Photocell Pi</td>
          <td>dnsutils vlan vim net-tools nmap wireshark, python 3, pip,flask(X)</td>
        </tr>
        <tr>
          <th>6</th>
          <td>PI-14</td>
          <td>Servers</td>
          <td>pi</td>
          <td>Sc@d@21!</td>
          <td>
            <ul>
              <li>VLAN 1: 10.1.1.112</li>
              <li>VLAN 2: 10.1.88.10</li>
              <li>VLAN 3: 10.1.44.1</li>
            </ul>
          </td>
          <td>b8:27:eb:ab:72:84</td>
          <td>Console</td>
          <td>SYS</td>
          <td>Local</td>
          <td>September 2022</td>
          <td>DHCP and DNS Server</td>
          <td>dnsutils vlan vim net-tools nmap wireshark, bind9(X)</td>
        </tr>
        <tr>
          <th>7</th>
          <td>PI-01</td>
          <td>RYU</td>
          <td>pi</td>
          <td>Sc@d@21!</td>
          <td>
            <ul>
              <li>VLAN 1: 10.1.1.120</li>
              <li>VLAN 2: 10.1.88.3</li>
            </ul>
          </td>
          <td>b8:27:eb:c3:ee:71</td>
          <td>GUI</td>
          <td>SDN</td>
          <td>Local</td>
          <td>September 2022</td>
          <td>Ryu SDN</td>
          <td>dnsutils vlan vim net-tools nmap wireshark python 3, ryu</td>
        </tr>
        <tr>
          <th>8</th>
          <td>PI-25</td>
          <td>sFlow-Collector-GUI</td>
          <td>pi</td>
          <td>Sc@d@21!</td>
          <td>
            <ul>
              <li>VLAN 1: 10.1.1.161</li>
            </ul>
          </td>
          <td>b8:27:eb:03:84:8e</td>
          <td>GUI</td>
          <td>sFlow</td>
          <td>Remote</td>
          <td>September 2022</td>
          <td>sFlow Collector (GUI)</td>
          <td>dnsutils vlan vim net-tools nmap wireshark , sFlowTrend-unix, sFlowTrend-linux, java(X)</td>
        </tr>
        <tr>
          <th>9</th>
          <td>PI-24</td>
          <td>sFlow-Collector</td>
          <td>pi</td>
          <td>Sc@d@21!</td>
          <td>
            <ul>
              <li>VLAN 1: 10.1.1.6</li>
            </ul>
          </td>
          <td>b8:27:eb:eb:08:18</td>
          <td>Console</td>
          <td>sFlow</td>
          <td>Remote</td>
          <td>September 2022</td>
          <td>sFlow Collector (Console)</td>
          <td>dnsutils vlan vim net-tools nmap wireshark, git, pip, tcpdump(X)</td>
        </tr>
        <tr>
          <th>10</th>
          <td>PI-22</td>
          <td>Camera</td>
          <td>pi</td>
          <td>Sc@d@21!</td>
          <td>
            <ul>
              <li>VLAN 1: 10.1.1.199</li>
            </ul>
          </td>
          <td>b8:27:eb:94:9f:d6</td>
          <td>GUI</td>
          <td>RF</td>
          <td>Remote</td>
          <td>September 2022</td>
          <td>Camera</td>
          <td>dnsutils vlan vim net-tools nmap wireshark, P2PSurveillance, vim, StartCamera(X)</td>
        </tr>
        <tr>
          <th>11</th>
          <td>PI-03</td>
          <td>DHCP</td>
          <td>pi</td>
          <td>Sc@d@21!</td>
          <td>
            <ul>
              <li>VLAN 1: 10.1.1.9</li>
              <li>VLAN 2: 10.1.88.9</li>
              <li>VLAN 3: 10.1.44.9</li>
              <li>VLAN 1: 10.1.66.9</li>
            </ul>
          </td>
          <td>b8:27:eb:37:4f:35</td>
          <td>Console</td>
          <td>SYS</td>
          <td>Professor</td>
          <td>September 2022</td>
          <td>Needs to finish installing programs</td>
          <td>-</td>
        </tr>
        <tr>
          <th>12</th>
          <td>PI-04</td>
          <td>panic-button</td>
          <td>pi</td>
          <td>Sc@d@21!</td>
          <td>
            <ul>
              <li>VLAN 1: 10.1.66.150</li>
            </ul>
          </td>
          <td>b8:27:eb:68:2d:a8</td>
          <td>Console</td>
          <td>SDN</td>
          <td>Remote</td>
          <td>December 2022</td>
          <td>For panic button</td>
          <td>ndnsutils vlan vim net-tools nmap wireshark(X)</td>
        </tr>
        <tr>
          <th>13</th>
          <td>PI-02</td>
          <td>Network-Operations</td>
          <td>pi</td>
          <td>Sc@d@21!</td>
          <td>
            <ul>
              <li>VLAN 1: 10.1.1.7</li>
              <li>VLAN 2: 10.1.88.7</li>
              <li>VLAN 3: 10.1.44.7</li>
              <li>VLAN 4: 10.1.66.7</li>
            </ul>
          </td>
          <td>b8:27:eb:56:1c:61</td>
          <td>GUI</td>
          <td>SYS</td>
          <td>Local</td>
          <td>September 2022</td>
          <td>Used to monitor zero-trust data sources, and sys-log server</td>
          <td>dnsutils vlan vim net-tools nmap wireshark, rpi-imager, vlan(X)</td>
        </tr>
        <tr>
          <th>14</th>
          <td>PI-20</td>
          <td>Neural-Network</td>
          <td>pi</td>
          <td>Sc@d@21!</td>
          <td>
            <ul>
              <li>VLAN1: 10.1.1.136(DHCP)</li>
            </ul>
          </td>
          <td>b8:27:eb:59:d1:f6</td>
          <td>GUI</td>
          <td>ML/NN</td>
          <td>Local</td>
          <td>September 2022</td>
          <td>ML/NN testing pi</td>
          <td>dnsutils vlan vim net-tools nmap wireshark(X)</td>
        </tr>
        <tr>
          <th>15</th>
          <td>PI-19</td>
          <td>Elastic Database</td>
          <td>pi</td>
          <td>Sc@d@21!</td>
          <td>
            <ul>
              <li>VLAN 1: 10.1.1.133</li>
            </ul>
          </td>
          <td>b8:27:49:73:a7</td>
          <td>GUI</td>
          <td>DBA</td>
          <td>Remote</td>
          <td>November 2022</td>
          <td>Database for IP address</td>
          <td>dnsutils vlan vim net-tools nmap wireshark</td>
        </tr>
        <tr>
          <th>16</th>
          <td>PI-15</td>
          <td>nems</td>
          <td>scadanems</td>
          <td>Sc@d@21!</td>
          <td>
            <ul>
              <li>VLAN: 10.1.1.100</li>
            </ul>
          </td>
          <td>b8:27:eb:e2:56:31</td>
          <td>NEMS Linux</td>
          <td>NET</td>
          <td>Local</td>
          <td>November 2022</td>
          <td>Monitoring logs</td>
          <td>(X)</td>
        </tr>
      </tbody>
    </Table>
  </span>
);

export default Inventory;
