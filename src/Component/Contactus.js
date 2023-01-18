import React from "react";
import { Container, Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {
  RiFacebookCircleFill,
  RiInstagramFill,
  RiLinkedinBoxFill,
  RiPinterestFill,
  RiTwitterFill,
  RiFilePdfFill,
} from "react-icons/ri";

function Contactus() {
  return (
    <>
      <div className="cbcnt">
        <div className="bnnr2 justify-content-between pt-3 bt-5 witeheading ">
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
            <Col sm={6}>
              <div className="subscribebtn">
                <div className="allheading ourvalues  ">
                  <h3>Contact us</h3>
                  <h2>
                    Connect with us for <br></br>more information
                  </h2>
                </div>
                <Form className="mt-3">
                  <Form.Group className="mb-3" controlId="formBasicrtext">
                    <Form.Control type="text" placeholder="Name" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Email" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicNumber">
                    <Form.Control type="number" placeholder="Phone" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicTextarea">
                    <Form.Control
                      as="textarea"
                      type="text"
                      placeholder="Message"
                    />
                  </Form.Group>

                  <Button className="cntbtn" type="submit">
                    Send
                  </Button>
                </Form>
              </div>
            </Col>
            <Col sm={6}>
              <div className="imgcnt">
                <img
                  center
                  src="./assets/image/newcont.jpg"
                  data-aos="zoom-out"
                  alt="test"
                ></img>
              </div>

              <div className=" allheading   addresdetails">
                <p>
                  Address : MobiWeb Creations, #6B3, Block 4, Kent Mahal,
                  Infopark Rd, Kakkanad, Kerala 682303
                </p>
                <p>
                  Phone :{" "}
                  <a href={"tel:+918800403610"} rel="noreferrer">
                    {" "}
                    +918800403610
                  </a>
                </p>
                <p>
                    Emai : <a
                    href={"mailto:sales@mobiwebcreations.com"}
                    rel="noreferrer"
                  >
                 sales@mobiwebcreations.com{" "}
                  </a>
                </p>
                 <div className="social">
                <a
                  target="_blank"
                  href={"https://www.facebook.com/"}
                  rel="noreferrer"
                >
                  <RiFacebookCircleFill />
                </a>

                <a
                  target="_blank"
                  href={"https://www.instagram.com/"}
                  rel="noreferrer"
                >
                  <RiInstagramFill />
                </a>

                <a
                  target="_blank"
                  href={"https://linkedin.com/"}
                  rel="noreferrer"
                >
                  <RiLinkedinBoxFill />
                </a>

                <a
                  target="_blank"
                  href={"https://Pinterest.com/"}
                  rel="noreferrer"
                >
                  <RiPinterestFill />
                </a>

                <a
                  target="_blank"
                  href={"https://twitter.com/"}
                  rel="noreferrer"
                >
                  <RiTwitterFill />
                </a>
              </div>
              </div>

             
            </Col>
          </Row>

<Row>
  <Col col sm={12}>
   

  </Col>
</Row>




        </Container>
      </div>
    </>
  );
}

export default Contactus;
