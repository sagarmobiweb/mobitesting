import React from "react";
import { Container } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import { Col, Row } from "react-bootstrap";

function Testimonial() {
  return (
    <>
      <div className="bgclr d-flex flex-column justify-content-center  align-self-center pt-5 pb-5  mt-5">
        <Container className=" text-center   mt-2">
          <div className="allheading   mt-5  pb-2 pt-2  mb-3 text-center">
            <h3>TESTIMONIAL</h3>
            <h2>What they are saying about us</h2>
          </div>
          <Carousel className=" mt-2  mb-5">
            <Carousel.Item interval={2000}>
              <Row className="mb-5 ">
                <Col xl={12} sm={12} md={12}>
                  <img
                    className="d-center "
                    src="./assets/image/reviewimg/rev1.jpg"
                    alt="test"
                  />
                  <Carousel.Caption>
                    <h4>John Doe</h4>
                    <h6>UI/UX Designer</h6>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Quod eos id officiis hic tenetur quae quaerat ad velit ab
                      hic tenetur.
                    </p>
                  </Carousel.Caption>
                </Col>
              </Row>
            </Carousel.Item>

            <Carousel.Item interval={2000}>
              <Row className="mb-5 ">
                <Col xl={12} sm={12} md={12}>
                  <img
                    className="d-center "
                    src="./assets/image/reviewimg/img-review1.jpg"
                    alt="test"
                  />
                  <Carousel.Caption>
                    <h4>Anna Deynah</h4>
                    <h6>Web Developer</h6>
                    <p className="pe-5  ps-5">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Quod eos id officiis hic tenetur quae quaerat ad velit ab
                      hic tenetur.
                    </p>
                  </Carousel.Caption>
                </Col>
              </Row>
            </Carousel.Item>

            <Carousel.Item interval={2000}>
              <Row className="mb-5 ">
                <Col xl={12} sm={12} md={12}>
                  <img
                    className="d-center   "
                    src="./assets/image/reviewimg/reviewmen2.jpg"
                    alt="test"
                  />
                  <Carousel.Caption>
                    <h4>John Doe</h4>
                    <h6>Web Developer</h6>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Quod eos id officiis hic tenetur quae quaerat ad velit ab
                      hic tenetur.
                    </p>
                  </Carousel.Caption>
                </Col>
              </Row>
            </Carousel.Item>
          </Carousel>
        </Container>
      </div>
    </>
  );
}

export default Testimonial;
