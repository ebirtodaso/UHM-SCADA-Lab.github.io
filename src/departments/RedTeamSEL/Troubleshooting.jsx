import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Offcanvas } from 'react-bootstrap';

const Troubleshooting = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <span>
      <Link to="" onClick={handleShow}>RTAC SEL 3505 Connection Check</Link>

      <Offcanvas show={show} onHide={handleClose} style={{ maxWidth: '800px', width: '100%' }}>
        <Offcanvas.Header closeButton>
          <h1>RTAC SEL 3505 Connection Check</h1>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <h3>Check Connections</h3>
        </Offcanvas.Body>
      </Offcanvas>
    </span>
  );
};

export default Troubleshooting;
