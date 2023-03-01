import React from 'react';
import { Container, Table } from 'react-bootstrap';

const Team = () => (
  <Container className="py-3">
    <h1>In-Class Work Teams</h1>
    <p style={{ fontSize: '18px' }}>
      This table displays the members and the jobs they are responsible for.
    </p>
    <Table striped responsive="xl">
      <thead>
        <tr>
          <th colSpan="11" style={{ fontSize: '24px' }}>Operations</th>
          <th colSpan="2" style={{ fontSize: '20px', verticalAlign: 'bottom' }}>Director: John</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th />
          <td width="7%">Eliya<br />(R4)</td>
          <td width="7%">Cam<br />(R4)</td>
          <td width="7%">Bodie<br />(R4)</td>
          <td width="7%">Justin<br />(R4)</td>
          <td width="7%">Daniel<br />(R4)</td>
          <td width="7%">Andee<br />(R4)</td>
          <td width="7%">John<br />(R4)</td>
          <td width="7%">Chase<br />(R4)</td>
          <td width="7%">Arthur<br />(4)</td>
          <td width="7%">Edward<br />(4)</td>
          <td width="7%">Joshua<br />(3)</td>
          <td width="7%">AJ<br />(3)</td>
        </tr>
        <tr>
          <th>Network</th>
          <td>-</td>
          <td>Assistant</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>Lead</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>Assistant</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <th>System Admin</th>
          <td>Assistant</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>Lead</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>Assistant</td>
          <td>-</td>
          <td>Assistant</td>
          <td>-</td>
        </tr>
        <tr>
          <th>Knowledge Management</th>
          <td>Lead</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>Assistant</td>
          <td>-</td>
          <td>-</td>
          <td>Assistant</td>
        </tr>
        <tr>
          <th>SNMP/NOC</th>
          <td>-</td>
          <td>Lead</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>Assistant</td>
        </tr>
        <tr>
          <th>sFlow & SDN</th>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>Assistant</td>
          <td>-</td>
          <td>Lead</td>
          <td>-</td>
          <td>-</td>
          <td>Assistant</td>
          <td>-</td>
        </tr>
      </tbody>
    </Table>
    <Table striped responsive="xl">
      <thead>
        <tr>
          <th colSpan="11" style={{ fontSize: '24px' }}>Research</th>
          <th colSpan="2" style={{ fontSize: '20px', verticalAlign: 'bottom' }}>Director: Justin</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th />
          <td width="7%">Eliya<br />(R4)</td>
          <td width="7%">Cam<br />(R4)</td>
          <td width="7%">Bodie<br />(R4)</td>
          <td width="7%">Justin<br />(R4)</td>
          <td width="7%">Daniel<br />(R4)</td>
          <td width="7%">Andee<br />(R4)</td>
          <td width="7%">John<br />(R4)</td>
          <td width="7%">Chase<br />(R4)</td>
          <td width="7%">Arthur<br />(4)</td>
          <td width="7%">Edward<br />(4)</td>
          <td width="7%">Joshua<br />(3)</td>
          <td width="7%">AJ<br />(3)</td>
        </tr>
        <tr>
          <th>ML Curriculum</th>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>Lead</td>
          <td>Assistant</td>
          <td>-</td>
          <td>Assistant</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <th>HCI</th>
          <td>-</td>
          <td>-</td>
          <td>Lead</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>Assistant</td>
          <td>Assistant</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <th>Database</th>
          <td>-</td>
          <td>-</td>
          <td>Lead</td>
          <td>Assistant</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <th>Red Team/SEL</th>
          <td>-</td>
          <td>Assistant</td>
          <td>-</td>
          <td>Lead</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>Assistant</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <th>Log Stash</th>
          <td>-</td>
          <td>-</td>
          <td>Assistant</td>
          <td>-</td>
          <td>-</td>
          <td>Lead</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>Assistant</td>
          <td>Assistant</td>
        </tr>
      </tbody>
    </Table>
  </Container>
);

export default Team;
