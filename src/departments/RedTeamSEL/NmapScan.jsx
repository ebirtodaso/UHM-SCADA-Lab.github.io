import React from 'react';

const NmapScan = () => (
  <span>
    <h3>Nmap Scan for SEL3505</h3>
    <h5>ZenMapOutput</h5>
    <p className="nmap"><strong>List of ping and scrip scans completed for the SEL3505 with their corresponding timestamps</strong></p>
    <img src="/images/RedTeamSEL/nmap3505_output1.png" alt="Nmap3505 Output 1" />
    <p className="nmap"><strong>Open ports located on the device and their configuration information</strong></p>
    <img src="/images/RedTeamSEL/nmap3505_output2.png" alt="Nmap3505 Output 2" />
    <p className="nmap"><strong>Miscellaneous device information</strong></p>
    <img src="/images/RedTeamSEL/nmap3505_output3.png" alt="Nmap3505 Output 3" />
    <p className="nmap"><strong>Port list verification from aggregate NMAP output scan</strong></p>
    <img src="/images/RedTeamSEL/nmap3505_output4.png" alt="Nmap3505 Output 4" />
  </span>
);

export default NmapScan;
