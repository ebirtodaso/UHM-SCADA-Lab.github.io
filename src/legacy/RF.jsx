import { Container } from 'react-bootstrap';

const RF = () => (
  <Container className="py-3">
    <h1>Radio Frequency</h1>
    <h3>
      Legacy Equipment:
      {' '}
      <a href="/pdfs/MDSentraNET900Manual.pdf" target="_blank" rel="noreferrer">MDS entraNET 900</a>
    </h3>
    <img src="/images/MDSentraNET900.png" alt="MDS entraNET 900" style={{ width: '100%', maxWidth: '500px'}}/>
    <p>At the beginning of the Fall 2022 semester, the SCADA Lab was using the above MDS extender for radio transmissions. The main problem that was that the connection was unstable. It would lose connection and was not be able to re-establish the connection on its own. To re-establish the connection we tried unplugging and plugging in the power, ethernet, and antenna cables on the control side MDS, which did nothing. We repeated this on the production side and power cycling work to re-establish the connection.
    </p>
    <p>It was concluded that the problem was the production side MDS box. We were able to induce the problem by pinging the control side switch (10.1.1.10) from Qtpi-3(10.1.1.132) with a large packet using the command: 'ping 10.1.1.10 -s 10000'. In Wireshark, we saw the ARP table query: 'who has 10.1.1.10 tell 10.1.1.132'. After about a second of no response, QTpi-3 would try again: 'who has 10.1.1.10 tell 10.1.1.132'. After around 3 Queries, the OS of QTpi-3 would send the message 'Destination Host Unreachable'.</p>
  </Container>
);

export default RF;
