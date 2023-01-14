import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

function navigation() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand>
            <Link to="">
              <img
                className="d-inline-block"
                src="./assets/image/MOBiWEB.png"
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
                  <Link to="/about"> About Us</Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Item>
                  <Nav.Link>
                    <Link to="/service">Services</Link>
 <NavDropdown id="nav-dropdown">
                    <NavDropdown.Item>
                      iOS Mobile App Development
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item>
                      Android Mobile App Development
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item>
                      Hybrid Mobile App Development
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item>
                      Progressive Web App Development
                    </NavDropdown.Item>
                  </NavDropdown>


                  </Nav.Link>
                 
                </Nav.Item>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>
                  <Link to="#">Blog </Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>
                  <Link to="#">Contact Us </Link>
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
