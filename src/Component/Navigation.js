import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
function navigation() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg"  variant="dark"  fixed="top">
        <Container>
          <Navbar.Brand href="#home">
            
            <img
              className="d-inline-block"
              src="./assets/image/Mobiweblogo.jpg"
              alt="MobiWebCreations"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="navsty">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="about">About us</Nav.Link>
              <NavDropdown title="Services" id="collasible-nav-dropdown">
                <NavDropdown.Item href="iOS">
                  Ios Mobile App Development
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="android">
                  Android Mobile App Development
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="hybrid">
                  Hybrid Mobile App Development
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="progressiveweb">
                  
                  Progressive Web App Development
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="flutter ">
                  
                  Flutter Mobile App Development
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="ionic">
                  
                  Ionic Mobile App Development
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="kotline">
                  
                  Kotline Mobile App Development
                </NavDropdown.Item>
          
             
              </NavDropdown>
              <Nav.Link href="blog">Blog</Nav.Link>
              <Nav.Link href="contactus ">Contact us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    
    </>
  );
}

export default navigation;
