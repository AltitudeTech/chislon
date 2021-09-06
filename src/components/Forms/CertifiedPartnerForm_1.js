import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import dynamic from "next/dynamic";
import { Container, Row, Col } from "reactstrap";
import { Loading, encode } from "../../util";
// import Recaptcha from "react-google-invisible-recaptcha";
import "./CertifiedPartnerForm.scss";

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
  age: "",
  fax_number: "",
  gender: "",
  marital_status: "",
  nationality: "",
  current_country_of_residence: "",
  professional_experience: "",
  prove_experience: "",
  representation: "",
  how_we_contact: "",
  how_you_found_us: "",
  question: "",
};

const CertifiedPartnerForm = () => {
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
            name="certified_partner_form"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
          >
            <SweetAlert
              show={alertState}
              title="International Partner"
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
                  <label htmlFor="">FAX NUMBER</label>
                  <input
                    type="number"
                    name="fax_number"
                    id="fax_number"
                    onChange={handleChange}
                    value={form.fax_number}
                    className="form-control"
                    required
                  />
                </div>
              </Col>
              <Col md={6}>
                <div className="form-group">
                  <label htmlFor="">AGE</label>
                  <input
                    type="number"
                    name="age"
                    id="age"
                    onChange={handleChange}
                    value={form.age}
                    className="form-control"
                  />
                </div>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <div className="form-group">
                  <label htmlFor="">
                    GENEDER <span className="text-danger">*</span>
                  </label>
                  <select
                    name="gender"
                    id="gender"
                    onChange={handleChange}
                    value={form.gender}
                    className="form-control"
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
              </Col>
              <Col md={6}>
                <div className="form-group">
                  <label htmlFor="">
                    MARITAL STATUS <span className="text-danger">*</span>
                  </label>
                  <select
                    name="marital_status"
                    id="marital_status"
                    onChange={handleChange}
                    value={form.marital_status}
                    className="form-control"
                  >
                    <option value="Single">Single</option>
                    <option value="Married">Married</option>
                    <option value="Divorced / Seperated">
                      Divorced / Seperated
                    </option>
                  </select>
                </div>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <div className="form-group">
                  <label htmlFor="">
                    NATIONALITY <span className="text-danger">*</span>
                  </label>
                  <select
                    name="nationality"
                    id="nationality"
                    value={form.nationality}
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
              <Col md={6}>
                <div className="form-group">
                  <label htmlFor="">
                    CURRENT COUNTRY OF RESIDENCE{" "}
                    <span className="text-danger">*</span>
                  </label>
                  <select
                    name="current_country_of_residence"
                    id="current_country_of_residence"
                    value={form.current_country_of_residence}
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
                  <label htmlFor="">
                    HAVE YOU HAD PROFESSIONAL MANAGEMENT EXPERIENCE ?
                    <span className="text-danger">*</span>
                  </label>
                  <select
                    name="professional_experience"
                    id="professional_experience"
                    value={form.professional_experience}
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
                  <label htmlFor="">
                    CAN YOU PROVE MANAGERIAL EXPERIENCE OF 2 YEARS FOR THE PAST
                    5 YEARS ?<span className="text-danger">*</span>
                  </label>
                  <select
                    name="prove_experience"
                    id="prove_experience"
                    value={form.prove_experience}
                    onChange={handleChange}
                    className="form-control"
                  >
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <div className="form-group">
                  <label htmlFor="">
                    ARE YOU REPRESENTED BY AN IMMIGRATION CONSULTANT OR A LAWYER
                    ? <span className="text-danger">*</span>
                    <span className="text-danger">*</span>
                  </label>
                  <select
                    name="representation"
                    id="representation"
                    value={form.representation}
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
                  <label htmlFor="">
                    HOW DO WE CONTACT YOU<span className="text-danger">*</span>
                  </label>
                  <select
                    name="how_we_contact"
                    id="how_we_contact"
                    value={form.how_we_contact}
                    onChange={handleChange}
                    className="form-control"
                  >
                    <option value="Email">Email</option>
                    <option value="Phone">Phone</option>
                    <option value="Fax">Fax</option>
                  </select>
                </div>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <div className="form-group">
                  <label htmlFor="">
                    HOW DID YOU FIND OUT ABOUT OUR PROGRAMS{" "}
                    <span className="text-danger">*</span>
                  </label>
                  <select
                    name="how_you_found_us"
                    id="how_you_found_us"
                    value={form.how_you_found_us}
                    onChange={handleChange}
                    className="form-control"
                  >
                    <option value="Google">Google</option>
                    <option value="Publication">Publication</option>
                    <option value="Consultant Referral">
                      Consultant Referral
                    </option>
                    <option value="Personal Referral">Personal Referral</option>
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
                <button
                  type="submit"
                  className="btn submitButton"
                  disabled={btnState}
                >
                  Send Message {btnState && <Loading />}
                </button>
              </Col>
            </Row>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default CertifiedPartnerForm;

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
