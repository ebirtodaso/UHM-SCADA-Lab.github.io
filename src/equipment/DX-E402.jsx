import React, { useState } from 'react';
import { Offcanvas, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const DXE402 = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <span>
      <Link to="" onClick={handleShow}>DX-E402</Link>

      <Offcanvas show={show} onHide={handleClose} style={{ maxWidth: '800px', width: '100%' }}>
        <Offcanvas.Header closeButton>
          <h1>DX-E402</h1>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <h3>Dynex Router</h3>
          <p>Product Summary: This 4-port Ethernet router lets you easily share a high-speed Internet connection with up to 4 computers on your home or small office network.</p>
          <Table striped bordered>
            <thead>
              <tr>
                <th colSpan="2">Device Information</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Model #</th>
                <td>DX-E402</td>
              </tr>
              <tr>
                <th>Name</th>
                <td>UH Uplink, Holmes 450</td>
              </tr>
              <tr>
                <th>IP</th>
                <td>192.168.1.1/24</td>
              </tr>
              <tr>
                <th>MAC</th>
                <td>00:25:86:f6:ad:ec</td>
              </tr>
            </tbody>
          </Table>
          <h3>Device Links</h3>
          <ul>
            <li><a href="https://www.dynexproducts.com/" target="_blank" rel="noreferrer">Manufacturer&apos;s Website</a></li>
            <li><a href="https://www.dynexproducts.com/pdp/DX-E402/8339283" target="_blank" rel="noreferrer">Product</a></li>
            <li><a href="https://www.192-168-1-1-ip.co/manuals/10040.pdf" target="_blank" rel="noreferrer">Manual</a></li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </span>
  );
};

export default DXE402;
