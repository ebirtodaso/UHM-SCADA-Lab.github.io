import React from 'react';

const DNSServer = () => (
  <span>
    <ul>
      <li>Useful commands:</li>
      <ul>
        <li>sudo apt install bind9</li>
        <li>systemctl status isc-dhcp.server.service: checks if DHCP server is running</li>
        <li>systemctl status bind9: checks if bind9 is running</li>
        <li>systemctl reenable bind9: updates the symlink?</li>
        <li>systemctl restart bind9: restarts bind9</li>
        <li>named-checkzone scada.lab db.scada.lab: verifies the validity of zone files before resetting the configuration</li>
        <li>named-checkconf -z: verifies the syntax of the configuration files for Bind9</li>
        <li>dig @&lt;IP of DNS server&gt; &lt;target name&gt;: searches the DNS server specified and relays back lots of info. Optionally add a target name to get specific info on that domain.</li>
      </ul>
    </ul>
    <h3>Setting Up Zones</h3>
    <ol>
      <li>Add zone information to configuration file (Defining the zone)</li>
      <ul>
        <img src="/images/DNSServer_zoneConfig.png" alt="Zone Config" style={{ width: '100%', maxWidth: '375px' }} />
      </ul>
      <li>After saving the change, restart the service and run &apos;systemctl reload bind9&apos;</li>
      <li>Create db.&lt;zone name&gt; file</li>
      <ul>
        <img src="/images/DNSServer_zoneName.png" alt="Zone Name" style={{ width: '100%', maxWidth: '375px' }} />
        <p>note: The bottom of the file is the DNS records. The format of a record: hostname &lt;tab&gt; class &lt;tab&gt; DNS record type &lt;tab&gt; value</p>
      </ul>
      <li>Restart the rndc and run &apos;sudo rndc reload&apos;</li>
      <li>Check the DNS server is running properly</li>
      <li>
        <a href="https://serverspace.io/support/help/bind9-as-a-primary-dns-server-on-ubuntu/">Tutorial to Configure Bind9 as Primary Server</a>
      </li>
      <li>
        <a href="https://wiki.debian.org/Bind9#Introduction">Tutorial on Bind9</a>
      </li>
    </ol>
  </span>
);

export default DNSServer;
