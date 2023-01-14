import React from "react";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Contactstripe from "./Contactstripe";

function Service() {
  return (
    <>
      <div className="bnnr2  bnnrclr justify-content-between pt-3  witeheading ">
        <Container>
          <Row>
            <Col
              sm={12}
              className="d-flex flex-column justify-content-center  align-self-center text-padding  pe-30"
            >
              <h1>Services</h1>
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
              <h3>BEST SERVICES </h3>
              <h2>Seamlessly actualize client-based users after out-of-the-box value. Globally embrace strategic data through frictionless expertise.</h2>
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
    
      <Container className="mt-5  text-center service " data-aos="fade-up">    
        <Col
          sm={12}
          className="d-flex flex-column justify-content-center  align-self-center text-padding  pe-30"
        >
          <div className="allheading ourvalues  mt-5  mb-5 text-center">
            <h3>SERVICES</h3>
            <h2>Best Services Grow Your Business Value</h2>
          </div>
        </Col>

        <Row>
          <Col sm={4} className="mt-2">
            <Card className="P-2">
              <Card.Img
                variant="top"
                src="./assets/image/valuesimg/values-11.png"
                alt="test"
                className="p-5"
                data-aos="zoom-out"
              />
              <Card.Body>
                <Card.Title>IOS APPLICATION</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col sm={4} className="mt-2">
            <Card className="P-2">
              <Card.Img
                variant="top"
                src="./assets/image/valuesimg/values-11.png"
                alt="test"
                className="p-5"
                data-aos="zoom-out"
              />
              <Card.Body>
                <Card.Title>REACT NATIVE</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col sm={4} className="mt-2">
            <Card className="P-2">
              <Card.Img
                variant="top"
                src="./assets/image/valuesimg/values-11.png"
                alt="test"
                className="p-5"
                data-aos="zoom-out"
              />
              <Card.Body>
                <Card.Title>ANDROID</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col sm={4} className="mt-2">
            <Card className="P-2">
              <Card.Img
                variant="top"
                src="./assets/image/valuesimg/values-11.png"
                alt="test"
                className="p-5"
                data-aos="zoom-out"
              />
              <Card.Body>
                <Card.Title>KOTLINE</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col sm={4} className="mt-2">
            <Card className="P-2">
              <Card.Img
                variant="top"
                src="./assets/image/valuesimg/values-11.png"
                alt="test"
                className="p-5"
                data-aos="zoom-out"
              />
              <Card.Body>
                <Card.Title>FLUTTER</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col sm={4} className="mt-2">
            <Card className="P-2">
              <Card.Img
                variant="top"
                src="./assets/image/valuesimg/values-11.png"
                alt="test"
                className="p-5"
                data-aos="zoom-out"
              />
              <Card.Body>
                <Card.Title>RUBY RAILS</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Contactstripe/>
    </>
  );
}

export default Service;
