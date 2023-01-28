import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Discord, Github, Linkedin } from 'react-bootstrap-icons';

/* The Footer appears at the bottom of every page. Rendered by the App Layout component. */
const Footer = () => (
  <footer className="py-3 mt-auto bg-light">
    <Container>
      <Row>
        <Col>
          <a className="pe-3" href="https://manoa.hawaii.edu/">
            <img src="/images/UHM_Seal.png" width="100px" alt="UHM Seal" />
          </a>
          <a href="https://ee.hawaii.edu/home/">
            <img src="/images/COE_Seal.svg" width="100px" alt="COE Seal" />
          </a>
        </Col>
        <Col className="text-white">
          University of Hawaiʻi at Mānoa <br />
          2500 Campus Road <br />
          Honolulu, HI 96822 <br />
          (808) 956-8111
        </Col>
        <Col className="text-white">
          SCADA Lab 2023 <hr />
          <a className="footer-link" href="https://github.com/UHM-SCADA-Lab/UHM-SCADA-Lab.github.io"><Github /></a>
          <a className="footer-link" href="https://discord.gg/ptPvf9etBh"><Discord /></a>
          <a className="footer-link" href="https://www.linkedin.com/"><Linkedin /></a>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
