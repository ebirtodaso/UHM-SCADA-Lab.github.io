import React from 'react';
import { Container, Table } from 'react-bootstrap';

const EquipmentList = () => (
  <Container className="py-3">
    <h1>Equipment</h1>
    <Table striped bordered responsive="xl">
      <thead>
        <tr>
          <th>Device</th>
          <th>Page</th>
          <th>Location</th>
          <th>Input Voltage</th>
          <th>AC</th>
          <th>DC</th>
          <th>SER</th>
          <th>USB</th>
          <th>ETH</th>
          <th>IRIG</th>
          <th>Modbus</th>
          <th>TCP</th>
          <th>DNP3</th>
          <th>I2C</th>
          <th>SPI</th>
          <th>EIA 485</th>
          <th>RS 422</th>
          <th>RS 232</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>entraNET Access Point</td>
          <td><a href="/" className="link-secondary">More Information</a></td>
          <td>HQ</td>
          <td>6-30V</td>
          <td />
          <td>x</td>
          <td />
          <td />
          <td>x</td>
          <td />
          <td />
          <td>x</td>
          <td />
          <td />
          <td />
          <td />
          <td />
          <td />
        </tr>
        <tr>
          <td>Mean Well PS</td>
          <td><a href="/" className="link-secondary">More Information</a></td>
          <td>HQ & SUB</td>
          <td />
          <td />
          <td />
          <td />
          <td />
          <td />
          <td />
          <td />
          <td />
          <td />
          <td />
          <td />
          <td />
          <td />
          <td />
        </tr>
        <tr>
          <td>entraNET Serial Remote</td>
          <td><a href="/" className="link-secondary">More Information</a></td>
          <td>SUB</td>
          <td>6-30V</td>
          <td />
          <td>x</td>
          <td>x</td>
          <td />
          <td />
          <td />
          <td />
          <td />
          <td />
          <td />
          <td />
          <td />
          <td />
          <td>x</td>
        </tr>
        <tr>
          <td>entraNET Dual Remote</td>
          <td><a href="/" className="link-secondary">More Information</a></td>
          <td>SUB</td>
          <td>6-30V</td>
          <td />
          <td>x</td>
          <td>x</td>
          <td />
          <td>x</td>
          <td />
          <td />
          <td />
          <td />
          <td />
          <td />
          <td />
          <td />
          <td>x</td>
        </tr>
        <tr>
          <td>SEL 3505</td>
          <td><a href="/" className="link-secondary">More Information</a></td>
          <td>SUB</td>
          <td>12-24V</td>
          <td />
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td />
          <td>x</td>
          <td />
          <td>x</td>
          <td />
          <td />
          <td />
          <td />
          <td>x</td>
        </tr>
        <tr>
          <td>SEL 311</td>
          <td><a href="/" className="link-secondary">More Information</a></td>
          <td>SUB</td>
          <td>24-250V</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td />
          <td />
          <td>x</td>
          <td />
          <td />
          <td />
          <td />
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td />
        </tr>
        <tr>
          <td>SEL 451</td>
          <td><a href="/" className="link-secondary">More Information</a></td>
          <td>SUB</td>
          <td>110-120V</td>
          <td>x</td>
          <td />
          <td>x</td>
          <td />
          <td>x</td>
          <td>x</td>
          <td />
          <td>x</td>
          <td>x</td>
          <td />
          <td />
          <td />
          <td />
          <td>x</td>
        </tr>
        <tr>
          <td>Direct Logic 205 Koyo</td>
          <td><a href="/" className="link-secondary">More Information</a></td>
          <td>SUB</td>
          <td>100-240V</td>
          <td>x</td>
          <td />
          <td />
          <td />
          <td />
          <td />
          <td />
          <td />
          <td />
          <td />
          <td />
          <td />
          <td />
          <td />
        </tr>
        <tr>
          <td>H2-DM1E</td>
          <td><a href="/" className="link-secondary">More Information</a></td>
          <td>SUB</td>
          <td>24V</td>
          <td />
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td>x</td>
          <td />
          <td>x</td>
          <td />
          <td />
          <td />
          <td />
          <td />
          <td>x</td>
          <td>x</td>
        </tr>
        <tr>
          <td>D2-16ND3-2</td>
          <td><a href="/" className="link-secondary">More Information</a></td>
          <td>SUB</td>
          <td>24V</td>
          <td />
          <td>x</td>
          <td />
          <td />
          <td />
          <td />
          <td />
          <td />
          <td />
          <td />
          <td />
          <td />
          <td />
          <td />
        </tr>
        <tr>
          <td>F2-16TD2p</td>
          <td><a href="/" className="link-secondary">More Information</a></td>
          <td>SUB</td>
          <td>24V</td>
          <td />
          <td>x</td>
          <td />
          <td />
          <td />
          <td />
          <td />
          <td />
          <td />
          <td />
          <td />
          <td />
          <td />
          <td />
        </tr>
        <tr>
          <td>SEL 2740S</td>
          <td><a href="/" className="link-secondary">More Information</a></td>
          <td>HQ</td>
          <td />
          <td />
          <td />
          <td />
          <td />
          <td />
          <td />
          <td />
          <td />
          <td />
          <td />
          <td />
          <td />
          <td />
          <td />
        </tr>
      </tbody>
    </Table>
    <ul>
      <h3>Local (Holmes 450)</h3>
      <li>entraNET Access Point</li>
      <li>MeanWell PS</li>
      <li>Raspberry PIs</li>
    </ul>
    <ul>
      <h3>Remote (ITC Datacenter)</h3>
      <li>entraNET Serial Remote</li>
      <li>NovaTech OrionLXm</li>
      <li>SEL 3505</li>
      <li>SEL 311</li>
      <li>SEL 451</li>
      <li>Direct Logic 205 Koyo</li>
      <ul>
        <li>H2-DM1E</li>
        <li>D2-16ND3-2</li>
        <li>D2-16ND3-2</li>
        <li>F2-16TD2p</li>
        <li>F2-16TD2p</li>
      </ul>
      <li>Mean Well PS</li>
      <li>SCADA Cam</li>
    </ul>
  </Container>
);

export default EquipmentList;
