import React from "react";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";

import { Form } from "react-bootstrap";

import Button from "react-bootstrap/Button";

function Ionic() {
  return (
    <>
      <div className="bnnr2  bnnrclr justify-content-between pt-3  witeheading ">
        <Container>
          <Row>
            <Col
              sm={12}
              className="d-flex flex-column justify-content-center  align-self-center text-padding  pe-30"
            >
              <h1>Ionic Mobile Application Development</h1>
            </Col>
          </Row>
        </Container>
      </div>

      <Container className="mt-5" data-aos="fade-up">
        <Row>
          <Col sm={6} className="d-flex flex-column  text-padding  pe-30 ">
            <div className="content-block-about  ">
              <h2>Ionic App Development</h2>
              <p>
                The powerful mobile app development platform Ionic makes it
                simple to create hybrid apps. Having high-performing
                cross-platform software with native UI elements helps your
                business. The front-end portion of the app's development, which
                makes it user-friendly, is where Ionic app development mostly
                concentrates its efforts. Ionic app development shows itself to
                be a valuable tool for any organizations looking to appeal to
                the mobile market. Leading Ionic app development company MobiWeb
                Creations assists companies in making the most of the potent
                Ionic framework.
                <p>
                  To create cutting-edge mobile apps with a fluid UI, our
                  skilled developers provide perfect Ionic application
                  development services. As a leading provider of Ionic
                  application development, we assist you in making the most of
                  the Ionic platform.
                </p>
              </p>
              <p>
                Being the top Ionic mobile app development company, we have
                great experience and apply tried-and-true methods to produce
                mobile apps that are future-proof. As a partner in Ionic mobile
                app development, we assist you in creating performance-driven
                apps that successfully capitalise on mobile audiences.
              </p>

              <ul className="mt-2">
                <p>
                  <b>Ionic Application Development Services: </b>
                </p>
                <li> Ionic Widget Development</li>
                <li> Ionic Support and Maintenance </li>
                <li> Custom Plugin Development </li>
                <li> Hybrid App Development </li>
              </ul>
            </div>
          </Col>
          <Col sm={6} className="d-flex flex-column  ">
            <img
              src="./assets/image/serviceimg/Ionic-mobile-app.jpg"
              alt="test"
              data-aos="fade-left"
            />

            <ul className="mt-2">
              <li>Ionic App Integration </li>
              <li>Ionic Enterprise App Development </li>
              <li>Ionic Migration Services </li>
              <li>Ionic QA & Testing </li>
            </ul>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col
            sm={6}
            className="d-flex flex-column  "
            data-aos="fade-right"
          >
            <img
              src="./assets/image/serviceimg/Ionic-Development.jpg"
              alt="test"
            />
          </Col>
          <Col sm={6} className="d-flex flex-column   text-padding  pe-30 ">
            <div className="content-block-about  ios-left">
              <h2>Ionic App Development Advantages:</h2>
              <p>
                When it comes to hybrid mobile applications, Ionic framework is
                the most popular option. Its users can take advantage of a wide
                range of functions and components. the following are them:
              </p>

              <ul>
                <li>
                  Because the Ionic framework is so simple to use, developers
                  can take full advantage of this platform's capabilities.
                </li>
                <li>
                  The ionic framework is compatible with iOS 7 and Android 4.1.
                  These features of the platform hasten the development of the
                  apps.
                </li>
                <li>
                  You will have the chance to work with themes and components
                  that are highly configurable if you use Ionic for app
                  development. So, you can create the app however you choose.
                </li>
                <li>
                  AngularJS is the foundation of the Ionic framework. This will
                  offer your app a solid framework and make it simple to manage
                  your code.
                </li>
                <li>
                  With Ionic, Cordova plugins help you obtain the greatest
                  designs. You may use the best functions, including the camera,
                  GPS, flashlight, and others.
                </li>
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

export default Ionic;
