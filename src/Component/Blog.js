import React from "react";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { HiOutlineUser } from "react-icons/hi";
import { MdOutlineWatchLater } from "react-icons/md";
import { FaRegCommentDots, } from "react-icons/fa";
import ListGroup from "react-bootstrap/ListGroup";


function Blog() {
  return (
    <>
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

      <Container>
        <Row>
          <Col sm={8} className="mt-2">
            <Card className="P-2 mt-2 card-box">
              <Card.Img
                variant="top"
                src="./assets/image/blog-img.jpg"
                alt="test"
              />
              <Card.Body>
                <Card.Title>
                  Dolorum optio tempore voluptas dignissimos cumque fuga qui
                  quibusdam quia
                </Card.Title>
                <div className="icnsty mt-3  mb-3">
                  <span className="pe-3">
                    <HiOutlineUser style={{ height: "25px", width: "30px" }} />
                    John Doe
                  </span>

                         <span className="pe-3">
                    <MdOutlineWatchLater
                      style={{ height: "25px", width: "30px" }}
                    />
                    Jan 1, 2020
                  </span>

                         <span className="pe-3">
                    <FaRegCommentDots
                      style={{ height: "25px", width: "30px" }}
                    />
                    12 Comments
                  </span>
                </div>
                <Card.Text>
                  Similique neque nam consequuntur ad non maxime aliquam quas.
                  Quibusdam animi praesentium. Aliquam et laboriosam eius aut
                  nostrum quidem aliquid dicta. Et eveniet enim. Qui velit est
                  ea dolorem doloremque deleniti aperiam unde soluta. Est cum et
                  quod quos aut ut et sit sunt. Voluptate porro consequatur
                  assumenda perferendis dolore.
                </Card.Text>
                <Button className="cntbtnsty" type="submit">
                  Read More
                </Button>
              </Card.Body>
            </Card>
               <Card className="P-2 mt-2 card-box">
              <Card.Img
                variant="top"
                src="./assets/image/blog-img.jpg"
                alt="test"
              />
              <Card.Body>
                <Card.Title>
                  Dolorum optio tempore voluptas dignissimos cumque fuga qui
                  quibusdam quia
                </Card.Title>
                <div className="icnsty mt-3  mb-3">
                  <span className="pe-3">
                    <HiOutlineUser style={{ height: "25px", width: "30px" }} />
                    John Doe
                  </span>

                         <span className="pe-3">
                    <MdOutlineWatchLater
                      style={{ height: "25px", width: "30px" }}
                    />
                    Jan 1, 2020
                  </span>

                         <span className="pe-3">
                    <FaRegCommentDots
                      style={{ height: "25px", width: "30px" }}
                    />
                    12 Comments
                  </span>
                </div>
                <Card.Text>
                  Similique neque nam consequuntur ad non maxime aliquam quas.
                  Quibusdam animi praesentium. Aliquam et laboriosam eius aut
                  nostrum quidem aliquid dicta. Et eveniet enim. Qui velit est
                  ea dolorem doloremque deleniti aperiam unde soluta. Est cum et
                  quod quos aut ut et sit sunt. Voluptate porro consequatur
                  assumenda perferendis dolore.
                </Card.Text>
                <Button className="cntbtnsty" type="submit">
                  Read More
                </Button>
              </Card.Body>
            </Card>
       
          <Card className="P-2 mt-2 card-box">
              <Card.Img
                variant="top"
                src="./assets/image/blog-img.jpg"
                alt="test"
              />
              <Card.Body>
                <Card.Title>
                  Dolorum optio tempore voluptas dignissimos cumque fuga qui
                  quibusdam quia
                </Card.Title>
                <div className="icnsty mt-3  mb-3">
                  <span className="pe-3">
                    <HiOutlineUser style={{ height: "25px", width: "30px" }} />
                    John Doe
                  </span>

                         <span className="pe-3">
                    <MdOutlineWatchLater
                      style={{ height: "25px", width: "30px" }}
                    />
                    Jan 1, 2020
                  </span>

                         <span className="pe-3">
                    <FaRegCommentDots
                      style={{ height: "25px", width: "30px" }}
                    />
                    12 Comments
                  </span>
                </div>
                <Card.Text>
                  Similique neque nam consequuntur ad non maxime aliquam quas.
                  Quibusdam animi praesentium. Aliquam et laboriosam eius aut
                  nostrum quidem aliquid dicta. Et eveniet enim. Qui velit est
                  ea dolorem doloremque deleniti aperiam unde soluta. Est cum et
                  quod quos aut ut et sit sunt. Voluptate porro consequatur
                  assumenda perferendis dolore.
                </Card.Text>
                <Button className="cntbtnsty" type="submit">
                  Read More
                </Button>
              </Card.Body>
            </Card>
       
       
          </Col>

          <Col sm={4} className="mt-2 sidebar">
            
            <Card className="P-2  mt-2 ">
            <h2>Search</h2>
              <input type="search" placeholder="search"></input>

              <h2>Categories</h2>
              <ListGroup as="ol" >
                <ListGroup.Item
                  as="li"
                  className="d-flex justify-content-between align-items-start"
                >
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">General (25)</div>
                  </div>
                </ListGroup.Item>

                <ListGroup.Item
                  as="li"
                  className="d-flex justify-content-between align-items-start"
                >
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">Lifestyle (25)</div>
                  </div>
                </ListGroup.Item>

                <ListGroup.Item
                  as="li"
                  className="d-flex justify-content-between align-items-start"
                >
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">Travel (25)</div>
                  </div>
                </ListGroup.Item>
                 <ListGroup.Item
                  as="li"
                  className="d-flex justify-content-between align-items-start"
                >
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">Design (25)</div>
                  </div>
                </ListGroup.Item>
              </ListGroup>
            </Card>

                 
            <Card className="P-2 mt-2 ">

            <h2>Recent Post</h2>
        
              <ListGroup as="ol" >
       
                <ListGroup.Item
                  as="li"
                  className="d-flex justify-content-between align-items-start"
                >
                  <div className="ms-2 me-auto">
                      <Card.Img
                variant="top"
                src="./assets/image/blog-img.jpg"
                alt="test"
              />  
                    <div className="fw-bold">General (25)</div>
                  </div>
                </ListGroup.Item>
                <ListGroup.Item
                  as="li"
                  className="d-flex justify-content-between align-items-start"
                >
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">Lifestyle (25)</div>
                  </div>
                </ListGroup.Item>
              
              </ListGroup>
            </Card>


                <Card className="P-2 mt-2 ">

            <h2>Tags</h2>
        <div className="btntags">
                 <Button variant="outline-secondary"  size="sm" className="me-2">Android</Button>
                     <Button variant="outline-success" size="sm" className="me-2">Mobile Application</Button>
                       <Button variant="outline-success" size="sm" className="me-2">React Netive</Button>
                       </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Blog;
