import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Offcanvas, Table } from 'react-bootstrap';

const WLWN530H4 = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <span>
      <Link to="" onClick={handleShow}>WL-WN530H4</Link>

      <Offcanvas show={show} onHide={handleClose} style={{ maxWidth: '800px', width: '100%' }}>
        <Offcanvas.Header closeButton>
          <h1>WL-WN530H4</h1>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <h3>Wavlink Router</h3>
          <p>Product Summary: Complies with IEEE 802.11ac standard, Aerial G upgrades your network to the next generation of Wi-Fi. With combined wireless speeds of up to 1200Mbps, the device provides excellent speeds and superior wireless range, allowing you to enjoy streaming HD video and lag-free online gaming with ease.</p>
          <Table striped bordered>
            <thead>
              <tr>
                <th colSpan="2">Device Information</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Model #</th>
                <td>WL-WN530H4</td>
              </tr>
              <tr>
                <th>Name</th>
                <td>Wavlink</td>
              </tr>
              <tr>
                <th>IP</th>
                <td>10.1.1.1/24</td>
              </tr>
              <tr>
                <th>MAC</th>
                <td>80:3f:5d:f4:40:b9</td>
              </tr>
            </tbody>
          </Table>
          <h3>Device Links</h3>
          <ul>
            <li><a href="https://www.wavlink.com/en_us/index.html" target="_blank" rel="noreferrer">Manufacturer&apos;s Website</a></li>
            <li><a href="https://www.wavlink.com/en_us/product/WL-WN530H4.html" target="_blank" rel="noreferrer">Product</a></li>
            <li><a href="/pdfs/WN530H4-Manual.pdf" target="_blank" rel="noreferrer">Manual</a></li>
          </ul>
          <h3>Network Configuration</h3>
          <Table striped bordered>
            <thead>
              <tr>
                <th colSpan="2">Device Information</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>WAN Type</th>
                <td>Router (DHCP)</td>
              </tr>
              <tr>
                <th>WAN IP</th>
                <td>192.168.1.103</td>
              </tr>
              <tr>
                <th>WAN MAC</th>
                <td>80:3f:5d:f4:f0:b9</td>
              </tr>
              <tr>
                <th>Device IP</th>
                <td>10.1.1.1</td>
              </tr>
              <tr>
                <th>Version</th>
                <td>M30H4,V5030.190403</td>
              </tr>
            </tbody>
          </Table>
          <Table striped bordered>
            <thead>
              <tr>
                <th colSpan="2">Setup Information</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>WAN Type</th>
                <td>DHCP</td>
              </tr>
              <tr>
                <th>DNS</th>
                <td>Automatic</td>
              </tr>
              <tr>
                <th>DDNS</th>
                <td>Off</td>
              </tr>
            </tbody>
          </Table>
          <Table striped bordered>
            <thead>
              <tr>
                <th colSpan="5">Wifi Configuration</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Wifi</th>
                <td>Hidden</td>
                <td>SSID</td>
                <td>Security Type</td>
                <td>Password</td>
              </tr>
              <tr>
                <th>2.4G</th>
                <td>No</td>
                <td>SCADA-2.4G</td>
                <td>WPA2-PSK</td>
                <td>Sc@d@21!</td>
              </tr>
              <tr>
                <th>5G</th>
                <td>No</td>
                <td>SCADA-2.4G</td>
                <td>WPA2-PSK</td>
                <td>Sc@d@21!</td>
              </tr>
            </tbody>
          </Table>
          <Table striped bordered>
            <thead>
              <tr>
                <th colSpan="2">DHCP Configuration</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>DHCP Range</th>
                <td>10.1.1.100 to 10.1.1.200</td>
              </tr>
              <tr>
                <th>Subnet Mask</th>
                <td>255.255.255.0</td>
              </tr>
              <tr>
                <th>Gateway</th>
                <td>192.168.1.1</td>
              </tr>
              <tr>
                <th>DHCP Lease Time</th>
                <td>1 year</td>
              </tr>
            </tbody>
          </Table>
          <h3>Configuring Router</h3>
          <ul>
            <li>Join network via Wifi or Ethernet</li>
            <li>Put IP address bar (10.1.1.1)</li>
            <li>Login with password: Sc@d@21!</li>
          </ul>
          <h3>Network Map</h3>
          <ul>
            <li>Only accounts with UH Emails may access</li>
            <li>
              <a href="https://docs.google.com/drawings/d/1Jd3nHqqYbsNkVwAQvhZ5zCrwgf0yuxxAtxjIsT0l_fY/edit">Network Map</a>
            </li>
          </ul>
          <h3>Switch Ports/VLANs</h3>
          <ul>
            <li>Only accounts with UH Emails may access</li>
            <li>
              <a href="https://docs.google.com/spreadsheets/d/1fkD1ihLW496p8tQhlRT4OwzG7a3ZOo4inUt4FP8itMg/edit#gid=0">Switch Ports/IPs/VLANs</a>
            </li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </span>
  );
};

export default WLWN530H4;
