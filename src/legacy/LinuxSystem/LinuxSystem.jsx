import { Container, Tab, Tabs } from 'react-bootstrap';
import HomeTab from './HomeTab';
import InventoryTab from './InventoryTab';
import PiBringUp from './PiBringUp';
import MultiHomingTab from './MultiHomingTab';
import DHCPServer from './DHCPServer';
import DNSServer from './DNSServer';
import Miscellaneous from './Miscellaneous';

const LinuxSystem = () => (
  <Container id="LinuxSystem" className="py-3">
    <h1>Linux System</h1>
    <Tabs defaultActiveKey="home">
      <Tab eventKey="home" title="Home" className="py-4">
        <HomeTab/>
      </Tab>
      <Tab eventKey="inventory" title="Raspberry Pi Inventory" className="py-4">
        <InventoryTab/>
      </Tab>
      <Tab eventKey="bringUp" title="Pi Bring Up" className="py-4">
        <PiBringUp/>
      </Tab>
      <Tab eventKey="multiHoming" title="MultiHoming" className="py-4">
        <MultiHomingTab/>
      </Tab>
      <Tab eventKey="DHCPServer" title="DHCP Server" className="py-4">
        <DHCPServer/>
      </Tab>
      <Tab eventKey="DNSServer" title="DNS Server" className="py-4">
        <DNSServer/>
      </Tab>
      <Tab eventKey="Miscellaneous" title="Miscellaneous" className="py-4">
        <Miscellaneous/>
      </Tab>
    </Tabs>
  </Container>
);

export default LinuxSystem;
