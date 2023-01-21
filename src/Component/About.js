import React from "react";
import Banner from "./Banner";
import { Container, Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import CountUp, { useCountUp } from "react-countup";
import Card from "react-bootstrap/Card";
import { BsEmojiSmile, BsJournalRichtext, BsHeadphones } from "react-icons/bs";
import Counter from "./Counter";
import { FaUsers } from "react-icons/fa";

function About() {
  return (
    <>
      <Banner />
      <Container className="mt-5" data-aos="fade-up">
        <Row>
          <Col
            sm={6}
            className="d-flex flex-column justify-content-center  align-self-center text-padding  pe-30 "
          >
            <div className="content-block-about  ">
              <h3>WHO WE ARE</h3>
              <h2>Dolores est repellat corrupti reprehenderit.</h2>
              <p>
                Quisquam vel ut sint cum eos hic dolores aperiam. Sed deserunt
                et. Inventore et et dolor consequatur itaque ut voluptate sed
                et. Magnam nam ipsum tenetur suscipit voluptatum nam et est
                corrupti.
              </p>
            </div>

            <Row className="mt-2 mb-2 countericon">
              <Col sm={6}>
                <Card>
                  <div className="icnbox">
                    <BsJournalRichtext style={{ fill: " #728FCE" }} />
                    <Card.Body>
                      <CountUp delay={2} end={90} />%
                      <Card.Title>WEB DEVELOPMENT SKILL</Card.Title>
                    </Card.Body>
                  </div>
                </Card>
              </Col>
              <Col sm={6}>
                <Card>
                  <div className="icnbox ">
                    <BsJournalRichtext style={{ fill: " #728FCE" }} />
                    <Card.Body>
                      <CountUp delay={2} end={80} />%
                      <Card.Title>MOBILE APPLICATION SKILL</Card.Title>
                    </Card.Body>
                  </div>
                </Card>
              </Col>
            </Row>

            <div className="btnhome">
              <a href="contactus">Read More</a>
            </div>
          </Col>
          <Col
            sm={6}
            className="d-flex flex-column justify-content-center mt-5"
            data-aos="fade-left"
          >
            <img src="./assets/image/aboutus-home.jpg" alt="test" />
          </Col>
        </Row>
      </Container>
      <div className="whatwedo">
        <Container className="mt-5" data-aos="fade-up">
          <Row>
            <Col
              sm={6}
              className="d-flex flex-column justify-content-center mt-5  pe-5"
              data-aos="fade-right bgimg"
            >
              <img
                src="./assets/image/valuesimg/values-11.png"
                alt="whatwedo"
              />
            </Col>

            <Col
              sm={6}
              className="d-flex flex-column justify-content-center  align-self-center text-padding  pe-5"
            >
              <div className="content-block-about  clrwhtwedo">
                <h3 style={{ color: "#fff" }}>WHAT WE DO</h3>
                <h2 style={{ color: "#fff" }}>
                  Dolores est repellat corrupti reprehenderit.
                </h2>
                <p style={{ color: "#fff" }}>
                  Quisquam vel ut sint cum eos hic dolores aperiam. Sed deserunt
                  et. Inventore et et dolor consequatur itaque ut voluptate sed
                  et. Magnam nam ipsum tenetur suscipit voluptatum nam et est
                  corrupti.
                </p>
              </div>
              <div className="btnhome" >
                <a href="#">Read More</a>
              </div>
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
              <h3>OUR STORY</h3>
              <h2>Dolores est repellat corrupti reprehenderit.</h2>
              <p>
                Quisquam vel ut sint cum eos hic dolores aperiam. Sed deserunt
                et. Inventore et et dolor consequatur itaque ut voluptate sed
                et. Magnam nam ipsum tenetur suscipit voluptatum nam et est
                corrupti.
              </p>
            </div>
            <div className="btnhome">
              <a href="contactus">Read More</a>
            </div>
          </Col>
          <Col
            sm={6}
            className="d-flex flex-column justify-content-center mt-5"
            data-aos="fade-left"
          >
            <img src="./assets/image/about.jpg" alt="test" />
          </Col>
        </Row>
      </Container>

      <div className="cbcnt  cntus-bg">
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

export default About;
