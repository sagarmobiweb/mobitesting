import React from "react";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import FooterContactform from "./FooterContactform";

function Flutterappdevelopment() {
  return (
    <>
      <div className="bnnr2  bnnrclr justify-content-between pt-3  witeheading ">
        <Container>
          <Row>
            <Col
              sm={12}
              className="d-flex flex-column justify-content-center  align-self-center text-padding  pe-30"
            >
              <h1>Flutter Mobile Application Development</h1>
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
            <div className="content-block-about pe-5 ">
              <h2>
                Create amazing, dependable, and powerful native apps using
                Flutter
              </h2>
              <p>
                If you want to make a beautiful native app for Android & iOS
                that satisfies your users, Flutter is the way to go.
              </p>
              <p>
                <b>Regular experience :</b> With Flutter's one codebase, you can
                build consistent brand experiences across all platforms,
                delighting your people each time they use your app.
              </p>
              <p>
                <b>Accelerated MVP launch:</b> Investors and users will be
                impressed by the engaging user experience of Flutter apps. With
                a single codebase, your MVP's idea-to-product journey may be
                completed in a fraction of the time.
              </p>
              <p>
                <b>Accelerated performance:</b> Flutter ensures fluid app
                performance and operates at a constant 60 frames per second
                (fps) and even at 120 frames per second on the newest devices.
                This implies that there will be fewer bugs and more room for new
                users.
              </p>
              <p>
                <b>Productive community:</b> An enormous developer community has
                given Flutter its unwavering support, and it is an open-source
                framework that is always evolving.
              </p>
            </div>
          </Col>
          <Col
            sm={6}
            className="d-flex flex-column justify-content-center  ps-5"
            data-aos="fade-left"
          >
            <img
              src="./assets/image/serviceimg/Flutter-App-img.jpg"
              alt="test"
            />
          </Col>
        </Row>

        <Row>
          <Col
            sm={6}
            className="d-flex flex-column justify-content-center mt-5 pe-5"
            data-aos="fade-right"
          >
            <img
              src="./assets/image/serviceimg/flutter-businesses-sectors.png"
              alt="test"
            />
          </Col>
          <Col
            sm={6}
            className="d-flex flex-column justify-content-center  align-self-center text-padding  pe-30 "
          >
            <div className="content-block-about  ios-left ps-5">
              <h2>
                Flutter App Development for Businesses in Different Sectors
              </h2>
              <p>
                We provide startups, scale ups, and businesses with
                feature-rich, enjoyable, and swifter Flutter app experiences.
                Our efforts have assisted businesses just like yours in securing
                over $10 million in finance. We build specialized apps that make
                you stand out in your field and get amazing results more
                quickly.
              </p>
            </div>
          </Col>
        </Row>
      </Container>

      <FooterContactform />
    </>
  );
}

export default Flutterappdevelopment;
