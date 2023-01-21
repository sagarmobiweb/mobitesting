import React from 'react'
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";

import { Form } from "react-bootstrap";

import Button from "react-bootstrap/Button";







function Android() {
  return (
    <>
   <div className="bnnr2  bnnrclr justify-content-between pt-3  witeheading ">
        <Container>
          <Row>
            <Col
              sm={12}
              className="d-flex flex-column justify-content-center  align-self-center text-padding  pe-30"
            >
              <h1> Android Mobile Application Development</h1>
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
              <h3>Best Android Mobile</h3>
              <h2>
                Seamlessly actualize client-based users after out-of-the-box
                value. Globally embrace strategic data through frictionless
                expertise.
              </h2>
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
            <img src="./assets/image/testimgss.jpg" alt="test" />
          </Col>
        </Row>

        <Row>
          <Col
            sm={6}
            className="d-flex flex-column justify-content-center mt-5"
            data-aos="fade-right"
          >
            <img src="./assets/image/testimgss.jpg" alt="test" />
          </Col>
          <Col
            sm={6}
            className="d-flex flex-column justify-content-center  align-self-center text-padding  pe-30 "
          >
            <div className="content-block-about  ios-left">
              <h3>Best Android Mobile</h3>
              <h2>
                Seamlessly actualize client-based users after out-of-the-box
                value. Globally embrace strategic data through frictionless
                expertise.
              </h2>
              <p>
                Quisquam vel ut sint cum eos hic dolores aperiam. Sed deserunt
                et. Inventore et et dolor consequatur itaque ut voluptate sed
                et. Magnam nam ipsum tenetur suscipit voluptatum nam et est
                corrupti.
              </p>
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
  )
}

export default Android