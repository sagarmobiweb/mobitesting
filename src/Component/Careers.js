import { Container, Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import {
  MdWork,
  MdOutlineLocationCity,
  MdOutlineMyLocation,
  MdAccountBalanceWallet,
} from "react-icons/md";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Form } from "react-bootstrap";
import Blog from "./Blog";


function Careers() {
  return (
    <>
      <div className="bnnr2  bnnrclr justify-content-between pt-3  witeheading ">
        <Container>
          <Row>
            <Col
              sm={12}
              className="d-flex flex-column justify-content-center  align-self-center text-padding  pe-30"
            >
              <h1>Careers</h1>
            </Col>
          </Row>
        </Container>
      </div>
      <Container className="mt-5 ">
        <Col
          sm={12}
          className="d-flex flex-column justify-content-center  align-self-center text-padding  pe-30"
        >
          <div className="allheading ourvalues  mt-5  mb-5 text-center">
            <h3 className="bluclr">Our Jobs</h3>
            <h2>
              Current Available Positions at <br />
              Mobi Web Creations
            </h2>
          </div>
        </Col>
        <Row>
          <Col sm={6} className="mt-2">
            <Card className=" career">
              <div class="card-box-inner">
                <div class="box-1">
                  <span class="text-icon  mb-2">
                    <MdWork style={{ fill: " #00264c" }} className="pe-1" />
                    Remote - Full Time
                  </span>
                </div>
                <h3 className="heading-sty">Sr Frontend Developer</h3>
                <ul className="box-2">
                  <li>
                    {" "}
                    <MdOutlineMyLocation
                      style={{ fill: " #00264c" }}
                      className="pe-1"
                    />
                    London, UK{" "}
                  </li>
                  <li>
                    <MdAccountBalanceWallet
                      style={{ fill: " #00264c" }}
                      className="pe-1"
                    />
                    $35-$45k
                  </li>
                </ul>
                <p>
                  We are team of talented designers making websites with
                  BootstrapWe are team of talented designers making websites
                  with Bootstrap
                </p>
              </div>
              <Button
                size="40%"
                href="career-detail"
                className="cntbtnsty mt-3 apply"
              >
                Apply Now
              </Button>
            </Card>
          </Col>
          <Col sm={6} className="mt-2">
            <Card className=" career">
              <div class="card-box-inner">
                <div class="box-1">
                  <span class="text-icon  mb-2">
                    <MdWork style={{ fill: " #00264c" }} className="pe-1" />
                    Remote - Full Time
                  </span>
                  <h3 className="heading-sty">Sr Backend Developer</h3>
                </div>

                <ul className="box-2">
                  <li>
                    <MdOutlineMyLocation
                      style={{ fill: " #00264c" }}
                      className="pe-1"
                    />
                    London, UK
                  </li>
                  <li>
                    <MdAccountBalanceWallet
                      style={{ fill: " #00264c" }}
                      className="pe-1"
                    />
                    $35-$45k
                  </li>
                </ul>
                <p>
                  We are team of talented designers making websites with
                  BootstrapWe are team of talented designers making websites
                  with Bootstrap
                </p>
                <Button
                  size="40%"
                  href="career-detail"
                  className="cntbtnsty mt-3 apply"
                >
                  Apply Now
                </Button>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
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
                <Form className="mt-3">
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
    </>
  );
}

export default Careers;
