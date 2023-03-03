import { Container, Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";

import { RiUserStarLine, Ri24HoursFill, RiCodeBoxFill } from "react-icons/ri";
import { MdRotate90DegreesCcw } from "react-icons/md";
import {
  GiReceiveMoney,
  GiTeamIdea,
  GiStopwatch,
  GiSecurityGate,
} from "react-icons/gi";
import { BsFillTrophyFill, BsBuilding } from "react-icons/bs";
import { AiOutlineStock } from "react-icons/ai";
import { MdOutlineScreenSearchDesktop } from "react-icons/md";
import Counter from "./Counter";
import Hero from "./Hero";
import { Form } from "react-bootstrap";
import Testimonial from "./Testimonial";
import Button from "react-bootstrap/Button";

function Home() {
  return (
    <>
      <Hero />
      <Container className="mb-5 mt-5" data-aos="fade-up">
        <Row>
          <Col
            sm={12}
            md={12}
            xl={6}
            className=" padmgdty d-flex flex-column justify-content-center  align-self-center text-padding"
          >
            <div className="clrbluebg">
              <div className="content-block-about  ">
                <h3>WHO WE ARE</h3>
                <h2>Dolores est repellat corrupti reprehenderit.</h2>
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
            </div>
          </Col>

          <Col
            sm={12}
            md={12}
            xl={6}
            className="padmgdty d-flex flex-column justify-content-center home-whower"
            data-aos="fade-right"
          >
            <img src="./assets/image/aboutus-home.jpg" alt="test" />
          </Col>
        </Row>
      </Container>

      <Container className="mt-5" data-aos="fade-up">
        <Col
          sm={12}
          className="d-flex flex-column justify-content-center  align-self-center text-padding  "
        >
          <div className="allheading ourvalues  text-center">
            <h2>Why choose us</h2>
          </div>
        </Col>
        <Row className="mt-2 valuescard whychoose">
          <Col sm={4}>
            <Card className="mt-2">
              <div className="box">
                <GiReceiveMoney style={{ fill: " #74c1e9ba" }} />

                <Card.Body>
                  <Card.Title>Meet Your Revenue Goal</Card.Title>
                </Card.Body>
              </div>
            </Card>
          </Col>
          <Col sm={4}>
            <Card className="mt-2">
              <div className="box">
                <Ri24HoursFill style={{ fill: " #74c1e9ba" }} />

                <Card.Body>
                  <Card.Title>Less Than 24 Hours Guranteed Response</Card.Title>
                </Card.Body>
              </div>
            </Card>
          </Col>
          <Col sm={4}>
            <Card className="mt-2">
              <div className="box">
                <BsFillTrophyFill style={{ fill: " #74c1e9ba" }} />

                <Card.Body>
                  <Card.Title>
                    100+ Apps Projects Successfully Delivered
                  </Card.Title>
                </Card.Body>
              </div>
            </Card>
          </Col>
        </Row>
        <Row className="mt-2 valuescard whychoose">
          <Col sm={4}>
            <Card className="mt-2">
              <div className="box">
                <BsBuilding style={{ fill: " #74c1e9ba" }} />

                <Card.Body>
                  <Card.Title>
                    We Listen, Learn, Understand, Then build
                  </Card.Title>
                </Card.Body>
              </div>
            </Card>
          </Col>
          <Col sm={4}>
            <Card className="mt-2">
              <div className="box">
                <AiOutlineStock style={{ fill: " #74c1e9ba" }} />

                <Card.Body>
                  <Card.Title>Handle Tight Deadlines</Card.Title>
                </Card.Body>
              </div>
            </Card>
          </Col>
          <Col sm={4}>
            <Card className="mt-2">
              <div className="box">
                <RiUserStarLine style={{ fill: "#74c1e9ba" }} />

                <Card.Body>
                  <Card.Title>
                    Quality Services and Retaining Clients
                  </Card.Title>
                </Card.Body>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>

      <Container className="mt-5 features" data-aos="fade-up">
        <Col
          sm={12}
          className="d-flex flex-column justify-content-center  align-self-center text-padding mb-2 
                     pe-30"
        >
          <div className="allheading ourvalues  mt-5 text-center">
            <h3>FEATURES</h3>
            <h2>Odit est perspiciatis laborum et dicta</h2>
          </div>
        </Col>
        <Row className="mt-5 ">
          <Col sm={4} className="align-self-center">
            <img
              center
              src="./assets/image/valuesimg/featuressimg.png"
              data-aos="zoom-out"
              alt="test"
            ></img>
          </Col>
          <Col sm={4}>
            <Card data-aos="zoom-in">
              <div className="icnbox p-2">
                <GiTeamIdea />
                <Card.Body>
                  <Card.Title>Entrepreneur-friendly</Card.Title>
                  <Card.Text>
                    Assisting entrepreneurs in developing their ideas into
                    high-end, robust solutions without incurring financial
                    costs. We have you covered from concept to launch.
                  </Card.Text>
                </Card.Body>
              </div>
            </Card>
            <Card data-aos="zoom-in">
              <div className="icnbox p-2">
                <MdOutlineScreenSearchDesktop />
                <Card.Body>
                  <Card.Title>Complete transparency</Card.Title>
                  <Card.Text>
                    Whatever we do, you will be a part of it. That's one less
                    thing for you to be concerned about.
                  </Card.Text>
                </Card.Body>
              </div>
            </Card>
            <Card data-aos="zoom-in">
              <div className="icnbox p-2">
                <RiCodeBoxFill />
                <Card.Body>
                  <Card.Title>High coding standards</Card.Title>
                  <Card.Text>
                    Even with a keen eye, you won't find a single sub-par line
                    of code in our product, according to our QA team.
                  </Card.Text>
                </Card.Body>
              </div>
            </Card>
          </Col>
          <Col sm={4}>
            <Card data-aos="zoom-in">
              <div className="icnbox p-2">
                <MdRotate90DegreesCcw />
                <Card.Body>
                  <Card.Title>Agile approach</Card.Title>
                  <Card.Text>
                    Take on business challenges quickly with our agile
                    development approach, which adapts to your changing
                    requirements.
                  </Card.Text>
                </Card.Body>
              </div>
            </Card>
            <Card data-aos="zoom-in">
              <div className="icnbox p-2">
                <GiStopwatch />

                <Card.Body>
                  <Card.Title>Rapid product delivery</Card.Title>
                  <Card.Text>
                    With our on-time and fast product delivery, you can leverage
                    the power of timely product release and get early adopters
                    for your app.
                  </Card.Text>
                </Card.Body>
              </div>
            </Card>
            <Card data-aos="zoom-in">
              <div className="icnbox p-2">
                <GiSecurityGate />
                <Card.Body>
                  <Card.Title>Security compliance</Card.Title>
                  <Card.Text>
                    We secure your data with strong security features, ensuring
                    that no unauthorized third party can access your or your
                    clients' information.
                  </Card.Text>
                </Card.Body>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>

      <Counter />

      <Container className="mt-5  text-center service  " data-aos="fade-up">
        <Col
          sm={12}
          className="d-flex flex-column justify-content-center  align-self-center text-padding  pe-30"
        >
          <div className="allheading ourvalues  mt-5  mb-5 text-center">
            <h3>SERVICES</h3>
            <h2>Odit est perspiciatis laborum et dicta</h2>
          </div>
        </Col>

        <Row>
          <Col sm={4} className="mt-2">
            <Card className="P-3">
              <Card.Img
                variant="top"
                src="./assets/image/serviceimg/ios-app-image.png"
                alt="test"
                className="p-4"
                data-aos="zoom-out"
              />
              <Card.Body>
                <Card.Title>IOS APPLICATION</Card.Title>
                <Card.Text>
                  Create iOS mobile apps with outstanding digital user
                  experiences that easily launch on app marketplaces and
                  generate business growth.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={4} className="mt-2">
            <Card className="P-3">
              <Card.Img
                variant="top"
                src="./assets/image/serviceimg/kotline-app.png"
                alt="test"
                className="p-3"
                data-aos="zoom-out"
              />
              <Card.Body>
                <Card.Title>ANDROID</Card.Title>
                <Card.Text>
                  Customized, logical, and user-friendly Android apps built
                  within your budget will help you grow your consumer base more
                  quickly
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col sm={4} className="mt-2">
            <Card className="P-3">
              <Card.Img
                variant="top"
                src="./assets/image/serviceimg/reactnetivt2.png"
                alt="test"
                className="p-3"
                data-aos="zoom-out"
              />
              <Card.Body>
                <Card.Title>REACT NATIVE</Card.Title>
                <Card.Text>
                  Improve the UI/UX experience to increase engagement with
                  native offline apps using the capabilities of both Android and
                  iOS apps.
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
                src="./assets/image/serviceimg/kotline-App-dev.png"
                alt="test"
                className="p-3"
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
                src="./assets/image/serviceimg/flutter-app.png"
                alt="test"
                className="p-3"
                data-aos="zoom-out"
              />
              <Card.Body>
                <Card.Title>FLUTTER</Card.Title>
                <Card.Text>
                  With Flutter's one codebase, you can build consistent brand
                  experiences across all platforms, delighting your people each
                  time they use your app.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col sm={4} className="mt-2">
            <Card className="P-2">
              <Card.Img
                variant="top"
                src="./assets/image/serviceimg/ionic-app-img.png"
                alt="test"
                className="p-3"
                data-aos="zoom-out"
              />
              <Card.Body>
                <Card.Title>IONIC</Card.Title>
                <Card.Text>
                  The powerful mobile app development platform Ionic makes it
                  simple to create hybrid apps. Having high-performing
                  cross-platform software with native UI elements helps your
                  business.
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
                src="./assets/image/serviceimg/hybrid-left-img.png"
                alt="test"
                className="p-3"
                data-aos="zoom-out"
              />
              <Card.Body>
                <Card.Title> Hybrid </Card.Title>
                <Card.Text>
                  No matter what platform your consumers and clients prefer,
                  make your software available to them. With consistent
                  functionality and user-friendly UI/UX across all devices
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col sm={4} className="mt-2">
            <Card className="P-2">
              <Card.Img
                variant="top"
                src="./assets/image/serviceimg/pwa-app.png"
                alt="test"
                className="p-3"
                data-aos="zoom-out"
              />
              <Card.Body>
                <Card.Title>Progressive</Card.Title>
                <Card.Text>
                  We are a leading provider of progressive web apps, and we have
                  successfully implemented reliable and secure web app solutions
                  across all business sectors.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col sm={4} className="mt-2"></Col>
        </Row>
      </Container>

      <Testimonial />

      <div className="cbcnt  cntus-bg">
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

export default Home;
