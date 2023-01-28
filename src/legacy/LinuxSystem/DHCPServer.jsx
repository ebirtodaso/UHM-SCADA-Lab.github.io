import React from 'react';

const DHCPServer = () => (
  <span>
    <ul>
      <li>Useful commands:</li>
      <ul>
        <li>systemctl status isc-dhcp.server --lines 100: checks if DHCP server is running</li>
        <li>systemctl restart isc-dhcp.server.service: restart the DHCP server</li>
        <li>cat /var/lib/dhcp/dhcp.leases: prints out leases given by the DHCP server</li>
      </ul>
    </ul>
    <h3>Standing Up DHCP Server</h3>
    <ol>
      <li>In file /etc/default/isc-dhcp-server add interface that DHCP Server should serve requests on</li>
      <ul>
        <li>example: INTERFACES=&quot;eth0 eth 0.3&quot;</li>
      </ul>
      <li>Configure DHCP Server in the file /etc/dhcp/dhcpd.conf</li>
      <ul>
        <img src="/images/DHCPServer_dhcpd.png" alt="DHCP Server" style={{ width: '100%', maxWidth: '375px' }} />
      </ul>
      <li>
        <a href="https://wiki.debian.org/DHCP_Server">Tutorial to Setup DHCP Server</a>
      </li>
    </ol>
    <h3>DHCP Fixed Addressing</h3>
    <ul>
      <li>Prerequisites</li>
      <ul>
        <li>Must know Host&apos;s hostname, MAC Address, and the desired IP Address</li>
      </ul>
    </ul>
    <ol>
      <li>Add configuration in /etc/dhcp/dhcpd.conf (near the bottom)</li>
      <ul>
        <img src="/images/DHCPServer_fixedAddressing.png" alt="Fixed Addressing" style={{ width: '100%', maxWidth: '375px' }} />
      </ul>
    </ol>
  </span>
);

export default DHCPServer;
