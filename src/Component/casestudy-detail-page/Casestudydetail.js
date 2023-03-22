import React from "react";
import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import {
  BiWalletAlt,
  BiCurrentLocation,
} from "react-icons/bi";



function Casestudydetail() {
 
  return (
    <>
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

      <Container>
        <Row>
          <Col
            sm={8}
            className="d-flex flex-column justify-content-center  align-self-center text-padding jobs-text  pe-30"
          >
            <div className="projectslide mt-3">
              <img src="./assets/image/casestudy-img.jpg" alt="test" />
            </div>
            <div className="jobdetails mt-5">
              <h1>Project Details</h1>
              <p>
                Objectively restore stand-alone markets rather than
                enterprise-wide products. Uniquely underwhelm best-of-breed mind
                share through adaptive niches. Seamlessly parallel task
                open-source content without resource sucking technology.
              </p>
            </div>
            <div className="liststy-text mt-4">
              <h2>Project 
              Working Skills</h2>
              <ul>
                <li>
                  Be involved in every step of the product design cycle from
                  discovery and user acceptance testing.
                </li>
                <li>
                  Work with BAs, product managers and tech teams to lead the
                  Product Design
                </li>
                <li>
                  Maintain quality of the design process and ensure that when
                  designs are translated into code they accurately.
                </li>
                <li>
                  Accurately estimate design tickets during planning sessions.
                </li>
              </ul>
            </div>
          </Col>

          <Col
            sm={4}
            className="d-flex flex-column mt-3  text-padding   job-overviews pe-30  "
          >
            <div className="job-over">
              <Card className="P-3">
                <h1>Project information</h1>
                <Card.Body>
                  <div className="icnbox-carerdetail">
                    <BiCurrentLocation style={{ fill: " #2e3c61" }} />
                    <div className="ct-p">
                      <Card.Title>Technology</Card.Title>
                      <p>React Native</p>
                    </div>
                  </div>
                </Card.Body>
 

                <Card.Body>
                  <div className="icnbox-carerdetail">
                    <BiWalletAlt style={{ fill: " #2e3c61" }} />
                    <div className="ct-p">
                      <Card.Title>Project :</Card.Title>
                      <p>www.example.com</p>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Casestudydetail;
