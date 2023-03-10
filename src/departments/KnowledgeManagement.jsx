import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const KnowledgeManagement = () => (
  <Container className="py-3">
    <h1>Knowledge Management</h1>
    <p>We will be using the React Bootstrap Framework to build and maintain the SCADA Lab website.</p>
    <h3>Development Tools</h3>
    <p>These are the standard development tools utilized by our team to develop the website.</p>
    <ul>
      <li><a href="https://www.jetbrains.com/idea/download/">IntelliJ IDEA</a>: Integrated Development Environment (IDE)</li>
      <li><a href="https://desktop.github.com/">Github Desktop</a>: Simplifies Git development workflow</li>
    </ul>
    <h3>Additional Resources</h3>
    <ul>
      <li><a href="https://react-bootstrap.netlify.app">React Bootstrap Documentation</a></li>
      <li><a href="https://www.freecodecamp.org/learn/responsive-web-design/#basic-html-and-html5">freeCodeCamp HTML/CSS Tutorials</a></li>
      <li><a href="https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/#basic-javascript">freeCodeCamp JavaScript Tutorials</a></li>
    </ul>
    <h3 className="pt-3">Updating a Fork</h3>
    <p>To ensure that your fork is up to date, click <em>Sync fork</em> on your fork&apos;s Github page to retrieve any changes from the main repo to your fork.</p>
    <img style={{ width: '100%', maxWidth: '800px' }} src="/images/KnowledgeManagement/syncfork.png" alt="Sync Fork" />
    <p>On Github Desktop, open your forked repository and make sure to click <em>Fetch origin</em> (or <em>Fetch upstream</em>, depending on your setup). This will update your local copy of the repository with all the latest changes.</p>
    <img style={{ width: '100%', maxWidth: '600px' }} src="/images/KnowledgeManagement/fetchUpstream.png" alt="Fetch Upstream" />
    <h3 className="pt-3">Creating a New Page</h3>
    <p><u>BEFORE ADDING ANY CHANGES, PLEASE MAKE SURE YOUR FORK IS UP TO DATE WITH THE MAIN REPOSITORY.</u> This ensures that there will be minimal merge conflicts when the webmaster approves your updates.</p>
    <p>Once you have verified that your fork and local copy are up to date, you can begin making edits. To add a new page to the website, create a new file <code>FILENAME.jsx</code> and store it in the appropriate directory. For example,
      this page is found in the <code>KnowledgeManagement.jsx</code> file in the <code>src/departments/</code> directory.
    </p>
    <p>To ensure consistent formatting across the entire website, each page should having the following template:</p>
    <Row className="justify-content-center pb-3">
      <Col lg={4} className="border border-secondary">
        <pre>
          {`
import React from 'react';

const FILENAME = () => (
  <Container className="py-3">
    <h1>Page Title</h1>
    
    // Other content...
    
  </Container>
);

export default [FILENAME];`}
        </pre>
      </Col>
    </Row>
    <p>To create a link to this page, navigate to the <code>src/App.jsx</code> file and create a new route.</p>
    <Row className="justify-content-center pb-3">
      <Col lg={6} className="border border-secondary">
        <pre>
          {`
import...
import FILENAME from 'FILEPATH'

const App = () => (
  <Router>
    <div className="d-flex flex-column min-vh-100">
      <NavBar />
      <Routes>
        ...
        
        <Route path="/PATH" element={<FILENAME />} />
        
      </Routes>
      <Footer />
    </div>
  </Router>
);

export default App;
`}
        </pre>
      </Col>
    </Row>
    <p>
      You can then direct users to this page through a link:
    </p>
    <pre>{'   <a href="/PATH">Link to Page</a>'}</pre>
    <p>which will appear as <a href="/PATH">Link to Page</a>.</p>
    <h3>React Bootstrap Tips</h3>
    <p>Important note: Borders and titles are added for visualization purposes.</p>
    <h4>Grid Layout</h4>
    <Row className="justify-content-center pb-3">
      <Col lg={5}>
        <pre>
          {`<Container>                     // Container
  <Row>                         // Row 1
    <Col>Column 1 of 3</Col>
    <Col>Column 2 of 3</Col>
    <Col>Column 3 of 3</Col>
  </Row>
  <Row>                         // Row 2
    <Col>Column 1 of 3</Col>
    <Col>Column 2 of 3</Col>
    <Col>Column 3 of 3</Col>
  </Row>
</Container>
`}
        </pre>
      </Col>
      <Col className="example">
        <Container>
          <p className="mb-0">Container</p>
          <Row>
            <p className="mb-0">Row 1</p>
            <Col>Column 1 of 3</Col>
            <Col>Column 2 of 3</Col>
            <Col>Column 3 of 3</Col>
          </Row>
          <Row>
            <p className="mb-0">Row 2</p>
            <Col>Column 1 of 3</Col>
            <Col>Column 2 of 3</Col>
            <Col>Column 3 of 3</Col>
          </Row>
        </Container>
      </Col>
    </Row>
    <h4>Horizontal Alignment</h4>
    <Row className="justify-content-center pb-3">
      <Col lg={5}>
        <pre>
          {`<Container>
  <Row className="justify-content-start">
    <Col>Box 1</Col>
  </Row>
  <Row className="justify-content-center">
    <Col>Box 2</Col>
  </Row>
  <Row className="justify-content-end">
    <Col>Box 3</Col>
  </Row>
</Container>
          `}
        </pre>
      </Col>
      <Col className="example">
        <Container>
          <Row className="justify-content-start">
            <Col xs={2}>Box 1</Col>
          </Row>
          <Row className="justify-content-center">
            <Col xs={2}>Box 2</Col>
          </Row>
          <Row className="justify-content-end">
            <Col xs={2}>Box 3</Col>
          </Row>
        </Container>
      </Col>
    </Row>
    <h4>Vertical Alignment</h4>
    <Row className="justify-content-center pb-3">
      <Col lg={5}>
        <pre>
          {`<Row className="align-items-start">
  <Col>Box 1</Col>
</Row>
<Row className="align-items-center">
  <Col>Box 2</Col>
</Row>
<Row className="align-items-end">
  <Col>Box 3</Col>
</Row>
      `}
        </pre>
      </Col>
      <Col className="example">
        <Row style={{ height: '150px' }} className="align-items-start">
          <Col style={{ height: 'auto' }}>Box 1</Col>
        </Row>
      </Col>
      <Col className="example">
        <Row style={{ height: '150px' }} className="align-items-center">
          <Col style={{ height: 'auto' }}>Box 2</Col>
        </Row>
      </Col>
      <Col className="example">
        <Row style={{ height: '150px' }} className="align-items-end">
          <Col style={{ height: 'auto' }}>Box 3</Col>
        </Row>
      </Col>
    </Row>
  </Container>
);

export default KnowledgeManagement;
