
import { RiFacebookCircleFill, RiInstagramFill,RiLinkedinBoxFill,RiPinterestFill,RiTwitterFill,} from "react-icons/ri";
import { Container, Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

function Contactus() {
  
const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_h7gves3', 'template_7735ybr', form.current, 'SVhxKz2VRK35Lqxhz')
      .then((result) => {
          console.log(result.text);
            alert("SUCCESS!");
      }, 
      (error) => {
          console.log(error.text);
              alert("FAILED...", error);
      }
      );
      e.target.reset("alert")
  };

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
                <Form ref={form} onSubmit={sendEmail}className="mt-3">
                  <Form.Group className="mb-3" controlId="formBasicrtext">
                    <Form.Control type="text"   name="name" id="name"placeholder="Name" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email"  name="email" id="email" placeholder="Email" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicNumber">
                    <Form.Control type="number"  name="phone" id="phone" placeholder="Phone" />
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
                Address : MobiWeb Creations, #6B3, Block 4, Kent Mahal, Infopark
                Rd, Kakkanad, Kerala 682303
              </p>
              <p>
                Phone :{" "}
                <a href={"tel:+918800403610"} rel="noreferrer">
                  {" "}
                  +918800403610
                </a>
              </p>
              <p>
                Emai :{" "}
                <a href={"mailto:sales@mobiwebcreations.com"} rel="noreferrer">
                  sales@mobiwebcreations.com{" "}
                </a>
              </p>
              <div className="social">
                <a
                  target="_blank"
                  href={"https://www.facebook.com/mobiwebcreations/"}
                  rel="noreferrer"
                >
                  <RiFacebookCircleFill />
                </a>

                <a
                  target="_blank"
                  href={"https://www.instagram.com/mobiwebcreations/"}
                  rel="noreferrer"
                >
                  <RiInstagramFill />
                </a>

                <a
                  target="_blank"
                  href={
                    "https://www.linkedin.com/authwall?trk=bf&trkInfo=AQFDdrKXxajmpgAAAYXdyQGA76tYcvyVkGUeZ7nF3IiqyG9Q4F7j76pKwjZqwBO6SURd6WhYb8bp0NAMPEC9glF3MVd-L2kvpW3fFyIVj_dTKMsF0ypIALqdyP-jyu_1jU5fwRA=&original_referer=&sessionRedirect=https%3A%2F%2Fin.linkedin.com%2Fcompany%2Fmobiweb-creations"
                  }
                  rel="noreferrer"
                >
                  <RiLinkedinBoxFill />
                </a>

                <a
                  target="_blank"
                  href={"https://in.pinterest.com/MobiWebCreations/"}
                  rel="noreferrer"
                >
                  <RiPinterestFill />
                </a>

                <a
                  target="_blank"
                  href={"https://twitter.com/MobiWebCreation/"}
                  rel="noreferrer"
                >
                  <RiTwitterFill />
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}


export default Contactus;