import React from 'react';

const Miscellaneous = () => (
  <span>
    <h3>Configure NTP Server</h3>
    <ul>
      <li>Useful commands:</li>
      <ul>
        <li>service systemd-timesyncd &lt;command&gt;: Prints current status of timesync</li>
        <li>timedatectl &lt;command&gt;: Enable, disable, and configure time services</li>
      </ul>
    </ul>
    <h3>Syncing to External Server</h3>
    <p>Using systemd-timesyncd:</p>
    <ol>
      <li>Edit configuration file /etc/systemd/timesync.conf</li>
      <ul>
        <li>
          example: @todo add photo
        </li>
      </ul>
      <li>Restart service service systemd-timesyncd stop service systemd-timesyncd start</li>
      <li>
        <a href="https://wiki.debian.org/Bind9#Introduction">Tutorial on Bind9</a>
      </li>
    </ol>
    <h3>Useful Links</h3>
    <ul>
      <li>
        <a href="/pdfs/SEL3505Manual.pdf" target="_blank" rel="noreferrer">RTA SEL-3505 Manual</a>
      </li>
      <li>
        <a href="/piAPI">PI IO and RESTful API</a>
      </li>
      <li>
        <a href="/launchingCommands">Launching Commands On Start</a>
      </li>
      <li>
        <a href="https://www.raspberrypi.com/">Raspberry Pi Homepage</a>
      </li>
      <li>
        <a href="https://www.raspberrypi.com/documentation/">Raspberry Pi Documentation</a>
      </li>
    </ul>
  </span>
);

export default Miscellaneous;
