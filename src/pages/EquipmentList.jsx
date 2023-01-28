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
        <th>entraNET Access Point</th>
        <td><a href="/" className="link-secondary">More Information</a></td>
        <td>HQ</td>
        <td>6-30V</td>
        <td></td>
        <td>x</td>
        <td></td>
        <td></td>
        <td>x</td>
        <td></td>
        <td></td>
        <td>x</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <th>Mean Well PS</th>
        <td><a href="/" className="link-secondary">More Information</a></td>
        <td>HQ & SUB</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <th>entraNET Serial Remote</th>
        <td><a href="/" className="link-secondary">More Information</a></td>
        <td>SUB</td>
        <td>6-30V</td>
        <td></td>
        <td>x</td>
        <td>x</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>x</td>
      </tr>
      <tr>
        <th>entraNET Dual Remote</th>
        <td><a href="/" className="link-secondary">More Information</a></td>
        <td>SUB</td>
        <td>6-30V</td>
        <td></td>
        <td>x</td>
        <td>x</td>
        <td></td>
        <td>x</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>x</td>
      </tr>
      <tr>
        <th>SEL 3505</th>
        <td><a href="/" className="link-secondary">More Information</a></td>
        <td>SUB</td>
        <td>12-24V</td>
        <td></td>
        <td>x</td>
        <td>x</td>
        <td>x</td>
        <td>x</td>
        <td></td>
        <td>x</td>
        <td></td>
        <td>x</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>x</td>
      </tr>
      <tr>
        <th>SEL 311</th>
        <td><a href="/" className="link-secondary">More Information</a></td>
        <td>SUB</td>
        <td>24-250V</td>
        <td>x</td>
        <td>x</td>
        <td>x</td>
        <td></td>
        <td></td>
        <td>x</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>x</td>
        <td>x</td>
        <td>x</td>
        <td></td>
      </tr>
      <tr>
        <th>SEL 451</th>
        <td><a href="/" className="link-secondary">More Information</a></td>
        <td>SUB</td>
        <td>110-120V</td>
        <td>x</td>
        <td></td>
        <td>x</td>
        <td></td>
        <td>x</td>
        <td>x</td>
        <td></td>
        <td>x</td>
        <td>x</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>x</td>
      </tr>
      <tr>
        <th>Direct Logic 205 Koyo</th>
        <td><a href="/" className="link-secondary">More Information</a></td>
        <td>SUB</td>
        <td>100-240V</td>
        <td>x</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <th>H2-DM1E</th>
        <td><a href="/" className="link-secondary">More Information</a></td>
        <td>SUB</td>
        <td>24V</td>
        <td></td>
        <td>x</td>
        <td>x</td>
        <td>x</td>
        <td>x</td>
        <td></td>
        <td>x</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>x</td>
        <td>x</td>
      </tr>
      <tr>
        <th>D2-16ND3-2</th>
        <td><a href="/" className="link-secondary">More Information</a></td>
        <td>SUB</td>
        <td>24V</td>
        <td></td>
        <td>x</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <th>F2-16TD2p</th>
        <td><a href="/" className="link-secondary">More Information</a></td>
        <td>SUB</td>
        <td>24V</td>
        <td></td>
        <td>x</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <th>SEL 2740S</th>
        <td><a href="/" className="link-secondary">More Information</a></td>
        <td>HQ</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      </tbody>
    </Table>
    <ul>
      <h2>Local (Holmes 450)</h2>
      <li>entraNET Access Point</li>
      <li>MeanWell PS</li>
      <li>Raspberry PIs</li>
    </ul>
    <ul>
      <h2>Remote (ITC Datacenter)</h2>
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
