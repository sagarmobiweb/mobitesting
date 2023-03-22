import React from "react";
import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import { BiUser, BiWalletAlt ,BiCurrentLocation} from "react-icons/bi";
import Button from "react-bootstrap/Button";



function Careerdetail() {
    
  return (
    <>
      <div className="bnnr2  bnnrclr justify-content-between pt-3  witeheading ">
        <Container>
          <Row>
            <Col
              sm={12}
              className="d-flex flex-column justify-content-center  align-self-center text-padding  pe-30"
            >
              <h1> Senior Backend Developer</h1>
            </Col>
          </Row>
        </Container>
      </div>

      <Container>
        <Row>
          <Col
            sm={8}
            className="d-flex flex-column justify-content-center  align-self-center text-padding jobs-text  pe-30"
          >
            <div className="jobdetails mt-5">
              <h1>Job Details</h1>
              <p>
                Objectively restore stand-alone markets rather than
                enterprise-wide products. Uniquely underwhelm best-of-breed mind
                share through adaptive niches. Seamlessly parallel task
                open-source content without resource sucking technology.
              </p>
            </div>
            <div className="liststy-text mt-4">
              <h2>Job Responsibilities</h2>
              <ul>
                <li>
                  Be involved in every step of the product design cycle from
                  discovery and user acceptance testing.
                </li>
                <li>
                  Work with BAs, product managers and tech teams to lead the
                  Product Design
                </li>
                <li>
                  Maintain quality of the design process and ensure that when
                  designs are translated into code they accurately.
                </li>
                <li>
                  Accurately estimate design tickets during planning sessions.
                </li>
              </ul>
            </div>
            <div className="liststy-text mt-4">
              <h2>Job Requirements</h2>
              <ul>
                <li>
                  Interactively plagiarize covalent outside the box thinking
                  vis-a-vis.
                </li>
                <li>
                  Holisticly communicate integrated channels via backend
                  interfaces. Authoritatively.
                </li>
                <li>
                  Globally actualize effective processes through synergistic
                  ROI. Interactively.
                </li>
                <li>
                  Accurately estimate design tickets during planning sessions.
                </li>
              </ul>
            </div>
            <div className="liststy-text mt-4">
              <h2>Skill & Experience</h2>
              <ul>
                <li>
                  You have at least 3 years’ experience working as a Product
                  Designer.
                </li>
                <li>
                  You have experience using Sketch and InVision or Framer X
                </li>
                <li>
                  Maintain quality of the design process and ensure that when
                  designs are translated into code they accurately.
                </li>
                <li>
                  You have some previous experience working in an agile
                  environment – Think two-week sprints.
                </li>
              </ul>
            </div>
          </Col>

          <Col
            sm={4}
            className="d-flex flex-column mt-3 justify-content-center align-self-center text-padding   job-overviews pe-30  "
          >
            <div className="job-over">
              <Card className="P-3">
                <h1>Job Overviews</h1>
                <Card.Body>
                  <div className="icnbox-carerdetail">
                    <BiCurrentLocation style={{ fill: " #2e3c61" }} />
                    <div className="ct-p">
                      <Card.Title>Location</Card.Title>
                      <p>chcke</p>
                    </div>
                  </div>
                </Card.Body>
                <Card.Body>
                  <div className="icnbox-carerdetail">
                    <BiUser style={{ fill: " #2e3c61" }} />
                    <div className="ct-p">
                      <Card.Title>Job Title:</Card.Title>
                      <p>Designer</p>
                    </div>
                  </div>
                </Card.Body>


                <Card.Body>
                  <div className="icnbox-carerdetail">
                    <BiWalletAlt style={{ fill: " #2e3c61" }} />
                    <div className="ct-p">
                      <Card.Title>Salary:</Card.Title>
                      <p>$35k - $45k</p>
                    </div>
                  </div>
                </Card.Body>

                <Button href="./Careerdetail" className="cntbtnsty mt-3 ">
                  Apply Now
                </Button>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Careerdetail;
