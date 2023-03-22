import React from "react";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { HiOutlineUser } from "react-icons/hi";
import { MdOutlineWatchLater } from "react-icons/md";
import { FaRegCommentDots, FaWeight } from "react-icons/fa";
import { BiRightArrowCircle } from "react-icons/bi";
import Detailblog from "./blog-detail-page/Detailblog";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

function Blog() {
  return (
    <>
      <Helmet>
        <title>Blog MobiWeb Creations - Mobile Application Development</title>
        <meta
          name="description"
          content="How much does it cost to create a Snapchat-like app? "
        />
        <meta keyword=" Blog us mobile app development services" />
        <meta charset="utf-8" />
      </Helmet>

      <div className="bnnr2 justify-content-between pt-3  witeheading  blogstyle">
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

      <Container className="mt-5 blogbtn  blog-card">
        <Row>
          <Col sm={4}>
            <a className="atagstay" href="detail-blog" rel="noreferrer">
              <Card className="P-2 mt-2 card-box ">
                <Card.Img
                  variant="top"
                  src="./assets/image/blogimg/snapchat.jpg"
                  alt="test"
                />
                <Card.Body>
                  <Card.Title>
                    How much does it cost to create a Snapchat-like app?
                  </Card.Title>
                  <div className="icnsty mt-3  mb-3">
                    <span className="pe-2 ">
                      <HiOutlineUser
                        style={{ height: "20px", width: "20px" }}
                      />
                      Admin
                    </span>

                    <span className="pe-2">
                      <MdOutlineWatchLater
                        style={{ height: "20px", width: "20px" }}
                      />
                      Jan 1, 2020
                    </span>

                    <span className="pe-2">
                      <FaRegCommentDots
                        style={{ height: "20px", width: "20px" }}
                      />
                      12
                    </span>
                  </div>
                  <Card.Text>
                    Snapchat is a popular social media platform that allows
                    users to share images and short videos with friends and
                    followers.
                  </Card.Text>
                  <Card.Text>
                    <h4 className="catname-highlight">
                      <BiRightArrowCircle
                        className="me-2"
                        style={{ height: "24px", width: "24px" }}
                      />
                      IOS Mobile Application
                    </h4>
                  </Card.Text>
                  <Button
                    href="detail-blog"
                    className="cntbtnsty mt-3"
                    type="submit"
                  >
                    Read More
                  </Button>
                </Card.Body>
              </Card>
            </a>
          </Col>

          <Col sm={4}></Col>
          <Col sm={4}></Col>
        </Row>
      </Container>
    </>
  );
}

export default Blog;
