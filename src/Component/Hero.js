import React from "react";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";


function Hero() {
  return (
    <> 
        <div className="bnnr justify-content-between">
          <Container >
          <Row >
            <Col sm={12} md={6} xl={6}  className="d-flex flex-column justify-content-center   text-padding ">
              <h1>We offer modern solutions for growing your business</h1>
              <h2 className="pt-3">We are team of talented designers making websites with Bootstrap</h2>
                   <div className='btnhome'>
                    <a href={"#"} alt="readme">Read More</a>
                    </div>
            </Col>
            <Col sm={12} md={6} xl={6}  className="justify-content-center mt-5">
              <img src="./assets/image/lefthero-img.png" alt="test" />
            </Col>
  
          </Row>
           </Container>
        </div>
    </>
  );
}

export default Hero;
