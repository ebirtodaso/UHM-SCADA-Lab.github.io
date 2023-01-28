import { Badge, Col, Container, Row } from 'react-bootstrap';

const Legacy = () => (
  <Container id="legacy" className="py-3">
    <h1>Legacy</h1>
    <p>
      Work done by earlier semesters that is still relevant but is not one of our current lines of effort.
    </p>
    <h1 className="text-center">Previous Departments</h1>
    <Row>
      <Col className="text-center py-4">
        <a href="/linux">
          <img src="/images/LinuxDepartment.png" alt="Linux Department"/>
          <h1><Badge bg="secondary">Linux System</Badge></h1>
        </a>
      </Col>
      <Col className="text-center py-4">
        <a href="/rf">
          <img src="/images/RFDepartment.png" alt="RF Department"/>
          <h1><Badge bg="secondary">Radio Frequency</Badge></h1>
        </a>
      </Col>
    </Row>
    <Row>
      <Col className="text-center py-4">
        <a href="/panicButton">
          <img src="/images/PanicButtonDepartment.png" alt="Panic Button Department"/>
          <h1><Badge bg="secondary">Panic Button</Badge></h1>
        </a>
      </Col>
    </Row>
  </Container>
);

export default Legacy;
