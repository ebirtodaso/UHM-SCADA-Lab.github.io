import React from 'react';
import { Table } from 'react-bootstrap';

const WiringDiagram = () => (
  <span>
    <h3>Wiring Diagram Table</h3>
    <Table striped bordered>
      <thead>
        <tr>
          <th>Number</th>
          <th>From</th>
          <th>To</th>
          <th>Function</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>MDR 20-12</td>
          <td>SEL3505</td>
          <td>Negative Power Wire</td>
        </tr>
        <tr>
          <td>2</td>
          <td>MDR 20-12</td>
          <td>SEL3505</td>
          <td>Postive Power Wire 12V</td>
        </tr>
        <tr>
          <td>3</td>
          <td>SEL3505</td>
          <td>HP 2920-24G</td>
          <td>To ssh into SEL System to control remotely</td>
        </tr>
        <tr>
          <td>4</td>
          <td>SEL3505</td>
          <td>SEL 451</td>
          <td>3505 can remotely control 451</td>
        </tr>
        <tr>
          <td>5</td>
          <td>SEL3505</td>
          <td>SEL 311B</td>
          <td>3505 can remotely control 311B</td>
        </tr>
        <tr>
          <td>6</td>
          <td>SEL 311B A05</td>
          <td>SEL 451 A01</td>
          <td>Constant 24V Provides power used for switching</td>
        </tr>
        <tr>
          <td>7</td>
          <td>SEL 311B A02</td>
          <td>#2 D2-16 A5</td>
          <td>Data wire for Close to input on PLC (Set)</td>
        </tr>
        <tr>
          <td>8</td>
          <td>SEL 311B A06</td>
          <td>#2 D2-16 A6</td>
          <td>Data wire for TRIP to input on PLC(reset)</td>
        </tr>
        <tr>
          <td>9</td>
          <td>External Power supply</td>
          <td>F2-16 V1</td>
          <td>Vary switch voltage(12V-24V) to power output points</td>
        </tr>
        <tr>
          <td>10</td>
          <td>#1 F2-16 V1</td>
          <td>#2 F2-16 24V</td>
          <td>Jumps Constant 24V from #1 F2-16 (for module power)</td>
        </tr>
        <tr>
          <td>11</td>
          <td>#1 F2-16 0V</td>
          <td>#2 F2-16 0V</td>
          <td>Jumps Ground from #1 F2-16</td>
        </tr>
        <tr>
          <td>12</td>
          <td>#1 F2-16 A7</td>
          <td>Breadboard</td>
          <td>TRIP 311 24v LED</td>
        </tr>
        <tr>
          <td>13</td>
          <td>#1 F2-16 A6</td>
          <td>Breadboard</td>
          <td>Close 311 24V LED</td>
        </tr>
        <tr>
          <td>14</td>
          <td>#1 F2-16 A1</td>
          <td>Breadboard</td>
          <td>TRIP 451 24V LED</td>
        </tr>
        <tr>
          <td>15</td>
          <td>#1 F2-16 A0</td>
          <td>Breadboard</td>
          <td>Close 451 24V LED</td>
        </tr>
        <tr>
          <td>16</td>
          <td>#2 D2-16</td>
          <td>#1 F2-16</td>
          <td>Jumps Ground from #2 D2-16</td>
        </tr>
        <tr>
          <td>17</td>
          <td>#1 F2-16 V1</td>
          <td>#1 F2-16 24V</td>
          <td>Jumps 24V from power to module to power output points</td>
        </tr>
        <tr>
          <td>18</td>
          <td>Direct Logic 205 (AUX) +24V</td>
          <td>#1 F2-16 V1</td>
          <td>24V From AUX power supply to power f2-16 module</td>
        </tr>
        <tr>
          <td>19</td>
          <td>#2 D2-16 CA</td>
          <td>#2 D2-16 CB</td>
          <td>Jumps Ground from A to B busses #2 D2-16</td>
        </tr>
        <tr>
          <td>20</td>
          <td>#1 D2-16 CB</td>
          <td>#2 D2-16 CA</td>
          <td>Jumps Ground from #1 D2-16 to #2 D2-16</td>
        </tr>
        <tr>
          <td>21</td>
          <td>#1 D2-16 CA</td>
          <td>#1 D2-16 CB</td>
          <td>Jumps Ground from A to B busses #1 D2-16</td>
        </tr>
        <tr>
          <td>22</td>
          <td>Direct Logic 205 (AUX) -24V</td>
          <td>#1 D2-16 CA</td>
          <td>Set ground from AUX</td>
        </tr>
        <tr>
          <td>23</td>
          <td>#1 D2-16 A1</td>
          <td>SEL 451 A02</td>
          <td>Data wire for Close to input on PLC (Set)</td>
        </tr>
        <tr>
          <td>24</td>
          <td>#1 D2-16 A1</td>
          <td>SEL 451 A06</td>
          <td>Data wire for TRIP to input on PLC(reset)</td>
        </tr>
        <tr>
          <td>25</td>
          <td>Direct Logic 205 (AUX) +24V</td>
          <td>SEL 451 A05</td>
          <td>Constant 24V to 451</td>
        </tr>
        <tr>
          <td>26</td>
          <td>Direct Logic 205 (AUX) LG</td>
          <td>Breadboard</td>
          <td>Ground to breadboard for LEDs</td>
        </tr>
        <tr>
          <td>27</td>
          <td>H2-DM1E Ethernet</td>
          <td>Computer</td>
          <td>Ethernet Cable for programing PLC</td>
        </tr>
        <tr>
          <td>28</td>
          <td>SEL 451 A01</td>
          <td>SEL 451 A05</td>
          <td>Jumps Constant 24V Between 451 relays</td>
        </tr>
        <tr>
          <td>29</td>
          <td>SEL 311B A01</td>
          <td>SEL 311B A05</td>
          <td>Jumps Constant 24V Between 311 relays</td>
        </tr>
        <tr>
          <td>30</td>
          <td>Direct Logic 205 (AUX) -24V</td>
          <td>Direct Logic 205 (AUX) LG</td>
          <td>Jumps ground from wall power to negative terminal on aux power supply</td>
        </tr>
      </tbody>
    </Table>
  </span>
);

export default WiringDiagram;
