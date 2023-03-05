import React from 'react';
import { Col, Row, Table } from 'react-bootstrap';

const SEL451Config = () => (
  <span>
    <h3>SEL 451 Trip Logic Configuration</h3>
    <Row>
      <Col lg={8}>
        <Table striped bordered>
          <thead>
            <tr>
              <th width="50%">Current Value</th>
              <th width="50%">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>TR := 51S1T OR 51S2T</th>
              <td>Trip (SELOGIC Equation)</td>
            </tr>
            <tr>
              <th>TRSOTF := 50P1</th>
              <td>Switch-Onto-Fault Trip (SELOGIC Equation)</td>
            </tr>
            <tr>
              <th>BK1MTR := OC1 OR PB8_PUL</th>
              <td>Breaker 1 Manual Trip—BK1 8 pushbuttons (SELOGIC Equation)</td>
            </tr>
            <tr>
              <th>ULTR := TRGTR</th>
              <td>Unlatch Trip (SELOGIC Equation)</td>
            </tr>
            <tr>
              <th>ULMTR1 := NOT 52AA1</th>
              <td>Unlatch Manual Trip—BK1 (SELOGIC Equation)</td>
            </tr>
            <tr>
              <th>TULO := 3</th>
              <td>Trip Unlatch Option (1, 2, 3, 4)</td>
            </tr>
            <tr>
              <th>TDUR3D := 12.000</th>
              <td>Three-Pole Trip Minimum Trip Duration Time Delay (2.000–8000 cycles)</td>
            </tr>
            <tr>
              <th>ER := R_TRIG 51S1 OR R_TRIG 51S2</th>
              <td>Event Report Trigger Equation (SELOGIC Equation)</td>
            </tr>
          </tbody>
        </Table>
      </Col>
    </Row>
  </span>
);

export default SEL451Config;
