import { Container, Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import {
  RiLineChartFill,
  RiStackFill,
  RiMagicLine,
  RiBrush4Fill,
  RiFileInfoFill,
  RiFilePaperFill,

} from "react-icons/ri";
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
            sm={12} md={12} xl={6} 
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
           sm={12} md={12} xl={6} 
            className="padmgdty d-flex flex-column justify-content-center "
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
            <h3>OUR VALUES</h3>
            <h2>Odit est perspiciatis laborum et dicta</h2>
          </div>
        </Col>
        <Row className="mt-2 valuescard">
          <Col sm={4}>
            <Card className="mt-2">
              <div className="box">
                <Card.Img
                  variant="top"
                  src="./assets/image/valuesimg/values-3.png"
                  alt="test"
                />
                <Card.Body>
                  <Card.Title>APPLICATION</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's
                  </Card.Text>
                </Card.Body>
              </div>
            </Card>
          </Col>
          <Col sm={4}>
            <Card className="mt-2">
              <div className="box">
                <Card.Img
                  variant="top"
                  src="./assets/image/valuesimg/values-3.png"
                  alt="test"
                />
                <Card.Body>
                  <Card.Title>APPLICATION</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's
                  </Card.Text>
                </Card.Body>
              </div>
            </Card>
          </Col>

          <Col sm={4}>
            <Card className="mt-2">
              <div className="box">
                <Card.Img
                  variant="top"
                  src="./assets/image/valuesimg/values-3.png"
                  alt="test"
                />
                <Card.Body>
                  <Card.Title>APPLICATION</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's
                  </Card.Text>
                </Card.Body>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>

      <Counter />

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
          <Col sm={4}>
            <img
              center
              src="./assets/image/valuesimg/values-1.png"
              data-aos="zoom-out"
              alt="test"
            ></img>
          </Col>
          <Col sm={4}>
            <Card data-aos="zoom-in">
              <div className="icnbox p-2">
         
                  <RiFilePaperFill />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's
                  </Card.Text>
                </Card.Body>
              </div>
            </Card>
            <Card data-aos="zoom-in">
              <div className="icnbox p-2">
                <RiBrush4Fill />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's
                  </Card.Text>
                </Card.Body>
              </div>
            </Card>
            <Card data-aos="zoom-in">
              <div className="icnbox p-2">
                     <RiLineChartFill />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's
                  </Card.Text>
                </Card.Body>
              </div>
            </Card>
          </Col>
          <Col sm={4}>
            <Card data-aos="zoom-in">
              <div className="icnbox p-2">
                <RiStackFill />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </div>
            </Card>
            <Card data-aos="zoom-in">
              <div className="icnbox p-2">
                <RiMagicLine />

                
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </div>
            </Card>
            <Card data-aos="zoom-in">
              <div className="icnbox p-2">
                <RiFileInfoFill />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </div>
            </Card>
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
            <h2>Odit est perspiciatis laborum et dicta</h2>
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
                <Card.Title>IONIC</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
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
