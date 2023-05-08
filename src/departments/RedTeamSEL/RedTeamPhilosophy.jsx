import React from 'react';
import { Col, Row, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const RedTeamPhilosophy = () => (
  <span>
    <Row className="justify-content-center">
      <Col lg={6}>
        <h3>Red Team Philosophy</h3>
        <img style={{ width: '100%', maxWidth: '400px' }} src="/images/RedTeamSEL/hackerman.png" alt="Hackerman" />
        <h5>What is a red team and what is their purpose?</h5>
        <p>
          A “red team” in the cybersecurity context is a term used to describe a designated group of individuals
          that measure the resilience of a network. They do so by implementing attacks that simulate a bad actor
          attempting to infiltrate a network for the purpose of finding vulnerabilities. This adversarial approach
          to testing a network finds problems before anyone else can and is considered to be an efficient way of
          building a stronger network. Red teams can be a valuable asset to any network operation that requires the
          ability to function 24/7.  The usefulness of red teams are recognized by a wide range of both public and
          private sectors including government organizations, banks, and large corporations.
        </p>
        <h5>How do red teams measure network resilience?</h5>
        <p>
          Earlier, we used the description that a red team simulates a bad actor when measuring network resilience.
          This is a key component of how a red team operates and is what we mean when we say that a red team takes an adversarial approach to testing a network.
          How is this done? By using methods that a bad actor would in a real-world scenario. These methods do not have to be state-of-the-art or even the most optimum, they are tools/techniques that just “work”.
          <Link to="https://medium.com/@bertinjoseb/post-auth-rce-based-in-malicious-lua-plugin-script-upload-scada-controllers-located-in-russia-57044425ac38">
            It can be something as simple as a well phrased search on a publicly accessible website and a little bit of scripting.
          </Link>
          The linked article demonstrates how an entire SCADA system can be compromised through relatively simple methods.
          The devices they mentioned were by a different brand of SCADA devices, but what if we tried this on the SEL brand
          that we use in the lab?
        </p>
        <Table striped bordered>
          <tbody>
            <tr>
              <td>
                <img style={{ width: '100%', maxWidth: '400px' }} src="/images/RedTeamSEL/scada_search_1.png" alt="SCADA Search 1" />
              </td>
              <td>
                <img style={{ width: '100%', maxWidth: '400px' }} src="/images/RedTeamSEL/scada_search_2.png" alt="SCADA Search 2" />
              </td>
            </tr>
            <tr>
                Results from:
               <Link to="https://www.shodan.io/search?query=country%3A%22US%22++title%3A%22SEL%22">
                 https://www.shodan.io/search?query=country%3A%22US%22++title%3A%22SEL%22
               </Link>
            </tr>
          </tbody>
        </Table>
        <p>
          Since this isn’t a device on our network, we should probably stop here as we don’t want to become fugitives
          and SEL devices do include a large amount of security to prevent any further intrusion.
          This and methods like it are how a red team would simulate a bad actor attempting to infiltrate a network.
        </p>
        <h5>Why would a SCADA system want a red team?</h5>
        <p>
          SCADA systems have the convenience of being able to operate remotely via a connected network.
          Operators can oversee day-to-day activities without having to visit each site individually.
          This convenience is not limited to just the operators as anyone with access to the network can see
          and do what they do. Including someone with malicious intent. Consider our previous example of someone
          finding a device connected to a network, except this time the device was the gateway to a SCADA system
          used in a statewide electrical power grid where an operator can simply start or stop service for any
          location in the state by logging in through the gateway. If someone managed to infiltrate that gateway,
          they would potentially have enough control to shut down power for the entire state.
        </p>
        <p>Where does a red team fit into this scenario? A SCADA system using a red team has the benefit of
          knowing exactly how their network can be compromised. By having the knowledge of what kind of attack
          works on their system, other network teams can create more effective defensive measures. When you have a
          team whose sole purpose is to find weaknesses within your network, you can more accurately and efficiently
          build a stronger network.
        </p>
      </Col>
    </Row>
  </span>
);

export default RedTeamPhilosophy;
