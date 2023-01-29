import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Offcanvas } from 'react-bootstrap';

const HP2520G8PoE = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <span>
      <Link to="" onClick={handleShow}>HP 2520G-8-PoE</Link>

      <Offcanvas show={show} onHide={handleClose} style={{ maxWidth: '800px', width: '100%' }}>
        <Offcanvas.Header closeButton>
          <h1>HP 2520G-8-PoE</h1>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <h3>HP Network Switch</h3>
          <p>Product Summary: A 10-port network switch.</p>
        </Offcanvas.Body>
      </Offcanvas>
    </span>
  );
};

export default HP2520G8PoE;
