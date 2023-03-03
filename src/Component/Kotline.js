import React from "react";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";

function Kotline() {
  return (
    <>
      <div className="bnnr2  bnnrclr justify-content-between pt-3  witeheading ">
        <Container>
          <Row>
            <Col
              sm={12}
              className="d-flex flex-column justify-content-center  align-self-center text-padding  pe-30"
            >
              <h1>Kotline Mobile Application Development</h1>
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
                Kotlin app development for contemporary Android app development
              </h2>
              <p>
                Kotlin is a beautifully designed and advanced programming
                language that will make developing native Android apps for
                Android devices faster and more enjoyable. It is Google's
                official language for Android app development. Because of its
                lower likelihood of defects, obvious readability of code, and
                shortened development time, Kotlin has emerged as a favoured
                language for Android developers.
                <p>
                  It is without a doubt a cutting-edge programming language that
                  can create inspiring and future-proof Android applications
                  because it excels at developing server-side web applications.
                  A robust team of Kotlin Android developers at MobiWeb
                  Creations has years of training and experience creating
                  specialised, user-friendly apps.
                </p>
              </p>
              <p>
                By using the Kotlin programming language, we were able to
                provide high-caliber solutions faster. Kotlin app developers
                with expertise and certification make up our team, and each
                project receives a dedicated team member. We manage our app
                development projects using an agile methodology and place a
                premium on the UI/UX components of mobile applications.
                <p>
                  We at MobiWeb Creations believe in giving our customers timely
                  responses to their questions, and quick delivery has become a
                  habit. We are always available to talk about your needs. For
                  stress-free mobile app development, you may entrust us with
                  the complete project. We are prepared to assist you with
                  scalable and engaging solutions that will help your company
                  reach its objectives.
                </p>
              </p>
            </div>
          </Col>
          <Col sm={6} className="d-flex flex-column  justify-content-center ">
            <img
              src="./assets/image/serviceimg/kotline-App-dev.png"
              alt="test"
              data-aos="fade-left"
            />
            <div className="kotlin-image-btmtext mt-2">
              <p>
                <b>Why should you select Kotlin? </b>
              </p>
              <ul>
                <li>Interoperability with Java </li>
                <li>Multi-platform support</li>
                <li>Tool-friendly language</li>
                <li>Less redundancy, fewer errors</li>
                <li>Easy migration</li>
                <li>Android Jetpack support</li>
                <li>Safer codes</li>
                <li>Community support</li>
              </ul>
            </div>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col sm={6} className="d-flex flex-column " >
            <img src="./assets/image/serviceimg/kotline-app.png" alt="test"  data-aos="fade-right"/>
            <ul className="mt-2 ">
              <li>
                <b>Kotlin app maintenance: </b> <br />
                Our knowledgeable Kotlin developers will make tailored
                adjustments to your current Kotlin project using the newest
                technology.
              </li>
              <li>
                <b>Kotlin migration: </b> <br />
                You want to switch from the Android platform's native technology
                to Kotlin. Our Kotlin engineers can complete that conversion
                quickly and easily.
              </li>
              <li>
                <b>Independent testing: </b> <br />
                We can properly inspect your Kotlin app, preventing unpleasant
                surprises after its release. We make sure your Kotlin app is
                free of errors, loads quickly, and has clean code.
              </li>
            </ul>
          </Col>
          <Col sm={6}>
            <div className="content-block-about  ios-left">
              <h2>The top Kotlin app development services</h2>
              <p>
                Being one of the top Kotlin app development companies, we stay
                current on all the newest developments in this programming
                language so that we can provide you with a solution that is
                specifically designed to meet your company's demands.
              </p>
              <ul>
                <li>
                  <b>Mobile app development:</b> <br />
                  Take use of Kotlin, a cutting-edge technology, to get
                  stress-free mobile app development services. Obtain a robust
                  app with top-notch features and functionality.
                </li>
                <li>
                  <b>Kotlin app optimization: :</b> <br />
                  You can contact our Kotlin developers with any questions. We
                  effectively examine and optimize Kotlin code to get rid of all
                  issues and mistakes in your Kotlin application.
                </li>
                <li>
                  <b>Upgrade the Kotlin application: </b> <br />
                  Collaborate with our knowledgeable and modern developers to
                  modernie your Kotlin app and connect with the audience that is
                  always prepared for the future.
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

export default Kotline;
