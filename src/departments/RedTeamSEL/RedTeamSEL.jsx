import React from 'react';
import { Col, Container, Row, Tab, Table, Tabs } from 'react-bootstrap';
import OverviewTab from './OverviewTab';

const RedTeamSEL = () => (
  <Container className="py-3">
    <h1>Red Team/SEL</h1>
    <Row className="justify-content-center">
      <Col lg={8}>
        <h3>Relevant Devices</h3>
        <Table striped bordered>
          <thead style={{ fontSize: '18px' }}>
            <tr>
              <th>Device</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody style={{ fontSize: '14px' }}>
            <tr>
              <th>RTAC SEL-3505</th>
              <td>Test</td>
            </tr>
            <tr>
              <th>SEL-451</th>
              <td>Test</td>
            </tr>
            <tr>
              <th>SEL 311B</th>
              <td>Test</td>
            </tr>
            <tr>
              <th>DL 205</th>
              <td>Test</td>
            </tr>
          </tbody>
        </Table>
      </Col>
    </Row>
    <Tabs defaultActiveKey="overview">
      <Tab eventKey="overview" title="Overview" className="py-4">
        <OverviewTab />
      </Tab>
    </Tabs>
  </Container>
);

export default RedTeamSEL;
