import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Discord, Github, Linkedin } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

/* The Footer appears at the bottom of every page. Rendered by the App Layout component. */
const Footer = () => (
  <footer className="py-3 mt-auto bg-light">
    <Container>
      <Row>
        <Col>
          <Link className="pe-3" to="https://manoa.hawaii.edu/">
            <img src="/images/Logos/UHM_Seal.png" width="100px" alt="UHM Seal" />
          </Link>
          <Link to="https://ee.hawaii.edu/home/">
            <img src="/images/Logos/COE_Seal.svg" width="100px" alt="COE Seal" />
          </Link>
        </Col>
        <Col className="text-white">
          University of Hawaiʻi at Mānoa <br />
          2500 Campus Road <br />
          Honolulu, HI 96822 <br />
          (808) 956-8111
        </Col>
        <Col className="text-white">
          SCADA Lab 2023 <hr />
          <Link className="footer-link" to="https://github.com/UHM-SCADA-Lab/UHM-SCADA-Lab.github.io"><Github /></Link>
          <Link className="footer-link" to="https://discord.gg/ptPvf9etBh"><Discord /></Link>
          <Link className="footer-link" to="https://www.linkedin.com/"><Linkedin /></Link>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
