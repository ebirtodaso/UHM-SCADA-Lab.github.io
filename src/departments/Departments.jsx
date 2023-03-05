import React from 'react';
import { Badge, Col, Container, Row } from 'react-bootstrap';

const Departments = () => (
  <Container id="departments" className="py-3">
    <h1 className="text-center">Operations Departments</h1>
    <Row>
      <Col className="text-center py-4">
        <a href="/network">
          <img src="/images/Departments/Network.png" alt="Network Department" />
          <h1><Badge bg="secondary">Network</Badge></h1>
        </a>
      </Col>
      <Col className="text-center py-4">
        <a href="/systemAdmin">
          <img src="/images/" alt="System Admin Department" />
          <h1><Badge bg="secondary">System Admin</Badge></h1>
        </a>
      </Col>
    </Row>
    <Row>
      <Col className="text-center py-4">
        <a href="/knowledgeManagement">
          <img src="/images/Departments/KnowledgeManagement.png" alt="Knowledge Management Department" />
          <h1><Badge bg="secondary">Knowledge Management</Badge></h1>
        </a>
      </Col>
      <Col className="text-center py-4">
        <a href="/snmp-noc">
          <img src="/images/" alt="SNMP/NOC Department" />
          <h1><Badge bg="secondary">SNMP/NOC</Badge></h1>
        </a>
      </Col>
    </Row>
    <Row>
      <Col className="text-center py-4">
        <a href="/sFlow-SDN">
          <img src="/images/Departments/SFlow-SDN.png" alt="sFlow/SDN Department" />
          <h1><Badge bg="secondary">sFlow/SDN</Badge></h1>
        </a>
      </Col>
    </Row>
    <h1 className="text-center pt-5">Research Departments</h1>
    <Row>
      <Col className="text-center py-4">
        <a href="/mlCurriculum">
          <img src="/images/Departments/MachineLearning.png" alt="ML Curriculum Department" />
          <h1><Badge bg="secondary">ML Curriculum</Badge></h1>
        </a>
      </Col>
      <Col className="text-center py-4">
        <a href="/hci">
          <img src="/images/" alt="HCI Department" />
          <h1><Badge bg="secondary">HCI</Badge></h1>
        </a>
      </Col>
    </Row>
    <Row>
      <Col className="text-center py-4">
        <a href="/database">
          <img src="/images/" alt="Database Department" />
          <h1><Badge bg="secondary">Database</Badge></h1>
        </a>
      </Col>
      <Col className="text-center py-4">
        <a href="/redTeam-SEL">
          <img src="/images/Departments/RedTeam-SEL.png" alt="Red Team/SEL Department" />
          <h1><Badge bg="secondary">Red Team/SEL</Badge></h1>
        </a>
      </Col>
    </Row>
    <Row>
      <Col className="text-center py-4">
        <a href="/logStash">
          <img src="/images/" alt="Log Stash Department" />
          <h1><Badge bg="secondary">Log Stash</Badge></h1>
        </a>
      </Col>
    </Row>
  </Container>
);

export default Departments;
