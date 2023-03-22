import React, { useRef } from "react";
import { Container, Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import emailjs from "emailjs-com";

function FooterContactform() {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ssal5zb",
        "template_6ich9ws",
        form.current,
        "CSKw0ryt_tZsuRZ3D"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("SUCCESS!");
        },
        (error) => {
          console.log(error.text);
          alert("FAILED...", error);
        }
      );
    e.target.reset("alert");
  };

  return (
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
              <Form ref={form} onSubmit={sendEmail} className="mt-3">
                <Form.Group className="mb-3" controlId="formBasicrtext">
                  <Form.Control
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Name"
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicNumber">
                  <Form.Control
                    type="number"
                    name="phone"
                    id="phone"
                    placeholder="Phone"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicTextarea">
                  <Form.Control
                    as="textarea"
                    type="text"
                    placeholder="Message"
                    name="message"
                    id="text"
                  />
                </Form.Group>

                <Button className="cntbtn" type="submit">
                  Submit
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
  );
}

export default FooterContactform ;