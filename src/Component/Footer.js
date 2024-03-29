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
import { FloatingWhatsApp } from "react-floating-whatsapp";


function Footer() {
  return (
    <>
      <div className="bgfooter">
        <Container className="  pb-5  pt-5  pt-5">
          <Row>
            <Col sm={3} className="pe-30">
              <div className="allheading  footr-about-text footer-fontsiz ">
                <h2>ABOUT US</h2>
                <p>
                  Our company was founded with the goal of providing top-notch
                  mobile app development services to businesses of all sizes,
                  from startups to large enterprises.
                </p>
              </div>
            </Col>
            <Col sm={3}>
              <div className=" allheading  footer-fontsiz">
                <h2>USEFUL LINKS</h2>
                <ul className="footermenu">
                  <li>
                    <Link to="/"> Home</Link>
                  </li>
                  <li>
                    <Link to="about-us"> About us</Link>
                  </li>
                  <li>
                    <Link to="services"> Services</Link>
                  </li>
                  <li>
                    <Link to="blog"> Blog</Link>
                  </li>
                  <li>
                    <Link to="case-study"> Case Study</Link>
                  </li>
                  <li>
                    <Link to="careers"> Careers</Link>
                  </li>

                  <li>
                    <Link to="contact-us"> Contact us</Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col sm={3}>
              <div className=" allheading  footer-fontsiz">
                <h2> OUR SERVICES</h2>
                <ul className="footermenu">
                  <li>
                    <Link to="ios-app-development">
                      iOS Mobile App Development
                    </Link>
                  </li>
                  <li>
                    <Link to="android-app-development">
                      Android Mobile App Development
                    </Link>
                  </li>
                  <li>
                    <Link to="kotlin-app-development">
                      Kotlin Mobile App Development
                    </Link>
                  </li>
                  <li>
                    <Link to="flutter-app-development">
                      Flutter Mobile App Development
                    </Link>
                  </li>
                  <li>
                    <Link to="ionic-app-development">
                      Ionic Mobile App Development
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col sm={3} className="d-flex flex-column ">
              <div className=" allheading  footer-fontsiz ">
                <h2>CONTACT US</h2>
                <p>
                  <b>DEVELOPMENT OFFICE:</b> <br />
                  SCO : 142-143, Cabin No 412, <br />
                  4th Floor, Sector 34 A ,<br /> Chandigarh, INDIA, 160022
                  <p>
                    Phone<bdi> : </bdi>
                    <a href={"tell:+918800403610"} rel="noreferrer">
                      +91 880 040 3610
                    </a>
                  </p>
                  <span>
                    Email<bdi> : </bdi>
                    <a href={"mailto:info@mobiweb.tech"} rel="noreferrer">
                      info@mobiweb.tech
                    </a>
                  </span>
                </p>
              </div>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col sm={4}>
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
                      href={"./pdf/MobiWeb-Creations-Digital-Marketing.pdf"}
                      rel="noreferrer"
                    >
                      <FaFilePdf />
                    </a>
                  </p>

                  <p>
                    <a
                      target="_blank"
                      href={"./pdf/Company-Profile-MobiWeb-Creations.pdf"}
                      rel="noreferrer"
                    >
                      <FaFilePdf />
                    </a>
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <Container className="mt-5 ">
        <Row>
          <FloatingWhatsApp
            phoneNumber="
            +918872273344"
            notification
            notificationSound
            allowEsc
            allowClickAway
          />
        </Row>
      </Container>
      <div className="bg-blue justify-content-center">
        <Container>
          <Row>
            <Col
              sm={12}
              className="justify-content-center  text-center  "
              text-center
            >
              <p className="pt-3">
                © Copyright 2022. All Rights Reserved. Designed by :
                <a
                  target="_blank"
                  href={"https://mobiwebcreations.com/"}
                  rel="noreferrer"
                >
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
