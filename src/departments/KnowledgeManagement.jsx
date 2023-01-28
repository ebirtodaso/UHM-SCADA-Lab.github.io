import React from 'react';
import { Container } from 'react-bootstrap';

const KnowledgeManagement = () => (
  <Container className="py-3">
    <h1>Knowledge Management</h1>
    <p>We will be using React Bootstrap to build and maintain the SCADA Lab website.</p>
    <h3>Useful Links</h3>
    <ul>
      <li>
        <a href="https://github.com/UHM-SCADA-Lab/UHM-SCADA-Lab.github.io">SCADA Lab Github Repository</a>
      </li>
      <li>
        <a href="https://react-bootstrap.netlify.app">React Bootstrap Documentation</a>
      </li>
      <li>
        <a href="https://www.freecodecamp.org/learn/responsive-web-design/#basic-html-and-html5">freeCodeCamp HTML/CSS Tutorials</a>
      </li>
      <li>
        <a href="https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/#basic-javascript">freeCodeCamp JavaScript Tutorials</a>
      </li>
    </ul>
  </Container>
);

export default KnowledgeManagement;
