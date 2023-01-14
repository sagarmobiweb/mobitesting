import React from 'react'
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";



function Contactstripe() {


  return (
    <>
        <div className=" cntstripe  bnnrclr  align-self-center " >
        <Container>
          <Row>
            <Col
              sm={6}
              className="d-flex flex-column justify-content-center  align-self-center text-padding  pe-30"
            >
              <h1>Let's Talk </h1>
              <h2>We'r Here For You Provide Services </h2>
            </Col>
              <Col
              sm={6}
              className="d-flex  flex-column justify-content-center  align-self-center text-padding  pe-30"
            >
                 <div className="btnhome cntstripbtn"  data-aos="zoom-in">
              <a href="contactus">Contact us</a>
            </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Contactstripe