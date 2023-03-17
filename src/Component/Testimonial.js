import React from "react";
import { Container } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import { Col, Row } from "react-bootstrap";

function Testimonial() {
  return (
    <>
      <div className="bgclr d-flex flex-column justify-content-center  align-self-center ">
        <Container className=" text-center   mt-2">
          <div className="allheading   mt-5  pb-2 pt-2  mb-3 text-center">
            <h3>TESTIMONIALS</h3>
            <h2>What they are saying about us</h2>
          </div>
          <Carousel className=" mt-2  mb-2">
            <Carousel.Item interval={2000}>
              <Row className="mb-5 ">
                <Col xl={12} sm={12} md={12}>
             
                  <Carousel.Caption>
                    <h4>Ken Shan</h4>
                    <p>
                      I highly recommend MobiWeb and team, knowledgeable and
                      great communication skills, strived hard to deliver above
                      and beyond what I needed. Really appreciate the
                      dedication.
                    </p>
                  </Carousel.Caption>
                </Col>
              </Row>
            </Carousel.Item>

            <Carousel.Item interval={2000}>
              <Row className="mb-5 ">
                <Col xl={12} sm={12} md={12}>
              
                  <Carousel.Caption>
                    <h4>Stuart Boyd </h4>

                    <p className="pe-5  ps-5">
                      A new challenge for him as we had worked together
                      previously but he adapted quickly and got the job done as
                      required. Its a good experience working with him. His
                      communication is clear, concise and the end result is
                      always excellent.
                    </p>
                  </Carousel.Caption>
                </Col>
              </Row>
            </Carousel.Item>

            <Carousel.Item interval={2000}>
              <Row className="mb-5 ">
                <Col xl={12} sm={12} md={12}>
              
                  <Carousel.Caption>
                    <h4>Anthony Ouellet </h4>

                    <p>
                      Amazing availability and always looks for the best
                      solution. This was a complicated project and he was able
                      to complete everything that was asked for. I would
                      recommend him to anyone and I will certainly work with him
                      again in the future.
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
