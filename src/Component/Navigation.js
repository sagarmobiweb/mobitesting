import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

function navigation() {
  return (
    <>
    <Navbar collapseOnSelect expand="lg"  fixed="top">
        <Container>
          <Navbar.Brand>
            <Link to="MWold/">
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
                  <Link to="MWold/">Home</Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>
                  <Link to="MWold/about"> About us</Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <NavDropdown title="Services">
                  <NavDropdown.Item>
                    <Link to="MWold/ios"> iOS Mobile App Development</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item>
                    <Link to="MWold/android"> Android Mobile App Development</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item>
                    <Link to="MWold/hybrid"> Hybrid Mobile App Development</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item>
                    <Link to="MWold/progressiveweb">
                      Progressive Web App Development
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item>
                    <Link to="MWold/flutter">Flutter Mobile App Development</Link>
                  </NavDropdown.Item>

                  <NavDropdown.Divider />
                  <NavDropdown.Item>
                    <Link to="MWold/ionic">Ionic Mobile App Development</Link>
                  </NavDropdown.Item>

                  <NavDropdown.Divider />
                  <NavDropdown.Item>
                    <Link to="MWold/kotline">Kotline Mobile App Development</Link>
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>
                  <Link to="MWold/blog">Blog </Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>
                  <Link to="MWold/contactus">Contact Us </Link>
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
