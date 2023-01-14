import React from 'react'
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";


function Blog() {
  return (
    <>
   <div className="bnnr2 justify-content-between pt-3  witeheading ">
        <Container>
          <Row>
            <Col
              sm={12}
              className="d-flex flex-column justify-content-center  align-self-center text-padding  pe-30"
            >
              <h1>Blog</h1>
            </Col>
          </Row>
        </Container>
      </div>

    </>
  )
}

export default Blog