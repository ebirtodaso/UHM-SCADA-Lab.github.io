import React from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SDNSetup from './SDNSetup';
import RYUNotes from './RYUNotes';

const SFlowSDN = () => (
  <Container className="py-3">
    <h1>sFlow/SDN</h1>
    <h2>sFlow</h2>
    <h4>Notes</h4>
    <ul>
      <li>sFlow is a technology that monitors traffic via sampled packets of data.</li>
      <li>The goal is to configure the network switches and Raspberry Pis to use sFlow to create a database of monitored traffic that can be fed into a machine learning (ML) algorithm. That data will be fed into the ML algorithm so it can learn to tell
        the difference between normal and abnormal traffic.
      </li>
      <li>Use Netcat on Raspberry Pis to monitor the sFlow traffic (we do not need any sFlow software on Pi).</li>
      <li>XDR files are packs of sFlow data.</li>
      <li>We have to decide whether to use Python or C++ to unpack XDR files.</li>
      <li>sFlow is going to need an sFlow exporter, collector, and analyzer. (refer to &quot;sFlow Structure&quot; in &quot;Helpful Links&quot; table below.)</li>
    </ul>
    <h4 className="pt-4">Helpful Links</h4>
    <Row>
      <Col>
        <ul>
          <li><Link to="https://www.kentik.com/kentipedia/sflow-collector/#:~:text=to%20sFlow%20Collection-,What%20is%20an%20sFlow%20Collector%3F,probes%20and%20other%20network%20devices.">Components of sFlow Analysis</Link></li>
          <li><Link to="https://sflow.org/#:~:text=sFlow%C2%AE%20is%20an%20industry,and%20defense%20against%20security%20threats.">sFlow Organization Home Page</Link></li>
          <li><Link to="https://en.wikipedia.org/wiki/SFlow">sFlow Description</Link></li>
          <li><Link to="https://blog.sflow.com/2016/06/raspberry-pi-real-time-network-analytics.html">Setting up sFlow on Raspberry Pi</Link></li>
          <li><Link to="https://www.youtube.com/watch?v=VQEQp5PR86k">Accessing a Switch via CLI</Link></li>
          <li><Link to="https://techhub.hpe.com/eginfolib/networking/docs/switches/K-KA-KB/15-18/5998-8160_ssw_mcg/content/ch06s09.html">Configuring sFlow for Network Switch</Link></li>
          <li><Link to="https://en.wikipedia.org/wiki/External_Data_Representation">XDR Description</Link></li>
          <li><Link to="https://linuxhint.com/send_receive_udp_python/">UDP Client and Server Code (Python)</Link></li>
          <li><Link to="https://github.com/auspex-labs/sflow-collector">sFlow Collector Reference Code (Python)</Link></li>
          <li><Link to="https://inmon.com/technology/sflowTools.php">sFlow toolkit</Link></li>
        </ul>
      </Col>
      <Col>
        <ul>
          <li><Link to="https://inmon.com/products/sFlowTrend/help/html/introduction.gettingStarted.html">sFlowTrend Tutorial</Link></li>
          <li><Link to="https://inmon.com/products/sFlowTrend.php">sFlowTrend Download</Link></li>
          <li><Link to="https://www.computerhope.com/unix/nc.htm">Netcat Linux Command Help</Link></li>
          <li><Link to="https://blog.sflow.com/2016/05/mininet-flow-analytics.html">Mininet Flow Analytics</Link></li>
          <li><Link to="https://docs.python.org/3/library/xdrlib.html">Encode/Decode XDR Files</Link></li>
          <li><Link to="https://unix.stackexchange.com/questions/106480/how-to-copy-files-from-one-machine-to-another-using-ssh">Transferring files between systems</Link></li>
          <li><Link to="https://pypi.org/project/hexdump/">Hexdump</Link></li>
          <li><Link to="https://en.wikipedia.org/wiki/Ethernet_frame#Ethernet_II">Ethernet II</Link></li>
          <li><Link to="https://en.wikipedia.org/wiki/IPv4#Header">IPv4</Link></li>
        </ul>
      </Col>
    </Row>
    <h4 className="pt-4">Resources</h4>
    <ul>
      <li><Link to="https://blog.sflow.com/2016/06/raspberry-pi-real-time-network-analytics.html">Raspberry Pi Real Time Network Analytics</Link></li>
      <li><Link to="https://sflow.org/#:~:text=sFlow%C2%AE%20is%20an%20industry,and%20defense%20against%20security%20threats.">sFlow Security Threats</Link></li>
      <li><Link to="https://techhub.hpe.com/eginafolib/networking/docs/switches/K-KA-KB/15-18/5998-8160_ssw_mcg/content/ch06s09.html">Networking Switches</Link></li>
      <li><Link to="https://www.youtube.com/watch?v=VQEQp5PR86k">sFlow Youtube Video</Link></li>
    </ul>
    <h4 className="pt-4">Tasks</h4>
    <Table striped bordered>
      <thead>
        <tr>
          <th width="70%">Tasks</th>
          <th width="15%">Assigned To</th>
          <th width="15%">Date of Completion</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Get a fresh Raspberry Pi, put it on Vlan 1, get a static IP for it, and hook it up to the sFlow configured switch</td>
          <td>-</td>
          <td>9/15/22</td>
        </tr>
        <tr>
          <td>Configure network switches to transmit sFlow traffic</td>
          <td>-</td>
          <td>9/15/22</td>
        </tr>
        <tr>
          <td>Get raspberry pis to receive sFlow traffic</td>
          <td>-</td>
          <td>9/27/22</td>
        </tr>
        <tr>
          <td>Create an sFlow packet parser using Python</td>
          <td>Chase and Andee</td>
          <td>-</td>
        </tr>
      </tbody>
    </Table>
    <h4 className="pt-4">Useful Commands</h4>
    <Table striped bordered>
      <tbody>
        <tr>
          <td>sudo tcpdump -w (filename) udp port 6343</td>
          <td>writes udp traffic into a file</td>
        </tr>
        <tr>
          <td>nc -l -v -u -p6343 -k</td>
          <td>netcat that keeps listening for udp traffic from port 6343 and prints verbose output</td>
        </tr>
        <tr>
          <td>scp (sender_username)@(sender_ip):(source file location, e.g. /home/pi/sflowPython/(filename)) (destination, e.g. /C:UserscdeliDownloads)</td>
          <td>downloads a file from another computer on the same network</td>
        </tr>
      </tbody>
    </Table>
    <h4 className="pt-4">Packet Sizes</h4>
    <Table striped bordered>
      <thead>
        <tr>
          <th>Packet Type</th>
          <th>Length (bytes)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Flow</td>
          <td>160-208??</td>
        </tr>
        <tr>
          <td>Counter</td>
          <td>168</td>
        </tr>
        <tr>
          <td>Generic Interface Counter</td>
          <td>88</td>
        </tr>
        <tr>
          <td>Ethernet Interface Counter</td>
          <td>52</td>
        </tr>
      </tbody>
    </Table>
    <h4 className="pt-4">Documentation Entries</h4>
    <Table striped bordered>
      <thead>
        <tr>
          <th width="10%">Name</th>
          <th width="80%">Entry</th>
          <th width="10%">Date</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Chase</td>
          <td>
            I copied John&apos;s code for parsing sFlow packets onto
            the sFlow Rasberry Pi. The code is &quot;control.py&quot; in
            &quot;/home/pi/git-repos/packet_parser_program/&quot;. I put &quot;if&quot; statements
            in place of a match case function, because
            an older version of python on the Pi does not support it. I
            wrote for the code to only download MAC addresses and other info
            if they are not already on the Pi. I tried to make the data input
            the live sFlow packets coming in from the network switch, but there
            is a datatype error. I will start to work on Andee&apos;s and my
            packet parser instead of tyring to implement John&apos;s.
          </td>
          <td>2/14/2023</td>
        </tr>
        <tr>
          <td>Chase</td>
          <td>
            I am working on finishing the parser Andee and I started last semester.
            We only need to add functions to parse, in order of priority, TCP, ICMPv6, and ARP headers.
            Mark said we don&apos;t need too much information from ICMP. He wants our parser to say that there
            is an ICMP header. So anytime there is an ICMP header, the parser will just print that ICMP
            was detected. We use Wireshark as a reference for our code(&quot;blob(1).pcap&quot; -&gt; line 23 for ARP,
            &quot;blob.pcap&quot; -&gt; line 11 for ICMPv6, and &quot;blob.pcap&quot; -&gt; line 23 for TCP).
          </td>
          <td>2/16/2023</td>
        </tr>
        <tr>
          <td>Chase</td>
          <td>
            I have code that successfully parses ARP and TCP packets. Andy taught me how to use &quot;class&quot;
            in Python, so we are implementing that into all of the header parsers. Then we will put all of
            those into the main packet parser. So far, &quot;class&quot; is working in IPv4, IPv6, Ethernet II, ARP,
            and TCP packet parsers.
          </td>
          <td>2/23/2023</td>
        </tr>
        <tr>
          <td>Chase</td>
          <td>
            I came into SCADA early today (12:00 PM). I put &quot;class&quot; into all of our parsing
            functions except for &quot;icmpv6.py&quot;. Then I have to put all of them into our main parser. Then I
            will ask Mark what he task he wants us to do next. I assume we&apos;ll have to tell our parser to
            record the parsed data into a database.
          </td>
          <td>2/28/2023</td>
        </tr>
      </tbody>
    </Table>
    <hr />
    <h2>SDN</h2>
    <h4>Overview</h4>
    <p>An SDN is a <Link to="https://www.youtube.com/watch?v=Z5Gi2Bpd82M">Software Defined Network</Link>. An SDN Controller is how we dictate how it behaves.</p>
    <h4 className="pt-4">Helpful Links</h4>
    <ul>
      <li><Link to="https://en.wikipedia.org/wiki/OpenFlow">Openflow Explanation</Link></li>
      <li><Link to="https://en.wikipedia.org/wiki/Software-defined_networking">SDN Explanation</Link></li>
      <li><Link to="https://opennetworking.org/">Open Networking Explanation</Link></li>
      <li><Link to="https://en.wikipedia.org/wiki/List_of_SDN_controller_software">List of SDN Platforms</Link></li>
      <li><SDNSetup /></li>
    </ul>
    <h4 className="pt-4">Currently Using</h4>
    <Table striped bordered responsive="xl">
      <thead>
        <tr>
          <th>Controller Name</th>
          <th>Status</th>
          <th>OS/Platform</th>
          <th>Derived From</th>
          <th>License</th>
          <th>Developed In</th>
          <th>Download</th>
          <th>Notes</th>
          <th>Static IP Address</th>
          <th>Assigned To</th>
          <th>Secure (SSH) Control Channel</th>
          <th>Web-based UI</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><Link to="https://ryu-sdn.org/sdn_sflow.html">RYU Controller</Link></td>
          <td>Active - Release 4.34</td>
          <td>Ubuntu (16.04 LTS or later)</td>
          <td>N/A</td>
          <td>Apache 2.0</td>
          <td>Python</td>
          <td><Link to="https://github.com/faucetsdn/ryu">Download</Link></td>
          <td><RYUNotes /></td>
          <td>Static IP Address 10.1.88.3</td>
          <td>Eliya/John</td>
          <td>No</td>
          <td>Read only (cannot write)</td>
        </tr>
      </tbody>
    </Table>
    <h4 className="pt-4">Will Not Be Using</h4>
    <Table striped bordered responsive="xl">
      <thead>
        <tr>
          <th>Controller Name</th>
          <th>Status</th>
          <th>OS/Platform</th>
          <th>Derived From</th>
          <th>License</th>
          <th>Developed In</th>
          <th>Download</th>
          <th>Reasoning for Pass</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><Link to="https://floodlight.atlassian.net/wiki/spaces/Beacon/overview?homepageId=1769491">Beacon</Link></td>
          <td>Defunct</td>
          <td>Anything that Java runs on</td>
          <td>N/A</td>
          <td>Apache 2.0</td>
          <td>Java</td>
          <td><Link to="https://beacon-opensource.bigswitch.com.s3.amazonaws.com/etc/manifest.html">Download</Link></td>
          <td>Defunct/Development moved to Floodlight Controller</td>
        </tr>
        <tr>
          <td><Link to="https://faucet.nz/">Faucet</Link></td>
          <td>Active-1.10.1</td>
          <td>Debian 10+, Raspbian 10+, Raspberry Pi OS 11+, Ubuntu 18.04+, Docker, Pip</td>
          <td>Valve/Ryu OpenFlow Controller</td>
          <td>Apache 2.0</td>
          <td>Python</td>
          <td><Link to="https://docs.faucet.nz/en/latest/tutorials/first_time.html">Download</Link></td>
          <td>-</td>
        </tr>
        <tr>
          <td><Link to="https://support.hpe.com/hpesc/public/docDisplay?docId=emr_na-c03967699#N10229">HPE VAN</Link></td>
          <td>Active</td>
          <td>Ubuntu</td>
          <td>HP</td>
          <td>-</td>
          <td>-</td>
          <td><Link to="https://support.hpe.com/hpesc/public/docDisplay?docId=emr_na-c03967699#N10229">Download</Link></td>
          <td>Requires 64 GB of storage</td>
        </tr>
        <tr>
          <td><Link to="https://github.com/noxrepo/nox">NOX</Link></td>
          <td>Defunct Feb 2014</td>
          <td>Linux/Mac OS/Windows</td>
          <td>OpenFlow</td>
          <td>GNU Public License</td>
          <td>C++/CSS/C/Python/Shell/Perl</td>
          <td><Link to="https://github.com/noxrepo/nox/archive/refs/heads/verity.zip">Download</Link></td>
          <td>Does not support Openflow V1.3</td>
        </tr>
        <tr>
          <td><Link to="https://docs.opendaylight.org/en/stable-sodium/#getting-started-with-opendaylight">OpenDaylight</Link></td>
          <td>Active-15.0.0</td>
          <td>Apache Maven 3.5.2 or later,Linux,Windows</td>
          <td>YANG Tools, NETCONF, and MD-SAL</td>
          <td>Eclipse Public License 1.0</td>
          <td>Java</td>
          <td><Link to="https://docs.opendaylight.org/en/latest/downloads.html">Download</Link></td>
          <td>Lighty-Core is a more specialized version in line with our wanted use</td>
        </tr>
        <tr>
          <td><Link to="https://www.open-kilda.org/">OpenKilda</Link></td>
          <td>Active-v1.112.0</td>
          <td>Ubuntu 18.04, Ubuntu 20.04</td>
          <td>N/A</td>
          <td>Apache 2.0</td>
          <td>Python/Java</td>
          <td><Link to="https://docs.open-kilda.org/xwiki/bin/view/Installation%20Guide%20-%20v1.1.11.27%20%28November%202018%29/">Download</Link><Link to="https://github.com/telstra/open-kilda">Github</Link></td>
          <td>Requires 256GB of storage</td>
        </tr>
        <tr>
          <td><Link to="https://www.openvswitch.org/">Open vSwitch</Link></td>
          <td>Active- current:2.16.2 LTS:2.13.6</td>
          <td>Linux, Hyper-V, FreeBSD and NetBSD</td>
          <td>N/A</td>
          <td>Apache 2.0</td>
          <td>C</td>
          <td><Link to="https://www.openvswitch.org/download/">Download</Link></td>
          <td>We are using a physical switch, not virtual.</td>
        </tr>
        <tr>
          <td>POX</td>
          <td>Active-&quot;gar&quot;</td>
          <td>Linux/Mac OS/Windows</td>
          <td>OpenFlow</td>
          <td>Apache 2.0</td>
          <td>C++/Python</td>
          <td><Link to="https://github.com/noxrepo/pox/archive/refs/heads/gar-experimental.zip">Download</Link></td>
          <td>Does not support Openflow V1.3.</td>
        </tr>
        <tr>
          <td>Project Calico</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>Operates in a different layer than Openflow</td>
        </tr>
        <tr>
          <td><Link to="https://arccn.github.io/runos/docs-2.0/eng/00_RUNOS_Overview.html">RUNOS</Link></td>
          <td>Active-2.0</td>
          <td>Ubuntu 18.04 or Higher</td>
          <td>REST / OpenFlow</td>
          <td>Apache 2.0</td>
          <td>C / C++ / JS / CMake / CSS / Nix</td>
          <td><Link to="https://arccn.github.io/runos/docs-2.0/eng/01_RUNOS_Downloads.html">Download</Link></td>
          <td>Cannot easily run on a raspberry PI</td>
        </tr>
        <tr>
          <td><Link to="https://selinc.com/products/5056/">SEL-5056</Link></td>
          <td>Active</td>
          <td>Windows</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td><Link to="https://selinc.com/products/5056/">Download</Link></td>
          <td>Windows only</td>
        </tr>
        <tr>
          <td><Link to="https://fd.io/">The Fast Data Project (FD.io)</Link></td>
          <td>Active v.21.10.1</td>
          <td>Linux/Arm, x86, Power</td>
          <td>3rd Gen US Patent 7,961,636</td>
          <td>Apache 2.0</td>
          <td>-</td>
          <td><Link to="https://fd.io/gettingstarted/installing/">Download</Link></td>
          <td>Cannot easily run on a raspberry PI</td>
        </tr>
        <tr>
          <td>Tungsten</td>
          <td>Active R21.12</td>
          <td>Windows/Linux</td>
          <td>OpenContrail</td>
          <td>Apache 2.0</td>
          <td>Python/c++/Node/Go</td>
          <td><Link to="https://tungsten.io/start/">Download</Link></td>
          <td>Requires 50+GB of storage</td>
        </tr>
        <tr>
          <td><Link to="https://github.com/vneio/sdnc">vneio/sdnc</Link></td>
          <td>Defunct Apr 2016</td>
          <td>BASH</td>
          <td>Intel DPDK technology</td>
          <td>-</td>
          <td>BASH Script</td>
          <td><Link to="https://github.com/vneio/sdnc">Download</Link></td>
          <td>Written in shell, no documentation, requires docker</td>
        </tr>
      </tbody>
    </Table>
    <h4 className="pt-4">To Be Decided</h4>
    <Table striped bordered responsive="xl">
      <thead>
        <tr>
          <th>Controller Name</th>
          <th>Status</th>
          <th>OS/Platform</th>
          <th>Derived From</th>
          <th>License</th>
          <th>Developed In</th>
          <th>Download</th>
          <th>Notes</th>
          <th>Static IP Address</th>
          <th>Assigned To</th>
          <th>Pros</th>
          <th>Cons</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><Link to="https://githubhelp.com/superkkt/cherry">Cherry</Link></td>
          <td>Active 0.14.2</td>
          <td>Windows/OS/Linux</td>
          <td>N/A</td>
          <td>GPL-2.0</td>
          <td>Go</td>
          <td><Link to="https://docs.docker.com/installation/">Docker</Link><Link to="https://golang.org/doc/install">Go Language</Link></td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>Not well documented, requires a MySQL database, written in Go</td>
        </tr>
        <tr>
          <td><Link to="https://floodlight.atlassian.net/wiki/spaces/floodlightcontroller/overview">Floodlight</Link></td>
          <td>Active-1.2</td>
          <td>Linux, Mac OS X 10.6 or higher, Windows</td>
          <td>OpenFlow</td>
          <td>Apache 2.0</td>
          <td>Java</td>
          <td><Link to="https://github.com/floodlight/floodlight">Download</Link></td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>Has a Web GUI that can write to the controller, Well documented</td>
          <td>Written in Java</td>
        </tr>
        <tr>
          <td><Link to="https://lighty.io/">Lighty-Core (lighty.io)</Link></td>
          <td>Active - 15.2.0</td>
          <td>Can run on Linux</td>
          <td>OpenDaylight</td>
          <td>EPL 1.0</td>
          <td>Java</td>
          <td><Link to="https://github.com/PANTHEONtech/lighty">Download</Link></td>
          <td>-</td>
          <td>-</td>
          <td>Chase</td>
          <td>-</td>
          <td>Written in JAVA, okay documentation (does not seem entry level)</td>
        </tr>
        <tr>
          <td><Link to="https://wiki.onosproject.org/display/ONOS/">ONOS</Link></td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>Has CLI (ssh capability), has a Web GUI, very well documented</td>
          <td>Written in Java, may not work on a raspberry PI</td>
        </tr>
      </tbody>
    </Table>
  </Container>
);

export default SFlowSDN;
