import { Badge, Col, Container, Row } from 'react-bootstrap';

const Departments = () => (
  <Container id="departments" className="py-3">
    <h1 className="text-center">All Departments</h1>
    <Row>
      <Col className="text-center py-4">
        <a href="/linux">
          <img src="/images/LinuxDepartment.png" alt="Linux Department"/>
          <h1><Badge bg="secondary">Linux System</Badge></h1>
        </a>
      </Col>
      <Col className="text-center py-4">
        <a href="/network">
          <img src="/images/NetworkDepartment.png" alt="Network Department"/>
          <h1><Badge bg="secondary">Network</Badge></h1>
        </a>
      </Col>
    </Row>
    <Row>
      <Col className="text-center py-4">
        <a href="/rf">
          <img src="/images/RFDepartment.png" alt="RF Department"/>
          <h1><Badge bg="secondary">Radio Frequency</Badge></h1>
        </a>
      </Col>
      <Col className="text-center py-4">
        <a href="/webmaster">
          <img src="/images/WebmasterDepartment.png" alt="Webmaster Department"/>
          <h1><Badge bg="secondary">Webmaster</Badge></h1>
        </a>
      </Col>
    </Row>
    <Row>
      <Col className="text-center py-4">
        <a href="/sel">
          <img src="/images/SELDepartment.png" alt="SEL Department"/>
          <h1><Badge bg="secondary">SEL</Badge></h1>
        </a>
      </Col>
      <Col className="text-center py-4">
        <a href="/sFlow">
          <img src="/images/sFlowDepartment.png" alt="sFlow Department"/>
          <h1><Badge bg="secondary">sFlow</Badge></h1>
        </a>
      </Col>
    </Row>
    <Row>
      <Col className="text-center py-4">
        <a href="/sdn">
          <img src="/images/SDNDepartment.png" alt="SDN Department"/>
          <h1><Badge bg="secondary">SDN Controllers</Badge></h1>
        </a>
      </Col>
      <Col className="text-center py-4">
        <a href="/machineLearning">
          <img src="/images/MachineLearningDepartment.png" alt="ML Department"/>
          <h1><Badge bg="secondary">Machine Learning</Badge></h1>
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

export default Departments;
