import React, { useState } from "react";
import { withTheme } from "styled-components";
import { Container, Row, Col, Modal, ModalBody, ModalHeader } from "reactstrap";
import ButtonStyle from "../styles/ButtonStyle";

const initialValues = {
  name: "",
  lname: "",
  email: "",
  testChoice: "IELTS",
  phone: "",
  message: "",
  selectDate: "April - Stream 1",
};

const ImageBox = (props) => {
  const [toggleState, setToggleState] = useState(false);
  const [form, setForm] = useState(initialValues);
  const handleToggleState = () => {
    setToggleState(!toggleState);
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  const handleSubmit = () => {};
  return (
    <Container>
      <Row>
        <Col className="my-5" sm={12}>
          <div
            className=""
            style={{ position: "relative", border: "1px solid #fff" }}
          >
            <img src="/static/images/2.png" className="img-fluid" />
            <ButtonStyle
              className="red"
              style={{
                fontSize: "20px",
                padding: "10px 25px",
                position: "absolute",
                left: "10px",
                bottom: "10px",
              }}
              onClick={handleToggleState}
            >
              GET STARTED
            </ButtonStyle>

            <Modal toggle={handleToggleState} isOpen={toggleState}>
              <ModalHeader
                toggle={handleToggleState}
                style={{
                  backgroundColor: props.theme.colors.main,
                  color: "#fff",
                }}
              >
                Initial Assessment Form
              </ModalHeader>
              <ModalBody>
                <form
                  name="contact_form"
                  method="POST"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                >
                  <Row className="mt-0">
                    <Col sm={12}>
                      <div className="form-group">
                        <label>First Name</label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          className="form-control"
                          value={form.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </Col>
                    <Col sm={12}>
                      <div className="form-group">
                        <label>Last Name</label>
                        <input
                          type="text"
                          name="lname"
                          id="lname"
                          className="form-control"
                          value={form.lname}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </Col>
                    <Col sm={12}>
                      <div className="form-group">
                        <label>Email</label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          className="form-control"
                          value={form.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </Col>
                    <Col sm={12}>
                      <div className="form-group">
                        <label>Telephone</label>
                        <input
                          type="tel"
                          name="phone"
                          id="phone"
                          className="form-control"
                          value={form.phone}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </Col>
                    <Col sm={12}>
                      <div className="form-group">
                        <label>Your Message</label>
                        <textarea
                          id="message"
                          name="message"
                          className="form-control"
                          value={form.message}
                          onChange={handleChange}
                          required
                          rows="5"
                        />
                      </div>
                    </Col>

                    <Col md={12} className="my-4">
                      <div className="form-group">
                        <ButtonStyle className="yellow" type="submit">
                          SUBMIT
                        </ButtonStyle>
                      </div>
                    </Col>
                  </Row>
                </form>
              </ModalBody>
              {/* <ModalFooter>
          <Button color="primary" onClick={handleToggleState}>
            Do Something
          </Button>{" "}
          <Button onClick={handleToggleState}>Cancel</Button>
        </ModalFooter> */}
            </Modal>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default withTheme(ImageBox);
