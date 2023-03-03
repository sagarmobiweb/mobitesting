import React from "react";
import CountUp, { useCountUp } from "react-countup";
import { Container, Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { FaUsers } from "react-icons/fa";
import { BsEmojiSmile, BsJournalRichtext, BsHeadphones } from "react-icons/bs";

function Counter() {
  return (
    <>
      <Container className="mt-5 features" data-aos="fade-up">
        <Col
          sm={12}
          className="d-flex flex-column justify-content-center  align-self-center text-padding  pe-30"
        ></Col>
        <Row className="mt-5 countericon">
          <Col sm={3} className="mt-2">
            <Card className="pading-inner-counter">
              <div className="icnbox ">
                <BsHeadphones style={{ fill: " #15be56" }} />
                <Card.Body>
                  <p>
                    <CountUp delay={2} end={5} />
                    <span>+</span>
                  </p>
                  <Card.Title>Years In Business</Card.Title>
                </Card.Body>
              </div>
            </Card>
          </Col>

          <Col sm={3} className="mt-2">
            <Card className="pading-inner-counter">
              <div className="icnbox ">
                <BsJournalRichtext style={{ fill: " #ee6c20" }} />
                <Card.Body>
                  <p>
                    <CountUp delay={2} end={2} />
                    <span>+</span>
                  </p>
                  <Card.Title>Dedicated Project Managers </Card.Title>
                </Card.Body>
              </div>
            </Card>
          </Col>
          <Col sm={3} className="mt-2">
            <Card className="pading-inner-counter">
              <div className="icnbox">
                <BsEmojiSmile style={{ fill: " #728FCE" }} />
                <Card.Body>
                  <p>
                    <CountUp delay={2} end={250} />
                    <span>+</span>
                  </p>
                  <Card.Title>Clients World Wide</Card.Title>
                </Card.Body>
              </div>
            </Card>
          </Col>
          <Col sm={3} className="mt-2">
            <Card className="pading-inner-counter">
              <div className="icnbox ">
                <FaUsers style={{ fill: " #bb0852" }} />
                <Card.Body>
                  <p>
                    <CountUp delay={2} end={50} />
                    <span>+</span>
                  </p>
                  <Card.Title>Dedicated Team Members</Card.Title>
                </Card.Body>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default Counter;
