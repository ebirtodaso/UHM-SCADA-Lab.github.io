import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

/* The Footer appears at the bottom of every page. Rendered by the App Layout component. */
const Footer = () => (
  <footer className="py-3 bg-light" >
    <Container>
      <Row>
        <Col>
          <a className="pe-3" href="https://manoa.hawaii.edu/">
            <img src="./images/UHM_Seal.png" width="100px" alt="UHM Seal"></img>
          </a>
          <a href="https://ee.hawaii.edu/home/">
            <img src="./images/COE_Seal.svg" width="100px" alt="COE Seal"></img>
          </a>
        </Col>
        <Col className="text-white">
          University of Hawaiʻi at Mānoa <br/>
          2500 Campus Road <br/>
          Honolulu, HI 96822 <br/>
          (808) 956-8111
        </Col>
        <Col className="text-white">
          SCADA Lab 2023
          <br/>
          <a href="https://github.com/UHM-SCADA-Lab/UHM-SCADA-Lab.github.io">Github</a>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
