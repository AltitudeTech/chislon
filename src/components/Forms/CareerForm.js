import React, { useEffect, useState } from "react";
import { Row, Col } from "reactstrap";
import axios from "axios";
import PhoneInput from "react-phone-number-input";
import ReCAPTCHA from "react-google-recaptcha";
import dynamic from "next/dynamic";
import { Loading, encode } from "../../util";
import SectionStyle from "../styles/SectionStyle";
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
  firstname: "",
  lastname: "",
  phone: "",
  email: "",
  message: "",
  captcha: false,
};
const CareerForm = () => {
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
    getLocation();
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
    <SectionStyle className="serviceSectionStyle">
      <Row>
        <Col md={{ size: 8, offset: 2 }}>
          <div className="formWrapper">
            <Heading3Style style={{ color: "#fff" }}>
              Want to Build a Career?
            </Heading3Style>
            <p style={{ color: "#fff" }}>Send us a message</p>
            <form
              name="career_form"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
            >
              <SweetAlert
                show={alertState}
                title="Career Message"
                text="Your Message Has been Successfully Submitted"
                onConfirm={() => setAlertState(false)}
              />
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

                <Col sm={12} md={6}>
                  <div className="form-group">
                    <label>Phone Number</label>
                    <PhoneInput
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
                    />
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
                <Col sm={12} md={6}>
                  <div className="form-group">
                    <label>Note</label>
                    <p className="text-white">
                      All information provided is kept highly confidential and
                      subject to our privacy policy.
                    </p>
                  </div>
                </Col>
                <Col md={12} md={6}>
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
                  <div className="form-group text-center">
                    <ButtonStyle
                      className="gold"
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
        .serviceSectionStyle{
          padding : 5rem 3rem ;
          background-color: #f2f2f2 ;
        }
        .formWrapper{
          margin : 20px auto ;
          background-color : #e5e5e5 ;
          padding : 30px ;
          background-image: linear-gradient(114.17deg, #003e52 -0.69%, #00b8f2 100%);
        }
        .formWrapper label{
          display : block ;
          color : #fff ;
          font-weight : bold ;
        }
        .form-group .form-control, option {
          border-radius: 0;
          // border: 0;
          box-shadow: none; 
          color : #fff ;
          background-color : transparent ;
        }
        
        .form-group .form-control:focus {
          box-shadow: -1px 3px 11px -3px #01384B;
          border : 1px solid #01384B ;
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
          color : #fff ;
        }
        .form-control option {
          width : 100% !important ;
          background: #004F69;
          margin: 40px;
          color: #fff;
          text-shadow: 0 1px 0 rgba(0, 0, 0, 0.4);
        }

      `}
      </style>
    </SectionStyle>
  );
};

export default CareerForm;

const Services = [
  { text: "Business Investment", image: "business.jpg" },
  { text: "Professional Work", image: "work.jpg" },
  { text: "Education", image: "education.jpg" },
  { text: "Residency & Citizenship ", image: "residency.jpg" },
  { text: "Medical Treatment", image: "medical.jpg" },
  { text: "Holidays & Leisure", image: "holiday.jpg" },
];
