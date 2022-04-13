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
const ApplyForm = () => {
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
                <Col md={12} className="my-4">
                  <Heading3Style style={{ color: "#000" }}>
                    Contact Information
                  </Heading3Style>
                </Col>
              </Row>
              <Row>
                <Col sm={12}>
                  <div className="form-group">
                    <label>Name</label>
                    <input
                      type="text"
                      name="firstname"
                      id="firstname"
                      placeholder="Enter full name"
                      className="form-control"
                      value={form.firstname}
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
                <Col md={12}>
                  <div className="form-group">
                    <label>Message</label>
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
                  <Heading3Style style={{ color: "#000" }}>
                    Please upload attachments as PDFs:
                  </Heading3Style>
                </Col>

                <Col sm={12}>
                  <div className="form-group">
                    <label>Upload curriculum vitae*</label>
                    <input
                      type="file"
                      name="file"
                      id="file"
                      className="form-control"
                      //   value={form.email}
                      //   onChange={handleChange}
                      required
                    />
                  </div>
                </Col>

                <Col sm={12}>
                  <div className="form-group">
                    <label>Upload covering letter*</label>
                    <input
                      type="file"
                      name="file"
                      id="file"
                      className="form-control"
                      //   value={form.email}
                      //   onChange={handleChange}
                      required
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

export default ApplyForm;

const Services = [
  { text: "Business Investment", image: "business.jpg" },
  { text: "Professional Work", image: "work.jpg" },
  { text: "Education", image: "education.jpg" },
  { text: "Residency & Citizenship ", image: "residency.jpg" },
  { text: "Medical Treatment", image: "medical.jpg" },
  { text: "Holidays & Leisure", image: "holiday.jpg" },
];
