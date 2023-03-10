import React from "react";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";

import { Form } from "react-bootstrap";

import Button from "react-bootstrap/Button";

function Hybrid() {
  return (
    <>
      <div className="bnnr2  bnnrclr justify-content-between pt-3  witeheading ">
        <Container>
          <Row>
            <Col
              sm={12}
              className="d-flex flex-column justify-content-center  align-self-center text-padding  pe-30"
            >
              <h1> Hybrid Mobile Application Development</h1>
            </Col>
          </Row>
        </Container>
      </div>

      <Container className="mt-5" data-aos="fade-up">
        <Row>
          <Col
            sm={6}
            className="d-flex flex-column justify-content-center  align-self-center text-padding  pe-30 "
          >
            <div className="content-block-about  ">
              <h2>Hybrid App Development</h2>
              <p>
                No matter what platform your consumers and clients prefer, make
                your software available to them. With consistent functionality
                and user-friendly UI/UX across all devices, MobiWeb Creations
                can assist your company in developing software.
              </p>
              <p>
                While native applications can speed up performance and maximise
                capabilities, web-based apps offer a more affordable approach to
                offer platform compatibility. It can be very advantageous to
                combine the advantages of both into a special hybrid app
                architecture.
              </p>
              <p>
                The advantages of both worlds are combined in hybrid mobile
                application development, which expands your audience.
              </p>
              <b>HYBRID APP DEVELOPMENT EXPERIENCE:</b>
              <ul>
                <li>Project budget</li>
                <li>Analysis of user requirements</li>
                <li>Engineering with requirements</li>
                <li>Prototyping</li>
                <li>bug removal</li>
                <li>Mobile advertising</li>
              </ul>
            </div>
          </Col>
          <Col sm={6} className="d-flex flex-column " data-aos="fade-left">
            <img src="./assets/image/serviceimg/hybrid-right.jpg" alt="test" />
          </Col>
        </Row>

        <Row>
          <Col
            sm={6}
            className="d-flex flex-column justify-content-center mt-5"
            data-aos="fade-right"
          >
            <img
              src="./assets/image/serviceimg/hybrid-left-img.png"
              alt="test"
            />
          </Col>
          <Col
            sm={6}
            className="d-flex flex-column justify-content-center  align-self-center text-padding  pe-30 "
          >
            <div className="content-block-about  ios-left">
              <h2>
                DISCUSS WITH ONE OF OUR HYBRID APP DEVELOPMENT SPECIALISTS
                REGARDING:
              </h2>
              <p>
                <ul>
                  <li>Analysis and reporting</li>
                  <li>Unique characteristics of hybrid technologies</li>
                  <li>development and invention of architecture</li>
                  <li>Support and upkeep</li>
                  <li>Support and upkeep</li>
                  <li> Promotional possibilities</li>
                  <li>
                    No matter the gadget your customers prefer, provide them
                    with your brilliant idea. Trust us with the creation of your
                    hybrid mobile applications.
                  </li>
                </ul>
              </p>
            </div>
          </Col>
        </Row>
      </Container>

      <div className="cbcnt  cntus-bg mt-5">
        <Container className="mt-5 -flex flex-column justify-content-center  align-self-center">
          <Row>
            <Col sm={5}>
              <div className="subscribebtn">
                <div className="allheading ourvalues  ">
                  <h3> CONTACT US</h3>
                  <h2>
                    Connect with us for <br></br>more information
                  </h2>
                </div>
                <Form className="mt-3">
                  <Form.Group className="mb-3" controlId="formBasicrtext">
                    <Form.Control
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Name"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicNumber">
                    <Form.Control
                      type="number"
                      name="phone"
                      id="phone"
                      placeholder="Phone"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicTextarea">
                    <Form.Control
                      as="textarea"
                      type="text"
                      placeholder="Message"
                      name="message"
                      id="text"
                    />
                  </Form.Group>

                  <Button className="cntbtn" type="submit">
                    Submit
                  </Button>
                </Form>
              </div>
            </Col>
            <Col sm={7}>
              <div className="imgcnt">
                <img
                  center
                  src="./assets/image/newcontn.png"
                  data-aos="zoom-out"
                  alt="test"
                ></img>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Hybrid;
