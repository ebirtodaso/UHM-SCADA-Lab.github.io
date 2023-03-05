import React from 'react';

const SELSetup = () => (
  <span>
    <h3>Running Commands</h3>
    <p>This table describes the process for tripping relays within our SCADA Network via a LAN Machine.</p>
    <ol>
      <li>Ensure all physical connections are secure and all systems are powered on(Refer to the SCADA Network Map).</li>
      <img style={{ width: '100%', maxWidth: '600px' }} src="/images/RedTeamSEL/setup1.png" alt="Setup 1" />
      <ol>
        <li>Wait for the enable &quot;EN&quot; led to illuminate on the RTAC3505.</li>
        <img style={{ width: '100%', maxWidth: '350px' }} src="/images/RedTeamSEL/setup2.png" alt="Setup 2" />
      </ol>
      <li>Ensure the machine we will be accessing is using our SCADA wifi or is plugged into the network.</li>
      <img style={{ width: '100%', maxWidth: '450px' }} src="/images/RedTeamSEL/setup3.png" alt="Setup 3" />
      <ol>
        <li>SSH using PUTTY or an SSH capable OS Shell. The Ethernet Port 1&apos;s IP Address on the RTAC 3505 is set to 10.1.1.31. The port destination is 3253.</li>
        <img style={{ width: '100%', maxWidth: '250px' }} src="/images/RedTeamSEL/setup4.png" alt="Setup 4" />
        <li>If the SSH needs troubleshooting, you can log in via the USB B port of the RTAC 3505 in the front. Plug that into your computer then enter 172.29.131.1 for the USB IP address and 3253 for the port.</li>
        <img style={{ width: '100%', maxWidth: '400px' }} src="/images/RedTeamSEL/setup5.png" alt="Setup 5" />
      </ol>
      <li>Log in using the RTAC3505 credentials: User: UHmanoa Password: Sel3505*</li>
      <img style={{ width: '100%', maxWidth: '600px' }} src="/images/RedTeamSEL/setup6.png" alt="Setup 6" />
      <li>From here, we need to gain the highest level of access using the command &quot;acc&quot;, then &quot;2ac&quot;. At this level we can use the command &quot;who&quot; to see all the connected devices and their ports.</li>
      <img style={{ width: '100%', maxWidth: '600px' }} src="/images/RedTeamSEL/setup7.png" alt="Setup 7" />
      <li>Access the 311B or the 451 using the command &quot;por&quot; followed by the port number of the device that was previously listed when we run &quot;who&quot;.</li>
      <img style={{ width: '100%', maxWidth: '600px' }} src="/images/RedTeamSEL/setup8.png" alt="Setup 8" />
      <li>On 311B: Run the command &quot;PUL out101 5&quot; to CLOSE the OUTPUT 103 for 5 seconds. <a href="https://laulima.hawaii.edu/access/content/group/MAN.XLSEEX96mn.202310/Manuals/SEL-311%20B/311B%20Instruction%20Manual.pdf">(Review The Manual for more info. pg 601 for commands)</a></li>
      <ol>
        <li>Run the command &quot;PUL out103 5&quot; to OPEN the OUTPUT 103 for 5 seconds.</li>
      </ol>
      <li>Run the command &quot;pulse out101 5&quot; to CLOSE the OUTPUT 103 for 5 seconds. <a href="https://laulima.hawaii.edu/access/content/group/MAN.XLSEEX96mn.202310/Manuals/SEL%20-%20451/SEL%20-%20451%20Factory%20Reset/sel451%20manual.pdf">(Review The Manual for more info)</a></li>
      <ol>
        <li>Run the command &quot;pulse out103 5&quot; to OPEN the OUTPUT 103 for 5 seconds.</li>
      </ol>
    </ol>
  </span>
);

export default SELSetup;
