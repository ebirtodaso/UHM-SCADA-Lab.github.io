import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Col, Offcanvas, Row } from 'react-bootstrap';

const PiAPI = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <span>
      <Link to="" onClick={handleShow}>Pi IO and RESTful API</Link>

      <Offcanvas show={show} onHide={handleClose} style={{ maxWidth: '800px', width: '100%' }}>
        <Offcanvas.Header closeButton>
          <h1>Pi IO and RESTful API</h1>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <h3>Using GPIO</h3>
          <ul>
            <li>The GPIO pins use a voltage of 3.3VDC for both input and output.</li>
            <li>
              <Link to="https://www.youtube.com/watch?v=NAl-ULEattw">Tutorial Followed</Link>
            </li>
            <li>
              <a href="/pdfs/PiAPI_exampleGPIO.pdf">Example wiring (modified from video tutorial)</a>
            </li>
            <li>
              <a href="/PiAPI_gpioTesting.py">Example python program</a>
            </li>
          </ul>
          <h3>Light Sensor</h3>
          <ul>
            <li><Link to="https://www.amazon.com/dp/B07TGKNDRB/ref=cm_sw_em_r_mt_dp_5YMB0WM1V7T660K93SKN">Light Sensor w/ Relay on Amazon</Link></li>
            <li><a href="/pdfs/PiAPI_lightsensorwiring.pdf">Wiring Diagram and Picture</a></li>
            <li>Potentiometer currently set at about 0.6 (0 to 1 range)</li>
            <li>There is a python program on Raspberry PI-07 (the attached PI) named &quot;LightSensor.py&quot; used to test with current setup</li>
          </ul>
          <h3>REST API</h3>
          <ul>
            <li>The idea to connect the light sensor to the SDN controller.</li>
            <li>A RESTful api is basically just a web server with an API (application programming interface) where you can put data to it and get data from it.</li>
            <li>We followed this <Link to="https://www.youtube.com/watch?v=GMppyAPbLYk">video</Link>. Only up until minute 26:49 is needed.</li>
            <li>An example to set up a REST api that can only respond to get requests is shown below.</li>
          </ul>
          <Row className="justify-content-center">
            <Col lg={6} className="border border-secondary">
              <pre>
                {`
from flask import Flask, request
from flask_restful import Api, Resource

app = Flask(__name__)
api = Api(app)

class name_of_class(Resource):
  def get(self):
    return {'name':'hello'}

api.add_resource(name_of_class, '/')

if __name__ == "__main"__":
  app.run(host='10.1.XX.XX')`}
              </pre>
            </Col>
          </Row>
          <ul>
            <li>I would recommend watching the video for a more in-depth explanation.</li>
            <li>An example that we have used in lab, from Photo pi located at ~/rest_api/rest929.py</li>
          </ul>
          <Row className="justify-content-center">
            <Col lg={6} className="border border-secondary">
              <pre>
                {`
from flask import Flask, request
from flask_restful import Api, Resource 
RPi.GPIO as GPIO

GPIO.setmode(GPIO.BOARD)
inPin = 11
GPIO.setup(inPin, GPIO.IN)

app = Flask(__name__)
api = Api(app)

class Lights(Resource):
  def get(self):
    lights = GPIO.input(inPin)
      return lights

api.add_resource(Lights, '/')

if __name__ == "__main__":
  app.run(host='10.1.88.5')`}
              </pre>
            </Col>
          </Row>
          <ul>
            <li>To perform a get request, either use a web browser on a device that is connected to the network and go to: http://10.1.88.5:5000/</li>
            <li>Or use a program similar to the example shown below from Photo pi located at ~/rest_api/resttest929.py</li>
          </ul>
          <Row className="justify-content-center">
            <Col lg={6} className="border border-secondary">
              <pre>
                {`
import requests

BASE = 'http://10.1.88.5:5000/'

response = requests.get(BASE)

print(response.json())`}
              </pre>
            </Col>
          </Row>
        </Offcanvas.Body>
      </Offcanvas>
    </span>
  );
};

export default PiAPI;
