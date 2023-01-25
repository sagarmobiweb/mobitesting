import React from "react";
import {
  RiFacebookCircleFill,
  RiInstagramFill,
  RiLinkedinBoxFill,
  RiPinterestFill,
  RiTwitterFill,
} from "react-icons/ri";

import { Container, Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useForm } from "react-hook-form";

function Contactus() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { name, email, number, message } = data;
    try {
      const templateParams = {
        name,
        email,
        number,
        message,
      };
      await email.send(
        process.env.user_twJMhT1XLr7XXXXXXXXXX,
        process.env.hexpower_temp,
        templateParams,
        process.env.REACT_APP_USER_ID
      );
      reset();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <div className="cbcnt">
        <div className="bnnr2 justify-content-between pt-3 bt-5 witeheading ">
          <Container>
            <Row>
              <Col
                sm={12}
                className="d-flex flex-column justify-content-center  align-self-center text-padding  pe-30"
              >
                <h1>Contact Us</h1>
              </Col>
            </Row>
          </Container>
        </div>
      </div>

      <Container className="mt-5 -flex flex-column justify-content-center  align-self-center">
        <Row>
          <Col sm={6}>
            <div className="ContactForm">
              <div className="container">
                <div className="row">
                  <div className="col-12 text-center">
                    <div className="contactForm">
                      <form
                        id="contact-form"
                        onSubmit={handleSubmit(onSubmit)}
                        noValidate
                      >
                        {/* Row 1 of form */}
                        <div className="row formRow">
                          <div className="col-6">
                            <input
                              type="text"
                              name="name"
                              {...register("name", {
                                required: {
                                  value: true,
                                  message: "Please enter your name",
                                },
                                maxLength: {
                                  value: 30,
                                  message: "Please use 30 characters or less",
                                },
                              })}
                              className="form-control formInput"
                              placeholder="Name"
                            ></input>
                            {errors.name && (
                              <span className="errorMessage">
                                {errors.name.message}
                              </span>
                            )}
                          </div>
                          <div className="col-6">
                            <input
                              type="email"
                              name="email"
                              {...register("email", {
                                required: true,
                                pattern:
                                  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                              })}
                              className="form-control formInput"
                              placeholder="Email address"
                            ></input>
                            {errors.email && (
                              <span className="errorMessage">
                                Please enter a valid email address
                              </span>
                            )}
                          </div>
                        </div>
                        {/* Row 2 of form */}
                        <div className="row formRow">
                          <div className="col">
                            <input
                              type="text"
                              name="number"
                              {...register("number", {
                                required: {
                                  value: true,
                                  message: "Please enter a number",
                                },
                                maxLength: {
                                  value: 10,
                                  message: "Number cannot exceed 10 Digit",
                                },
                              })}
                              className="form-control formInput"
                              placeholder="number"
                            ></input>
                            {errors.number && (
                              <span className="errorMessage">
                                {errors.number.message}
                              </span>
                            )}
                          </div>
                        </div>
                        {/* Row 3 of form */}
                        <div className="row formRow">
                          <div className="col">
                            <textarea
                              rows={3}
                              name="message"
                              {...register("message", {
                                required: true,
                              })}
                              className="form-control formInput"
                              placeholder="Message"
                            ></textarea>
                            {errors.message && (
                              <span className="errorMessage">
                                Please enter a message
                              </span>
                            )}
                          </div>
                        </div>
                        <button className="submit-btn" type="submit">
                          Submit
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col sm={6}>
            <div className="imgcnt">
              <img
                center
                src="./assets/image/newcont.jpg"
                data-aos="zoom-out"
                alt="test"
              ></img>
            </div>

            <div className=" allheading   addresdetails">git
              <p>
                Address : MobiWeb Creations, #6B3, Block 4, Kent Mahal, Infopark
                Rd, Kakkanad, Kerala 682303
              </p>
              <p>
                Phone :{" "}
                <a href={"tel:+918800403610"} rel="noreferrer">
                  {" "}
                  +918800403610
                </a>
              </p>
              <p>
                Emai :{" "}
                <a href={"mailto:sales@mobiwebcreations.com"} rel="noreferrer">
                  sales@mobiwebcreations.com{" "}
                </a>
              </p>
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
                  href={
                    "https://www.linkedin.com/authwall?trk=bf&trkInfo=AQFDdrKXxajmpgAAAYXdyQGA76tYcvyVkGUeZ7nF3IiqyG9Q4F7j76pKwjZqwBO6SURd6WhYb8bp0NAMPEC9glF3MVd-L2kvpW3fFyIVj_dTKMsF0ypIALqdyP-jyu_1jU5fwRA=&original_referer=&sessionRedirect=https%3A%2F%2Fin.linkedin.com%2Fcompany%2Fmobiweb-creations"
                  }
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
                  href={"https://twitter.com/MobiWebCreation/"}
                  rel="noreferrer"
                >
                  <RiTwitterFill />
                </a>
              </div>
            </div>
          </Col>
        </Row>

        <Row>
          <Col col sm={12}></Col>
        </Row>
      </Container>
    </>
  );
}

export default Contactus;
