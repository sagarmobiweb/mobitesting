import React  from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

function navigation() {

  return (
    <>
      <Navbar collapseOnSelect expand="lg" fixed="top">
        <Container>
          <Navbar.Brand>
            <Link to="/">
              <img
                className="d-inline-block"
                src="./assets/image/logomobiweb.png"
                alt="MobiWebCreations"
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mynav">
              <Nav.Item>
                <Nav.Link>
                  <Link to="/">Home</Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>
                  <Link to="about-us"> About us</Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <NavDropdown title="Services">
                  <NavDropdown.Item>
                    <Link to="ios-app-development">
                      iOS Mobile App Development
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item>
                    <Link to="android-app-development">
                      Android Mobile App Development
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item>
                    <Link to="hybrid-app-development">
                      Hybrid Mobile App Development
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item>
                    <Link to="progressive-web-app-development">
                      Progressive Web App Development
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item>
                    <Link to="flutter-app-development">
                      Flutter Mobile App Development
                    </Link>
                  </NavDropdown.Item>

                  <NavDropdown.Divider />
                  <NavDropdown.Item>
                    <Link to="ionic-app-development">
                      Ionic Mobile App Development
                    </Link>
                  </NavDropdown.Item>

                  <NavDropdown.Divider />
                  <NavDropdown.Item>
                    <Link to="react-native-mobile-app-development">
                      React Native Mobile App Development
                    </Link>
                  </NavDropdown.Item>

                  <NavDropdown.Divider />
                  <NavDropdown.Item>
                    <Link to="kotline-app-development">
                      Kotline Mobile App Development
                    </Link>
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>
                  <Link to="blog">Blog </Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>
                  <Link to="case-study">Case Study </Link>
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link>
                  <Link to="careers">Careers</Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>
                  <Link to="contact-us">Contact us </Link>
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default navigation;
