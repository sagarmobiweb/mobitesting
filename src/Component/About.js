import React from "react";
import Banner from "./Banner";
import { Container, Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import CountUp from "react-countup";
import Card from "react-bootstrap/Card";
import { BsJournalRichtext } from "react-icons/bs";
import Video from "./Video";
import FooterContactform from "./FooterContactform";
import {
  RiFacebookCircleFill,
  RiInstagramFill,
  RiLinkedinBoxFill,
  RiMailFill,
} from "react-icons/ri";
import { Helmet } from "react-helmet";




function About() {
  return (
    <>
      <Helmet>
        <title>
          About-us MobiWeb Creations - Mobile Application Development
        </title>
        <meta
          name="description"
          content="We take a collaborative approach to every project we work on,
              working closely with our clients to understand their goals and
              vision for their app. We believe that communication and
              transparency are key to a successful project "
        />
        <meta name="keywords" content="about us  welcome" />

        <meta charset="utf-8" />
      </Helmet>
      <Banner />
      <Container className="mt-5" data-aos="fade-up">
        <Row>
          <Col
            sm={6}
            className="d-flex flex-column justify-content-center  align-self-center text-padding   ptext-justify  "
          >
            <div className="content-block-about  pe-5">
              <h2>Who We Are</h2>
              <p>
                Welcome to our mobile app development company! We are a team of
                talented and experienced developers, designers, and project
                managers who are passionate about creating innovative and
                user-friendly mobile apps for our clients.
              </p>
              <p>
                Our company was founded with the goal of providing top-notch
                mobile app development services to businesses of all sizes, from
                startups to large enterprises. We believe that a great mobile
                app can make a significant impact on a business, whether it's
                increasing revenue, improving customer engagement, or
                streamlining internal processes.
              </p>
            </div>
          </Col>
          <Col sm={6} className="d-flex flex-column ps-5">
            <Video />
          </Col>
        </Row>

        <Row>
          <Col
            sm={6}
            className="d-flex flex-column justify-content-center  align-self-center text-padding  pe-30 "
          >
            <Row className="mt-5 mb-2 countericon">
              <Col sm={6}>
                <Card>
                  <div className="icnbox">
                    <BsJournalRichtext style={{ fill: " #728FCE" }} />
                    <Card.Body>
                      <CountUp delay={2} end={90} />%
                      <Card.Title>HYBRID MOBILE DEVELOPMENT SKILL</Card.Title>
                    </Card.Body>
                  </div>
                </Card>
              </Col>
              <Col sm={6}>
                <Card>
                  <div className="icnbox ">
                    <BsJournalRichtext style={{ fill: " #728FCE" }} />
                    <Card.Body>
                      <CountUp delay={2} end={80} />%
                      <Card.Title>NATIVE MOBILE APPLICATION SKILL</Card.Title>
                    </Card.Body>
                  </div>
                </Card>
              </Col>
            </Row>
          </Col>
          <Col
            sm={6}
            className="d-flex flex-column  align-self-center  content-block-about  mt-5   ps-5"
          >
            <p>
              We take a collaborative approach to every project we work on,
              working closely with our clients to understand their goals and
              vision for their app. We believe that communication and
              transparency are key to a successful project, and we work hard to
              keep our clients informed every step of the way.
            </p>
          </Col>
        </Row>
      </Container>

      <div className="whatwedo pt-5  pb-5 mt-5">
        <Container data-aos="fade-up">
          <Row>
            <Col
              sm={6}
              className="d-flex  justify-content-center "
              data-aos="fade-right bgimg"
            >
              <img src="./assets/image/what-we-do-crp.png" alt="whatwedo" />
            </Col>

            <Col
              sm={6}
              className="d-flex flex-column justify-content-center  align-self-center text-padding  pt-5 pe-2 "
            >
              <div className="content-block-about  clrwhtwedo">
                <h2 style={{ color: "#fff" }}>WHAT WE DO.</h2>
                <p style={{ color: "#fff" }}>
                  Our team has a wealth of experience in mobile app development,
                  from iOS and Android app development to cross-platform app
                  development using frameworks like React Native and Flutter. We
                  also have expertise in other areas, such as UX/UI design,
                  backend development, and app testing and deployment.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <Container className="mt-5" data-aos="fade-up">
        <Row>
          <Col
            sm={6}
            className="d-flex flex-column justify-content-center  align-self-center text-padding  pe-30 "
          >
            <div className="content-block-about  pe-5">
              <h2>Our Story</h2>
              <p>
                At our mobile app development company, we are committed to
                delivering high-quality apps that meet our clients' needs and
                exceed their expectations. Whether you need a simple app or a
                complex enterprise solution, we have the expertise and skills to
                make it happen.
              </p>
              <p>
                Thank you for considering our mobile app development company for
                your app project. We look forward to working with you and
                bringing your app idea to life! .
              </p>
            </div>
          </Col>
          <Col
            sm={6}
            className="d-flex flex-column justify-content-center mt-5"
            data-aos="fade-left"
          >
            <img src="./assets/image/about.jpg" alt="test" />
          </Col>
        </Row>
      </Container>

      <Container className="mt-5" data-aos="fade-up">
        <div className="allheading ourvalues  mt-5  mb-5 text-center">
          <h2>The People Behind Mobiweb Creations</h2>
        </div>

        <div className="team">
          <Row className="mb-4">
            <Col sm={3} className="mt-2">
              <div className="member">
                <div className="member-img">
                  <img
                    src="./assets/image/reviewimg/img-review1.jpg"
                    alt="temimg"
                    className="img-fluid"
                  />
                </div>
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
                    href={"https://in.linkedin.com/company/mobiweb-creations"}
                    rel="noreferrer"
                  >
                    <RiLinkedinBoxFill />
                  </a>

                  <a
                    target="_blank"
                    href={"https://twitter.com/MobiWebCreation"}
                    rel="noreferrer"
                  >
                    <RiMailFill />
                  </a>
                </div>
                <div className="info">
                  <h2>John Sullivan</h2>
                  <p>Frontend Developer</p>
                </div>
              </div>
            </Col>
            <Col sm={3} className="mt-2">
              <div className="member">
                <div className="member-img">
                  <img
                    src="./assets/image/reviewimg/rev1.jpg"
                    alt="temimg"
                    className="img-fluid"
                  />
                </div>
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
                    href={"https://in.linkedin.com/company/mobiweb-creations"}
                    rel="noreferrer"
                  >
                    <RiLinkedinBoxFill />
                  </a>

                  <a
                    target="_blank"
                    href={"https://twitter.com/MobiWebCreation"}
                    rel="noreferrer"
                  >
                    <RiMailFill />
                  </a>
                </div>

                <div className="info">
                  <h2>Mira Sullivan</h2>
                  <p>Frontend Developer</p>
                </div>
              </div>
            </Col>
            <Col sm={3} className="mt-2">
              <div className="member">
                <div className="member-img">
                  <img
                    src="./assets/image/reviewimg/reviewmen2.jpg"
                    alt="temimg"
                    className="img-fluid"
                  />
                </div>
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
                    href={"https://in.linkedin.com/company/mobiweb-creations"}
                    rel="noreferrer"
                  >
                    <RiLinkedinBoxFill />
                  </a>

                  <a
                    target="_blank"
                    href={"https://twitter.com/MobiWebCreation"}
                    rel="noreferrer"
                  >
                    <RiMailFill />
                  </a>
                </div>

                <div className="info">
                  <h2>Dev Aex</h2>
                  <p>Frontend Developer</p>
                </div>
              </div>
            </Col>
            <Col sm={3} className="mt-2">
              <div className="member">
                <div className="member-img">
                  <img
                    src="./assets/image/reviewimg/rev1.jpg"
                    alt="temimg"
                    className="img-fluid"
                  />
                </div>
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
                    href={"https://in.linkedin.com/company/mobiweb-creations"}
                    rel="noreferrer"
                  >
                    <RiLinkedinBoxFill />
                  </a>
                  <a
                    target="_blank"
                    href={"https://twitter.com/MobiWebCreation"}
                    rel="noreferrer"
                  >
                    <RiMailFill />
                  </a>
                </div>
                <div className="info">
                  <h2>John Fedix </h2>
                  <p>Frontend Developer</p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>

      <FooterContactform />
    </>
  );
}

export default About;
