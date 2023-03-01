import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const LaunchingCommands = () => (
  <Container className="py-3">
    <h1>Launching Commands on Start</h1>
    <h3>Using systemd</h3>
    <ul>
      <li>Followed this <a href="https://www.golinuxcloud.com/run-script-at-startup-boot-without-cron-linux/">tutorial</a> and this <a href="https://stackoverflow.com/questions/35641414/python-import-of-local-module-failing-when-run-as-systemd-systemctl-service">stack overflow question.</a></li>
      <li>Instructions:</li>
      <li>Create a .sh script. Example shown below is located at ~/startup_script.sh and launches two python programs:</li>
    </ul>
    <Row className="justify-content-center">
      <Col lg={4} className="border border-secondary">
        <p className="pt-3">
          #!/bin/bash <br />
          python3 /home/pi/gpio/LightSensor.py & <br />
          python3 /home/pi/rest_api/rest927.py &
        </p>
      </Col>
    </Row>
    <ul>
      <li>Provide executable permission to the script: $ sudo chmod u+x /path/to/startup_script.sh</li>
      <li>Create a new systemd service file. Example shown below is a created service named Photo.service:</li>
    </ul>
    <Row className="justify-content-center">
      <Col lg={4} className="border border-secondary">
        <p className="pt-3">
          [Unit] <br />
          Description=Run script at startup after network becomes reachable <br />
          After=network-online.target <br />
          <br />
          [Service] <br />
          Type=idle <br />
          User=pi <br />
          RemainAfterExit=yes <br />
          ExecStart=/home/pi/startup_script.sh <br />
          TimeoutStartSec=0 <br />
          <br />
          [Install] <br />
          WantedBy=default.target
        </p>
      </Col>
    </Row>
    <ul>
      <li>Execute the following commands to make sure the service is called on startup</li>
      <ul>
        <li>$ sudo systemctl daemon-reload</li>
        <li>$ sudo systemctl enable Photo.service</li>
      </ul>
      <li>To check status of script</li>
      <ul>
        <li>$ systemctl status Photo.service</li>
      </ul>
    </ul>
    <h3>Using rc.local - Don&apos;t Use, Only for Documentation</h3>
    <ul>
      <li>This kinda works, but isn&apos;t as applicable as using systemd as shown above. This is an outdated method.</li>
      <li>Fails as you cannot control when the program runs, (runs before dependencies)</li>
      <li>Followed <a href="https://learn.sparkfun.com/tutorials/how-to-run-a-raspberry-pi-program-on-startup#method-1-rclocal">this tutorial, method 1 (rc.local)</a></li>
      <li>Instructions:</li>
      <ol>
        <li>Edit the file rc.local: $ sudo vim /etc/rc.local</li>
        <li>Enter the (command line) command you would like to run on start just before the last line (the exit 0 line). Example from the Photocell light sensor Pi shown below.</li>
        <li>WARNING: Make sure you add the &apos;&&apos; character at the end of the command. This makes it so the command runs in the background. If you do not do this, you might soft lock the Pi.</li>
        <li>If you then restart the Pi and the program has apparently ran without soft locking the Pi, you are finished. If not, follow the instructions written after the example to fix the Pi.</li>
      </ol>
    </ul>
    <Row className="justify-content-center">
      <Col lg={4} className="border border-secondary">
        <p className="pt-3">
          # Print the IP address <br />
          _IP=$(hostname -I) || true <br />
          if [ &quot;$_IP&quot; ]; then <br />
          printf &quot;My IP address is %sn&quot; &quot;$_IP&quot; <br />
          fi <br />
          <br />
          python3 /home/pi/gpio/LightSensor.py & <br />
          <br />
          exit 0
        </p>
      </Col>
    </Row>
    <h3>Fixing rc.local Softlock</h3>
    <ul>
      <li>If this happens to you, don&apos;t worry!</li>
      <li>Instructions:</li>
      <ol>
        <li>You will need to shutdown the Pi, then take out the SD card from the Pi.</li>
        <li>Put the SD card into the SD card writer used for burning OS images.</li>
        <li>Plug the SD card writer into another computer (any Raspberry Pi works!)</li>
        <li>On the another computer, open the file in vim text editor: sudo vim /media/pi/rootfs/etc/rc.local</li>
        <li>Fix what you messed up earlier.</li>
        <li>Once done, properly eject the SD card and it should be good to be plugged into the original Pi.</li>
      </ol>
    </ul>
  </Container>
);

export default LaunchingCommands;
