import React from "react";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import {
  RiFacebookCircleFill,
  RiInstagramFill,
  RiLinkedinBoxFill,
  RiPinterestFill,
  RiTwitterFill,
} from "react-icons/ri";

import { FaFilePdf } from "react-icons/fa";

import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="bgfooter ">
        <Container className="  pb-5  pt-5  pt-5">
          <Row>
            <Col
              sm={3}
              className="d-flex flex-column justify-content-center  align-self-center text-padding  pe-30"
            >
              <div className="allheading  footr-about-text ">
                <h2>ABOUT US</h2>
                <p>
                  Quisquam vel ut sint cum eos hic dolores aperiam. Sed deserunt
                  et. Inventore et et dolor consequatur itaque ut voluptate
                </p>
              </div>
            </Col>
            <Col sm={3}>
              <div className=" allheading ">
                <h2>USEFUL LINKS</h2>
                <ul className="footermenu">
                  <li>
                    {" "}
                    <Link to="/"> Home</Link>{" "}
                  </li>
                  <li>
                    {" "}
                    <Link to="/aboutus"> About Us</Link>
                  </li>
                  <li>
                    {" "}
                    <Link to="/service"> Services</Link>
                  </li>
                  <li>
                    {" "}
                    <Link to="/blog"> Blog</Link>
                  </li>
                  <li>
                    {" "}
                    <Link to="/contactus"> Contact Us</Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col sm={3}>
              <div className=" allheading ">
                <h2> OUR SERVICES</h2>
                <ul>
                  <li>IOS </li>
                  <li>Android</li>
                  <li>Kotline</li>
                  <li>Flutter </li>
                  <li>Ionic</li>
                </ul>
              </div>
            </Col>
            <Col sm={3} className="d-flex flex-column ">
              <div className=" allheading ">
                <h2>CONTACT US</h2>
                <p>
                 <b>DEVELOPMENT OFFICE:</b> <br/>
                  SCO : 142-143,Cabin No 412, <br/>4th Floor,
                  Sector 34 A ,<br/>  Chandigarh,
                  INDIA, 160022
                  <p>Phone: <a  href={"tell:+918800403610"}  rel="noreferrer">+918800403610</a></p>
                  <p>Email: <a  href={"mailto:sales@mobiwebcreations.com"}  rel="noreferrer">
                     sales@mobiwebcreations.com
                </a></p>
                </p>
              </div>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col sm={4}>
              {" "}
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
                  href={"https://in.pinterest.com/MobiWebCreations/"}
                  rel="noreferrer"
                >
                  <RiPinterestFill />
                </a>

                <a
                  target="_blank"
                  href={"https://twitter.com/MobiWebCreation"}
                  rel="noreferrer"
                >
                  <RiTwitterFill />
                </a>
              </div>
            </Col>

            <Col sm={4}>
              <div className="compnyprofile">
                <p>
                  <a
                    target="_blank"
                    href={
                      "https://www.upwork.com/o/companies/~017f90a294cbae29fa/"
                    }
                    rel="noreferrer"
                  >
                    Upwork
                  </a>
                </p>
                <p>
                  <a
                    target="_blank"
                    href={"https://clutch.co/profile/mobiweb-creations#summary"}
                    rel="noreferrer"
                  >
                    Clutch
                  </a>
                </p>
                <p>
                  <a
                    target="_blank"
                    href={"https://www.goodfirms.co/company/mobiweb-creations/"}
                    rel="noreferrer"
                  >
                    Good Firms
                  </a>
                </p>
              </div>
            </Col>
            <Col sm={4}>
              <div
                className="justify-content-center   
              text-center  allheading"
              >
                <h2>COMPANY PROFILE</h2>
                <div className="pdfsty">
                  <p>
                    <a
                      target="_blank"
                      href={
                        "https://mobiwebcreations.com/assets/uploads/2020/01/MobiWeb-Creations-Digital-Marketing.pdf"
                 }
                      rel="noreferrer"
                  >
                            

                      <FaFilePdf/>
                    </a>
                  </p>

                  <p>
                    <a
                      target="_blank"
                      href={
                        "https://mobiwebcreations.com/assets/uploads/2020/01/Company-Profile-MobiWeb-Creations.pdf"
                      }
                      rel="noreferrer"
                    >
                  
                       <FaFilePdf/>
                    </a>
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="bg-blue justify-content-center">
        <Container>
          <Row>
            <Col
              sm={12}
              className="justify-content-center  text-center  "
              text-center
            >
              <p className="pt-3">
                © Copyright 2022. All Rights Reserved Designed by{" "}
                <a target="_blank" href={"https://mobiwebcreations.com/"}>
                  MobiWeb Creations
                </a>
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Footer;
