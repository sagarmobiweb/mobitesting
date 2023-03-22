import React from "react";
import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";

import { TwitterShareButton, TwitterIcon } from "react-share";
import { FacebookShareButton, FacebookIcon } from "react-share";
import { LinkedinShareButton, LinkedinIcon } from "react-share";




function Detailblog() {
  return (
    <>
      <div className="bnnr2  bnnrclr justify-content-between pt-3  witeheading ">
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

      <Container className="blog-detail-text">
        <Row>
          <Col
            sm={12}
            className="d-flex flex-column justify-content-center  align-self-center  pe-30  mt-5"
          >
            <h1>How much does it cost to create a Snapchat-like app? </h1>
            <p className="mb-4">
              Snapchat is a popular social media platform that allows users to
              share images and short videos with friends and followers. The
              app's popularity has led many businesses and individuals to
              consider developing their own Snapchat-like apps. However, the
              cost of developing an app like Snapchat can be a significant
              barrier for many people. In this blog, we'll explore the different
              factors that affect the cost of developing an app like Snapchat.
            </p>
            <p>
              <img
                src="./assets/image/blogimg/snapchat.jpg"
                width={"100%"}
                alt="snapchat-img"
              ></img>
            </p>

            <Row>
              <Col sm={4} className="d-flex flex-column    pe-5  mt-5">
                <h4> Features and Functionality </h4>

                <p>
                  The cost of developing an app like Snapchat depends heavily on
                  the features and functionality you want to include. Snapchat
                  has a variety of features, including filters, lenses, stories,
                  and Snap Map. If you want to include similar features in your
                  app, the cost of development will increase.
                </p>
              </Col>
              <Col sm={4} className="d-flex flex-column    pe-5  mt-5">
                <h4>Design</h4>

                <p>
                  Snapchat's unique and visually appealing design plays a
                  significant role in its success. If you want to create an app
                  like Snapchat, you'll need to invest in design, which can be
                  expensive. Hiring a professional designer or design team is
                  critical to creating an app with a visually pleasing and
                  user-friendly interface.
                </p>
              </Col>
              <Col sm={4} className="d-flex flex-column   pe-5  mt-5">
                <h4>Development Team </h4>
                <p>
                  The cost of a development team is a significant factor in the
                  cost of developing an app like Snapchat. You'll need to hire
                  developers with experience in building apps for the iOS and
                  Android platforms. Additionally, you may need to hire backend
                  developers to handle server-side development.
                </p>
              </Col>
            </Row>
            <Row>
              <Col sm={4} className="d-flex flex-column   pe-5  mt-5">
                <h4>Technology Stack</h4>

                <p>
                  The technology stack you use can also affect the cost of
                  developing an app like Snapchat. Snapchat uses a variety of
                  technologies, including Node.js, React Native, and Amazon Web
                  Services. The cost of these technologies can vary
                  significantly, and some may require ongoing costs for
                  maintenance and upgrades.
                </p>
              </Col>
              <Col sm={4} className="d-flex flex-column    pe-5   mt-5">
                <h4>Testing and Quality Assurance </h4>
                <p>
                  To ensure your app is bug-free and functioning correctly,
                  you'll need to invest in testing and quality assurance. This
                  process involves extensive testing to ensure the app works
                  correctly on different devices and platforms.
                </p>
              </Col>
              <Col sm={4} className="d-flex flex-column    pe-5   mt-5">
                <h4> Marketing </h4>

                <p>
                  Finally, marketing is essential to the success of any app. The
                  cost of marketing will depend on the scope and target audience
                  of your app.
                </p>
              </Col>
            </Row>
          </Col>

          <div className="btnshare mt-5">
            <TwitterShareButton url={"https://www.example.com"} hashtag="#muo">
              <TwitterIcon size={30} square />
            </TwitterShareButton>
            <FacebookShareButton
              url={"https://www.example.com"}
              quote={"Dummy text!"}
              hashtag="#muo"
            >
              <FacebookIcon size={30} square />
            </FacebookShareButton>

            <LinkedinShareButton
              url={"https://www.example.com"}
              quote={"Dummy text!"}
              hashtag="#muo"
            >
              <LinkedinIcon size={30} square />
            </LinkedinShareButton>
          </div>
        </Row>
      </Container>
    </>
  );
}

export default Detailblog;
