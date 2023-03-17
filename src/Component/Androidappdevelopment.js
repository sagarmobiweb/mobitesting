import React from "react";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";

import { Form } from "react-bootstrap";

import Button from "react-bootstrap/Button";

function Androidappdevelopment() {
  return (
    <>
      <div className="bnnr2  bnnrclr justify-content-between pt-3  witeheading ">
        <Container>
          <Row>
            <Col
              sm={12}
              className="d-flex flex-column justify-content-center  align-self-center text-padding  pe-30"
            >
              <h1> Android Mobile Application Development</h1>
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
            <div className="content-block-about Pe-5 ">
              <h2>Why choose us to create Android applications?</h2>
              <p>
                One of the most popular app marketplaces is Google Play. It
                provides adequate information about Android's millions of users.
                There is no more compelling justification for creating Android
                mobile applications. Because we are an award-winning Android app
                development business in India & the USA, we are aware of this
                and have created the strongest Android development team on-site.
              </p>
              <p className="mt-2">
                The end-user experience we provide is unparalleled, whether it
                be for smartphones, wearables, or TV. By differentiating
                ourselves on "how we do it," we sit down with our stakeholders
                to understand their business objectives and help them be
                accomplished using the greatest technology stack and subject
                matter expertise.
              </p>
            </div>
          </Col>
          <Col
            sm={6}
            className="d-flex flex-column justify-content-center mt-5"
            data-aos="fade-left"
          >
            <img
              src="./assets/image/serviceimg/android-right.jpeg "
              alt="test"
            />
          </Col>
        </Row>

        <Row className="mt-5">
          <Col
            sm={6}
            className="d-flex flex-column justify-content-center"
            data-aos="fade-right"
          >
            <img src="./assets/image/serviceimg/android.png" alt="test" />
          </Col>
          <Col
            sm={6}
            className="d-flex flex-column justify-content-center  align-self-center text-padding  pe-30 "
          >
            <div className="content-block-about  ios-left">
              <h2>
                Services for Complete Android App Development to Strengthen Your
                Business:
              </h2>
              <p>
                We don't simply offer top-notch Android app development
                services; we also create solutions that can change the way your
                company operates. Numerous industry verticals benefit from our
                solutions. By designing apps that function flawlessly on any
                Android device, we serve both established businesses and
                fledgling startups
              </p>
              <p>
                You can plan, conceptualize, design, create, and deliver
                enterprise-grade Android apps that are ready for prime time in
                the Google Play Store with the assistance of our highly
                qualified Android app developers. Simply share your concept with
                us, and our professionals will combine it with their knowledge
                and experience.{" "}
              </p>
              <p>
                <b>Our range of Android app development services includes:</b>
              </p>
              <ul>
                <li>Android app UI/UX design</li>
                <li>Flutter app development</li>
                <li>Custom Android application development</li>
                <li>Migrating seamlessly to the Android platform</li>
                <li>Kotlin app development</li>
                <li>Android app consultation</li>
                <li>App maintenance and support</li>
              </ul>
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
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="text" placeholder="Name" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Email" />
                  </Form.Group>
                  <Button className="cntbtn" type="submit">
                    Send
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

export default Androidappdevelopment;
