import React from "react";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";

function Hero() {
  return (
    <>
      <div className="bnnr justify-content-between">
        <Container>
          <Row>
            <Col
              sm={12}
              md={12}
              xl={6}
              className="d-flex flex-column   heroheading pt-5"
            >
              <h1>
                We offer modern & cost effective solutions for growing your
                business.
              </h1>
              <h2 className="pt-2 mb-3">
                Get your business to next level by using our experienced mobile
                application development team for developing user friendly
                applications.
              </h2>
              <div className="btnhome">
                <a href={"contactus"} alt="readme" rel="noreferrer">
                  Let's Talk
                </a>
              </div>
            </Col>
            <Col
              sm={12}
              md={6}
              xl={6}
              className="d-flex flex-column justify-content-center  tabimage "
            >
              <img src="./assets/image/home-banner-test.png" alt="Hombanner" />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Hero;
