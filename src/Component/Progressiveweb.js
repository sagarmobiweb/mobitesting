import React from "react";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";

function Progressiveweb() {
  return (
    <>
      <div className="bnnr2  bnnrclr justify-content-between pt-3  witeheading ">
        <Container>
          <Row>
            <Col
              sm={12}
              className="d-flex flex-column justify-content-center  align-self-center text-padding  pe-30"
            >
              <h1>Progressive Web App Development</h1>
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
              <h2>
                Develop next-generation Progressive web apps to please consumers
                and boost conversions:
              </h2>
              <p>
                We are a leading provider of progressive web apps, and we have
                successfully implemented reliable and secure web app solutions
                across all business sectors.
              </p>
            </div>
          </Col>
          <Col
            sm={6}
            className="d-flex flex-column justify-content-center mt-5"
            data-aos="fade-left"
          >
            <img
              src="./assets/image/serviceimg/progressive-web-app.jpg"
              alt="test"
            />
          </Col>
        </Row>

        <Row className="mt-5">
          <Col sm={6} className="d-flex flex-column  " data-aos="fade-right">
            <img
              src="./assets/image/serviceimg/progressive-web-app.jpg"
              alt="test"
            />

            <ul className="mt-2">
              <li>
                <b>Responsive : </b> <br />
                We create solid progressive online applications that deliver
                seamless interactivity across all browsers and devices,
                regardless of form factors.
              </li>
              <li>
                <b>User-Friendly : </b> <br /> The interface we employ for
                Progressive web app development offers a user experience that is
                clear and captivating and moves fluidly between smartphones and
                tablets without any lags.
              </li>

              <li>
                <b>Re-Engaging : </b> <br />
                We design PWAs so that search engines can quickly find them, use
                them offline, and display them on the home screen. They
                incorporate push alerts to maintain user engagement among less
                active users.
              </li>
            </ul>
          </Col>
          <Col sm={6} className="d-flex flex-column   text-padding  pe-30 ">
            <div className="content-block-about  ios-left">
              <h2>
                Solutions for progressive web apps that are future-proof provide
                a number of advantages:
              </h2>
              <p>
                In order to create a feature-rich solution, we combine the
                strength of Progressive web app technology with our significant
                knowledge of developing mobile and web apps. Our developers of
                progressive web applications offer a formidable blend of
                technical know-how and deliver memorable experiences.
              </p>
              <ul>
                <li>
                  <b>Progressive :</b> <br />
                  Our dynamic upgrade-based PWA development services make it
                  simple for our clients to be visible across browsers.
                </li>
                <li>
                  <b>Connectivity Independent : </b> <br />
                  We integrate service workers so that your PWA functions just
                  as perfectly without a network as it would in a top-notch
                  network setting.
                </li>
                <li>
                  <b>Minimal data usage : </b> <br /> Your PWAs are made so that
                  they only occupy a very little amount of the meagre internet
                  bandwidth that users typically struggle with.
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

export default Progressiveweb;
