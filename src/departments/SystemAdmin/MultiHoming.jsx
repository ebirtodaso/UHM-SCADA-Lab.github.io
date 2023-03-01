import React from 'react';
import { Container } from 'react-bootstrap';

const MultiHoming = () => (
  <span>
    <Container>
      <ul>
        <li>Prerequisites</li>
        <ul>
          <li>Switch must be configured to allow multiple VLANs on the ethernet port the RPi is using</li>
          <li>When making changes to the files make sure to sudo vi</li>
        </ul>
      </ul>
      <h3>MultiHoming Steps</h3>
      <ol>
        <li>Create file &apos;vlans&apos; in dir /etc/network/interfaces.d/vlans to make virtual NICs for each VLAN</li>
        <ul>
          <img src="/images/MultiHoming_vlans.png" alt="VLANs" style={{ width: '100%', maxWidth: '375px' }} />
          <p>note: the standard format is &lt;physicalNIC&gt;.&lt;PVID&gt; where physicalNIC is the physical NIC name and PVID (port VLAN ID) is the ID for the VLAN the NIC is for</p>
        </ul>
        <li>If a static IP address is being used, the &apos;dhcpcd.conf&apos; file must be updated</li>
        <ul>
          <img src="/images/MultiHoming_dhcpcd.png" alt="dhcpcd" style={{ width: '100%', maxWidth: '375px' }} />
        </ul>
        <li>Restart the networking service using &apos;sudo systemctl restart networking&apos;</li>
        <li>
          <a href="https://engineerworkshop.com/blog/raspberry-pi-vlan-how-to-connect-your-rpi-to-multiple-networks/">Tutorial to Connect Pi to Multiple Networks</a>
        </li>
      </ol>
    </Container>
  </span>
);

export default MultiHoming;
