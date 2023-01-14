import React from "react";
import { Container, Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";


function Contactus() {
  return (

<>
    <div className="cbcnt">
      <div className="bnnr2 justify-content-between pt-3  witeheading ">
        <Container>
          <Row>
            <Col
              sm={12}
              className="d-flex flex-column justify-content-center  align-self-center text-padding  pe-30"
            >
              <h1>Contact Us</h1>
            </Col>
          </Row>
        </Container>
      </div>

      <Container className="mt-5 -flex flex-column justify-content-center  align-self-center">
        <Row>
          <Col sm={7}>
            <div className="subscribebtn">
              <div className="allheading ourvalues  ">
                <h3>Contact us</h3>
                <h2>Connect with us for <br></br>more information</h2>
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
          <Col sm={5}>
            <div className="imgcnt">
              <img
                center
                src="./assets/image/newcont.jpg"
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

export default Contactus;
