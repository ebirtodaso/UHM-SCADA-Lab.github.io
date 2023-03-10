import React from 'react';
import { Badge, Col, Container, Row } from 'react-bootstrap';

const Legacy = () => (
  <Container id="legacy" className="py-3">
    <h1>Legacy</h1>
    <p>
      Work done by earlier semesters that is still relevant but is not one of our current lines of effort.
    </p>
    <Row>
      <Col className="text-center py-4">
        <a href="/rf">
          <img src="/images/Departments/RF.png" alt="RF Department" />
          <h1><Badge bg="secondary">Radio Frequency</Badge></h1>
        </a>
      </Col>
    </Row>
  </Container>
);

export default Legacy;
