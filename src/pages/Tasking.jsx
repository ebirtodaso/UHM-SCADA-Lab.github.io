import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row, Table } from 'react-bootstrap';

const Tasking = () => (
  <Container className="py-3">
    <h1>Tasking</h1>
    <p>We have set up GitHub project pages for each department. This allows us to efficiently organize the various tasks we have within each department and indicate its current status (Todo, In Progress, or Done).</p>
    <Row className="justify-content-center">
      <Col lg={10}>
        <Table striped bordered>
          <thead>
            <tr>
              <th width="50%">Operations</th>
              <th>Research</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><Link to="https://github.com/orgs/UHM-SCADA-Lab/projects/3" target="_blank" rel="noreferrer">Network</Link></td>
              <td><Link to="https://github.com/orgs/UHM-SCADA-Lab/projects/6" target="_blank" rel="noreferrer">ML Curricula</Link></td>
            </tr>
            <tr>
              <td><Link to="https://github.com/orgs/UHM-SCADA-Lab/projects/2" target="_blank" rel="noreferrer">System Admin</Link></td>
              <td><Link to="https://github.com/orgs/UHM-SCADA-Lab/projects/7" target="_blank" rel="noreferrer">HCI</Link></td>
            </tr>
            <tr>
              <td><Link to="https://github.com/orgs/UHM-SCADA-Lab/projects/1" target="_blank" rel="noreferrer">Knowledge Management</Link></td>
              <td><Link to="https://github.com/orgs/UHM-SCADA-Lab/projects/8" target="_blank" rel="noreferrer">Database</Link></td>
            </tr>
            <tr>
              <td><Link to="https://github.com/orgs/UHM-SCADA-Lab/projects/4" target="_blank" rel="noreferrer">SNMP/NOC</Link></td>
              <td><Link to="https://github.com/orgs/UHM-SCADA-Lab/projects/9" target="_blank" rel="noreferrer">Red Team/SEL</Link></td>
            </tr>
            <tr>
              <td><Link to="https://github.com/orgs/UHM-SCADA-Lab/projects/5" target="_blank" rel="noreferrer">sFlow & SDN</Link></td>
              <td><Link to="https://github.com/orgs/UHM-SCADA-Lab/projects/10" target="_blank" rel="noreferrer">Logstash</Link></td>
            </tr>
          </tbody>
        </Table>
      </Col>
    </Row>
  </Container>
);

export default Tasking;
