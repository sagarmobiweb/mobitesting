import {
  RiFacebookCircleFill,
  RiInstagramFill,
  RiLinkedinBoxFill,
  RiPinterestFill,
  RiTwitterFill,
} from "react-icons/ri";
import { Container, Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { Card } from "react-bootstrap";




function Contactus() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_h7gves3",
        "template_7735ybr",
        form.current,
        "SVhxKz2VRK35Lqxhz"
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
    <>
      <div className="cbcnt">
        <div className="bnnr2 justify-content-between pt-3 bt-5 witeheading ">
          <Container>
            <Row>
              <Col
                sm={12}
                className="d-flex flex-column justify-content-center  align-self-center text-padding  pe-30"
              >
                <h1>Contact us</h1>
              </Col>
            </Row>
          </Container>
        </div>
      </div>

      <Container className="mt-5 align-self-center">
        <Row>
          <Col sm={6}>
            <div className="subscribebtn">
              <div className="allheading ourvalues  ">
                <h2 className="cntsty">
                  Your Project's Partner? We Are Set! Wait for awesomeness!
                  Reach out to our professionals.
                </h2>
                <p>
                  Contact us for all of your staffing needs and utilise our best
                  services to complete project development inside your projected
                  budget. Long-term business relationships are something we
                  value.
                </p>
              </div>
              <Form ref={form} onSubmit={sendEmail} className="mt-3">
                <Form.Group className="mb-3" controlId="formBasicrtext">
                  <Form.Control
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Name"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicNumber">
                  <Form.Control
                    type="number"
                    name="phone"
                    id="phone"
                    placeholder="Phone"
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

          <Col sm={6} className="ps-4">
            <div className="imgcnt">
              <img
                center
                src="./assets/image/newcont.jpg"
                data-aos="zoom-out"
                alt="test"
              ></img>

              <div className=" allheading   addresdetails ">
                <p>
                  Phone <bdi> : </bdi>
                  <a href={"tel:+918800403610"} rel="noreferrer">
                    +91 880 040 3610
                  </a>
                </p>
                <p>
                  Email <bdi> : </bdi>
                  <a href={"mailto:info@mobiweb.tech"} rel="noreferrer">
                    info@mobiweb.tech
                  </a>
                </p>
                <div className="social contactpage ">
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
            </div>
          </Col>
        </Row>

        <Row className="mt-5 clm-size-contactus  p-3">
          <p>
            <b className="mrketing-heding">MARKETING OFFICE:</b>
            <b className="addresty">
              <p>Address :</p>
            </b>
          </p>
          <Col sm={2}>
            <Card className="p-2 cardssheight">
              <p>
                <b>USA : </b>
                <br /> 10421 NW 28 St. Ste D102. Doral, FL 33172
              </p>
            </Card>
          </Col>
          <Col sm={2}>
            <Card className="p-2 cardssheight">
              <p>
                <b>UK : </b> <br />
                12 Farmhill Mews, Douglas, IM2 2EJ, Isle of Man, UK
              </p>
            </Card>
          </Col>
          <Col sm={2}>
            <Card className="p-2 cardssheight">
              <p>
                <b>AUSTRALIA : </b>
                <br /> 2/19 Salmon Avenue, Essendon Victoria 3040 (04) 30116742
              </p>
            </Card>
          </Col>
          <Col sm={2}>
            <Card className="p-2 cardssheight">
            
                <p>
                  <b>INDIA:</b>
                  <br /> #6B3, Block 4, Kent Mahal, Infopark Road, Kakkanad,
                  Ernakulam, Kerala, 682303 (+91) 8800 40 3610
                </p>
        
            </Card>
          </Col>
          <Col sm={2}>
            <Card className="p-2 cardssheight">
              <p>
                <b>DEVELOPMENT OFFICE:</b>
                <br></br> SCO : 142-143, Cabin No 412, 4th Floor, Sector 34 A ,
                Chandigarh, INDIA, 160022
              </p>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Contactus;
