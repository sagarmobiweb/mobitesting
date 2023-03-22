import { Container, Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { AiFillCloseCircle } from "react-icons/ai";
import React from "react";
import Button from "react-bootstrap/Button";
import "./casestudy.css";
import { Helmet } from "react-helmet";

function Casestudy() {
  return (
    <>
      <Helmet>
        <title>
          Casestudy MobiWeb Creations - Mobile Application Development
        </title>
        <meta
          name="description"
          content="How much does it cost to create a Snapchat-like app? "
        />
        <meta keyword=" Casestudy us mobile app development services" />
        <meta charset="utf-8" />
      </Helmet>
      <div className="bnnr2  bnnrclr justify-content-between pt-3  witeheading ">
        <Container>
          <Row>
            <Col
              sm={12}
              className="d-flex flex-column justify-content-center  align-self-center text-padding  pe-30"
            >
              <h1> Case Study</h1>
            </Col>
          </Row>
        </Container>
      </div>
      <Container
        className="mt-5  text-center service  casestudy"
        data-aos="fade-up"
      >
        <Row>
          <Col sm={4} className="mt-2">
            <a href="case-study-detail">
              <Card className="P-3">
                <Card.Img
                  src="./assets/image/serviceimg/ios-app-image.png"
                  alt="test"
                  className="p-4"
                  data-aos="zoom-out"
                />
              </Card>
            </a>
          </Col>
          <Col sm={4} className="mt-2">
            <a href="case-study-detail">
              <Card className="P-3">
                <Card.Img
                  src="./assets/image/serviceimg/kotline-app.png"
                  alt="test"
                  className="p-3"
                  data-aos="zoom-out"
                />
              </Card>
            </a>
          </Col>
          <Col sm={4} className="mt-2">
            <a href="case-study-detail">
              <Card className="P-3">
                <Card.Img
                  src="./assets/image/serviceimg/reactnetivt2.png"
                  alt="test"
                  className="p-3"
                  data-aos="zoom-out"
                />
              </Card>
            </a>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Casestudy;
