import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import dynamic from "next/dynamic";
import { Container, Row, Col } from "reactstrap";
import { Loading, encode } from "../../util";
// import Recaptcha from "react-google-invisible-recaptcha";
import "./CertifiedPartnerForm.scss";
import ButtonStyle from "../styles/ButtonStyle";

const SweetAlert = dynamic(
  () => {
    return import("sweetalert2-react");
  },
  { ssr: false }
);

const initialValues = {
  countries: [],
  firstname: "",
  lastname: "",
  email: "",
  phone: "",
  country_activity: "",
  target_market: "",
  how_we_contact: "",
  what_are_you: "",
  company_name: "",
  interest_program: "",
  existing_client: "",
  question: "",
};
const JoinUsForm = () => {
  const captchaEl = useRef(null);
  const [form, setForm] = useState(initialValues);
  const [alertState, setAlertState] = useState(false);
  const [btnState, setBtnState] = useState(false);
  const getCountries = async () => {
    const result = await axios("https://restcountries.eu/rest/v2/all");
    setForm((prevValues) => ({
      ...prevValues,
      countries: [...result.data],
    }));
  };
  useEffect(() => {
    getCountries();
  }, []);

  const handleSubmit = (event) => {
    setBtnState(true);
    event.preventDefault();
    fetch("", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": event.target.getAttribute("name"),
        ...form,
      }),
    })
      .then(() => {
        setBtnState(false);
        setForm(initialValues);
        setAlertState(true);
      })
      .catch((error) => {
        alert("Please, try submitting your data again");
        setBtnState(false);
        // setForm(initialValues);
        console.log(error);
      });
  };
  const onSubmit = () => {
    if ("" == form.value) {
      alert("Validation failed! Input cannot be empty.");
      recaptcha.reset();
    } else {
      recaptcha.execute();
    }
  };
  const onResolved = () => {
    alert("Recaptcha resolved with response: " + recaptcha.getResponse());
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  return (
    <Container className="mb-5 certifiedPartnerForm">
      <Row>
        <Col md={{ size: 8, offset: 2 }}>
          <form
            className="mt-5"
            name="join_us"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
          >
            <SweetAlert
              show={alertState}
              title="Join Chislon Broadway"
              text="Your Message Has been Successfully Submitted"
              onConfirm={() => setAlertState(false)}
            />
            <Row>
              <Col md={6}>
                <div className="form-group">
                  <label htmlFor="" className="">
                    FIRST NAME <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    name="firstname"
                    id="firstname"
                    className="form-control"
                    value={form.firstname}
                    onChange={handleChange}
                    required
                  />
                </div>
              </Col>
              <Col md={6}>
                <div className="form-group">
                  <label htmlFor="">
                    LAST NAME <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    name="lastname"
                    id="lastname"
                    value={form.lastname}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                </div>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <div className="form-group">
                  <label htmlFor="">
                    EMAIL <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    onChange={handleChange}
                    value={form.email}
                    className="form-control"
                    required
                  />
                </div>
              </Col>
              <Col md={6}>
                <div className="form-group">
                  <label htmlFor="">PHONE</label>
                  <input
                    type="number"
                    name="phone"
                    id="phone"
                    onChange={handleChange}
                    value={form.phone}
                    className="form-control"
                  />
                </div>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <div className="form-group">
                  <label htmlFor="">
                    COUNTRY OF ACTIVITY <span className="text-danger">*</span>
                  </label>
                  <select
                    name="country_activity"
                    id="country_activity"
                    onChange={handleChange}
                    value={form.country_activity}
                    className="form-control"
                  >
                    {form.countries.map((country, index) => {
                      return (
                        <option key={index} value={country.name}>
                          {country.name}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </Col>
              <Col md={6}>
                <div className="form-group">
                  <label htmlFor="">
                    TARGET MARRKET(S) <span className="text-danger">*</span>
                  </label>
                  <select
                    name="target_market"
                    id="target_market"
                    value={form.target_market}
                    onChange={handleChange}
                    className="form-control"
                  >
                    {form.countries.map((country, index) => {
                      return (
                        <option key={index} value={country.name}>
                          {country.name}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <div className="form-group">
                  <label htmlFor="">HOW DO WE CONTACT YOU</label>
                  <select
                    name="how_we_contact"
                    id="how_we_contact"
                    value={form.how_we_contact}
                    onChange={handleChange}
                    className="form-control"
                  >
                    <option value="Email">Email</option>
                    <option value="Phone">Phone</option>
                  </select>
                </div>
              </Col>
              <Col md={6}>
                <div className="form-group">
                  <label htmlFor="">ARE YOU</label>
                  <select
                    name="what_are_you"
                    id="what_are_you"
                    value={form.what_are_you}
                    onChange={handleChange}
                    className="form-control"
                  >
                    <option value="Lawyer">Lawyer</option>
                    <option value="Accountant">Accountant</option>
                    <option value="Certified Immigration Consultant">
                      Certified Immigration Consultant
                    </option>
                    <option value="Private Banker / Financial Intermediary">
                      Private Banker / Financial Intermediary
                    </option>
                  </select>
                </div>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <div className="form-group">
                  <label htmlFor="">COMPANY NAME</label>
                  <input
                    type="text"
                    name="company_name"
                    id="company_name"
                    value={form.company_name}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
              </Col>
              <Col md={6}>
                <div className="form-group">
                  <label htmlFor="">
                    GLOBAL CITIZEN PROGRAM OF INTEREST YOU
                  </label>
                  <input
                    type="text"
                    name="interest_program"
                    id="interest_program"
                    value={form.interest_program}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <div className="form-group">
                  <label htmlFor="">
                    DO YOU HAVE EXISTING CLIENTS ALREADY ENROLLED IN OTHER
                    PROGRAMS?
                  </label>
                  <select
                    name="existing_client"
                    id="existing_client"
                    value={form.existing_client}
                    onChange={handleChange}
                    className="form-control"
                  >
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
              </Col>
              <Col md={6}>
                <div className="form-group">
                  <label htmlFor="">QUESTIONS OR COMMENTS</label>
                  <textarea
                    name="question"
                    id="question"
                    value={form.question}
                    onChange={handleChange}
                    cols="30"
                    rows="10"
                    className="form-control"
                  ></textarea>
                </div>
              </Col>
            </Row>
            <Row className="mb-5">
              <Col md={12}>
                {/* <Recaptcha
                  ref={captchaEl}
                  sitekey="6Le0zPAZAAAAAMZdhOAPB3SJFtAa_EpOlPShHgr4"
                  onResolved={() => console.log("Human detected.")}
                /> */}
                <ButtonStyle type="submit" disabled={btnState}>
                  Send Message {btnState && <Loading />}
                </ButtonStyle>
              </Col>
            </Row>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default JoinUsForm;

export const TextTop = ({ title }) => {
  return (
    <Container className="my-5">
      <Row>
        <Col>
          <h4 className="mt-4">{title}</h4>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus
            molestias non libero, iusto aliquam ratione nesciunt perferendis
            nisi obcaecati tempore. Expedita itaque eaque enim earum est, ipsam
            vero quis ut. Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Natus molestias non libero, iusto aliquam ratione nesciunt
            perferendis nisi obcaecati tempore. Expedita itaque eaque enim earum
            est, ipsam vero quis ut. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Natus molestias non libero, iusto aliquam ratione
            nesciunt perferendis nisi obcaecati tempore. Expedita itaque eaque
            enim earum est, ipsam vero quis ut. Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Natus molestias non libero, iusto
            aliquam ratione nesciunt perferendis nisi obcaecati tempore.
            Expedita itaque eaque enim earum est, ipsam vero quis ut.
          </p>
        </Col>
      </Row>
    </Container>
  );
};
