import React from 'react'
import CountUp, { useCountUp } from 'react-countup';
import { Container, Row  } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { FaUsers } from "react-icons/fa";
import { BsEmojiSmile,BsJournalRichtext,BsHeadphones } from "react-icons/bs";

function Counter() {

  return (
    <>
       <Container className="mt-5 features" data-aos="fade-up">
                <Col
                    sm={12}
                    className="d-flex flex-column justify-content-center  align-self-center text-padding  pe-30">
                </Col>
                <Row className="mt-5 countericon">
                    <Col sm={3} className="mt-2">
                        <Card className="P-2">
                            <div className="icnbox">
                                <BsEmojiSmile style={{fill:" #728FCE"}}/>
                                <Card.Body>         
                                 <CountUp delay={2} end={232} />
                                   <Card.Title>Clients World Wide</Card.Title>
                                </Card.Body>
                            </div>
                        </Card>
                    </Col>
                     <Col sm={3} className="mt-2">
                        <Card className="P-2">
                            <div className="icnbox ">
                           <BsJournalRichtext   style={{fill:" #ee6c20"}}/>
                                <Card.Body>
                                 <CountUp delay={2} end={450}/>
                                   <Card.Title>Projects Completed</Card.Title>
                                </Card.Body>
                            </div>
                        </Card>
                     </Col>
                       <Col sm={3} className="mt-2">
                        <Card className="P-2">
                            <div className="icnbox ">
                                <BsHeadphones style={{fill:" #15be56"}}/>
                                <Card.Body>
                                 <CountUp delay={2} end={5} />
                                   <Card.Title>Year In business</Card.Title>
                                </Card.Body>
                            </div>
                        </Card>
                   
                    </Col>
                    <Col sm={3} className="mt-2">
                        <Card className="P-2">
                            <div className="icnbox ">
                                <FaUsers style={{fill:" #bb0852"}}/>
                                <Card.Body>
                                 <CountUp delay={2} end={50} />
                                   <Card.Title>Our Team</Card.Title>
                                </Card.Body>
                            </div>
                        </Card>
                   
                    </Col>
                  </Row>
        </Container>
    </>
  )
}
export default Counter