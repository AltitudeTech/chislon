import React, { useEffect, useState } from "react";
import { Row, Col, Container } from "reactstrap";
import axios from "axios";
import PhoneInput from "react-phone-number-input";
import ReCAPTCHA from "react-google-recaptcha";
import dynamic from "next/dynamic";
import { Loading, encode } from "../../util";
import Heading3Style from "../styles/Heading3";
import ButtonStyle from "../styles/ButtonStyle";
import "react-phone-number-input/style.css";

const SweetAlert = dynamic(
  () => {
    return import("sweetalert2-react");
  },
  { ssr: false }
);

const initialValues = {
  salutation: "Mr",
  firstname: "",
  lastname: "",
  media: "",
  position: "",
  nationality: "Afghanistan",
  country_of_residence: "Afghanistan",
  website: "",
  countries: [],
  phone: "",
  email: "",
  confirm_email: "",
  message: "",
  captcha: false,
};
const ContactForm = () => {
  const [form, setForm] = useState(initialValues);
  const [alertState, setAlertState] = useState(false);
  const [btnState, setBtnState] = useState(false);
  const getLocation = async () => {
    try {
      const response = await axios(
        `https://api.ipgeolocation.io/ipgeo?apiKey=${process.env.GEOLOCATION_KEY}`
      );
      const data = await response.data;
      setForm({ ...form, phone: data.calling_code });
    } catch (error) {
      console.log(error.message, 2323232);
      setForm((prevValues) => ({
        ...prevValues,
        phone: "+234",
      }));
    }
  };

  const getCountries = async () => {
    const result = await axios("https://restcountries.eu/rest/v2/all");
    setForm((prevValues) => ({
      ...prevValues,
      countries: [...result.data],
    }));
  };
  useEffect(() => {
    getCountries();
    // getLocation();
  }, []);

  const handleSubmit = (event) => {
    setBtnState(true);
    event.preventDefault();
    if (form.captch) {
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
    } else {
      alert("Verify You are Human");
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  return (
    <Container>
      <Row>
        <Col md={{ size: 9 }}>
          <div className="formWrapper">
            {/* <Heading3Style style={{ color: "#000" }}>
              Enquiry Form
            </Heading3Style>
            <p style={{ color: "#000" }}>Send us a message</p> */}
            <form
              name="contact_form"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
            >
              <SweetAlert
                show={alertState}
                title="Contact Message"
                text="Your Message Has been Successfully Submitted"
                onConfirm={() => setAlertState(false)}
              />
              <Row>
                <Col md={12}>
                  <label
                    style={{ fontWeight: "normal", paddingBottom: "20px" }}
                  >
                    <input type="checkbox" />
                    <span className="ml-3">
                      I am interested in immigrant and non immigrant visas
                    </span>
                  </label>
                </Col>
                <Col md={12}>
                  <label
                    style={{ fontWeight: "normal", paddingBottom: "20px" }}
                  >
                    <input type="checkbox" />
                    <span className="ml-3">
                      I am interested in obtaining a residence permit
                    </span>
                  </label>
                </Col>
                <Col md={12}>
                  <label
                    style={{ fontWeight: "normal", paddingBottom: "20px" }}
                  >
                    <input type="checkbox" />
                    <span className="ml-3">
                      I am interested in obtaining an alternative citizenship
                    </span>
                  </label>
                </Col>
                <Col md={12}>
                  <label
                    style={{ fontWeight: "normal", paddingBottom: "20px" }}
                  >
                    <input type="checkbox" />
                    <span className="ml-3">
                      I am interested in acquiring real estate
                    </span>
                  </label>
                </Col>
                <Col md={12}>
                  <div className="form-group">
                    <label>I have a specific question</label>
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
              </Row>
              <Row>
                <Col md={12} className="my-4">
                  <Heading3Style style={{ color: "#000" }}>
                    Contact Information
                  </Heading3Style>
                </Col>
                <Col sm={12} md={6}>
                  <div className="form-group">
                    <label>Salutation</label>
                    <select
                      name="salutation"
                      id="salutation"
                      className="form-control"
                      value={form.salutation}
                      onChange={handleChange}
                    >
                      <option value="Mr">Mr</option>
                      <option value="Mrs">Mrs</option>
                      <option value="Miss">Miss</option>
                      <option value="Dr">Dr</option>
                      <option value="Prof.">Prof.</option>
                    </select>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col sm={12} md={6}>
                  <div className="form-group">
                    <label>First Name</label>
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
                <Col sm={12} md={6}>
                  <div className="form-group">
                    <label>Last Name</label>
                    <input
                      type="text"
                      name="lastname"
                      id="lastname"
                      className="form-control"
                      value={form.lastname}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </Col>
                {/* <Col sm={12} md={6}>
                  <div className="form-group">
                    <label>Organization</label>
                    <input
                      type="text"
                      name="media"
                      id="media"
                      className="form-control"
                      value={form.media}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </Col> 
                <Col sm={12} md={6}>
                  <div className="form-group">
                    <label>Position</label>
                    <input
                      type="text"
                      name="position"
                      id="position"
                      className="form-control"
                      value={form.position}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </Col> */}
                <Col sm={12} md={6}>
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
                <Col sm={12} md={6}>
                  <div className="form-group">
                    <label htmlFor="">
                      COUNTRY OF RESIDENCE{" "}
                      <span className="text-danger">*</span>
                    </label>
                    <select
                      name="country_of_residence"
                      id="country_of_residence"
                      value={form.country_of_residence}
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
                <Col sm={12} md={6}>
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
                <Col sm={12} md={6}>
                  <div className="form-group">
                    <label>Retype Email</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="form-control"
                      value={form.confirm_email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </Col>
                <Col sm={12}>
                  <div className="form-group">
                    <label>Phone Number</label>
                    {/* <PhoneInput
                      placeholder="Enter phone number"
                      country="NG"
                      value={form.phone}
                      name="phone"
                      onChange={(phone) => {
                        console.log(phone);
                        setForm((prevValues) => ({
                          ...prevValues,
                          phone,
                        }));
                      }}
                      required
                      className="form-control"
                    /> */}
                    <input
                      placeholder="Enter phone number"
                      className="form-control"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      name="phone"
                    />
                  </div>
                </Col>

                <Col sd={12}>
                  <ReCAPTCHA
                    sitekey={process.env.GOOGLE_RECAPTCHA}
                    onChange={() => {
                      setForm((prevValues) => ({
                        ...prevValues,
                        captch: true,
                      }));
                    }}
                    onExpired={() => {
                      setForm((prevValues) => ({
                        ...prevValues,
                        captch: false,
                      }));
                    }}
                    onErrored={() => {
                      setForm((prevValues) => ({
                        ...prevValues,
                        captch: false,
                      }));
                    }}
                  />
                </Col>

                <Col md={12} className="my-4">
                  <div className="form-group">
                    <ButtonStyle
                      className="transparent"
                      type="submit"
                      disabled={btnState}
                    >
                      SUBMIT {btnState && <Loading />}
                    </ButtonStyle>
                  </div>
                </Col>
              </Row>
            </form>
          </div>
        </Col>
      </Row>
      <style>
        {`
        .formWrapper{
          margin : 20px auto ;
          padding : 100px ;
          box-shadow: 5px 5px 10px grey , -5px -5px 10px grey;
        }
        .formWrapper label{
          display : block ;
          color : #000 ;
          font-weight : bold ;
          margin-top: 20px;
        }
        .form-group .form-control, option {
          border-radius: 0;
          box-shadow: none; 
          border: none ;
          border-bottom:  1px solid #01384B ;
          color : #000 ;
          background-color : transparent ;
        }
        
        .form-group .form-control:focus {
          // box-shadow: -1px 3px 11px -3px #01384B;
          // border : 1px solid #01384B ;
        }
        textarea,
        textarea:focus{
          resize : none ;
          outline:none ;
        }
        .PhoneInputInput:focus, .PhoneInputInput {
          outline : none !important;
          border : none !important;
          background-color : transparent ;
          color : #000 ;
        }
        .form-control option {
          width : 100% !important ;
          // background: #004F69;
          margin: 40px;
          color: #000;
          text-shadow: 0 1px 0 rgba(0, 0, 0, 0.4);
        }

      `}
      </style>
    </Container>
  );
};

export default ContactForm;

const Services = [
  { text: "Business Investment", image: "business.jpg" },
  { text: "Professional Work", image: "work.jpg" },
  { text: "Education", image: "education.jpg" },
  { text: "Residency & Citizenship ", image: "residency.jpg" },
  { text: "Medical Treatment", image: "medical.jpg" },
  { text: "Holidays & Leisure", image: "holiday.jpg" },
];