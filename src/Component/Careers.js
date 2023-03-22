import { Container, Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import {
  MdWork,
  MdOutlineMyLocation,
  MdAccountBalanceWallet,
} from "react-icons/md";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import FooterContactform from "./FooterContactform";
import { Helmet } from "react-helmet";

function Careers() {
  return (
    <>
      <Helmet>
        <title>
          Careers MobiWeb Creations - Mobile Application Development
        </title>
        <meta
          name="description"
          content="How much does it cost to create a Snapchat-like app? "
        />
        <meta keyword=" Careers us mobile app development services" />
        <meta charset="utf-8" />
      </Helmet>
      <div className="bnnr2  bnnrclr justify-content-between pt-3  witeheading ">
        <Container>
          <Row>
            <Col
              sm={12}
              className="d-flex flex-column justify-content-center  align-self-center text-padding  pe-30"
            >
              <h1>Careers</h1>
            </Col>
          </Row>
        </Container>
      </div>
      <Container className="mt-5 ">
        <Col
          sm={12}
          className="d-flex flex-column justify-content-center  align-self-center text-padding  pe-30"
        >
          <div className="allheading ourvalues  mt-5  mb-5 text-center">
            <h3 className="bluclr">Our Jobs</h3>
            <h2>
              Current Available Positions at <br />
              Mobi Web Creations
            </h2>
          </div>
        </Col>
        <Row>
          <Col sm={6} className="mt-2">
            <Card className=" career">
              <div class="card-box-inner">
                <div class="box-1">
                  <span class="text-icon  mb-2">
                    <MdWork style={{ fill: " #00264c" }} className="pe-1" />
                    Remote - Full Time
                  </span>
                </div>
                <h3 className="heading-sty">Sr Frontend Developer</h3>
                <ul className="box-2">
                  <li>
                    {" "}
                    <MdOutlineMyLocation
                      style={{ fill: " #00264c" }}
                      className="pe-1"
                    />
                    London, UK{" "}
                  </li>
                  <li>
                    <MdAccountBalanceWallet
                      style={{ fill: " #00264c" }}
                      className="pe-1"
                    />
                    $35-$45k
                  </li>
                </ul>
                <p>
                  We are team of talented designers making websites with
                  BootstrapWe are team of talented designers making websites
                  with Bootstrap
                </p>
              </div>
              <Button
                size="40%"
                href="career-detail"
                className="cntbtnsty mt-3 apply"
              >
                Apply Now
              </Button>
            </Card>
          </Col>
          <Col sm={6} className="mt-2">
            <Card className=" career">
              <div class="card-box-inner">
                <div class="box-1">
                  <span class="text-icon  mb-2">
                    <MdWork style={{ fill: " #00264c" }} className="pe-1" />
                    Remote - Full Time
                  </span>
                  <h3 className="heading-sty">Sr Backend Developer</h3>
                </div>

                <ul className="box-2">
                  <li>
                    <MdOutlineMyLocation
                      style={{ fill: " #00264c" }}
                      className="pe-1"
                    />
                    London, UK
                  </li>
                  <li>
                    <MdAccountBalanceWallet
                      style={{ fill: " #00264c" }}
                      className="pe-1"
                    />
                    $35-$45k
                  </li>
                </ul>
                <p>
                  We are team of talented designers making websites with
                  BootstrapWe are team of talented designers making websites
                  with Bootstrap
                </p>
                <Button
                  size="40%"
                  href="career-detail"
                  className="cntbtnsty mt-3 apply"
                >
                  Apply Now
                </Button>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
      <FooterContactform />
    </>
  );
}

export default Careers;
